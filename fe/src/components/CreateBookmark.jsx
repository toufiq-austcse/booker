import { Button, Form, Input, Modal } from 'antd';

export function CreateBookmark({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal title='Create Boomark' centered open={isModalOpen} onCancel={handleCancel} footer={[
      <Button form='create-bookmark-form' key='submit' htmlType='submit'>
        Create
      </Button>,
    ]}>
      <Form
        id='create-bookmark-form'
        name='basic'
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleOk}
        // onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
}