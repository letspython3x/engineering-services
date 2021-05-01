import {Menu} from "antd";
import {NavLink, Route} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import Services from "./components/Services";

const {SubMenu} = Menu;

export function createCategorySubMenu(servicesData) {
    const activeStyle = {
        color: 'white'
    }
    let container = []
    console.log("SERVICES DATA: ", servicesData)
    for (let key in servicesData) {
        let innerMenu = servicesData[key].map(service =>
            <Menu.Item key={service}>
                <NavLink to={`/${key}/${service}`}
                         activeStyle={activeStyle}>{service}
                </NavLink>
            </Menu.Item>
        )
        container.push(
            <SubMenu key={key} icon={<UserOutlined/>} title={key}>
                {innerMenu}
            </SubMenu>)
    }
    console.log("CONTAINER: ", container)
    return container
}

export function getCategories(servicesData) {
    let categories = servicesData.map(service => [service.category, []])
    console.log("Categories: ", categories)
    let categoryKeys = Object.fromEntries(categories);
    console.log("Category Keys initial: ", categoryKeys)

    for (let i = 0; i < servicesData.length; i++) {
        for (let key in categoryKeys) {
            let index = categoryKeys[key].indexOf(servicesData[i].sub_category)
            console.log(key, servicesData[i].category, index)
            if (key === servicesData[i].category && index === -1) {
                categoryKeys[key].push(servicesData[i].sub_category)
            }
        }
    }
    console.log("Category Keys: ", categoryKeys)
    return categoryKeys
}


export function createServiceRoutes(servicesKeys) {
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
