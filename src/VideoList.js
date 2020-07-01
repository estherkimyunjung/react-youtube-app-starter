import React, { Component } from "react";
import VideoCard from "./VideoCard";

export default class VideoList extends Component {
  render() {
    // console.log(this.props)
    return(
      <div>
        {this.props.videos.map(video =>  <VideoCard 
          key={video.id.videoId} 
          video={video} 
          changeMainVideo={this.props.changeMainVideo}/>)}
      </div>
    )
  }
}
