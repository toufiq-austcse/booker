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
          cover={<img alt='example'
                      src={images.length > 0 ? images[0] : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
        >
          <Meta title={title} description={siteName} />
        </Card>
      </a>

    </Col>
  );
}