"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* tablet icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M42 8H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 3.98-1.79 3.98-4L46 12c0-2.21-1.79-4-4-4zm-4 28H10V12h28v24z" })
);
Icon.displayName = "TabletIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;