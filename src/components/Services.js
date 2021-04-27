import React from 'react'
import { Row, Col, Card } from 'antd'
import servicesData from '../data/servicesData.json'
// import '../static/css/servicesCard.css';

const { Meta } = Card;

function Services() {
    const cardStyle = { width: 300, background: '#DDDDDD', padding: '2px 16px' };
    const roundCorners = { borderRadius: '5px 5px 0 0' }
    const data = servicesData;

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {data.map((datum) => <Col>
                <Card hoverable
                    key={datum.id}
                    style={{ ...cardStyle, ...roundCorners }}
                    cover={
                        <img style={{ ...roundCorners }}
                            alt={datum.title}
                            src={`images/services/${datum.imageName}`} />}>
                    <Meta title={datum.title} description={datum.description} />
                </Card>
            </Col>)
            }
        </Row >
    )
}

export default Services;