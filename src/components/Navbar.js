import React from 'react'
import AppConfig from "../config";
import { Avatar, Menu, Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;


export default function Navbar() {
    const navStyle = {
        float: 'right',
        color: 'white'
    }

    const activeStyle = {
        color: 'green'
    }

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="AppTitle">
                    <Title style={navStyle} level={3}>{AppConfig.title}</Title>
                </Menu.Item>
                <Menu.Item style={navStyle} key="avatar">
                    <Avatar src="images/avatar.png" />
                </Menu.Item>
                <Menu.Item style={navStyle} key="dashboard">
                    <NavLink to={AppConfig.dashboardPageUrl} activeStyle={activeStyle}>Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item style={navStyle} key="about">
                    <NavLink to={AppConfig.aboutPageUrl} activeStyle={activeStyle}>About Us</NavLink>
                </Menu.Item>
                <Menu.Item style={navStyle} key="home">
                    <NavLink to={AppConfig.homePageUrl} activeStyle={activeStyle}>Home</NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    );
}
