"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* list icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z" })
);
Icon.displayName = "ListIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;