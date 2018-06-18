"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* event_seat icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M8 36v6h6v-6h20v6h6V30H8zm30-16h6v6h-6zM4 20h6v6H4zm30 6H14V10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v16z" })
);
Icon.displayName = "EventSeatIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;