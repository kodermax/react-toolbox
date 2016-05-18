import React from 'react';
import Autosuggest from '../../components/autosuggest';
import $ from 'jquery';
const usersObject = [{"id":"1555","img":"","position":"\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442 1\u0421","value":"test user"},{"id":"1642","img":null,"position":"\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a","value":"Max Payn"},{"id":"1861","img":null,"position":"","value":"Alex Payn"}];
class AutosuggestTest extends React.Component {
  state = {
    user: 'Максим Карпычев',
    userObject: {}
  };

  componentDidMount(){
    this.fetchData();
  }
  fetchData = (q) => {
    if (!q)
      q = '';
    let url = 'http://dev.pharm.local/api/users?q=';
    $.get(url + q, function(result){
      this.setState({usersObject: result});
    }.bind(this));
  };
  handleChange = (query) => {
    this.fetchData(query);
  };
  handleSelect = (key, value) => {
    this.setState({user :value});
  };
  customUser = (item) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    const imageStyle = {
      display: 'flex',
      width: '32px',
      height: '32px',
      flexGrow: 0,
      marginRight: '8px',
      backgroundColor: '#ccc'
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2
    };
    const positionStyle = {
      fontSize:'11px',
    };

    return (
      <div style={containerStyle}>
        {item.img ? <img src={'http://dev.pharm.local/' + item.img} style={imageStyle}/> : '' }
        <div style={contentStyle}>
          <span>{item.value}</span>
          <span style={positionStyle}>{item.position}</span>
        </div>
      </div>
    );
  };

  render () {
    return (
      <section>
        <h5>Autosuggest</h5>
        <Autosuggest
          label="Choose a user"
          multiple={false}
          onChange={this.handleChange}
          onFocus={this.handleQueryFocus}
          onSelectItem={this.handleSelect}
          source={this.state.usersObject}
          value={this.state.user}
          template={this.customUser}
        />
      </section>
    );
  }
}

export default AutosuggestTest;
