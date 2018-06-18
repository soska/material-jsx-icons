"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* vpn_key icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M25.3 20c-1.65-4.66-6.08-8-11.3-8-6.63 0-12 5.37-12 12s5.37 12 12 12c5.22 0 9.65-3.34 11.3-8H34v8h8v-8h4v-8H25.3zM14 28c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
);
Icon.displayName = "VpnKeyIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;