"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* filter_2 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-8-8h-8v-4h4c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-8v4h8v4h-4c-2.21 0-4 1.79-4 4v8h12v-4z" })
);
Icon.displayName = "Filter2Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;