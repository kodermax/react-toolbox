import React from 'react';
import {IconButton} from '../button';
import Dropdown from '../dropdown';
import style from './style';

export default class Pagination extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number.isRequired,
    limits: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    onChangeLimit: React.PropTypes.func,
    onPageClick: React.PropTypes.func,
    page: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired
  };
  constructor (props) {
    super(props);
    this.state = {
      limit: props.limit
    };
  }

  handleChangeLimit = (value) => {
    this.setState({limit: value});
    this.props.onChangeLimit(value);
  };
  render () {
    const {
      limits,
      page,
      total
    } = this.props;
    return (
      <div className={style.pagination}>
        <IconButton icon="keyboard_arrow_left" disabled={page === 1}
          onClick={this.props.onPageClick.bind(null, page - 1)}
        />
        <IconButton icon="keyboard_arrow_right" disabled={page * this.state.limit >= total}
          onClick={this.props.onPageClick.bind(null, page + 1)}
        />
        <span>{Math.min((page * this.state.limit - this.state.limit + 1), total) + '-' + Math.min((page * this.state.limit), total) + ' из ' + total}</span>
        <span>На странице: </span>
        <Dropdown className={style.dropdown} auto={false} onChange={this.handleChangeLimit}
          source={limits}
          value={this.state.limit}
        />
      </div>
    );
  }
}
