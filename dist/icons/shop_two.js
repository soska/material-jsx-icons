"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* shop_two icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36 10V6c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H10v22c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10H36zM24 6h8v4h-8V6zm0 24V16l11 6-11 8zM6 18H2v22c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4H6V18z" })
);
Icon.displayName = "ShopTwoIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;