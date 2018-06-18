"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* attachment icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M15 36C8.92 36 4 31.07 4 25s4.92-11 11-11h21c4.42 0 8 3.58 8 8s-3.58 8-8 8H19c-2.76 0-5-2.24-5-5s2.24-5 5-5h15v3H19c-1.1 0-2 .89-2 2s.9 2 2 2h17c2.76 0 5-2.24 5-5s-2.24-5-5-5H15c-4.42 0-8 3.58-8 8s3.58 8 8 8h19v3H15z" })
);
Icon.displayName = "AttachmentIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;