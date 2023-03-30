import React, { useState } from "react";
import "./SingleBlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCheck } from "@fortawesome/free-solid-svg-icons";
const SingleBlogItem = ({ blog, handleBookMark,handleTimeOnRead }) => {
  
  const {
    id,
    image,
    publishDate,
    tag,
    title,
    authorName,
    authorImg,
    ReadTime,
  } = blog;
  const [isBookMark, setBookMarked] = useState(false);

  const handleBlogBookMark = () => {
    handleBookMark(title)
    setBookMarked(true)
  }
  return (
    <div className="card">
      <figure className="card-img">
        <img src={image} alt="" />
      </figure>
      <div className="card-content">
        <div className="card-header">
          <div className="author-content">
            <div className="author-img">
              <img src={authorImg} alt="" />
            </div>
            <div>
              <h2 className="author-title">{authorName}</h2>
              <p className="author-date">{publishDate}</p>
            </div>
          </div>
          <div className="timeAndBookmark">
            <p className="read-time">{ReadTime} min read</p>
            <button onClick={handleBlogBookMark} className="bookmark-btn">
              {isBookMark ? <FontAwesomeIcon icon={faCheck} /> :
                <FontAwesomeIcon icon={faBookmark} />
               }
            </button>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">{title}</h3>
          <div className="card-tag">
            {tag.map((item, i) => (
              <span key={i}>#{item}</span>
            ))}
          </div>
          <button onClick={() => handleTimeOnRead(ReadTime)} className="mark-read-btn">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogItem;
