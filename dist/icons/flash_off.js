"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* flash_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6.55 6L4 8.55l10 10V26h6v18l7.17-12.29L35.45 40 38 37.46 6.55 6zM34 20h-8l8-16H14v4.36l16.92 16.92L34 20z" })
);
Icon.displayName = "FlashOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;