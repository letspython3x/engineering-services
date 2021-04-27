import React from 'react';
import AppConfig from '../config'
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Dashboard from '../components/Dashboard'


export default function AppRoutes() {
    return (
        <Switch>
            <Route path={AppConfig.homePageUrl} component={Home} />
            <Route path={AppConfig.aboutPageUrl} component={About} />
            <Route path={AppConfig.contactPageUrl} component={Contact} />
            <Route path={AppConfig.servicesPageUrl} component={Services} />
            <Route path={AppConfig.dashboardPageUrl} component={Dashboard} />
        </Switch>)
}