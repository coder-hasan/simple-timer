import React, {Component} from 'react';
import classes from './input.css'


class Input extends Component {

    state = {
        name : ''
    }

    handleChange = event => {
        // console.log(event.target.value)
        this.setState({name : event.target.value})
    }

    handleFocus = event => {
        console.log("I am focus event")
    }

    handleBlur = event => {
        if(! this.state.name){
            alert("Type Somrthing")
        }
        console.log("I am Blur event")
    }

    render(){
        return(
            <div>
                <h1>I am Input</h1>
                <input 
                className={classes.input} 
                type="text" 
                placeholder="Enter Something" 
                value={this.state.name}
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                />
                {this.state.name && <h2>You Wrote this: {this.state.name}</h2>}
            </div>
        )
    }
}

export default Input;