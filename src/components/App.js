import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.scss";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "nauczyć się programować",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TOD APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
