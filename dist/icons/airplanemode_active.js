"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* airplanemode_active icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20.36 18" }),
  _react2.default.createElement("path", { d: "M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z" })
);
Icon.displayName = "AirplanemodeActiveIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;