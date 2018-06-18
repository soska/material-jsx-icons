"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* format_color_text icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M0 40h48v8H0z", fillOpacity: ".36" }),
  _react2.default.createElement("path", { d: "M22 6L11 34h4.5l2.25-6h12.5l2.25 6H37L26 6h-4zm-2.75 18L24 11.33 28.75 24h-9.5z" })
);
Icon.displayName = "FormatColorTextIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;