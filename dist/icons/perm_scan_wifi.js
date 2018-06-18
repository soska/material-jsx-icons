"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* perm_scan_wifi icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 6C13.91 6 6.29 9.7 0 14.47L24 44l24-29.5C41.71 9.74 34.09 6 24 6zm2 26h-4V20h4v12zm-4-16v-4h4v4h-4z" })
);
Icon.displayName = "PermScanWifiIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;