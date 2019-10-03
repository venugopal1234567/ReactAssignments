import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

   state = {
    username : "Venugopal"
  }

  
  namechangeHandler = (event)=>{
    this.setState({
      username : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <UserInput name={this.state.username} change={this.namechangeHandler}></UserInput>
          <UserOutput name = {this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
