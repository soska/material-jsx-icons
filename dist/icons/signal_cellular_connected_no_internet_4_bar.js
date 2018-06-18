"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* signal_cellular_connected_no_internet_4_bar icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 36h4V20h-4v16zm0 8h4v-4h-4v4zM4 44h32V16h8V4L4 44z" })
);
Icon.displayName = "SignalCellularConnectedNoInternet4BarIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;