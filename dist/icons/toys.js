"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* toys icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 24c0-6.1 4.9-11 11-11s11 4.9 11 11H24zm0 0c0 6.1-4.9 11-11 11S2 30.1 2 24h22zm0 0c-6.1 0-11-4.9-11-11S17.9 2 24 2v22zm0 0c6.1 0 11 4.9 11 11s-4.9 11-11 11V24z" })
);
Icon.displayName = "ToysIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;