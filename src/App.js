import React, {Component} from 'react';

import { CardList } from './components/cardlist/card-list.component';
import SearchBox from './components/searchBox/searchBox.component';
import Loader from './components/loader/loader.component';
import './app.style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users =>{
      this.setState({monsters: users})
    })
  } 
  
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    console.log(this.state);
    if( !this.state.monsters.length ){
      return <Loader animationName="Loading" />
    }else{
    return(
      <div className="wrapper">
      <h1>monsters rolodex</h1>
      <SearchBox 
        placeholder="search monsters"
        handleChange={ this.handleChange }
      />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  }
}

export default App;