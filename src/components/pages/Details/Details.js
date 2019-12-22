import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    reduxState,
})

class Details extends Component {
    // componentDidMount() {
    //     this.props.dispatch({
    //         type: 'GET_DETAILS'
    //     })
    // }

    goToHomePage = (event) => {
        this.props.history.push('/')
    }

    render() {
        const detailList = this.props.reduxState.getDetailsReducer.map((item, index) => {
            let el = item.title;
            if(el !== item.title) {
                return(el);
            };
            return (
                <div key={index} >
                    
                    
                    {/* <p>{item.description}</p> */}
                    {/* <h2>{item.title}</h2> */}
                    <h2>{el}</h2>
                    <ul>
                        <li>{item.name}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                    <h3>Genres</h3>
                    {detailList}
                    <button onClick={this.goToHomePage}>Back to List</button>
                    <button>Edit</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Details);