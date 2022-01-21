import React, {useEffect} from 'react';
import './Home.css'
import Post from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage, getMessages} from "../../store/action";


const Home = (props) => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    const del = (id) => {
        dispatch(deleteMessage(id))
    };

    return (
        <div className="posts">
            {posts.map((post) => {
                return (
                    <Post
                        date={post.date}
                        title={post.title}
                        key={post.id}
                        delete={() => del(post.id)}
                    />
                )
            })}
        </div>
    )
};

export default Home;