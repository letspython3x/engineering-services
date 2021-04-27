import React from 'react'
import { Row, Col, Card } from 'antd'

const { Meta } = Card;

function About() {
    const style = { background: '#CCCCCC', padding: '8px 0' };

    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        <Card hoverable
                            cover={<img alt="Director" src="images/owners/director.jpeg" />}>
                            <Meta title="Director Name" description="Lorem ipsum" />
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Card hoverable
                        cover={<img alt="CEO" src="images/owners/ceo.png" />}>
                        <Meta title="Ceo Name" description="Lorem ipsum" />
                    </Card>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Card hoverable
                        cover={<img alt="Director" src="images/owners/director2.png" />}>
                        <Meta title="Director Name" description="Lorem ipsum" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default About;
