import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenewsData: [],
      error: false,
    };
  }

  componentDidMount() {
    const apiUrl = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=97b9c873df4244b289358dda55781776`;

    axios.get(apiUrl)
      .then((response) => {
        console.log("Sideresponse",response)
        this.setState({
          sidenewsData: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  // renderItems() {
  //   if (!this.state.error) {
  //     return this.state.sidenews.map((item) => (
  //       <SingleSide key={item.url} item={item} />
  //     ));
  //   } else {
  //     return <Error />
  //   }
  // }

  render() {
    
    return (
      <div>
        {/* {this.renderItems()} */}

        {!this.state.error ?
          this.state.sidenewsData.map((item) => (
            <SingleSide
              key={item.url}
              item={item} />
          ))
          : <Error />
        }
      </div>
    );
  }
}

export default Sidenews;
