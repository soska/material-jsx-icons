"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* subdirectory_arrow_right icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M-31 29l-12 12-2.83-2.83 7.17-7.17H-61V7h4v20h18.34l-7.17-7.17L-43 17l12 12zm71 1L28 42l-2.83-2.83L32.34 32H8V6h4v22h20.34l-7.17-7.17L28 18l12 12z" })
);
Icon.displayName = "SubdirectoryArrowRightIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;