"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* pie_chart icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M22 4v40C11.86 42.99 4 34.42 4 24S11.86 5 22 4zm4.06 0v17.99H44C43.06 12.49 35.53 4.94 26.06 4zm0 22.01V44c9.47-.94 17-8.49 17.94-17.99H26.06z" })
);
Icon.displayName = "PieChartIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;