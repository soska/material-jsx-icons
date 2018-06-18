"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* border_left icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M22 42h4v-4h-4v4zm0-8h4v-4h-4v4zm0-24h4V6h-4v4zm0 8h4v-4h-4v4zm0 8h4v-4h-4v4zm-8 16h4v-4h-4v4zm0-32h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4V6H6v36zm32-24h4v-4h-4v4zm-8 24h4v-4h-4v4zm8-8h4v-4h-4v4zm0-28v4h4V6h-4zm0 20h4v-4h-4v4zm0 16h4v-4h-4v4zm-8-16h4v-4h-4v4zm0-16h4V6h-4v4z" })
);
Icon.displayName = "BorderLeftIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;