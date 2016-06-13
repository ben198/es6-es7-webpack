import React from 'react';

export default class Layout extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            myVal: 'Everything seems to be working' 
        }
    }
    render() {
        return (
            <div>
                <h1>{ this.state.myVal }</h1> 
            </div> 
        ); 
    }
}
