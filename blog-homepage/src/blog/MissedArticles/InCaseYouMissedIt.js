import React, { Component } from 'react';
import '../Blog.css';
import BlogArticleShort from './BlogArticleShort';

class InCaseYouMissedIt extends Component {

  render() {
    return (
      <div className="InCaseYouMissedIt">
        <h2 className="SectionHeader">In case you missed it</h2>
        <BlogArticleShort />
      </div>
    )
  }
}

export default InCaseYouMissedIt;