"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* format_line_spacing icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M12 14h5l-7-7-7 7h5v20H3l7 7 7-7h-5V14zm8-4v4h24v-4H20zm0 28h24v-4H20v4zm0-12h24v-4H20v4z" })
);
Icon.displayName = "FormatLineSpacingIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;