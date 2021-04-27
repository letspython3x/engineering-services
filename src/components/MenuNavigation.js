import React, { useState, useContext } from 'react';
import { DesktopOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import AppConfig from '../config';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import '../static/css/Sidebar.css';
import { ServicesContext } from '../App';

const { Sider } = Layout;
const { SubMenu } = Menu;


export default function MenuNavigation() {
    const [collapse, setCollapse] = useState(false);
    const activeStyle = {
        color: 'white'
    }
    const servicesData = useContext(ServicesContext);
    console.log(servicesData)
    let servicesKeys = {}
    let categories = servicesData.map(datum => datum.category)
    categories = [...new Set(categories)];
    
    for (let i = 0; i < servicesData.length; i++) {
        console.log(servicesData[i].category)
    }

    console.log(servicesKeys);

    return (
        <Sider collapsible collapsed={collapse} onCollapse={() => setCollapse(!collapse)}>
            <div className="logo">
                <img href="static/images/logo.jpg" alt="logo"></img>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline">
                <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
                    <NavLink to={AppConfig.dashboardPageUrl} strict activeStyle={activeStyle}>Dashoard</NavLink>
                </Menu.Item>

                <SubMenu key="services-1" icon={<UserOutlined />} title="Services 1">
                    <Menu.Item key="sub-services-11">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-1</NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub-services-12">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-2</NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub-services-13">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-3</NavLink>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="services-2" icon={<UserOutlined />} title="Services 2">
                    <Menu.Item key="sub-services-21">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-1</NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub-services-22">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-2</NavLink>
                    </Menu.Item>
                    <Menu.Item key="sub-services-23">
                        <NavLink to={AppConfig.servicesPageUrl} activeStyle={activeStyle}>sub-services-3</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="contact" icon={<TeamOutlined />}>
                    <NavLink to={AppConfig.contactPageUrl} strict activeStyle={activeStyle}>Contact Us</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>

    );
}
