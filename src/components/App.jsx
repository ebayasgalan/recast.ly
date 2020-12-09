import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(query, max = 5) {
    let params = {
      query,
      max,
      key: YOUTUBE_API_KEY
    };
    // console.log('searchHandler clicked', searchYouTube);
    console.log('params: ', params);
    // searchYoutube(params, () => console.log(data))
  }

  clickHandler(index) {
    this.setState({
      currentVideo: exampleVideoData[index]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchHandler={this.searchHandler} />
            <button onClick={searchYouTube}>Press here for searchHandler</button>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <h1>Some change</h1>
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
