import React, {Component} from 'react';
import './App.css';
import Input from './Components/input'

class App extends Component{
  state = {
    count : 0
  }
  intervalId = null;
  incrementCount = () => {
    this.setState({count : this.state.count + 1})
  }
  decrementCount = () => {
    if(this.state.count>0){
      this.setState({count : this.state.count - 1})
    }
  }
  startTimer = () => {
    if(this.state.count > 0 && !this.intervalId){
      this.intervalId = setInterval(() => {
        this.setState({count : this.state.count - 1}, () => {
          if(this.state.count === 0){
            alert('Timer Finished');
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        })
      }, 1000)
    }
  }
  stopTimer = () => {
    if (this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
  }
  resetTimer = () => {
    this.setState({count : 0})
    clearInterval(this.intervalId)
    this.intervalId = null
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <button className="Btn" onClick={this.decrementCount}>-</button>
          <span>{this.state.count}</span>
          <button className="Btn" onClick={this.incrementCount}>+</button>
        </div>
        <div className="container">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <div>
          <Input></Input>
        </div>
      </div>
    );
  }
}

export default App;
