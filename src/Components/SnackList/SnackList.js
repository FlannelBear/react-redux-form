import React, { Component } from 'react';

import { connect } from 'react-redux';

import SnackDisplay from '../SnackDisplay/SnackDisplay';

const mapReduxStateToProps = (  {addSnack}  ) => ({
    addSnack
});

class SnackList extends Component{
    render(){
        return(
            <div>
                <h2>Snack Overflow</h2>
                <div>
                    {this.props.addSnack.map(snack => <SnackDisplay snack={snack}/>)}
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SnackList);