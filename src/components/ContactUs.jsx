import React, { useState } from 'react';
import './styles/contactUs.css';
import UiInput from './../ui/UiInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUserFailure, signInUserStart, signInUserSuccess } from '../features/auth/authSlice';
import AuthService from './../service/auth';
import UiTextarea from '../ui/UiTextarea';

function ContactUs() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [formErrors, setFormErrors] = useState({});
	const [placeholder, setPlaceholder] = useState({});
	const [successMessage, setSuccessMessage] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(state => state.auth);

	const validateForm = () => {
		const errors = {};
		const placeholders = {};
		if (!name) {
			errors.name = "Ism maydoni talab qilinadi.";
			placeholders.name = "Ism maydoni talab qilinadi.";
		}
		if (!phoneNumber) {
			errors.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
			placeholders.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
		}
		return { errors, placeholders };
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { errors, placeholders } = validateForm();
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			setPlaceholder(placeholders);
			setTimeout(() => setPlaceholder({}), 3000); // 3 sekunddan keyin placeholderlarni tozalash
			return;
		}

		dispatch(signInUserStart());
		const user = { full_name: name, phone_number: phoneNumber, message };
		try {
			const response = await AuthService.userRegister(user);
			dispatch(signInUserSuccess(response.user));
			setName('');
			setPhoneNumber('');
			setMessage('');
			setFormErrors({});
			setPlaceholder({});
			setSuccessMessage('Muvaffaqiyatli ro‘yxatdan o‘tdingiz!');
			setTimeout(() => {
				setSuccessMessage('');
			}, 3000); // 3 sekunddan keyin muvaffaqiyatli xabarni tozalash
		} catch (error) {
			dispatch(signInUserFailure(error.response.data.errors));
		}
	};

	return (
		<div className='contact-us-section'>
			<div className='form-wrapper'>
				{successMessage ? (
					<div className='success-message'>
						<h2>{successMessage}</h2>
					</div>
				) : (
					<>
						<h2 className='title'>Hoziroq ro'yxatdan o'ting</h2>
						<form onSubmit={handleSubmit}>
							<UiInput
								type='text'
								placeholder={placeholder.name || 'Ismingizni kiriting'}
								state={name}
								setState={setName}
								hasError={!!formErrors.name}
							/>
							<UiInput
								type='text'
								placeholder={placeholder.phoneNumber || 'Telefon raqamingizni kiriting'}
								state={phoneNumber}
								setState={setPhoneNumber}
								hasError={!!formErrors.phoneNumber}
							/>
							<UiTextarea
								placeholder='Xabar'
								state={message}
								setState={setMessage}
							/>
							<button type='submit' disabled={isLoading}>YUBORISH</button>
							{error && <p className="error">{error.message}</p>}
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default ContactUs;
