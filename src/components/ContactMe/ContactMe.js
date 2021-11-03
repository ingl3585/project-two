import './ContactMe.css';
import { useEffect, useState } from 'react';
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('../../client_secret.json');

let document = {};

const ContactMe = () => {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const makeInitialCall = async () => {
		document = new GoogleSpreadsheet(
			'1CbOqjVhwKf-HfvVoUTvAlBT5w7rrCUr58N5-0aLroys'
		);
		await document.useServiceAccountAuth(credentials);
		await document.loadInfo();
		let rows = await document.sheetsByIndex[0].getRows();
		// console.log(rows); //rows = all data
	};

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = async () => {
		let newRow = {
			FirstName: firstName,
			LastName: lastName,
			Email: email,
			Message: message,
		};
		let sheet = await document.sheetsByIndex[0];
		sheet.addRow(newRow);
	};

	useEffect(() => {
		makeInitialCall();
	}, []);
	return (
		<div className='contact-me-container'>
			<h3>Contact Me</h3>
			<div>
				<input
					type='text'
					placeholder='First Name'
					onChange={handleFirstNameChange}
					value={firstName}
				/>
				<input
					type='text'
					placeholder='Last Name'
					onChange={handleLastNameChange}
					value={lastName}
				/>
				<br />
				<input
					type='text'
					placeholder='Email Address'
					onChange={handleEmailChange}
					value={email}
				/>
				<br />
				<input
					type='text'
					placeholder='Message'
					onChange={handleMessageChange}
					value={message}
				/>
				<br />
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
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
