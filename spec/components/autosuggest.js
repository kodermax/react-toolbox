import React from 'react';
import Autosuggest from '../../components/autosuggest';
import $ from 'jquery';
const usersObject = {
  '123': {'value':'Javi Velasco','position':'UI Developer', 'img':'https://avatars2.githubusercontent.com/u/1634922?v=3&s=48'},
  '321': {'value': 'Javi Jiménez', 'position':'Director', 'img':'https://avatars2.githubusercontent.com/u/559654?v=3&s=460'}
};
class AutosuggestTest extends React.Component {
  state = {
    user: '321'
  };

  componentDidMount(){
    this.fetchData();
  }
  fetchData = (q) => {
    if (!q)
      q = '';
    let url = '?q=';
    $.get(url + q, function(result){
      this.setState({usersObject: result});
    }.bind(this));
  };
  handleChange = (query) => {
    this.fetchData(query);
  };
  handleSelect = (key, value) => {
    console.log(value);
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
          template={this.customUser}
        />
      </section>
    );
  }
}

export default AutosuggestTest;
