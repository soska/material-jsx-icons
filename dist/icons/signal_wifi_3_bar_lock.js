"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* signal_wifi_3_bar_lock icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", {
    d: "M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.8-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z",
    opacity: ".3"
  }),
  _react2.default.createElement("path", { d: "M46 32v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zM7.1 21.9L24 43l7-8.7V29c0-4.3 2.7-8 6.5-9.4C34.6 18 29.9 16 24 16c-9.6 0-16.1 5.2-16.9 5.9z" })
);
Icon.displayName = "SignalWifi3BarLockIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;