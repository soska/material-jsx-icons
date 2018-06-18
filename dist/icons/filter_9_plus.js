"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* filter_9_plus icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm22 14v-8c0-2.21-1.79-4-4-4h-2c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4h2v2h-6v4h6c2.21 0 4-1.79 4-4zm-6-6v-2h2v2h-2zM42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 16h-4v-4h-4v4h-4v4h4v4h4v-4h4v12H14V6h28v12z" })
);
Icon.displayName = "Filter9PlusIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;