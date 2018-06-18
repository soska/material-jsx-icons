"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* dns icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 26H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zM14 38c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM40 6H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM14 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
);
Icon.displayName = "DnsIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;