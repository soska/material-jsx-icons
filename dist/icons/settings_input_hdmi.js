"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* settings_input_hdmi icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36 14V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v6h-2v12l6 12v6h16v-6l6-12V14h-2zM16 8h16v6h-4v-4h-2v4h-4v-4h-2v4h-4V8z" })
);
Icon.displayName = "SettingsInputHdmiIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;