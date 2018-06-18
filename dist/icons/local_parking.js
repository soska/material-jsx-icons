"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* local_parking icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M26 6H12v36h8V30h6c6.63 0 12-5.37 12-12S32.63 6 26 6zm.4 16H20v-8h6.4c2.21 0 4 1.79 4 4s-1.79 4-4 4z" })
);
Icon.displayName = "LocalParkingIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;