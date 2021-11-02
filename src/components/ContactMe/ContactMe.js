import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
	return (
		<div>
			<h3>Contact Me</h3>
			<div>
				<input type='text' placeholder='First Name'></input>
				<input type='text' placeholder='Last Name'></input>
				<br />
				<input type='text' placeholder='Email Address'></input>
				<br />
				<input type='text' placeholder='Message'></input>
				<br />
				<button type='submit'>Submit</button>
				<br />
				Location icon made by{' '}
				<a href='https://www.flaticon.com/authors/srip' title='srip'>
					srip
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
