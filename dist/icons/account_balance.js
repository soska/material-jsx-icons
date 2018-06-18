"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* account_balance icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z" })
);
Icon.displayName = "AccountBalanceIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;