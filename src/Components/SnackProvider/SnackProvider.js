import React, { Component } from 'react';

class SnackProvider extends Component{
    render(){
        return(
            <p>Provided by: {this.props.provider}</p>
        );
    }
}

export default SnackProvider;