"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* audiotrack icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 6v18.55c-.94-.33-1.94-.55-3-.55-4.97 0-9 4.03-9 9s4.03 9 9 9c4.63 0 8.4-3.51 8.9-8h.1V12h8V6H24z" })
);
Icon.displayName = "AudiotrackIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;