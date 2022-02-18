import React from 'react';
import './Register.css';

function Register(props) {
	return (
		<div className='register-container'>
			<div className="logo">QUEST-LOG</div>
			<form>
				<input type='text' placeholder='username' />
				<input type='text' placeholder='e-mail' />
				<input type='text' placeholder='password' />
				<button>Register</button>
			</form>
		</div>
	);
}

export default Register;
