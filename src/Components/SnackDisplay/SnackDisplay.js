import React, { Component } from 'react';

import SnackProvider from '../SnackProvider/SnackProvider';
import SnackItem from '../SnackItem/SnackItem';

class SnackDisplay extends Component {
    render(){
        return(
            <div>
                <SnackItem snack={this.props.snack.name} />
                <SnackProvider provider={this.props.snack.provider}/>
            </div>
        );
    }
}

export default SnackDisplay;