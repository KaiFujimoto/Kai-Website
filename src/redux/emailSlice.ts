import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { Email } from '../constants/constants';

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
//	const response = await axios.post(
//		'lambda-url'
//	);
	return {"sender": "sender", "title": "title", "body": "body"};
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
			state.successMessage = "Email sent successfully! Typically takes me 1 day to respond back.";
		})
		.addCase(sendEmail.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload || "Failed to send email.";
		})
	},
});

export default emailSlice.reducer;
