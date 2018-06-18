"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* watch icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 24c0-5.09-2.38-9.62-6.09-12.55L32 0H16l-1.91 11.45C10.38 14.38 8 18.91 8 24s2.38 9.62 6.09 12.55L16 48h16l1.91-11.45C37.62 33.62 40 29.09 40 24zm-28 0c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12-12-5.37-12-12z" })
);
Icon.displayName = "WatchIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;