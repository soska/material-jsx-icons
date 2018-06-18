"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* battery_charging_full icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM22 40V29h-4l8-15v11h4l-8 15z" })
);
Icon.displayName = "BatteryChargingFullIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;