import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

class BlogArticleAuthor extends Component {
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
        <div className="AuthorAndImage">
          <img className="AuthorImage" src={imageSrc} alt={name} />
          <div className="AuthorDateMin">
            <p className="AuthorName">{name}</p>
            <div className="DateAndMinToRead">
              <p>{monthDay} - {minToRead} min read</p> 
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
    ) 
  }
}

export default BlogArticleAuthor;