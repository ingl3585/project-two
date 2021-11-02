import React from 'react';
import github from '../../img/icons8-github-48.png';
import linkedin from '../../img/icons8-linkedin-48.png';

const Footer = () => {
	return (
		<div>
			<a href='https://github.com/ingl3585' target='_blank' rel='noreferrer'>
				<img src={github} alt='github-icon' />
			</a>
			<a
				href='https://www.linkedin.com/in/anthonyingle/'
				target='_blank'
				rel='noreferrer'>
				<img src={linkedin} alt='linkedin-icon' />
			</a>
			<p>Footer</p>
		</div>
	);
};

export default Footer;
