import { useMutation, useQuery } from '@apollo/client';
import { GET_BOOKMARK, UPDATE_BOOKMARK } from '../../queries/index.jsx';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { CreateLink } from '../CreateLink.jsx';
import { Urls } from '../Urls.jsx';

export function Bookmark() {
  console.log('called Bookmark');
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateBookmark] = useMutation(UPDATE_BOOKMARK);
  const { data, loading, error } = useQuery(GET_BOOKMARK, {
    variables: {
      id: id,
    },
  });


  const onAddBookMarkClick = () => {
    console.log('Add bookmark clicked');
    setIsModalOpen(true);
  };

  const handleOk = async (values) => {
    console.log('clicked:', values);
    try {
      let res = await updateBookmark({
        variables: {
          id: id,
          links: [...data.getBookmark.links, values.url],
        },
      });
      console.log('Success:', res);
      document.getElementById('create-link-form').reset();
      setIsModalOpen(false);

    } catch (e) {
      console.log('Error:', e);
      alert('error in bookmark creation');
    }

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && (
        <>
          <Card
            title={data.getBookmark.name}
            extra={<Button onClick={onAddBookMarkClick}>+</Button>}
            style={{
              width: '100%',
            }}
            bodyStyle={{
              padding: '0px',
            }}
          >
          </Card>
          <Urls style={{
            margin: '25px',
          }} links={data.getBookmark.links} />


        </>


      )}

      <CreateLink isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />

    </div>
  );
}