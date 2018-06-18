# Material JSX Icons

The [Material Design Icons Library](https://material.io/tools/icons) converted to dependency-free flexible React components using [Svg-To-JSX](https://github.com/janjakubnanista/svg-to-jsx), [Babel](https://babeljs.io/) and [Prettier](https://prettier.io/).

## How to use

Install the package using npm:

```
$ npm install --save material-jsx-icons

# or

$ yarn add material-jsx-icon
```

Then import in your app all the icons you want to use. They are just functional React components, so you just use them as such.

```javascript
import React from 'react';
import PersonIcon from 'material-jsx-icons/person';
import DeleteIcon from 'material-jsx-icons/delete';

const App = () => (
  <div>
    <PersonIcon />
    <DeleteIcon />
  </div>
);
```

## Styling

Now, to maintain flexibility, the Icon component includes no styling or appeareance information at all, not even sizing definitions, so you will have to provide you own styling. There are many options available:

You can pass a className and style it in a separate stylesheet or using css modules.

```javascript
const App = () => (
  <div>
    <PersonIcon className={'icon icon--person'} />
    <DeleteIcon className={'icon icon--delete'} />
  </div>
);
```

You can use in-line styles:

```javascript
const iconStyles = {
  width: '40px',
  fill: '#b4d455',
};

const App = () => (
  <div>
    <PersonIcon style={iconStyles} />
    <DeleteIcon style={iconStyles} />
  </div>
);
```

Or even one of those fancy style-in-js solution that kids like.

```javascript
import styled from 'styled-components';
import PersonIcon from 'material-jsx-icons/person';

const StyledPersonIcon = styled(PersonIcon)`
  width: 40px;
  fill: rebeccapurple;
`;

const App = () => (
  <div>
    <StyledPersonIcon />
  </div>
);
```

💡Tip: The SVGs produced by these components automatically adjusts to the container size while keep its proportions. So: when possible adjust the parent's size instead of the Icon element itself.

## Other props

The React component automatically forwards all the props to the underlying SVG element so you can set other properties like `onClick`, etc.

```javascript
<StyledPersonIcon onClick={doSomethingWhenClicked} />
```

## Import everything

Ideally you would just import the icons you need one by one, but if you want to import everything at once for some weird reason, you can do it.

```javascript
import AllTheIcons from 'material-jsx-icons';

const App = () => (
  <div>
    <AllTheIcons.PersonIcon />
    <AllTheIcons.AirplayIcon />
    <AllTheIcons.BusinessCenterIcon />
    <AllTheIcons.ChevronRightIcon />
    {/*... that's about ~900 icons */}
  </div>
);
```

## Building

If you want to build the icon components yourself there are two embarrassing scripts in the `scripts` folder. `generate.js` takes all the 48px production SVG from the `material-design-icons` package and transforms it into JSX react components, then uses Babel to transform those to plain ES5. `make-index.js` generates the unholy index file.

There's an npm script to run both:

```
npm run build
```

### Copyright

I don't own the Copyright for anything, I'm just processing it so it's easier to consume icons one-by-one in React.
