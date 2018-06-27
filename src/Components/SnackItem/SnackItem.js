import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography/Typography';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
    whiteText: {
        color: 'white'
    }
});

class SnackItem extends Component{
    render(){
        const { classes } = this.props; 
        return(
            <Typography variant="display1" className={classes.whiteText}>{this.props.snack}</Typography>
        );
    }
}

export default withStyles(styles)(SnackItem);