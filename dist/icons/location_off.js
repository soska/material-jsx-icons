"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* location_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 13c2.76 0 5 2.24 5 5 0 1.47-.65 2.78-1.66 3.7l7.26 7.26C36.55 25.24 38 21.37 38 18c0-7.73-6.27-14-14-14-3.96 0-7.53 1.65-10.07 4.29l6.37 6.37C21.21 13.65 22.53 13 24 13zm8.75 19.2l-9.25-9.25-.22-.22L6.54 6 4 8.55l6.36 6.36c-.23.99-.36 2.02-.36 3.09 0 10.5 14 26 14 26s3.34-3.7 6.75-8.7l6.7 6.7L40 39.45l-7.25-7.25z" })
);
Icon.displayName = "LocationOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;