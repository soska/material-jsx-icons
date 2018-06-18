"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* photo_album icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8zm0 30l6-7.71 4.29 5.15 6-7.73L36 38H12z" })
);
Icon.displayName = "PhotoAlbumIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;