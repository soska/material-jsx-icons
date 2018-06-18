"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* view_module icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M8 22h10V10H8v12zm0 14h10V24H8v12zm12 0h10V24H20v12zm12 0h10V24H32v12zM20 22h10V10H20v12zm12-12v12h10V10H32z" })
);
Icon.displayName = "ViewModuleIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;