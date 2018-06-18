"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* speaker_group icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36.4 2H19.6C17.61 2 16 3.61 16 5.6v28.8c0 1.99 1.61 3.58 3.6 3.58l16.8.02c1.99 0 3.6-1.61 3.6-3.6V5.6C40 3.61 38.39 2 36.4 2zM28 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 27c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 10H8v32c0 2.21 1.79 4 4 4h20v-4H12V10z" })
);
Icon.displayName = "SpeakerGroupIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;