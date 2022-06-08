import React, { Component } from 'react';

class City extends Component {

    constructor(props){
        super(props);

        this.state={
            cityName:'Surat'
        }
    }

    changeCity=()=>{
        this.setState({
            cityName:'Baroda'
        })
    }

    render() {
        return (
            <div>
                <h1>Class Based Component For City</h1>
                <p>{this.state.cityName}</p>
                <button onClick={()=>this.changeCity()}>Change</button>
            </div>
        );
    }
}

export default City;