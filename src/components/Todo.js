import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todo extends Component{
    

    render(){

        return this.props.todos.map((acts) =>
        (            
           <TodoItem key={acts.id} item={acts} 
           markComplete = {this.props.markComplete}
           deleteItem = {this.props.deleteItem}
           />
           
        ));
    }

}


Todo.propTypes = {
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    deleteItem:PropTypes.func.isRequired

}

export default Todo;