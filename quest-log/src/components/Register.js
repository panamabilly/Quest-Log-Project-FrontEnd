import React from 'react';
import './Register.css';
import { useState, useRef } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

function Register({ setShowRegister }) {
	const [success, setSuccess] = useState(true);
	const [error, setError] = useState(false);
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newUser = {
			userName: nameRef.current.value,
			email: nameRef.current.value,
			password: nameRef.current.value,
		};

		try {
			await axios.post('http://localhost:7000/users/register', newUser);
			setSuccess(true);
			setError(false);
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className='register-container'>
			<div className='logo'>QUEST-LOG</div>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='username' ref={nameRef} />
				<input type='email' placeholder='e-mail' ref={emailRef} />
				<input type='password' placeholder='password' ref={passwordRef} />
				<button className='register-button'>Register</button>
				{success && (
					<span className='success'>
						You have registered successfully. Please Log-In!
					</span>
				)}
				{error && (
					<span className='failure'>Failed to Register. Please try again!</span>
				)}
			</form>
			<CancelIcon
				className='register-cancel-button'
				onClick={() => setShowRegister(false)}></CancelIcon>
		</div>
	);
}

export default Register;
