"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* border_horizontal icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 42h4v-4H6v4zm4-28H6v4h4v-4zM6 34h4v-4H6v4zm8 8h4v-4h-4v4zM10 6H6v4h4V6zm8 0h-4v4h4V6zm16 0h-4v4h4V6zm-8 8h-4v4h4v-4zm0-8h-4v4h4V6zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zM6 26h36v-4H6v4zM38 6v4h4V6h-4zm0 12h4v-4h-4v4zM22 34h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z" })
);
Icon.displayName = "BorderHorizontalIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;