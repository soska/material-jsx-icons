"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* new_releases icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M46 24l-4.88-5.56.68-7.37-7.22-1.63-3.78-6.36L24 6l-6.8-2.92-3.78 6.36-7.22 1.63.68 7.37L2 24l4.88 5.56-.68 7.37 7.22 1.63 3.78 6.36L24 42l6.8 2.92 3.78-6.36 7.22-1.63-.68-7.37L46 24zM26 34h-4v-4h4v4zm0-8h-4V14h4v12z" })
);
Icon.displayName = "NewReleasesIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;