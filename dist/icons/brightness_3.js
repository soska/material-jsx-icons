"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* brightness_3 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M18 4c-2.09 0-4.11.32-6 .92C20.11 7.47 26 15.05 26 24c0 8.95-5.89 16.53-14 19.08 1.89.59 3.91.92 6 .92 11.05 0 20-8.95 20-20S29.05 4 18 4z" })
);
Icon.displayName = "Brightness3Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;