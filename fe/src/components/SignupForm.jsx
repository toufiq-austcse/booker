import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../queries/index.jsx';
import { useMutation } from '@apollo/client';

export function SignupForm() {

  const [createUsers] = useMutation(CREATE_USER);
  const onFinish = async (values) => {
    let res = await createUsers({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    console.log('Success:', res);
  };


  return (
    <Form
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

      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Email'
        name='email'
        rules={[{
          required: true, message: 'Please input your email!',
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{
          required: true, message: 'Please input your password!',
        }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6, span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          SignUp
        </Button>
      </Form.Item>
      Or <Link to='/'>Login now!</Link>
    </Form>);
}