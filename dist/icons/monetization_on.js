"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* monetization_on icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2.83 32.18V40H21.5v-3.86c-3.41-.73-6.33-2.92-6.54-6.81h3.91c.2 2.1 1.64 3.73 5.3 3.73 3.93 0 4.8-1.96 4.8-3.18 0-1.65-.89-3.22-5.33-4.28-4.96-1.19-8.36-3.24-8.36-7.34 0-3.43 2.77-5.67 6.22-6.42V8h5.33v3.89c3.72.91 5.58 3.72 5.71 6.77H28.6c-.11-2.22-1.28-3.73-4.44-3.73-3 0-4.8 1.35-4.8 3.29 0 1.69 1.3 2.77 5.33 3.82 4.04 1.05 8.36 2.77 8.36 7.82 0 3.65-2.76 5.66-6.22 6.32z" })
);
Icon.displayName = "MonetizationOnIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;