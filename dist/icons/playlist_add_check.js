"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* playlist_add_check icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M28 20H4v4h24v-4zm0-8H4v4h24v-4zM4 32h16v-4H4v4zm39-9l3 3-13.99 14L23 31l3-3 6.01 6L43 23z" })
);
Icon.displayName = "PlaylistAddCheckIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;