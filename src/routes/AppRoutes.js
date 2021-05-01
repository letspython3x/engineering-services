import React, {useContext} from 'react';
import AppConfig from '../config'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Dashboard from '../components/Dashboard'
import {createServiceRoutes, getCategories} from '../utils';
import {ServicesContext} from "../App";


export default function AppRoutes() {
    const servicesData = useContext(ServicesContext);
    let servicesKeys = getCategories(servicesData)

    return (
        <Switch>
            <Route path={AppConfig.homePageUrl} component={Home}/>
            <Route path={AppConfig.aboutPageUrl} component={About}/>
            <Route path={AppConfig.contactPageUrl} component={Contact}/>
            <Route path={AppConfig.dashboardPageUrl} component={Dashboard}/>
            {createServiceRoutes(servicesKeys)}
        </Switch>)
}