import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './components/Todo';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css';
import axios from 'axios';



class App extends Component {
  state = {
    activities: []
  }

  // Another Life Cycle method apart from render
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
         .then(response => this.setState({activities:response.data}));
          
  }

  // toggle item completion
  toggleComplete = (id) => {
    this.setState({activities: this.state.activities.map(
      activity => {
        if(activity.id === id){
          activity.completed = !activity.completed
        }
        return activity
      })})}

// delete item.. spread operator is used to copy the entire state and
// then apply filter only the ones where the id is not equal to the id passed
// this result is then copied in the state object 
  deleteItem = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState(
          {activities: [...this.state.activities.filter(activity => activity.id !== id)]} 
        ));

    
  }

  //add item - get the latest ID and then add one to get the new ID
  addItem = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:title,
      completed:false
    })
    .then(response => this.setState({activities:[...this.state.activities, response.data]}
    ));
  }

  render(){
    return (
      <Router>
      <div className = 'MainApp'>
          <Header/>
          <Route exact path = '/' render = {props => (
            <React.Fragment>

              <AddTodo addItem = {this.addItem}/>
              <Todo todos={this.state.activities} 
              markComplete={this.toggleComplete}
              deleteItem = {this.deleteItem}
              />
            </React.Fragment>
          )}/>

          <Route exact path = '/About' render = {props => (
            <React.Fragment>
              <About/>
            </React.Fragment>
          )}/>
      </div>
      </Router>
    );
  }
  
}


export default App;
