import { Card, Col, FloatButton, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { CreateBookmark } from '../CreateBookmark.jsx';
import React, { useState } from 'react';
import { CREATE_BOOKMARK, LIST_BOOKMARKS } from '../../queries/index.jsx';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

export function Home() {
  const { loading, error, data, refetch } = useQuery(LIST_BOOKMARKS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [createBookmark] = useMutation(CREATE_BOOKMARK);

  const handleOk = async (values) => {

    try {
      let res = await createBookmark({
        variables: {
          name: values.name,
        },
      });
      document.getElementById('create-bookmark-form').reset();
      console.log('Success:', res);
      setIsModalOpen(false);
      refetch();
    } catch (e) {
      console.log('Error:', e);
      alert('error in bookmark creation');
    }

  };

  return (
    <div style={{ margin: '25px' }}>
      <Row style={{
        justifyContent: 'center',
      }}>
        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data && data.listBookmarks.map((bookmark, index) => {
          return (
            <Link key={index} to={{
              pathname: `/bookmarks/${bookmark._id}`,
            }}>
              <Col span={4}>
                <Card
                  hoverable
                  title={bookmark.name}
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 300,
                    margin: '5px',
                  }}
                />
              </Col>
            </Link>
          );
        })}

      </Row>
      <FloatButton tooltip={<div>Create</div>} type='primary' icon={<PlusOutlined />} onClick={showModal} />
      <CreateBookmark isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
    </div>
  );
}