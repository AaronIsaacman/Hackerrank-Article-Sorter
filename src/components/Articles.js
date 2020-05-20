import React from 'react';

class Articles extends React.Component {

  render() {
    
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="article">
            <td data-testid="article-title">Article 1 title</td>
            <td data-testid="article-upvotes">Article 1 title</td>
            <td data-testid="article-date">Article 1 title</td>
          </tr>
          <tr data-testid="article">
            <td data-testid="article-title">Article 2 title</td>
            <td data-testid="article-upvotes">Article 2 title</td>
            <td data-testid="article-date">Article 2 title</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Articles;
