"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* vpn_lock icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M44 8V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h10c1.11 0 2-.9 2-2v-8c0-1.1-.89-2-2-2zm-1.6 0h-6.8V7c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1zm-4.55 16c.08.66.15 1.32.15 2 0 4.16-1.6 7.94-4.21 10.79C33.28 35.17 31.78 34 30 34h-2v-6c0-1.1-.9-2-2-2H14v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4V6.92c-1.89-.6-3.91-.92-6-.92C10.95 6 2 14.95 2 26s8.95 20 20 20 20-8.95 20-20c0-.68-.04-1.34-.1-2h-4.05zM20 41.86C12.11 40.88 6 34.16 6 26c0-1.23.15-2.43.42-3.58L16 32v2c0 2.21 1.79 4 4 4v3.86z" })
);
Icon.displayName = "VpnLockIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;