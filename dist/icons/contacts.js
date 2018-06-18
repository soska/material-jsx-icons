"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* contacts icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 0H8v4h32V0zM8 48h32v-4H8v4zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-16 5.5c2.48 0 4.5 2.02 4.5 4.5 0 2.49-2.02 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5zM34 34H14v-3c0-3.33 6.67-5 10-5s10 1.67 10 5v3z" })
);
Icon.displayName = "ContactsIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;