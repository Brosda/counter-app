import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  getTotal = () => {
    let total = 0
    this.state.counters.forEach(function(item, index) {
      total += item.value
    });
    return total
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <NavBar
              totalUniqueItems={
                this.state.counters.filter((c) => c.value > 0).length
              }
              totalItems={
                this.getTotal()
              }
            />
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
