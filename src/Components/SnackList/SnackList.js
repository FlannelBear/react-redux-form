import React, { Component } from 'react';

import { connect } from 'react-redux';

import SnackDisplay from '../SnackDisplay/SnackDisplay';

const mapReduxStateToProps = (  {manageSnacks}  ) => ({
    manageSnacks
});

class SnackList extends Component{
    render(){
        return(
            <div>
                {this.props.manageSnacks.map(snack => <SnackDisplay key={snack.id} snack={snack}/>)}
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SnackList);