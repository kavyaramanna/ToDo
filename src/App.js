import React, { Component } from "react";
import AddToDoList from "./Components/AddToDoList";
import EditToDoList from "./Components/EditToDoList";
export class App extends Component {
  render() {
    return (
      <div>
        <AddToDoList />
        <EditToDoList />
      </div>
    );
  }
}

export default App;
