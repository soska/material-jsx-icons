"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* grapheq icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 36h4V12h-4v24zm8 8h4V4h-4v40zM6 28h4v-8H6v8zm24 8h4V12h-4v24zm8-16v8h4v-8h-4z" })
);
Icon.displayName = "GrapheqIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;