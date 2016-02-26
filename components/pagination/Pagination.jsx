import React from 'react';
import {IconButton} from 'react-toolbox/lib/button';

export default class Pagination extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number.isRequired,
    onPageClick: React.PropTypes.func,
    page: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
  };

  render() {
    const {
      limit,
      page,
      total,
    } = this.props;
    return (
      <div>
        <IconButton icon="keyboard_arrow_left" disabled={page === 1}
                    onClick={this.props.onPageClick.bind(null, page - 1)}
        />
        <IconButton icon="keyboard_arrow_right" disabled={page*limit >= total}
                    onClick={this.props.onPageClick.bind(null, page + 1)}
        />
        {Math.min((page*limit - limit + 1), total) + '-' + Math.min((page*limit), total) + ' из ' + total}
      </div>
    );
  }
}
