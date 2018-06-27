import React, { Component } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';

import { connect } from 'react-redux';

import SnackList from '../SnackList/SnackList';

const styles = theme => ({
    inputs: {
        margin: 5,
        width: 150,
    },
    submit: {
        '&:hover':{
            opacity: 0.5,
            backgroundColor: 'green',
            color: 'white'
        },
        '&:active':{
            opacity: 0.5,
            position: 'relative',
            top: 2
        },
        backgroundColor: 'lightgreen',
        border: 'none',
        color: 'black',
        width: 150,
        height: 25
    },
});

class InputForm extends Component{
    constructor(){
        super();
        this.state = {name: '', provider: '', id: 0, image: ''}
    }

    handleSnackInputChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleProviderInputChange = (event) => {
        this.setState({provider: event.target.value});
    }

    handleImageUrlInputChange = (event) => {
        this.setState({image: event.target.value});
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_SNACK_INFO', payload: this.state});
        this.setState({name: '', provider: '', id: this.state.id + 1, image: ''});
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <form onSubmit={this.handleFormSubmission}>
                    <input className={classes.inputs} type="text" placeholder="Snack" onChange={this.handleSnackInputChange} value={this.state.name}/><br />
                    <input className={classes.inputs} type="text" placeholder="Provided by..." onChange={this.handleProviderInputChange} value={this.state.provider} /><br />
                    <input className={classes.inputs} type="text" placeholder="Image url" onChange={this.handleImageUrlInputChange} value={this.state.image} /><br />
                    <input className={`${classes.input} ${classes.submit}`} type="submit" value="Submit" />
                </form>
                <SnackList />
            </div>
        );
    }
}

export default compose(
    withStyles(styles, {
        name: 'InputForm'
    }),
    connect())(InputForm);