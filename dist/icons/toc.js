"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* toc icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 18h28v-4H6v4zm0 8h28v-4H6v4zm0 8h28v-4H6v4zm32 0h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4z" })
);
Icon.displayName = "TocIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;