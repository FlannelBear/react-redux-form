import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography/Typography';

class SnackProvider extends Component{
    render(){
        return(
            <Typography gutterBottom>Provided by: {this.props.provider}</Typography>
        );
    }
}

export default SnackProvider;