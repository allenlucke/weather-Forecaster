import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = reduxState => ({
    reduxState,
})
class Edit extends Component {
    state= {
        //Adds movie.id from editDetailsReducer to state
        id: this.props.reduxState.editDetailsReducer,
        //title: '',
        //description: '',
    }
    // Sets input fields as local state
    handleChange = (event, inputKey) => {
        console.log(this.state);
        this.setState({
            ...this.state,
            [inputKey]: event.target.value
        }); 
    }
    // Dispatches new title to putTitleSaga
    editTitle = (event, inputKey) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'PUT_TITLE',
            payload: this.state
        })
        //Gets updated movie details from the server
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.state.id
        })
        //Navigates back to details page
        this.props.history.push('/details/')
    }
    // Dispatches new description to putDescriptionSaga
    editDescription = (event, inputKey) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({
            type: 'PUT_DESCRIPTION',
            payload: this.state
        })
        //Gets updated movie details from the server
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: this.state.id
        })
        //Navigates back to details page
        this.props.history.push('/details/')
    }
    //Cancels the editing process and navigates back to the details page
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
                    <TextField type= 'text' id="movie-title" label="Enter Title Here"
                     variant="outlined" className="textField"
                     onChange={(event) => this.handleChange(event, 'title')}></TextField>
                    <Button type='submit' value='Change Title' 
                     variant="contained" color="primary" >Save New Title</Button>
                </form>
                <form onSubmit={this.editDescription}>
                    <TextField  type= 'text' id="movie-description" label="Enter Description Here" 
                     variant="outlined" fullWidth className="textField"
                    onChange={(event) => this.handleChange(event, 'description')}>
                    </TextField>
                    <Button type='submit' value='Change Description'
                     variant="contained" color="primary" >Save New Description</Button> 
                </form>
                <Button onClick={(event) => this.cancelEdit(event)}
                 variant="contained" color="secondary">Cancel</Button>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Edit);