"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* airline_seat_recline_extra icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M10.71 11.28c-1.81-1.27-2.25-3.76-.99-5.57 1.27-1.81 3.76-2.25 5.57-.98 1.81 1.27 2.25 3.76.98 5.57-1.26 1.8-3.75 2.24-5.56.98zM32 38H17.86c-2.96 0-5.48-2.16-5.93-5.08L8 14H4l3.99 19.51c.74 4.88 4.94 8.49 9.88 8.49H32v-4zm.46-8H22.7l-2.05-8.2c3.15 1.78 6.56 3.09 10.3 2.44v-4.25c-3.26.61-6.88-.55-9.38-2.49l-3.29-2.56c-.45-.35-.98-.6-1.53-.76-.63-.18-1.31-.23-1.98-.12l-.05.01c-2.45.43-4.09 2.76-3.66 5.21l2.71 11.84c.54 2.83 3.01 4.88 5.89 4.88h13.7L41 42l3-3-11.54-9z" })
);
Icon.displayName = "AirlineSeatReclineExtraIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;