import React, { Component } from 'react';

class country extends Component {

    constructor(props){
        super(props);

        this.state={
            countryNmae: 'India'
        }
    }

    changeCountry= () =>{
        this.setState({
            countryNmae:'US'
        })
    }

    render() {
        return (
            <div>
                <h1>Class Based Component For Country</h1>
                <p>{this.state.countryNmae}</p>
                <button onClick={()=>this.changeCountry()}>Change Country</button>
            </div>
        );
    }
}

export default country;