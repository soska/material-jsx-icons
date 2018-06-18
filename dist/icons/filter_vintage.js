"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* filter_vintage icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M37.39 24.8c-.56-.32-1.14-.58-1.72-.8.58-.22 1.16-.48 1.72-.8 3.84-2.22 5.98-6.25 5.99-10.39-3.59-2.06-8.15-2.22-11.99 0-.56.32-1.07.69-1.56 1.09.1-.63.17-1.25.17-1.9 0-4.44-2.42-8.31-6-10.38-3.58 2.07-6 5.94-6 10.38 0 .65.06 1.27.16 1.89-.49-.39-1-.76-1.56-1.09-3.84-2.22-8.4-2.06-11.99 0 .01 4.14 2.15 8.17 5.99 10.39.56.32 1.14.58 1.72.8-.58.22-1.16.48-1.72.8-3.84 2.22-5.98 6.25-5.99 10.39 3.59 2.06 8.15 2.22 11.99 0 .56-.32 1.07-.69 1.56-1.09-.09.64-.16 1.26-.16 1.91 0 4.44 2.42 8.31 6 10.38 3.58-2.08 6-5.94 6-10.38 0-.65-.07-1.27-.16-1.89.49.39 1 .76 1.56 1.09 3.84 2.22 8.4 2.06 11.99 0-.01-4.15-2.15-8.18-6-10.4zM24 32c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
);
Icon.displayName = "FilterVintageIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;