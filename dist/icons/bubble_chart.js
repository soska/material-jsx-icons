"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* bubble_chart icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("circle", { cx: "14.4", cy: "28.8", r: "6.4" }),
  _react2.default.createElement("circle", { cx: "29.6", cy: "36", r: "4" }),
  _react2.default.createElement("circle", { cx: "30.4", cy: "17.6", r: "9.6" })
);
Icon.displayName = "BubbleChartIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;