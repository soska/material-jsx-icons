"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* forward_10 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M8 26c0 8.8 7.2 16 16 16s16-7.2 16-16h-4c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12v8l10-10L24 2v8c-8.8 0-16 7.2-16 16zm13.7 6H20v-6.5l-2 .6v-1.4l3.5-1.3h.2V32zm8.5-3.5c0 .6-.1 1.2-.2 1.6s-.3.8-.6 1.1-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.7-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9z" })
);
Icon.displayName = "Forward10Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;