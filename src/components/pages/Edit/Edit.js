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
            </div>
        )
    }
}

export default connect(mapStateToProps)(Edit);