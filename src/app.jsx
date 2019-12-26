import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 header d-flex justify-content-center">
              <h2 class="header1">San Diego Top Spots</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h5 className="header2">A list of the top 30 places to see in San Diego, California.</h5>
            </div>
          </div>
          <div className="topSpotList border border-dark rounded-top">
            {
              this.state.topspots.map(topspot => (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
