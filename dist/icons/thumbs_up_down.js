"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* thumbs_up_down icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 12c0-1.1-.9-2-2-2H11.63l1.33-6.35c.03-.15.05-.31.05-.47 0-.62-.25-1.18-.66-1.59L10.76 0 .88 9.88C.34 10.42 0 11.17 0 12v13c0 1.66 1.34 3 3 3h13.5c1.24 0 2.31-.75 2.76-1.83l4.53-10.58c.13-.34.21-.7.21-1.09V12zm21 8H31.5c-1.24 0-2.31.75-2.76 1.83l-4.53 10.58c-.13.34-.21.7-.21 1.09V36c0 1.1.9 2 2 2h10.37l-1.33 6.35c-.03.15-.05.31-.05.47 0 .62.25 1.18.66 1.59L37.24 48l9.88-9.88c.54-.54.88-1.29.88-2.12V23c0-1.66-1.34-3-3-3z" })
);
Icon.displayName = "ThumbsUpDownIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;