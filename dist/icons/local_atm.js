"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* local_atm icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M22 34h4v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-6v-2h8v-4h-4v-2h-4v2h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2h-8v4h4v2zM40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V12h32v24z" })
);
Icon.displayName = "LocalAtmIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;