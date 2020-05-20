import React, { Component } from 'react';
import './App.css';

import Articles from './components/Articles';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortingMode: "top"
    }
  }

  sortTop() {
    this.setState({
      sortingMode: "top"
    });
    console.log("top");
  }

  sortNew() {
    this.setState({
      sortingMode: "new"
    });
    console.log("new");
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="App">
        <div className="navigation">
          <button data-testid="top-link" onClick={this.sortTop.bind(this)}>Top</button>
          <button data-testid="newest-link" onClick={this.sortNew.bind(this)}>Newest</button>
        </div>
        <Articles articles={articles} sortingMode={this.state.sortingMode} />
      </div>
    );
  }
}

export default App;
