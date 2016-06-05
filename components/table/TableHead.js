import React, { PropTypes } from 'react';

const factory = (Checkbox) => {
  const TableHead = ({model, onSelect, onSort, selectable, multiSelectable, selected, theme}) => {
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

    if (selectable && multiSelectable) {
      selectCell = (
        <th key='select' className={theme.selectable}>
          <Checkbox onChange={onSelect} checked={selected}/>
        </th>
      );
    } else if (selectable) {
      selectCell = (
        <th key='select' className={theme.selectable}></th>
      );
    }
    return (
      <thead>
        <tr>{[selectCell, ...contentCells]}</tr>
      </thead>
    );
  };

  TableHead.propTypes = {
    className: PropTypes.string,
    model: PropTypes.object,
    multiSelectable: PropTypes.bool,
    onSelect: PropTypes.func,
    onSort: React.PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
    theme: PropTypes.shape({
      selectable: PropTypes.string
    })
  };

  TableHead.defaultProps = {
    className: '',
    model: {},
    selected: false
  };

  return TableHead;
};

export default factory;
