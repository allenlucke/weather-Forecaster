import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
})
class Details extends Component {
    goToHomePage = (event) => {
        this.props.history.push('/')
    }
    render() {
        const movieTitle = this.props.reduxState.getDetailsReducer.map((item, index) => {
            if(index === 0) {
            return(
                <div key={index} >
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
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
                    <button onClick={this.goToHomePage}>Back to List</button>
                    <button>Edit</button>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Details);