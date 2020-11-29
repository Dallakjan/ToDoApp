import React, { Component } from "react";
import "./AddTask.scss";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    console.log("dodaj");

    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      console.log("za krótko");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;

    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <div className="add_task">
          <input
            type="text"
            placeholder="dodaj zadanie"
            value={this.state.text}
            onChange={this.handleText}
          />
          <input
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="important">Priorytet</label>
        </div>
        <br />
        <div className="date">
          <label htmlFor="date">Do kiedy zrobić</label>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
        </div>
        <br />
        <div className="add_btn">
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default AddTask;
