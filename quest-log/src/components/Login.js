import React from 'react';
import './Login.css';
import { useState, useRef } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

function Login({ setShowLogin, storage, setCurrentUser }) {
	const [error, setError] = useState(false);
	const nameRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = {
			userName: nameRef.current.value,
			password: nameRef.current.value,
		};

		try {
			const response = await axios.post(
				'http://localhost:7000/users/login',
				user
			);
			storage.setItem('user', response.data.userName);
			setCurrentUser(response.data.userName);
			setShowLogin(false);
			setError(false);
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className='login-container'>
			<div className='logo'>QUEST-LOG</div>
			<form className='form' onSubmit={handleSubmit}>
				<input type='text' placeholder='username' ref={nameRef} />
				<input type='password' placeholder='password' ref={passwordRef} />
				<button className='login-button'>Login</button>
				{error && (
					<span className='failure'>Failed to Log-in. Please try again!</span>
				)}
			</form>
			<CancelIcon
				className='login-cancel-button'
				onClick={() => setShowLogin(false)}></CancelIcon>
		</div>
	);
}

export default Login;
