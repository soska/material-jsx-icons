"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* switch_video icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36 19v-7c0-1.1-.89-2-2-2H6c-1.11 0-2 .9-2 2v24c0 1.1.89 2 2 2h28c1.11 0 2-.9 2-2v-7l8 8V11l-8 8zM26 31v-5H14v5l-7-7 7-7v5h12v-5l7 7-7 7z" })
);
Icon.displayName = "SwitchVideoIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;