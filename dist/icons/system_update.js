"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* system_update icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M34 2.02L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28zm-2-12h-6V16h-4v10h-6l8 8 8-8z" })
);
Icon.displayName = "SystemUpdateIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;