"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* phonelink_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M44 12V8H13.64l4 4H44zM3.84 3.29L1.29 5.84l3.63 3.63C4.36 10.16 4 11.04 4 12v22H0v6h35.46l4.71 4.71 2.54-2.55L7.79 7.24 3.84 3.29zM8 12.55L29.46 34H8V12.55zM46 16H34c-1.1 0-2 .9-2 2v8.36l4 4V20h8v14h-4.36l6 6H46c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2z" })
);
Icon.displayName = "PhonelinkOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;