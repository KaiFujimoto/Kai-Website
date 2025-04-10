import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Email } from '../constants/constants';

interface EmailState {
	sender: string;
	title: string;
	body: string;
	status: string;
};

const initialState: EmailState = {
	body: "",
	sender: "",
	title: "",
	status: ""
};

export const sendEmail = createAsyncThunk('sendEmail', async () => {
//	const response = await axios.post(
//		'lambda-url'
//	);
	return {"sender": "sender", "title": "title", "body": "body"};
});

const emailSlice = createSlice({
	name: 'email',
	initialState,
	reducers: {
		emailSent: (state, action: PayloadAction<Email>) => {
			state = {
				body: "",
				sender: "",
				title: "",
				status: ""
			};
		},
	},
	extraReducers: builder => {
		builder.addCase(sendEmail.pending, state => {
			state.status = 'loading';
		})
		.addCase(sendEmail.fulfilled, state => {
			state.status = 'succeeded';
		})
		.addCase(sendEmail.rejected, state => {
			state.status = 'rejected';
		})
	},
});

export const { emailSent } = emailSlice.actions;
export default emailSlice.reducer;
