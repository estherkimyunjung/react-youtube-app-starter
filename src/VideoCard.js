import React, { Component } from "react";

export default class VideoCard extends Component {
  render() {
    return(
      <div onClick={() => this.props.changeMainVideo(this.props.video)}>
        <img src={this.props.video.snippet.thumbnails.default.url} />
        <h3>{this.props.video.snippet.title}</h3>
      </div>
    )
  }
}
