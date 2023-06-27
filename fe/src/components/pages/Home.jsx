import { Card, Col, FloatButton, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { CreateBookmark } from '../CreateBookmark.jsx';
import React, { useState } from 'react';
import { CREATE_BOOKMARK, LIST_BOOKMARKS } from '../../queries/index.jsx';
import { useMutation, useQuery } from '@apollo/client';

export function Home() {
  const { loading, error, data, refetch } = useQuery(LIST_BOOKMARKS, { refetchWritePolicy: 'merge' });
  console.log('data', data);

  let [isModalOpen, setIsModalOpen] = useState(false);

  function showModal() {
    setIsModalOpen(true);
  }

  function handleCancel() {
    setIsModalOpen(false);
  }


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
      throw new Error(e);
    }

  };

  return (
    <div style={{ margin: '25px' }}>
      <Row gutter={16}>
        {data && data.listBookmarks.map((bookmark, index) => {
          return (
            <React.Fragment key={index}>
              <Col span={4}>
                <Card
                  title={bookmark.name}
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 300,
                    margin: '5px',
                  }}
                />
              </Col>
            </React.Fragment>
          );
        })}

      </Row>
      <FloatButton tooltip={<div>Create</div>} type='primary' icon={<PlusOutlined />} onClick={showModal} />
      <CreateBookmark isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
    </div>
  );
}