"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* bluetooth_audio icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M28.48 24.02l4.64 4.64c.56-1.45.88-3.02.88-4.66 0-1.63-.31-3.19-.86-4.63l-4.66 4.65zm10.58-10.59l-2.53 2.53c1.25 2.41 1.97 5.14 1.97 8.05s-.72 5.63-1.97 8.05l2.4 2.4c1.93-3.1 3.07-6.73 3.07-10.63 0-3.82-1.09-7.37-2.94-10.4zm-7.65 1.98L20 4h-2v15.17L8.83 10 6 12.83 17.17 24 6 35.17 8.83 38 18 28.83V44h2l11.41-11.41L22.83 24l8.58-8.59zM22 11.66l3.76 3.76L22 19.17v-7.51zm3.76 20.93L22 36.34v-7.52l3.76 3.77z" })
);
Icon.displayName = "BluetoothAudioIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;