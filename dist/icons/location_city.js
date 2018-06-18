"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* location_city icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M30 22V10l-6-6-6 6v4H6v28h36V22H30zM14 38h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 24h-4v-4h4v4zm0-8h-4v-4h4v4z" })
);
Icon.displayName = "LocationCityIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;