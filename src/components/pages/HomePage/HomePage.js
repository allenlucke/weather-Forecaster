import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})

class HomePage extends Component {
    //Dispatch to getHomePageSaga to GET full list of movies
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_HOMEPAGE'
        })
    }
    //Dispatches selected movie id to getDetailsSaga
    goToDetails = (id) => {
        console.log(id)
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
        //Navigates to details page, will give details of selected movie
        this.props.history.push('/details/') 
    }
    render() {
        //Maps through list of movies returned from getHomePageReducer
        const movieList = this.props.reduxState.getHomePageReducer.map((item, index) => {
            return (
                <div key={index}
                    className="clickable"
                    onClick={(event) => this.goToDetails(item.id)}>
                    <img src={item.poster} alt="Poster"/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div>
                {movieList}
            </div>
        );
    }
}
export default connect(mapStateToProps)(HomePage);