"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* power_settings_new icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M26 6h-4v20h4V6zm9.67 4.33l-2.83 2.83C35.98 15.73 38 19.62 38 24c0 7.73-6.27 14-14 14s-14-6.27-14-14c0-4.38 2.02-8.27 5.16-10.84l-2.83-2.83C8.47 13.63 6 18.52 6 24c0 9.94 8.06 18 18 18s18-8.06 18-18c0-5.48-2.47-10.37-6.33-13.67z" })
);
Icon.displayName = "PowerSettingsNewIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;