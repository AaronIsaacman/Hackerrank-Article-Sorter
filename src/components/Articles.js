import React from 'react';

class Articles extends React.Component {

  render() {
    let articleRender = [];
    let articles = this.props.articles.slice();

    if(this.props.sortingMode === "new") {
      articles.sort(function(a, b) {return new Date(b.date) - new Date(a.date);});
      console.log(articles);
    } else {
      articles.sort(function(a, b) {return b.upvotes - a.upvotes;});
    }
    console.log(this.props.sortingMode);

    for (let i = 0; i < articles.length; i++) {
      articleRender.push(
        <tr data-testid="article" key={i}>
          <td data-testid="article-title">{articles[i].title}</td>
          <td data-testid="article-upvotes">{articles[i].upvotes}</td>
          <td data-testid="article-date">{articles[i].date}</td>
        </tr>
      );
    }

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
          {articleRender}
        </tbody>
      </table>
    );
  }
}

export default Articles;
