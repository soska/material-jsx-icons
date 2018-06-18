"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* web_asset icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", {
    d: "M38 8H10c-2.22 0-4 1.8-4 4v24c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.78-4-4-4zm0 28H10V16h28v20z",
    fill: "#010101"
  })
);
Icon.displayName = "WebAssetIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;