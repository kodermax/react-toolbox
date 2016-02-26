import React from 'react';
import Table from '../../components/table';

const UserModel = {
  id: {
    title: 'ID',
    type: String,
  },
  title: {
    title: 'Заголовок',
    type: String,
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

const users = [
  {id:  123, title: '@soyjavi', createdBy:'Максим', changedBy: 'Максим', messages: 10, status: 'Готово'},
  {id:  123, title: '@soyjavi', createdBy:'Максим', changedBy: 'Максим', messages: 10, status: 'Готово'},
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

  render () {
    return (
      <section>
        <h5>Table</h5>
        <p style={{marginBottom: '10px'}}>Organized data.</p>
        <Table
          model={UserModel}
          onSelect={this.handleSelect}
          selectable
          selected={this.state.selected}
          source={this.state.source}
        />
      </section>
    );
  }
}

export default TableTest;
