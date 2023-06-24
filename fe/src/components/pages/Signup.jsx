import { Card } from 'antd';
import { SignupForm } from '../SignupForm.jsx';
import { ApolloClient } from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
// });

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