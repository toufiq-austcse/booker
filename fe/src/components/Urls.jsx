import { Row } from 'antd';
import { Url } from './Url.jsx';
import { useQuery } from '@apollo/client';
import { GET_LINKS } from '../queries/index.jsx';
import React from 'react';

export function Urls({ links }) {
  console.log('links ', links);
  const { data, loading, error } = useQuery(GET_LINKS, {
    variables: {
      urls: links,
    },
  });
  console.log('result ', data);
  return (
    <Row style={{
      justifyContent: 'center',
    }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && data.getLinks.map((link, index) => {
        return (
          <Url key={index} title={link.title} siteName={link.siteName} url={link.url} images={link.images} />
        );
      })}
    </Row>

  );

}