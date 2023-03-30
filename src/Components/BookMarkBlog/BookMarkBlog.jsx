import React from 'react';
import './BookMarkBlog.css'

const BookMarkBlog = ({bookMarkName}) => {
    console.log(bookMarkName);
    return (
        <div className='nameCart'>
            <h3 className='name-cart-title'>{bookMarkName}</h3>
        </div>
    );
};

export default BookMarkBlog;