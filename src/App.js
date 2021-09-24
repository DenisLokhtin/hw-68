import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosApi from './AxiosApi'
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import ExpandPost from "./Components/ExpandPost/ExpandPost";
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const showPost = useSelector(state => state.showPost);
    const setPosts = (value) => dispatch({type: 'SET POSTS', payload: value});
    const setShowExpandPost = (value) => dispatch({type: 'SET SHOW', payload: value});

    const getMessages = async () => {
        try {
            await axiosApi.get('/messages.json').then(response => {
                if (response.data !== null) {
                    const arrayPosts = Object.values(response.data);
                    setPosts([...arrayPosts]);
                }
            });
        } catch (e) {
            alert(e)
        }
    };

    useEffect(() => {
        setInterval(() => {
            getMessages()
        }, 2000);
    }, [])

    const expandPostShown = () => {
        if (showPost) {
            return (
                <ExpandPost
                    hidePost={() => setShowExpandPost(false)}
                    text={(e) => posts[e.currentTarget.id].message}
                    date={(e) => posts[e.currentTarget.id].date}
                    title={(e) => posts[e.currentTarget.id].title}
                />
            )
        }
    }

    return (
        <>
            <h2 className="header">My Blog</h2>
            <BrowserRouter>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts/add">Add</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>
                </div>
                <div className="container">
                    <div className="container-inner">
                        {expandPostShown()}
                        <Switch>
                            <Route exact path="/"
                                   component={() => <Home showPost={() => setShowExpandPost(true)} posts={posts}/>}/>
                            <Route exact path="/posts"
                                   component={() => <Home showPost={() => setShowExpandPost(true)} posts={posts}/>}/>
                            <Route path="/posts/add" component={Add}/>
                            <Route path="/posts/:id" component={Add}/>
                            <Route path="/posts/:id/edit" component={About}/>
                            <Route path="/About" component={About}/>
                            <Route path="/Contacts" component={Contacts}/>
                            <Route render={() => <h1>NOT FOUND</h1>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
