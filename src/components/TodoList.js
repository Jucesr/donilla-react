import React from 'react';

import TodoItem from './TodoItem';
import {filterByText, filterByStatus, filterByAuthor} from '../helpers/helpers';

export const TodoList = (props) => {
  var filteredTodos = props.todos;

  filteredTodos = filterByText(filteredTodos, props.textFilter);
  filteredTodos = filterByStatus(filteredTodos, props.statusFilter);
  filteredTodos = filterByAuthor(filteredTodos, props.authorFilter);
  return (
    <div className="todos">
      {filteredTodos.map( (todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          date={todo.date}
          status={todo.status}
          removeTodoHandler={props.removeTodoHandler}
          changeTodoStatusHanlder={props.changeTodoStatusHanlder}
        />
      ))}
    </div>
  );

}
