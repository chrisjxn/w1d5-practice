import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    render() {

        setTimeout(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)

        return (
            <div>
                <p id="timer_text">Seconds: {this.state.counter}</p>
            </div>
        );
    }
}

export default Timer;