import React, { Component } from 'react';
import missedArticles from '../../_data/missed-articles.json';
import BlogArticleShortImage from './BlogArticleShortImage';
import BlogArticleShortTitleAndTeaser from './BlogArticleShortTitleAndTeaser';
import BlogArticleShortAuthor from './BlogArticleShortAuthor';
import '../Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class BlogArticleShort extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    let missedArticlesList = missedArticles;
    let displayPreviewIcon = <span><FontAwesomeIcon className="previewOrAudioIcon" icon={faStar} /><span>Member preview</span></span>;
    let displayAudioIcon = <span><FontAwesomeIcon className="previewOrAudioIcon" icon={faVolumeUp} /><span>Audio available</span></span>;

    return (
      <div className="blogContainerShort">
        {missedArticlesList.map((data, key) => {

        let displayPreview = data.memberPreview.status ? displayPreviewIcon : <span></span>;
        let displayAudio = data.hasAudioAvailable.status ? displayAudioIcon : <span></span>;

          return (
            <div className="BlogArticleShort" key={key}>
              <BlogArticleShortImage
                imageSrc={data.image} 
                altText={data.title} 
              />
              <div className="titleAndTeaserShort">
                <BlogArticleShortTitleAndTeaser
                  hasAudioAvailable={displayAudio}
                  memberPreview={displayPreview}
                  title={data.title} 
                  teaser={data.description}
                />
                <BlogArticleShortAuthor
                  imageSrc={data.author.image} 
                  name={data.author.name}
                  postedDate={data.postedDate}
                  minToRead={data.minutesToRead}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogArticleShort;