import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Edit extends Component {

    render () {

        return (
            <div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(Edit);