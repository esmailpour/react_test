import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './person/person';

class App extends Component {
  
  state={ 
    persons:[
      {name:'mitra',age:'293'},
      {name:'mina',age:'227'}
    ]
  }
  switchNameHandler=(NewName)=>{
    // console.log('was clicked');
    this.setState({
      persons:[
        {name:NewName,age:'293'},
        {name:'mina',age:'12'}
      ]
    })
  }
  render(){
    return (
    <div className="App">
      <h1>hi ima rect app</h1>
      <Person
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}> 
       my mom</Person>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons.age}
      click={this.switchNameHandler.bind(this,'and')}/>

      <button onClick={()=>this.switchNameHandler.bind(this,'mitraei_art')} >send</button>
    </div>
  );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'mitraaa'));
  }
  
}

export default App;
