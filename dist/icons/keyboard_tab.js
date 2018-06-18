"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* keyboard_tab icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M23.17 14.83L30.34 22H2v4h28.34l-7.17 7.17L26 36l12-12-12-12-2.83 2.83zM40 12v24h4V12h-4z" })
);
Icon.displayName = "KeyboardTabIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;