import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Blog.css';

class BlogArticleImage extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  };

  render() {
    const { imageSrc, altText } = this.props;
    return <img className="BlogArticleImage" src={imageSrc} alt={altText} />;
  }
}

export default BlogArticleImage;