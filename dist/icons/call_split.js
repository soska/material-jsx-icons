"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* call_split icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M28 8l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L40 20V8zm-8 0H8v12l4.59-4.59L22 24.83V40h4V23.17L15.41 12.59z" })
);
Icon.displayName = "CallSplitIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;