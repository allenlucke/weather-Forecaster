import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})


class Edit extends Component {
    state= {
        id: '',
        title: '',
        description: '',
        
    }
    render () {

        return (
            <div>
                <form onSubmit>
                    <input type= "text" />
                    <input type='submit' value='Change Title' />
                </form>
                <form onSubmit>
                    <input type='submit' value='Change Description' />
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Edit);