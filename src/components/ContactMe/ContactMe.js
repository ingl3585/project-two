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
		// let rows = await document.sheetsByIndex[0].getRows();
		// // console.log(rows); //rows = all data
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
			<div className='contact-me-title'>Contact Me</div>
			<div>
				<input
					className='first-name-form'
					type='text'
					placeholder='First Name'
					onChange={handleFirstNameChange}
					value={firstName}
				/>
				<input
					className='last-name-form'
					type='text'
					placeholder='Last Name'
					onChange={handleLastNameChange}
					value={lastName}
				/>
				<br />
				<input
					className='email-form'
					type='text'
					placeholder='Email Address'
					onChange={handleEmailChange}
					value={email}
				/>
				<br />
				<input
					className='message-form'
					type='text'
					placeholder='Message'
					onChange={handleMessageChange}
					value={message}
				/>
				<br />
				<button className='contact-button' type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default ContactMe;
