"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* play_for_work icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M22 10v11.17h-7l9 9 9-9h-7V10h-4zM12 28c0 6.62 5.38 12 12 12s12-5.38 12-12h-4c0 4.42-3.58 8-8 8s-8-3.58-8-8h-4z" })
);
Icon.displayName = "PlayForWorkIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;