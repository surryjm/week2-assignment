import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

class BlogArticleShortAuthor extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minToRead: PropTypes.number.isRequired,
  };
  
  render() {
    const { name, imageSrc, postedDate, minToRead } = this.props;
    const dateformat = require('dateformat');
    const monthDay = dateformat(postedDate, 'mmm d');

    return (
      <div className="BlogArticleAuthor">
        <div className="authorAndImage">
          <img className="authorImage" src={imageSrc} alt={name} />
          <div className="authorDateMin">
            <p className="authorName">{name}</p>
            <div className="dateAndMinToReadShort">
              <p>{monthDay} - {minToRead} min read</p> 
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
    ) 
  }
}

export default BlogArticleShortAuthor;