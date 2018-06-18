"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* stop_screen_share icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M42.44 36.04l4 4H48v-4h-5.56zm1.54-4l.02-20c0-2.22-1.8-4-4-4H14.44L24.9 18.5c.36-.08.72-.14 1.1-.2v-4.26l8 7.46-3.16 2.94 11.08 11.08c1.22-.66 2.06-1.98 2.06-3.48zM4.78 3.46L2.22 6 5.3 9.08C4.5 9.8 4 10.86 4 12.04v20c0 2.2 1.78 4 4 4H0v4h36.26l5.42 5.42 2.54-2.54L4.78 3.46zM14 30.04c.62-2.96 1.84-5.9 4.14-8.12l3.18 3.18c-3.08.76-5.4 2.36-7.32 4.94z" })
);
Icon.displayName = "StopScreenShareIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;