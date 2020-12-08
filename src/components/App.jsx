var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><Search /></h5></div>
        <h1>Hello from App.js</h1>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><VideoPlayer /></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><VideoList /></h5></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
