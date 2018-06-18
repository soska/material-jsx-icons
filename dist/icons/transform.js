"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* transform icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M44 36v-4H16V8h4l-6-6-6 6h4v4H4v4h8v16c0 2.21 1.79 4 4 4h16v4h-4l6 6 6-6h-4v-4h8zM20 16h12v12h4V16c0-2.21-1.79-4-4-4H20v4z" })
);
Icon.displayName = "TransformIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;