import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchbox.component';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(rynish => this.setState( {monsters: rynish } ));
  }
  handleChange = (e)  => {
    this.setState({ searchField: e.target.value })
  }
  render() { 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className='App'>
      <h1> Monster Rolodex</h1>
      <SearchBox
         placeholder='search monster'
         handleChange= {this.handleChange}
      />
      <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
 