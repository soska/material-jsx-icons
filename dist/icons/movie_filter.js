"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* movie_filter icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M36 8l4 6h-6l-4-6h-4l4 6h-6l-4-6h-4l4 6h-6l-4-6H8c-2.2 0-3.98 1.8-3.98 4L4 36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V8h-8zM22.5 30.5L20 36l-2.5-5.5L12 28l5.5-2.5L20 20l2.5 5.5L28 28l-5.5 2.5zm11.38-6.62L32 28l-1.88-4.12L26 22l4.12-1.88L32 16l1.88 4.12L38 22l-4.12 1.88z" })
);
Icon.displayName = "MovieFilterIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;