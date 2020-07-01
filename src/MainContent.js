import React, { Component } from "react";

export default class MainContent extends Component {
  render() {
    // console.log("MAIN", this.props)
    const video = this.props.mainVideo
    // const {video} = this.props
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
      <div>
        <iframe src={embedUrl} />
        <h4>
            {video.snippet.title}
        </h4>
        <p>
            {video.snippet.description}
        </p>
      </div>
    )
  }
}
