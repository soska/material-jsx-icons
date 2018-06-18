"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* network_check icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "-6 -30 48 48" }, props),
  _react2.default.createElement("path", { d: "M25.8-20c-.35 0-.64.19-.82.46l-.13.29L14.48 4.06c-.32.57-.51 1.22-.51 1.93 0 2.21 1.8 4.01 4.01 4.01 1.93 0 3.53-1.36 3.92-3.17l.01-.07L26.8-19c0-.55-.45-1-1-1zM-4-12l4 4c5.75-5.75 13.57-8.15 21.07-7.25l2.38-5.36C13.79-22.32 3.47-19.46-4-12zm40 4l4-4c-3.27-3.27-7.1-5.63-11.17-7.14l-1.07 5.63c2.99 1.24 5.8 3.07 8.24 5.51zm-8 8l4-4c-1.6-1.6-3.41-2.84-5.33-3.78l-1.11 5.84C26.43-1.39 27.25-.75 28 0zM4-4l4 4c2.27-2.27 5.11-3.59 8.06-3.99l2.57-5.77C13.35-9.92 8.03-8.02 4-4z" })
);
Icon.displayName = "NetworkCheckIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;