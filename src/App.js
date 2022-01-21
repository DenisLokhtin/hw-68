import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import './App.css';

function App() {

    return (
        <>
            <h2 className="header">TODO LIST</h2>
            <BrowserRouter>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">Add</NavLink>
                </div>
                <div className="container">
                    <div className="container-inner">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/add" component={Add}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
