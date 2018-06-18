"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* screen_lock_portrait icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 32h8c1.11 0 2-.9 2-2v-6c0-1.1-.89-2-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c-1.11 0-2 .9-2 2v6c0 1.1.89 2 2 2zm1.6-12c0-1.33 1.07-2.4 2.4-2.4 1.33 0 2.4 1.08 2.4 2.4v2h-4.8v-2zM34 2H14c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 36H14V10h20v28z" })
);
Icon.displayName = "ScreenLockPortraitIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;