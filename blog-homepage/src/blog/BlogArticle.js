import React, { Component } from 'react';
import yourArticles from '../_data/your-articles.json';
import BlogArticleImage from './BlogArticleImage';
import BlogArticleTitleAndTeaser from './BlogArticleTitleAndTeaser';
import BlogArticleAuthor from './BlogArticleAuthor';
import './Blog.css';

class BlogArticle extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    let yourArticleList = yourArticles;

    return (
      <div className="BlogContainer">
        {yourArticleList.map((data, key) => {

          let displayPreview = data.memberPreview ? '★ Member preview' : '';
          let displayAudio = data.hasAudioAvailable ? '🕪 Audio available' : '';

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