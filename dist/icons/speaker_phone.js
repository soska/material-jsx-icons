"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* speaker_phone icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 15.14L16.86 18c1.83-1.83 4.35-2.96 7.14-2.96s5.31 1.13 7.14 2.96L34 15.14C31.44 12.59 27.91 11 24 11s-7.44 1.59-10 4.14zM24 3C17.95 3 12.47 5.45 8.5 9.42l2.82 2.82C14.57 8.99 19.05 6.99 24 6.99s9.43 2 12.68 5.25l2.82-2.82C35.53 5.45 30.05 3 24 3zm5.71 17.01L18.29 20C17.03 20 16 21.03 16 22.29v19.43c0 1.26 1.03 2.29 2.29 2.29h11.43c1.26 0 2.29-1.03 2.29-2.29V22.29c-.01-1.26-1.04-2.28-2.3-2.28zM30 40H18V24h12v16z" })
);
Icon.displayName = "SpeakerPhoneIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;