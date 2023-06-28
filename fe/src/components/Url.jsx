import { Card, Col } from 'antd';
import Meta from 'antd/es/card/Meta.js';

export function Url() {
  return (
    <Col span={4}>
      <Card
        hoverable
        style={{
          width: 240,
          margin: '5px',
        }}
        cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
      >
        <Meta title='Europe Street beat' description='www.instagram.com' />
      </Card>
    </Col>
  );
}