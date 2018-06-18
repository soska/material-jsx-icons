"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* settings_ethernet icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M15.54 13.52l-3.08-2.55L1.64 24l10.82 13.04 3.08-2.55L6.84 24l8.7-10.48zM14 26h4v-4h-4v4zm20-4h-4v4h4v-4zm-12 4h4v-4h-4v4zm13.54-15.04l-3.08 2.55L41.16 24l-8.7 10.48 3.08 2.55L46.36 24 35.54 10.96z" })
);
Icon.displayName = "SettingsEthernetIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;