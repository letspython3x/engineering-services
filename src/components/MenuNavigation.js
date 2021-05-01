import React, {useContext, useState} from 'react';
import {DesktopOutlined, TeamOutlined} from '@ant-design/icons';
import AppConfig from '../config';
import {Layout, Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import {ServicesContext} from '../App';
import {createCategorySubMenu, getCategories} from '../utils';
import '../static/css/Sidebar.css';

const {Sider} = Layout;


export default function MenuNavigation() {
    const [collapse, setCollapse] = useState(false);
    const activeStyle = {
        color: 'white'
    }
    const servicesData = useContext(ServicesContext);
    let servicesKeys = getCategories(servicesData)

    return (
        <Sider collapsible collapsed={collapse}
               onCollapse={() => setCollapse(!collapse)}>
            <div className="logo">
                <img href="static/images/logo.jpg" alt="logo"/>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline">
                <Menu.Item key="dashboard" icon={<DesktopOutlined/>}>
                    <NavLink to={AppConfig.dashboardPageUrl} strict
                             activeStyle={activeStyle}>Dashboard</NavLink>
                </Menu.Item>

                {createCategorySubMenu(servicesKeys)}

                <Menu.Item key="contact" icon={<TeamOutlined/>}>
                    <NavLink to={AppConfig.contactPageUrl} strict
                             activeStyle={activeStyle}>Contact Us</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>

    );
}
