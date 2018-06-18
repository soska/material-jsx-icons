"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* lightbulb_outline icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", {
    d: "M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19C15.6 24.33 14 21.27 14 18.01c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z",
    fill: "#010101"
  })
);
Icon.displayName = "LightbulbOutlineIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;