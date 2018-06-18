"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* sim_card icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M39.98 8c0-2.21-1.77-4-3.98-4H20L8 16v24c0 2.21 1.79 4 4 4h24.02c2.21 0 3.98-1.79 3.98-4l-.02-32zM18 38h-4v-4h4v4zm16 0h-4v-4h4v4zm-16-8h-4v-8h4v8zm8 8h-4v-8h4v8zm0-12h-4v-4h4v4zm8 4h-4v-8h4v8z" })
);
Icon.displayName = "SimCardIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;