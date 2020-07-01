import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return(
      <div>
      <input type="text" placeholder="Search" onChange={(e) => this.props.searchVideo(e.target.value)} />
      {/* <button onClick={this.props.fetchVideos}> Search </button> */}
      </div>
    )
  }
}
