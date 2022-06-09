import React, { Component } from 'react';

class ComponentLifecycle extends Component {

    constructor(props){         //1. constructor is called for initial value.
        super(props);

    }

    componentDidMount(){
        //3. Called for request data to server.
    }

    componentDidUpdate(prevProps, prevState){
        //4. Called whenever component is update. (We can trace particular update using prevState/prevProps)
    }

    componentWillUnmount(){
        //5. Called whenever we move to another component. Used to realese resources.
    }

    //2. render method call each time when state value changed.
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ComponentLifecycle;