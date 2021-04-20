import React, { Component } from 'react';
import missedArticles from '../_data/missed-articles.json';
import BlogArticleShortImage from './BlogArticleShortImage';
import BlogArticleShortTitleAndTeaser from './BlogArticleShortTitleAndTeaser';
import BlogArticleShortAuthor from './BlogArticleShortAuthor';
import './Blog.css';

class BlogArticleShort extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    let missedArticlesList = missedArticles;

    return (
      <div className="BlogContainerShort">
        {missedArticlesList.map((data, key) => {

        let displayPreview = data.memberPreview ? '★ Member preview' : '';
        let displayAudio = data.hasAudioAvailable ? '🕪 Audio available' : '';

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