import React, { Component } from "react";
import keys from './keys'
// import _ from 'lodash'
import SearchBar from './SearchBar'
import MainContent from './MainContent'
import VideoList from './VideoList'

const URL = (api_key, search_term) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&q=${search_term}&type=video`
}

class App extends Component {

  state = {
    videos: [],
    searchTerm: 'carton',
    mainVideo: null,
    isLoading: true
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = () => {
    fetch(URL(keys.API_KEY,this.state.searchTerm))
    .then(res => res.json())
    .then(videos => {
      this.setState({
        videos: videos.items,
        mainVideo: videos.items[0],
        isLoading: false
      })
    })
  }

  searchVideo = (newTerm) => {
    this.setState({
      searchTerm: newTerm
    }, () => this.fetchVideos())
  }

  changeMainVideo = (video) => {
    this.setState({
      mainVideo: video
    })
  }

  render() {
    // if(this.state.mainVideo === null){
    //   return <h1 style={{color: 'red'}}>Loading...</h1>
    // }
    // const videoSearch = _.debounce(term => {
    //   this.searchVideo(term)
    // }, 200)
    return(
      <div>
        {this.state.isLoading 
        ? <h4> Loading... </h4>
        : 
        <div>
          <SearchBar searchVideo={this.searchVideo} />
          <MainContent mainVideo={this.state.mainVideo} />
          <VideoList videos={this.state.videos} changeMainVideo={this.changeMainVideo}/>
        </div>
        }
        
      </div>
    )
  }
}

export default App;
