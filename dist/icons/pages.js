"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* pages icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 10v12h10l-2-8 8 2V6H10c-2.21 0-4 1.79-4 4zm10 16H6v12c0 2.21 1.79 4 4 4h12V32l-8 2 2-8zm18 8l-8-2v10h12c2.21 0 4-1.79 4-4V26H32l2 8zm4-28H26v10l8-2-2 8h10V10c0-2.21-1.79-4-4-4z" })
);
Icon.displayName = "PagesIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;