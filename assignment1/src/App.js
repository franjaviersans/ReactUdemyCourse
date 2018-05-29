import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Francisco"
  }

  nameHandler = (event) => {
    let name = event.target.value;
    this.setState({
      username: name,
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          inputHandler={this.nameHandler} 
          username={this.state.username}/> 
        <UserOutput text={this.state.username}/>
        <UserOutput text="JP"/>
        <UserOutput text="Alejandro"/>
      </div>
    );
  }
}

export default App;
