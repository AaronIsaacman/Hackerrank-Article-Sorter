import React, { Component } from 'react';
import './App.css';

import Articles from './components/Articles';

class App extends Component {
 
  render() {
    const { articles } = this.props;
    
    return (
      <div className="App">
        <div className="navigation">
          <button data-testid="top-link">Top</button>
          <button data-testid="newest-link">Newest</button>
        </div>
        <Articles articles={articles} />
      </div>
    );
  }
}

export default App;
