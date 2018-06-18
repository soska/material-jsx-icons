"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* musnote icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 6v21.11c-1.18-.69-2.54-1.11-4-1.11-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8V14h8V6H24z" })
);
Icon.displayName = "MusnoteIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;