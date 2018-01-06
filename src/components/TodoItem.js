import React from 'react';

export default class TodoItem extends React.Component {

  constructor(props){
    super(props)
  }

  state = {
    editMode: false,
    isOverItem: false
  }

  onClickHanlder = (e) =>{
    this.setState(() => ({
      editMode: true
    }));
  }

  onRemoveHandler = (e) =>{
    this.setState(() => ({
      editMode: false
    }));
    e.stopPropagation();
    this.props.removeTodoHandler(this.props.id);
  }

  onMarkHanlder = (e) => {
    this.setState(() => ({
      editMode: false
    }));
    this.props.changeTodoStatusHanlder(this.props.id, this.props.status == 'done' ? 'pending' : 'done');
    e.stopPropagation();
  }

  onBlurHanlder = () => {
    if(!this.state.isOverItem){
      this.setState(() => ({
        editMode: false
      }));
    }
  }

  onMouseOverHanlder = () => {
    this.setState(() => ({
      isOverItem: true
    }));
  }

  onMouseLeaveHanlder = () => {
    this.setState(() => ({
      isOverItem: false
    }));
  }

  render(){
    return (
          <div
            className="todo_item"
            onClick={this.onClickHanlder}
            onMouseOver={this.onMouseOverHanlder}
            onMouseLeave={this.onMouseLeaveHanlder}
            onBlur={this.onBlurHanlder}
            tabIndex={0}>
            <div className="todo_item_info">
              <div className="todo_item_group">
                <h3 className="todo_title">{this.props.title}</h3>
                <div className="todo_date">{this.props.date}</div>
              </div>
              <img className="todo_status" height="50" src={`images/${this.props.status}.png`}></img>
          </div>

          {this.state.editMode && (
            <div className="modal">
              <button className="todo_btn update" onClick={this.onMarkHanlder}>Mark {this.props.status == 'done' ? 'pending' : 'done'}</button>
              <button className="todo_btn remove" onClick={this.onRemoveHandler}>Remove</button>
            </div>
          )}

        </div>

    )
  }
}
