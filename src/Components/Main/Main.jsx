import React, { useEffect, useState } from "react";
import BlogDataLoad from "../../Utilites/BlogDataLoad";
import BookMarkBlog from "../BookMarkBlog/BookMarkBlog";
import SingleBlogItem from "../SingleBlogItem/SingleBlogItem";
import "./Main.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { addToBookMark, getStoreItem } from "../../Utilites/FakeDb";

const Main = () => {
  const blogs = BlogDataLoad();
  const [bookmarkBlog, setBookMarkBlog] = useState([]);
  const [readTime, setReadTime] = useState(0);

  // get read time
  const handleTimeOnRead = (value) => {
    const getTimeValue = parseFloat(value);
    const updateRealTime = readTime + getTimeValue;
    localStorage.setItem("timeValue", updateRealTime);
    setReadTime(updateRealTime);
  };

  // get bookmark name
  const handleBookMark = (name) => {
    const existName = bookmarkBlog.find((blogName) => blogName === name);
    if (existName) {
      toast("Oops !!! your blog already Bookmarked");

      console.log("ache");
    } else {
      const addedBookMark = [...bookmarkBlog, name];
      setBookMarkBlog(addedBookMark);
      addToBookMark(name);
      toast("Your blog has been Bookmarked");
    }
  };

  // get localStorage data
  useEffect(() => {
    const getLocalStoreData = getStoreItem();
    const getStoreReadValue = localStorage.getItem("timeValue");
    if (getLocalStoreData) {
      setBookMarkBlog(getLocalStoreData);
    }
    if (getStoreReadValue) {
      setReadTime(JSON.parse(getStoreReadValue));
    }
  }, []);

  return (
    <main>
      <section className="main-section">
        <div className="blogCard-container">
          {blogs.map((blog) => (
            <SingleBlogItem
              handleTimeOnRead={handleTimeOnRead}
              handleBookMark={handleBookMark}
              key={blog.id}
              blog={blog}
            ></SingleBlogItem>
          ))}
        </div>
        <div className="blogHistory-container">
          <div className="timeOnRead">
            <h2 className="timeOnRead-title">
              Spent time on read : {readTime} min
            </h2>
          </div>
          <div className="bookMarkHistory">
            <h2 className="bookMarkHistoryTitle">
              Bookmarked Blogs : {bookmarkBlog.length}
            </h2>
            {bookmarkBlog.map((bookMarkName, i) => (
              <BookMarkBlog key={i} bookMarkName={bookMarkName}></BookMarkBlog>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer autoClose={1000} />
    </main>
  );
};

export default Main;
