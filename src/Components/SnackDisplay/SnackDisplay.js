import React, { Component } from 'react';

import SnackProvider from '../SnackProvider/SnackProvider';
import SnackItem from '../SnackItem/SnackItem';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent/CardContent';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
    card: {
        maxWidth: 400,
        backgroundColor: 'antiqueWhite',
        display: 'inline-block',
        margin: 15
    },
});

class SnackDisplay extends Component {

    render(){
        const { classes } = this.props; 
        return(
            <Card className={classes.card}>
                <CardHeader title={<SnackItem snack={this.props.snack.name}/>}/>
                <CardContent>
                    <SnackProvider provider={this.props.snack.provider}/>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(SnackDisplay);