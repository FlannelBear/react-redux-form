import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import SnackProvider from '../SnackProvider/SnackProvider';
import SnackItem from '../SnackItem/SnackItem';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Button from '@material-ui/core/Button/Button';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
    card: {
        maxWidth: 400,
        backgroundColor: 'lightgreen',
        display: 'inline-block',
        margin: 15
    },
    buttonFrame: {
        float: 'right'
    },
    button: {
        '&:hover': {
        backgroundColor: 'white'
        }
    }
});

class SnackDisplay extends Component {

    eatASnack = () => {
        console.log('Delete');
        this.props.dispatch({type: "EAT_A_SNACK", payload: this.props.snack.id});
    }

    render(){
        const { classes } = this.props; 
        return(
            <Card className={classes.card}>
                <CardHeader title={<SnackItem snack={this.props.snack.name}/>}/>
                <CardMedia ></CardMedia>
                <CardContent>
                    <SnackProvider provider={this.props.snack.provider}/>
                </CardContent>
                <CardActions className={classes.buttonFrame}>
                    <Button className={classes.button} onClick={this.eatASnack}>Ate it</Button>
                </CardActions>
            </Card>
        );
    }
}

// export default withStyles(styles)(SnackDisplay);
export default compose(
    withStyles(styles, {
        name: 'SnackDisplay'
    }),
    connect()
  )(SnackDisplay);
