const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgtojsx = require('svg-to-jsx');
const prettier = require('prettier');
const { transform } = require('babel-core');
const _ = require('lodash');

const ICONS_DIR = path.resolve('./node_modules', 'material-design-icons');

const SRC_DIR = path.resolve('./src/icons');
const DIST_DIR = path.resolve('./dist/icons');

mkdirp.sync(SRC_DIR);
mkdirp.sync(DIST_DIR);

const ICON_CATEGORIES = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
];

const catcher = err => {
  throw err;
};

const getSVGDirs = categories =>
  categories.map(folder => {
    const svgDir = path.resolve(ICONS_DIR, folder, 'svg', 'production');
    return svgDir;
  });

const getSVGFilesFromDir = dir =>
  new Promise((resolve, reject) => {
    glob(`${dir}/*48px*.svg`, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });

const readSVGFromFile = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });

const removeUnwantedProps = svg => svg.replace(/(width|height)=\"48"/g, '');

const addPropsSpread = svg => svg.replace(/^<(svg.+)>/, '<$1 {...props}>');

const getNameFromFile = filename =>
  path.basename(filename).replace(/(ic_|_48px|.svg)/g, '');

const jsTemplate = (svg, name, displayName) => `/* ${name} icon*/
import React from 'react';
const Icon = (props={})=>(${svg});
Icon.displayName = "${displayName}";
Icon.isMaterialIcon = true;
export default Icon;
`;

const saveJSXToFile = (jsxSVG, name) =>
  new Promise((resolve, reject) => {
    const displayName = _.upperFirst(_.camelCase(`${name} icon`));
    const jsx = prettier.format(jsTemplate(jsxSVG, name, displayName), {
      semi: true,
      parser: 'babylon',
    });

    const destFileName = path.resolve(SRC_DIR, name + '.js');

    // save JSX to src
    fs.writeFile(destFileName, jsx, 'utf-8', err => {
      if (err) {
        reject(err);
      }
      console.log(`${name} saved to ${destFileName}`);
      resolve(destFileName);
    });

    const babel = transform(jsx, {
      presets: ['react'],
      plugins: ['transform-es2015-modules-commonjs'],
    });
    const js = babel.code;
    const distFileName = path.resolve(DIST_DIR, name + '.js');

    // save JSX to src
    fs.writeFile(distFileName, js, 'utf-8', err => {
      if (err) {
        reject(err);
      }
      console.log(`${name} transpiled to ${distFileName}`);
      resolve(distFileName);
    });
  });

const processFile = file =>
  readSVGFromFile(file)
    .then(svg => {
      svgtojsx(removeUnwantedProps(svg))
        .then(jsx => {
          saveJSXToFile(addPropsSpread(jsx), getNameFromFile(file));
        })
        .catch(catcher);
    })
    .catch(err => {
      throw err;
    });

const generate = () => {
  const dirs = getSVGDirs(ICON_CATEGORIES);
  const iconFiles = [];

  dirs.forEach(dir => {
    getSVGFilesFromDir(dir)
      .then(files => {
        const file = files[0];
        // files = [files[0]];
        files.forEach(file => {
          return processFile(file);
        });
      })
      .catch(catcher);
  });
};

generate();
