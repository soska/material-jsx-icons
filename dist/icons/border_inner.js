"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* border_inner icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 42h4v-4H6v4zm8 0h4v-4h-4v4zm-4-28H6v4h4v-4zM6 34h4v-4H6v4zM18 6h-4v4h4V6zm-8 0H6v4h4V6zm24 0h-4v4h4V6zm4 12h4v-4h-4v4zm0-12v4h4V6h-4zm-8 36h4v-4h-4v4zM26 6h-4v16H6v4h16v16h4V26h16v-4H26V6zm12 36h4v-4h-4v4zm0-8h4v-4h-4v4z" })
);
Icon.displayName = "BorderInnerIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;