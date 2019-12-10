import React from 'react';

const Post = ({ title, text, image, date }) => {
    return (
        <article className="post">
            <img className="post__image" src={`https://upply-interview.herokuapp.com/images/${image}`} alt={title} />
            <div className="post__content">
                <h4 className="post__content__title">{title}</h4>
                <p className="post__content__description">{text}</p>
            </div>
            <span className="post__date">{date}</span>
        </article>
    );
};

export default Post;
