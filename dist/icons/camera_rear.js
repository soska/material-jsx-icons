"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* camera_rear icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm6-40H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM23.99 12C21.78 12 20 10.21 20 8s1.78-4 3.99-4 4 1.79 4 4-1.79 4-4 4z" })
);
Icon.displayName = "CameraRearIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;