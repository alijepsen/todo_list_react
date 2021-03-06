// always need to import at least React
import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

//class TodoList extends React.Component {
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] }; //empty JSON object

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [item, ...this.state.items] }); //descturruing lets add lots items
  }

  deleteItem(index) {
    if(confirm('Really delete item?')) {
      //delete code here - find index and set state
      // delete item out of state array = splice
      let items = this.state.items;
      items.splice(index, 1);

      this.setState({ items });
    }
  }

  editItem(index, value) {
    let items = this.state.items;
    items[index] = value;
    this.setState({ items })
  }

  displayItems() {
    let items = this.state.items;

    if(items.length) {
      return this.state.items.map( (item, index) => {
        return( <TodoItem
                  key={index}
                  item={item}
                  index={index}
                  deleteItem={this.deleteItem}
                  editItem={this.editItem}
                />
              );
      });
    } else {
      return(<h4>No Todo Items, Please Add One</h4>);
    }
  }

  render() {
    return (
      <div>
        <h2> {this.props.title} </h2>
        <TodoForm addItem={this.addItem} />
        { this.displayItems() }
      </div>
    );
  }
}

export default TodoList;
