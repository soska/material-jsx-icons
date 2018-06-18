"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* view_comfy icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 18h8v-8H6v8zm0 10h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zM16 18h8v-8h-8v8zm10-8v8h8v-8h-8zm10 18h8v-8h-8v8zM6 38h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm0-28v8h8v-8h-8z" })
);
Icon.displayName = "ViewComfyIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;