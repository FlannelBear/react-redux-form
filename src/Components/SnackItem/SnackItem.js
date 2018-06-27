import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography/Typography';

class SnackItem extends Component{
    render(){
        return(
            <Typography>{this.props.snack}</Typography>
        );
    }
}

export default SnackItem;