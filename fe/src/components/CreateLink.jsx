import { Button, Form, Input, Modal } from 'antd';

export function CreateLink({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal title='Save Url' centered open={isModalOpen} onCancel={handleCancel} footer={[
      <Button form='create-link-form' key='submit' htmlType='submit'>
        Create
      </Button>,
    ]}>
      <Form
        id='create-link-form'
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
          label='Url'
          name='url'
          rules={[
            {
              required: true,
              message: 'Please input Urls!',
            },
          ]}
        >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
}