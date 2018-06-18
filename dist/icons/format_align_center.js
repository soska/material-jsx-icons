"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* format_align_center icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 30v4h20v-4H14zM6 42h36v-4H6v4zm0-16h36v-4H6v4zm8-12v4h20v-4H14zM6 6v4h36V6H6z" })
);
Icon.displayName = "FormatAlignCenterIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;