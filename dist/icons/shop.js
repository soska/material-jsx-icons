"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* shop icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M32 12V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H4v26c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12H32zM20 8h8v4h-8V8zm-2 28V18l15 8-15 10z" })
);
Icon.displayName = "ShopIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;