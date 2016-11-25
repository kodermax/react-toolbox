'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _reactCssThemr = require('react-css-themr');

var _Badge = require('./Badge.js');

var _identifiers = require('../identifiers.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedBadge = (0, _reactCssThemr.themr)(_identifiers.BADGE, _theme2.default)(_Badge.Badge);

exports.default = ThemedBadge;
exports.Badge = ThemedBadge;