import React, { Component } from 'react';
import '../Blog.css';
import BlogArticle from './BlogArticle';

class ForYou extends Component {

  render() {
    return (
      <div className="ForYou">
        <h2 className="SectionHeader">For you</h2>
        <BlogArticle />
      </div>
    )
  }
}

export default ForYou; 