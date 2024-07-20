import React from 'react';
import './styles/contactUs.css';

function ContactUs() {
	return (
		<div className='contact-us-section'>
			<div className="container">
				<div className='form-wrapper'>
					<h2>Hoziroq Ro‘yxatdan o‘ting va chegirmaga ega bo‘ling</h2>
					<form>
						<input type='text' placeholder='F.I.SH *' required />
						<input type='tel' placeholder='Telefon raqami *' required />
						<input type='email' placeholder='Elektron pochta' />
						<textarea placeholder='Xabar'></textarea>
						<button type='submit'>YUBORISH</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
