import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container--flex'>
                <div className='col-lg-4 col-sm-12'>
                <h1>
                    hej
               </h1>
               </div>
               <div className='col-lg-8 col-sm-12'>
               <h1>
                    hhaa
               </h1>
               </div>
            </div>
        )
    }
}

export default Home