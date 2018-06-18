"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* exposure_zero icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M32.28 25c0 2-.2 3.7-.59 5.1-.39 1.4-.95 2.53-1.67 3.41-.72.87-1.59 1.51-2.6 1.9-1.01.39-2.14.59-3.39.59-1.24 0-2.37-.2-3.39-.59-1.02-.39-1.89-1.03-2.62-1.9-.73-.87-1.3-2.01-1.69-3.41-.4-1.4-.6-3.1-.6-5.1v-4.08c0-2 .2-3.7.59-5.09.39-1.39.95-2.52 1.68-3.38.72-.86 1.59-1.49 2.61-1.87 1.02-.38 2.15-.57 3.39-.57 1.25 0 2.39.19 3.41.57 1.02.38 1.89 1.01 2.62 1.87.72.86 1.28 1.99 1.68 3.38.39 1.39.59 3.09.59 5.09V25zm-4.22-4.73c0-1.29-.09-2.37-.27-3.24-.18-.87-.44-1.58-.79-2.12-.35-.54-.77-.93-1.28-1.16-.5-.24-1.08-.36-1.73-.36-.65 0-1.23.12-1.73.36-.51.24-.93.63-1.28 1.16-.35.54-.61 1.25-.79 2.12-.18.87-.27 1.96-.27 3.24v5.34c0 1.27.09 2.36.28 3.25.19.89.45 1.62.8 2.17.35.56.78.96 1.29 1.22.51.25 1.09.38 1.74.38.66 0 1.24-.13 1.74-.38s.92-.66 1.26-1.22c.34-.56.6-1.28.77-2.17.17-.89.26-1.98.26-3.25v-5.34z" })
);
Icon.displayName = "ExposureZeroIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;