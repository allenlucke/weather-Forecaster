import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

const mapStateToProps = reduxState => ({
    reduxState,
})

class Edit extends Component {
    state= {
        id: this.props.reduxState.editDetailsReducer,
        // title: '',
        // description: '',
    }
    
    handleTitleChange = (event, inputKey) => {
        console.log('Title changed')
        console.log(this.state);
        this.setState({
            ...this.state,
            [inputKey]: event.target.value
        }); 
    }

    editTitle = (event, inputKey) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'PUT_TITLE',
            payload: this.state
        })
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.state.id
        })
        this.props.history.push('/details/')
    }
    cancelEdit = (event) => {
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.state.id
        })
        this.props.history.push('/details/')
    }        
    render () {

        return (
            <div>
                <form onSubmit={this.editTitle}>
                    <input type= 'text'
                     onChange={(event) => this.handleTitleChange(event, 'title')}/>
                    <input type='submit' value='Change Title' />
                </form>
                {/* <form onSubmit>
                    <input type= "text" />
                    <input type='submit' value='Change Description' />
                </form> */}
                <button onClick={(event) => this.cancelEdit(event)}>Cancel</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Edit);