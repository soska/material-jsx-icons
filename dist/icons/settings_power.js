"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* settings_power icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 48h4v-4h-4v4zm8 0h4v-4h-4v4zm4-44h-4v20h4V4zm7.13 4.87l-2.89 2.89C33.69 13.87 36 17.66 36 22c0 6.63-5.37 12-12 12s-12-5.37-12-12c0-4.34 2.31-8.13 5.76-10.24l-2.89-2.89C10.72 11.76 8 16.56 8 22c0 8.84 7.16 16 16 16s16-7.16 16-16c0-5.44-2.72-10.24-6.87-13.13zM30 48h4v-4h-4v4z" })
);
Icon.displayName = "SettingsPowerIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;