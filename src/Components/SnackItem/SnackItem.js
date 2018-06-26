import React, { Component } from 'react';

class SnackItem extends Component{
    render(){
        return(
            <p>Snack: {this.props.snack}</p>
        );
    }
}

export default SnackItem;