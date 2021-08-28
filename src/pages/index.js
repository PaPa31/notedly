import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Favorites from './favorites';
import Home from './home';
import MyNotes from './mynotes';



const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mynotes" component={MyNotes} />
                <Route path="/favorites" component={Favorites} />
            </Layout>
        </Router>
    )
}

export default Pages