import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogArticleTitleAndTeaser extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.string,
    memberPreview: PropTypes.string
  };

  render() {
    const { title, teaser, hasAudioAvailable, memberPreview } = this.props;

    return (
      <div>
        <div className="AudioAndMemberPreview">
          <p>{hasAudioAvailable}</p>
          <p>{memberPreview}</p>
        </div>
        <h3>{title}</h3>
        <p>{teaser}</p> 
      </div>
    ) 
  }
}

export default BlogArticleTitleAndTeaser;