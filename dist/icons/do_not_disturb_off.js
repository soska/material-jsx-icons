"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* do_not_disturb_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M34 22v4h-2.92l9.36 9.36C42.68 32.14 44 28.22 44 24c0-11.04-8.96-20-20-20-4.22 0-8.14 1.32-11.36 3.56L27.08 22H34zM4.54 4.54L2 7.08l5.56 5.56C5.32 15.86 4 19.78 4 24c0 11.04 8.96 20 20 20 4.22 0 8.14-1.32 11.36-3.56L40.92 46l2.54-2.54L22 22 4.54 4.54zM14 26v-4h2.92l4 4H14z" })
);
Icon.displayName = "DoNotDisturbOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;