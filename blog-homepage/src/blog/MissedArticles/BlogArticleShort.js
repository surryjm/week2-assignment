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
    let displayPreviewIcon = <span><FontAwesomeIcon className="PreviewOrAudioIcon" icon={faStar} /><span>Member preview</span></span>;
    let displayAudioIcon = <span><FontAwesomeIcon className="PreviewOrAudioIcon" icon={faVolumeUp} /><span>Audio available</span></span>;

    return (
      <div className="BlogContainerShort">
        {missedArticlesList.map((data, key) => {

        let displayPreview = data.memberPreview ? displayPreviewIcon : '';
        let displayAudio = data.hasAudioAvailable ? displayAudioIcon : '';

          return (
            <div className="BlogArticleShort" key={key}>
              <BlogArticleShortImage
                imageSrc={data.image} 
                altText={data.title} 
              />
              <div className="TitleAndTeaserShort">
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