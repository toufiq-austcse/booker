import {LoginForm} from "../LoginForm.jsx";
import {Card} from "antd";

export function Login() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100%",
        }}>
            <Card
                title="Login"
                bordered={false}
                style={{
                    width: "25%",
                }}
            >
                <LoginForm/>
            </Card>
        </div>
    )
}