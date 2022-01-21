import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <>
            <div id={props.index} className="post">
                <div>
                    <span className="date">Created on: {props.date}</span>
                    <p className="text">{props.title}</p>
                    <p className="text">{props.message}</p>
                </div>
                <button onClick={props.delete} className="btn-read">Delete</button>
            </div>
        </>
    )
};

export default Post;