import React from 'react';

export default class TodoButton extends React.Component {

  state = {
    addingTodo: false
  }

  addTodoHandler = () => {
    this.setState( () => ({
      addingTodo: true
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo_input.value.trim();
    let error;
    if(todo){
      this.props.addTodoHandler(todo);
      this.setState( () => ({
        addingTodo: false
      }));
    }else{
      error = 'You must type something.';
    }
    this.props.updateErrorMessage(error);

  }

  render(){
    return (
      <div>
        {this.state.addingTodo ? (
          <form
            onSubmit={this.onSubmit}
            className="save_todo_form"
          >
            <input
              type="text"
              placeholder="What do you have to do?"
              name="todo_input"
              autoFocus
            />
            <button>Add</button>
          </form>
        ): (
          <button className="add_todo_btn" onClick={this.addTodoHandler}>Add todo</button>
        )
      }
      </div>
    );
  }
}
