"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* translate icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06H34V8H20V4h-4v4H2v3.98h22.34C22.99 15.84 20.88 19.5 18 22.7c-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12L5.17 35.17 8 38l10-10 6.22 6.22 1.52-4.07zM37 20h-4l-9 24h4l2.25-6h9.5L42 44h4l-9-24zm-5.25 14L35 25.33 38.25 34h-6.5z" })
);
Icon.displayName = "TranslateIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;