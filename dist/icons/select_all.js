"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* select_all icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z" })
);
Icon.displayName = "SelectAllIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;