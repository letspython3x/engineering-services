import React, {useContext} from 'react'
import {Card, Col, Row} from 'antd'
import {ServicesContext} from "../App";

const {Meta} = Card;

function Services(props) {
    const cardStyle = {width: 300, background: '#DDDDDD', padding: '2px 16px'};
    const roundCorners = {borderRadius: '5px 5px 0 0'}

    const {category, subCategory} = props
    const servicesData = useContext(ServicesContext);
    let services = servicesData.filter(item => {
        return (item.category === category && item.subCategory === subCategory)
    })

    return (
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            {services.map((datum) => <Col>
                <Card hoverable
                      key={datum.id}
                      style={{...cardStyle, ...roundCorners}}
                      cover={
                          <img style={{...roundCorners}}
                               alt={datum.title}
                               src={`/images/services/${datum.imageName}`}/>}>
                    <Meta title={datum.title} description={datum.description}/>
                </Card>
            </Col>)
            }
        </Row>
    )
}

export default Services;