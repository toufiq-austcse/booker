import { Card } from 'antd';
import { SignupForm } from '../SignupForm.jsx';

export function Signup() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}>
      <Card
        title='Signup'
        bordered={false}
        style={{
          width: '25%',
        }}
      >
        <SignupForm />
      </Card>
    </div>
  );
}