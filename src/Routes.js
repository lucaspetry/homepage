import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/research" component={Research} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </BrowserRouter>
    );
}