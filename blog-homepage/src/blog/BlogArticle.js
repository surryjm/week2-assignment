import React, { Component } from 'react';
import yourArticles from '../_data/your-articles.json';
import BlogArticleImage from './BlogArticleImage';
import BlogArticleTitleAndTeaser from './BlogArticleTitleAndTeaser';
import BlogArticleAuthor from './BlogArticleAuthor';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class BlogArticle extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    let yourArticleList = yourArticles;
    let displayPreviewIcon = <span><FontAwesomeIcon className="PreviewOrAudioIcon" icon={faStar} /><span>Member preview</span></span>;
    let displayAudioIcon = <span><FontAwesomeIcon className="PreviewOrAudioIcon" icon={faVolumeUp} /><span>Audio available</span></span>;

    return (
      <div className="BlogContainer">
        {yourArticleList.map((data, key) => {

          let displayPreview = data.memberPreview ? displayPreviewIcon : '';
          let displayAudio = data.hasAudioAvailable ? displayAudioIcon : '';

          return (
            <div className="BlogArticle" key={key}>
              <BlogArticleImage 
                imageSrc={data.image} 
                altText={data.title} 
              />
              <div className="TitleAndTeaser">
                <BlogArticleTitleAndTeaser 
                  hasAudioAvailable={displayAudio}
                  memberPreview={displayPreview}
                  title={data.title} 
                  teaser={data.description}
                />
                <BlogArticleAuthor 
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

export default BlogArticle;