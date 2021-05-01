import React, {useContext} from 'react'
import {Row, Col, Card} from 'antd'
import {ServicesContext} from '../App';

const {Meta} = Card;

export default function Dashboard() {
    const servicesData = useContext(ServicesContext);

    let categories = servicesData.map(datum => datum.category)
    categories = [...new Set(categories)];

    const cardStyle = {width: 300, background: '#DDDDDD', padding: '2px 16px'};
    const roundCorners = {borderRadius: '5px 5px 0 0'}

    return (
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            {categories.map((datum) =>
                <Col>
                    <Card hoverable
                          key={datum}
                          style={{...cardStyle, ...roundCorners}}
                          cover={
                              <img style={{...roundCorners}}
                                   alt={datum}
                                   src={`/images/services/services.jpeg`}/>}>
                        <Meta title={datum} description={datum}/>
                    </Card>
                </Col>)
            }
        </Row>
    )
}