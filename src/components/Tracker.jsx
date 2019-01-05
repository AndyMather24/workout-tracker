import React, { Component } from 'react';

class Tracker extends Component {
    render() {
        return (
            <div>
                <h1>tracker Week {this.props.weekNo}</h1>
            </div>
        );
    }
}



export default Tracker;