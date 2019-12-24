import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material-UI
import Button from '@material-ui/core/Button';

const mapStateToProps = reduxState => ({
    reduxState,
})
class Details extends Component {
    goToHomePage = (event) => {
        this.props.history.push('/')
    }
    goToEditPage = (id) => {
        console.log(id)
        this.props.dispatch({
            type: 'EDIT_DETAILS',
            payload: id
        })
        this.props.history.push('/edit/')
    }
    render() {
        const movieTitle = this.props.reduxState.getDetailsReducer.map((item, index) => {
            if(index === 0) {
                console.log(item.name)
            return(
                <div key={index} >
                    <h1>{item.title}</h1>
                    <img src={item.poster} alt="Poster"/>
                    <p>{item.description}</p>
                    <Button variant="contained" color="secondary"
                    onClick={(event) => this.goToEditPage(item.id)}>Edit</Button>
                    <Button variant="contained" color="primary"
                    onClick={this.goToHomePage}>Back to List</Button>
                </div>
            )}
        })
        const detailList = this.props.reduxState.getDetailsReducer.map((item, index) => {
            return (
                <div key={index} >
                    <ul>
                        <li>{item.name}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                    {movieTitle}
                    <h3>Genres</h3>
                    {detailList}
            </div>
        );
    }
}
export default connect(mapStateToProps)(Details);