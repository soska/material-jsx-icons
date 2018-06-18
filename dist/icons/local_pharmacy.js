"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* local_pharmacy icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M42 10h-5.29L39 3.71 34.3 2l-2.91 8H6v4l4 12-4 12v4h36v-4l-4-12 4-12v-4zM32 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z" })
);
Icon.displayName = "LocalPharmacyIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;