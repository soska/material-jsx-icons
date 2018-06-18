"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* note icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M44 20L32 8H8c-2.2 0-4 1.8-4 4v24.02C4 38.22 5.8 40 8 40l32-.02c2.2 0 4-1.78 4-3.98V20zm-14-9l11 11H30V11z" })
);
Icon.displayName = "NoteIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;