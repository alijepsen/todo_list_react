import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    // add custom function to react component - so it's in scope
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); //very first thing

    let todoInput = this.refs.todoInput;
    // get value from input
    let todoItemValue = todoInput.value;
    // figure out how to add the value to the state
    // of the todo list component
    this.props.addItem(todoItemValue);
    // clear/reset form
    this.refs.itemForm.reset();

    // autofocus the input
    todoInput.focus();
  }

  render() {
    return (
      <div>
        <form ref='itemForm' onSubmit={ this.handleSubmit } >
          <input ref='todoInput' type='text' required placeholder='Get Milk' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default TodoForm;
