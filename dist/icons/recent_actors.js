"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* recent_actors icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M42 10v28h4V10h-4zm-8 28h4V10h-4v28zm-6-28H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-12 5.5c2.48 0 4.5 2.02 4.5 4.5 0 2.49-2.02 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5zM25 34H7v-1.5c0-3 6-4.5 9-4.5s9 1.5 9 4.5V34z" })
);
Icon.displayName = "RecentActorsIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;