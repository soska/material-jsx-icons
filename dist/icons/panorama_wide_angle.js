"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* panorama_wide_angle icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 12c4.9 0 9.42.39 14.58 1.27C39.52 16.84 40 20.45 40 24c0 3.55-.48 7.16-1.42 10.73C33.42 35.61 28.9 36 24 36s-9.42-.39-14.58-1.27C8.48 31.16 8 27.55 8 24c0-3.55.48-7.16 1.42-10.73C14.58 12.39 19.1 12 24 12m0-4c-5.46 0-10.45.48-15.91 1.44l-1.85.33-.5 1.79C4.58 15.7 4 19.85 4 24s.58 8.3 1.74 12.44l.5 1.79 1.85.33C13.55 39.52 18.54 40 24 40s10.45-.48 15.91-1.44l1.85-.33.5-1.79C43.42 32.3 44 28.15 44 24s-.58-8.3-1.74-12.44l-.5-1.79-1.85-.33C34.45 8.48 29.46 8 24 8z" })
);
Icon.displayName = "PanoramaWideAngleIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;