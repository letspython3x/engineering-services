import {Menu} from "antd";
import {NavLink, Route} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import Services from "./components/Services";

const {SubMenu} = Menu;

export function createCategorySubMenu(servicesData) {
    console.log("Inside utils createCategorySubMenu")
    const activeStyle = {
        color: 'white'
    }

    let container = []
    for (let key in servicesData) {
        let innerMenu = servicesData[key].map(service =>
            <Menu.Item key={service}>
                <NavLink to={`/${key}/${service}`} activeStyle={activeStyle}>
                    {service}
                </NavLink>
            </Menu.Item>
        )
        container.push(
            <SubMenu key={key} icon={<UserOutlined/>} title={key}>
                {innerMenu}
            </SubMenu>)
    }
    return container
}

export function getCategories(servicesData) {
    console.log("Inside utils getCategories")

    let categories = servicesData.map(service => [service.category, []])
    let categoryKeys = Object.fromEntries(categories);

    for (let i = 0; i < servicesData.length; i++) {
        for (let key in categoryKeys) {
            let index = categoryKeys[key].indexOf(servicesData[i].subCategory)
            if (key === servicesData[i].category && index === -1) {
                categoryKeys[key].push(servicesData[i].subCategory)
            }
        }
    }
    return categoryKeys
}


export function createServiceRoutes(servicesKeys) {
    console.log("Inside utils createServiceRoutes")
    let container = []
    for (let category in servicesKeys) {
        let routes = servicesKeys[category].map(subCategory =>
            <Route
                   path={`/${category}/${subCategory}`}
                   render={(props) => (<Services {...props} category={category} subCategory={subCategory}/>)}
            />
        )
        container.push(routes)
    }
    return container
}
