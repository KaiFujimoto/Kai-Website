import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { sendEmail } from '../redux/emailSlice';
import { Email } from '../constants/constants';

const EmailMe: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { loading, error, successMessage } = useSelector((state: RootState) => state.email);

	const [formData, setFormData] = useState<Email>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(sendEmail(formData));
		setFormData({ name: '', email: '',subject: '',  message: ''});
	};

	return (
		<div className="inner-section">
			<div className="section title">
				Email Me!
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="subject"
					placeholder="Subject"
					value={formData.subject}
					onChange={handleChange}
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type="submit" disabled={loading}>
					{loading ? 'Sending...' : 'Send Email'}
				</button>
				{successMessage && <p style={{color: 'green' }}>{successMessage}</p>}
				{error && <p style={{color: 'red'}}>{error}</p>}
			</form>
		</div>
	);
};

export default EmailMe;

