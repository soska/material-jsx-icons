"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* signal_wifi_0_bar icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", {
    d: "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8C10.57 6 1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
    fillOpacity: ".3"
  })
);
Icon.displayName = "SignalWifi0BarIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;