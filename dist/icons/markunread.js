"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* markunread icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" })
);
Icon.displayName = "MarkunreadIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;