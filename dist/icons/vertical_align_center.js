"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* vertical_align_center icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M16 38h6v8h4v-8h6l-8-8-8 8zm16-28h-6V2h-4v8h-6l8 8 8-8zM8 22v4h32v-4H8z" })
);
Icon.displayName = "VerticalAlignCenterIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;