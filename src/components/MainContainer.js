import React from 'react';

import {FilterBox} from './FilterBox';
import {TodoList} from './TodoList';
import TodoButton from './TodoButton';
import {getUniqueID, getDate} from '../helpers/helpers';
import localStore from '../db/localStore';
//console.log(localStore.getTodos);

export default class MainContainer extends React.Component {

  state = {
    todos: localStore.getTodos(),
    textFilter: '',
    statusFilter: 'all'
  }

  addTodoHandler = (todo) => {
    this.setState((prevState) => {
      const todos = prevState.todos.concat({
        id: getUniqueID(),
        title: todo,
        author: this.props.username,
        date: getDate(),
        status: 'pending'
      });

      localStore.saveTodos(todos);

      return {
        todos: todos
      }
    });
  }

  removeTodoHandler = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todos.filter( todo => todo.id != id);

      localStore.saveTodos(todos);

      return {
        todos: todos
      }
    });
  }

  changeTodoStatusHanlder = (id, newStatus) => {
    this.setState((prevState) => {
      const todos = prevState.todos.map( todo => {
        if (todo.id == id){
          todo.status = newStatus
        }
          return todo;
      })

      localStore.saveTodos(todos);

      return {
        todos: todos
      }
    });

  }

  textFilterHandler = (textFilter) => {
    this.setState(() => ({
      textFilter
    }));
  }

  statusFilterHandler = (statusFilter) => {
    this.setState(() => ({
      statusFilter
    }));
  }

  render(){
    return(
      <div className="main-content">
        <FilterBox
          textFilterHandler={this.textFilterHandler}
          statusFilterHandler={this.statusFilterHandler}
        />
        <TodoList
          className="todos"
          todos={this.state.todos}
          textFilter={this.state.textFilter}
          statusFilter={this.state.statusFilter}
          authorFilter={this.props.username}
          removeTodoHandler={this.removeTodoHandler}
          changeTodoStatusHanlder={this.changeTodoStatusHanlder}
        />
        <TodoButton
          addTodoHandler={this.addTodoHandler}
          updateErrorMessage={this.props.updateErrorMessage}
        />
      </div>
    );
  }
}
