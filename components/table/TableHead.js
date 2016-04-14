import React from 'react';
import FontIcon from '../font_icon';
import Checkbox from '../checkbox';
import style from './style';

const TableHead = ({model, onSelect, onSort, selectable, selected}) => {
  let selectCell;
  const contentCells = Object.keys(model).map((key) => {
    if (model[key].sortable) {
      return (<th key={key} className={style.sortable} onMouseUp={onSort.bind(this, key)}>
        {model[key].sort && model[key].sort === 'asc' ? <FontIcon value="arrow_upward" className={style.sortIcon}/>
          : model[key].sort === 'desc' ? <FontIcon value="arrow_downward" className={style.sortIcon}/> : undefined}
          <span style={{verticalAlign: 'middle'}}>
              {model[key].title}
          </span>
      </th>);
    } else {
      return <th key={key}>{model[key].title}</th>;
    }
  });

  if (selectable) {
    selectCell = (
      <th key='select' className={style.selectable}>
        <Checkbox onChange={onSelect} checked={selected} />
      </th>
    );
  }

  return (
    <thead>
      <tr>{[selectCell, ...contentCells]}</tr>
    </thead>
  );
};

TableHead.propTypes = {
  className: React.PropTypes.string,
  model: React.PropTypes.object,
  onSelect: React.PropTypes.func,
  selectable: React.PropTypes.bool,
  onSort: React.PropTypes.func,
  selected: React.PropTypes.bool
};

TableHead.defaultProps = {
  className: '',
  model: {},
  selected: false
};

export default TableHead;