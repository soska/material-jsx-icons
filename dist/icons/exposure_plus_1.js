"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* exposure_plus_1 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 14h-4v8H8v4h8v8h4v-8h8v-4h-8v-8zm20 22h-4V14.75l-6 2.05v-3.4l9.4-3.4h.6v26z" })
);
Icon.displayName = "ExposurePlus1Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;