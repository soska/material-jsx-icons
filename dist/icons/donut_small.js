"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* donut_small icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M22 18.32V4C12 5 4 13.58 4 24s8 19 18 20V29.68c-2-.82-4-3.04-4-5.68s2-4.86 4-5.68zM29.72 22H44c-.96-9.5-8-17.06-18-18v14.32c2 .6 3.04 1.96 3.72 3.68zM26 29.68V44c10-.94 17.04-8.5 18-18H29.72c-.68 1.72-1.72 3.08-3.72 3.68z" })
);
Icon.displayName = "DonutSmallIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;