"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* text_format icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M10 34v4h28v-4H10zm9-8.4h10l1.8 4.4H35L25.5 8h-3L13 30h4.2l1.8-4.4zm5-13.64L27.74 22h-7.48L24 11.96z" })
);
Icon.displayName = "TextFormatIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;