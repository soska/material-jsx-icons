"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* format_underlined icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 34c6.63 0 12-5.37 12-12V6h-5v16c0 3.87-3.13 7-7 7s-7-3.13-7-7V6h-5v16c0 6.63 5.37 12 12 12zm-14 4v4h28v-4H10z" })
);
Icon.displayName = "FormatUnderlinedIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;