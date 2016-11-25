'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.handleChangeLimit = function (value) {
      _this.setState({ limit: value });
      _this.props.onChangeLimit(value);
    };

    _this.state = {
      limit: props.limit
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          limits = _props.limits,
          page = _props.page,
          total = _props.total;

      return _react2.default.createElement(
        'div',
        { className: _style2.default.pagination },
        _react2.default.createElement(_button.IconButton, { icon: 'keyboard_arrow_left', disabled: page === 1,
          onClick: this.props.onPageClick.bind(null, page - 1)
        }),
        _react2.default.createElement(_button.IconButton, { icon: 'keyboard_arrow_right', disabled: page * this.state.limit >= total,
          onClick: this.props.onPageClick.bind(null, page + 1)
        }),
        _react2.default.createElement(
          'span',
          null,
          Math.min(page * this.state.limit - this.state.limit + 1, total) + '-' + Math.min(page * this.state.limit, total) + ' из ' + total
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435: '
        ),
        _react2.default.createElement(_dropdown2.default, { className: _style2.default.dropdown, auto: false, onChange: this.handleChangeLimit,
          source: limits,
          value: this.state.limit
        })
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
  limit: _react2.default.PropTypes.number.isRequired,
  limits: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  onChangeLimit: _react2.default.PropTypes.func,
  onPageClick: _react2.default.PropTypes.func,
  page: _react2.default.PropTypes.number.isRequired,
  total: _react2.default.PropTypes.number.isRequired
};
exports.default = Pagination;