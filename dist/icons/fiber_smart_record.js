"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* fiber_smart_record icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "16 -12 48 48" }, props),
  _react2.default.createElement("circle", { cx: "34", cy: "12", r: "16" }),
  _react2.default.createElement("path", { d: "M50-3.48V.7c4.66 1.64 8 6.08 8 11.3s-3.34 9.66-8 11.3v4.18C56.9 25.7 62 19.46 62 12S56.9-1.7 50-3.48z" })
);
Icon.displayName = "FiberSmartRecordIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;