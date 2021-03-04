import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  // we are borrowing componentDidMount and render and return form React.component through inheritance (super()) that is why we are able to use this key words
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }


//   onSearchChange(event){
//     this.setState({ searchField: event.target.value }); // here this has to bind in constructor inorder to know the class we are using
//     // TypeError: Cannot read property 'setState' of undefined
//   };

//   const f = {
//     fun: function(){
//       console.log(this)
//          function a(){
//             console.log(this)}
//     a()
//     }
// }

  //Arrow function to bind this automatically
  // A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Funny faces</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
