import React, { useState } from 'react';
import { Form, Input, Button, Spin, Alert } from 'antd';
import ApiClient from '../../utils/ApiClient';

const Login = (props: any): JSX.Element => {
	const [loading, isLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleFinish = async () => {
		try {
			setError(false);
			isLoading(true);
			const { data } = await ApiClient.loginUser(username, password);
			isLoading(false);
			console.log(data);
		} catch (err: any) {
			console.error(err);
			isLoading(false);
			setError(true);
		}
	};

	return (
		<div className="login-container">
			<Form name="basic" onFinish={handleFinish}>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input a username',
							validateTrigger: 'onSubmit',
						},
						{
							pattern: /^(?=.{2,32}$)([a-zA-Z]+[a-zA-Z0-9]*$)/i,
							message:
								'Username must start with a character and contain 2-20 characters.',
							validateTrigger: 'onSubmit',
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
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
							validateTrigger: 'onSubmit',
						},
						{
							pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{7,30}$/i,
							message:
								'Password must contain 7-30 characters and at least 1 number.',
							validateTrigger: 'onSubmit',
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

				<div
					style={{
						marginTop: '2vh',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Button type="primary" htmlType="submit" disabled={!captchaVerified}>
						{loading ? <Spin size="default" /> : 'Submit'}
					</Button>
				</div>

				<div className="ma3">
					{error ? (
						<Alert
							message="Something went wrong. Please try again later."
							type="error"
							showIcon
							closable
						/>
					) : null}
				</div>
			</Form>
		</div>
	);
};

export default Login;
