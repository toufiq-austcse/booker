import { Card, Col } from 'antd';
import Meta from 'antd/es/card/Meta.js';

export function Url({ title, siteName, url, images = [] }) {
  return (
    <Col span={5}>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Card
          hoverable
          style={{
            margin: '5px',
          }}
          cover={<img alt='image'
                      src={images.length > 0 ? images[0] : 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'}
                      style={{
                        height: '250px',
                      }} />}
        >
          <Meta title={title?title:'Title not found'} description={siteName?siteName:'Description not found'} />
        </Card>
      </a>

    </Col>
  );
}