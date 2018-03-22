class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoCollection: exampleVideoData
    }
  }
  
  handleClick(event) {
    this.setState({currentVideo: event})
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList handleClick={this.handleClick.bind(this)} videos={this.state.videoCollection} /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


