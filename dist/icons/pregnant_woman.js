"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* pregnant_woman icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M18 8c0-2.22 1.78-4 4-4s4 1.78 4 4-1.78 4-4 4-4-1.78-4-4zm14 18c-.02-2.69-1.66-5.02-4-6 0-3.31-2.69-6-6-6s-6 2.69-6 6v14h4v10h6V34h6v-8z" })
);
Icon.displayName = "PregnantWomanIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;