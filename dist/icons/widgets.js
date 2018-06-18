"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* widgets icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M26 26v16h16V26H26zM6 42h16V26H6v16zM6 6v16h16V6H6zm27.31-2.63L22 14.69 33.31 26l11.31-11.31L33.31 3.37z" })
);
Icon.displayName = "WidgetsIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;