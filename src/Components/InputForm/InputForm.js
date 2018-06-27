import React, { Component } from 'react';

import { connect } from 'react-redux';

import SnackList from '../SnackList/SnackList';

class InputForm extends Component{
    constructor(){
        super();
        this.state = {name: '', provider: '', id: 0}
    }

    handleSnackInputChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleProviderInputChange = (event) => {
        this.setState({provider: event.target.value});
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_SNACK_INFO', payload: this.state});
        this.setState({name: '', provider: '', id: this.state.id + 1});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmission}>
                    <input type="text" placeholder="Add a snack" onChange={this.handleSnackInputChange} value={this.state.name}/>
                    <input type="text" placeholder="Provider of snack" onChange={this.handleProviderInputChange} value={this.state.provider} />
                    <input type="submit" value="Submit" />
                </form>
                <SnackList />
            </div>
        );
    }
}

export default connect()(InputForm);