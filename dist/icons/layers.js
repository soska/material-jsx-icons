"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* layers icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M23.99 37.08L9.24 25.61 6 28.13l18 14 18-14-3.26-2.53-14.75 11.48zM24 32l14.73-11.45L42 18 24 4 6 18l3.26 2.53L24 32z" })
);
Icon.displayName = "LayersIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;