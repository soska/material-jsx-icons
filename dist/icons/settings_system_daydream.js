"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* settings_system_daydream icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M18 32h13c2.76 0 5-2.24 5-5s-2.24-5-5-5h-.1c-.49-3.39-3.38-6-6.9-6-2.8 0-5.2 1.66-6.32 4.04h-.33C14.34 20.36 12 22.91 12 26c0 3.31 2.69 6 6 6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z" })
);
Icon.displayName = "SettingsSystemDaydreamIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;