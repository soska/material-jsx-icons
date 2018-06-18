"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* line_style icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 32h10v-4H6v4zm13 0h10v-4H19v4zm13 0h10v-4H32v4zM6 40h4v-4H6v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM6 24h16v-4H6v4zm20 0h16v-4H26v4zM6 8v8h36V8H6z" })
);
Icon.displayName = "LineStyleIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;