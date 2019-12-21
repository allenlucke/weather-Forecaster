import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState,
})

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_HOMEPAGE'
        })
    }

    render() {
        const movieList = this.props.reduxState.HomePage.map((item, index) => {
            return (
                <div key={index}>
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