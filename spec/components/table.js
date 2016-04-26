import React from 'react';
import Table from '../../components/table';
import Pagination from '../../components/pagination';

const UserModel = {
  id: {
    title: 'ID',
    sortable: true,
    sort: 'desc',
    type: String,
  },
  title: {
    title: 'Заголовок',
    type: String,
    crop: true,
    width: '200px',
  },
  createdBy: {
    title: 'Кто создал',
    type: String,
  },
  changedBy: {
    title: 'Кто изменил',
    type: String,
  },
  messages: {
    title: 'Сооб.',
    type: String,
  },
  status: {
    title: 'Статус заявки',
    type: String,
  },
};
const pageLimits = [
  {value: 100, label: '100'},
  {value: 200, label: '200'},
  {value: 500, label: '500'},
];

const users = [
  {id:  123, title: '@soyjavi', createdBy:'Максим', changedBy: 'Максим', messages: 10, status: 'Готово'},
  {id:  123, title: 'Бессознательное вызывает контраст, это обозначено Ли Россом как фундаментальная ошибка атрибуции, которая прослеживается во многих экспериментах.',
    createdBy:'Максим', changedBy: 'Максим', messages: 10, status: 'Готово'},
  {id:  123, title: '@soyjavi', createdBy:'Максим', changedBy: 'Максим', messages: 10, status: 'Готово'},
];

class TableTest extends React.Component {
  state = {
    selected: [],
    source: users
  };

  handleChange = (row, key, value) => {
    const source = this.state.source;
    source[row][key] = value;
    this.setState({source});
  };

  handleSelect = (selected) => {
    this.setState({selected});
  };
  handleSort = (key) => {
    console.log(key)
  };
  handlePageClick = (page) => {
    console.log(page);
  };
  handleChangeLimit = (value) => {
    console.log(value);
  };

  render () {
    return (
      <section>
        <h5>Table</h5>
        <p style={{marginBottom: '10px'}}>Organized data.</p>
        <Table
          model={UserModel}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onSort={this.handleSort}
          selectable
          selected={this.state.selected}
          source={this.state.source}
        />
        <Pagination page={1} limit={10} total={5}
          onChangeLimit={this.handleChangeLimit} limits={pageLimits} onPageClick={this.handlePageClick}
        />
      </section>
    );
  }
}

export default TableTest;
