"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* gps_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3C20.33 10.38 22.12 10 24 10c7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.55l4.07 4.07C7.93 15.24 6.51 18.46 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96L39.45 42 42 39.46 8.55 6 6 8.55zm26.53 26.53C30.17 36.9 27.22 38 24 38c-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z" })
);
Icon.displayName = "GpsOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;