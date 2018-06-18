"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* bluetooth_connected icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 24l-4-4-4 4 4 4 4-4zm21.41-8.59L24 4h-2v15.17L12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 22 28.83V44h2l11.41-11.41L26.83 24l8.58-8.59zM26 11.66l3.76 3.76L26 19.17v-7.51zm3.76 20.93L26 36.34v-7.52l3.76 3.77zM38 20l-4 4 4 4 4-4-4-4z" })
);
Icon.displayName = "BluetoothConnectedIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;