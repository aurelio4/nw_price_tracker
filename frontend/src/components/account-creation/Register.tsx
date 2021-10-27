import React, { useState } from 'react'
import { Form, Input, Button, Spin, Alert } from "antd"
import ReCAPTCHA from 'react-google-recaptcha'
import emailValidator from 'email-validator'
import ApiClient from '../../utils/ApiClient'
import { Link } from 'react-router-dom'

const Register = (props: any): JSX.Element => {
	const [captchaVerified, setCaptchaVerified] = useState<boolean>(false)
	const [loading, isLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmedPassword, setConfirmedPassword] = useState<string>('')

	const validateEmail = (rule: any, email: string, callback: any) => {
    const isValidEmail = emailValidator.validate(email);
    if (isValidEmail) {
      callback();
    } else {
      callback("Invalid email");
    }
  };

	const handleFinish = async () => {
    if (!captchaVerified || loading) {
      return;
    }

    if (password !== confirmedPassword) {
      return;
    }

    try {
      setError(false);
      isLoading(true);
      const { data } = await ApiClient.createUser(username, email, password);
      isLoading(false);
			console.log(data)
    } catch (err: any) {
      console.error(err);
      isLoading(false);
      setError(true);
    }
  };

	return (
		<div className="register-container">
			<Form name="basic" onFinish={handleFinish}>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input a username", validateTrigger: "onSubmit" },
            {
              pattern: /^(?=.{2,32}$)([a-zA-Z]+[a-zA-Z0-9]*$)/i,
              message: "Username must start with a character and contain 2-20 characters.",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter a valid email", validator: validateEmail, validateTrigger: "onSubmit" }]}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!", validateTrigger: "onSubmit" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{7,30}$/i,
              message: "Password must contain 7-30 characters and at least 1 number.",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!", validateTrigger: "onSubmit" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{7,30}$/i,
              message: "Password must contain 7-30 characters and at least 1 number.",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            value={confirmedPassword}
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
          />
        </Form.Item>

				<div className="captcha-box">
					<ReCAPTCHA
							sitekey="6LfcQPccAAAAADmi8JrLpBv6-2ZKa9GOWs2WuzC-"
							onExpired={() => setCaptchaVerified(false)}
							onChange={() => setCaptchaVerified(true)}
						/>
				</div>

				<div style={{ marginTop: "2vh", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Button type="primary" htmlType="submit" disabled={!captchaVerified}>
            {loading ? <Spin size="default" /> : "Submit"}
          </Button>
          <p style={{ alignSelf: "center", margin: 0, color: "var(--primary-light)" }}>
            Already registered?{" "}
            <Button type="link" style={{ padding: 0 }}>
              <Link to="/login">Login here</Link>
            </Button>
          </p>
        </div>

				<div className="ma3">{error ? <Alert message="Something went wrong. Please try again later." type="error" showIcon closable /> : null}</div>
			</Form>
		</div>
	)
}

export default Register