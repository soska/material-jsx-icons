"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* battery_charging_50 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M28.93 27L22 40V29h-4l1.07-2H14v14.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V27h-5.08z" }),
  _react2.default.createElement("path", {
    d: "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V27h5.07L26 14v11h4l-1.07 2H34V10.67C34 9.19 32.81 8 31.33 8z",
    fillOpacity: ".3"
  })
);
Icon.displayName = "BatteryCharging50Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;