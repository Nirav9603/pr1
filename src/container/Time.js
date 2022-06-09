import React, { Component } from 'react';

class Time extends Component {

    constructor(props){
        super(props);

        this.state={
            time: new Date()
        }
    }

    tick = () =>{
        this.setState({
            time: new Date()
        })
    }

    componentDidMount(){
        this.timeI = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.time !== prevState.time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount(){
        clearInterval(this.timeI);
    }

    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Time;