import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';
import { Email } from '../constants/constants';
import { emailConfig } from '../config/emailConfig';

interface EmailState {
	loading: boolean;
	error: any | null;
	successMessage: string;
};

const initialState: EmailState = {
	loading: false,
	error: null,
	successMessage: ''
};

export const sendEmail = createAsyncThunk('sendEmail', async (formData: Email) => {
	try {
		// Option 1: EmailJS (recommended for more control)
		if (emailConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID') {
			const templateParams = {
				to_email: emailConfig.recipientEmail,
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject,
				message: formData.message,
			};

			const response = await emailjs.send(
				emailConfig.serviceId, 
				emailConfig.templateId, 
				templateParams, 
				emailConfig.publicKey
			);
			
			if (response.status === 200) {
				return response;
			} else {
				throw new Error('Failed to send email');
			}
		}
		

		
		// Fallback: Mock response for development
		else {
			console.log('Email would be sent to:', emailConfig.recipientEmail);
			console.log('Form data:', formData);
			// Simulate API delay
			await new Promise(resolve => setTimeout(resolve, 1000));
			return { status: 200 };
		}
	} catch (error) {
		console.error('Email sending error:', error);
		throw error;
	}
});

const emailSlice = createSlice({
	name: 'email',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(sendEmail.pending, state => {
			state.loading = true;
			state.error = null;
			state.successMessage = '';
		})
		.addCase(sendEmail.fulfilled, state => {
			state.loading = false;
			state.successMessage = "Email sent successfully! I'll get back to you within 24 hours.";
		})
		.addCase(sendEmail.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to send email. Please try again.";
		})
	},
});

export default emailSlice.reducer;
