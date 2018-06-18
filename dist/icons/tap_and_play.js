"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* tap_and_play icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M4 32v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0 8v6h6c0-3.31-2.69-6-6-6zm0-16v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22zM34 2.02L14 2c-2.21 0-4 1.79-4 4v14.74c1.38.33 2.72.74 4 1.28V10h20v26h-6.06c1.04 2.49 1.68 5.19 1.9 8H34c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98z" })
);
Icon.displayName = "TapAndPlayIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;