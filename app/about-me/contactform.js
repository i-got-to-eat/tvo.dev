'use client';

import { useReducer, useState } from 'react';



export default function ContactForm() {

	const INITIAL_FORM_STATE = {
		loading: false,
		error: [],
	}

	const formReducer = (state, action) => {

		switch(action.type){
			case "POST_START":
				return {
					...state,
					loading: true,
					error: []
				};
			case "POST_SUCCESS":
				return {
					...state,
					loading: false,
					error: []
				};

			case "POST_ERROR":
				return {
					...state,
					loading: false,
					error: action.payload
				}
			default:
				return state;
		}
	}


	const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE)

	async function onSubmit(event){
		event.preventDefault();
		const formData = new FormData(event.target);
		const value = Object.fromEntries(formData.entries());

		formDispatch({type:"POST_START"});

		const response = await fetch('/api/submit-contact-info', {
			method: 'POST',
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(value),
		});

		const data = await response;
		switch(data.status){
			case 200:
				formDispatch({type:"POST_SUCCESS"});
				break;
			case 400:
				formDispatch({type:"POST_ERROR"}, data.body);
				break;
			case 500:
				fromDispatch({type:"POST_ERROR"}, data.status);
				break;

			default:
				fromDispatch({type:"POST_ERROR"}, "Unusual Error");
		}
	}
	return (
		<div className="max-w-full">
		<h2 className="grid grid-rows-1 place-content-center font-semibold text-4xl text-slate-50/80 my-5">Contact Me</h2>
		<form onSubmit={onSubmit} className="grid auto-rows-max place-content-center text-slate-100/90 font-medium text-xl pb-10">
			<label for="first-name" className="font-medium">First Name:</label> 
			<input id="first-name" type="text" name="First Name" autoComplete="given-name" className="mb-4 p-1 text-black"/>
				
			<label for="last-name">Last Name:</label> 
			<input id="last-name" type="text" name="Last Name" autoComplete="family-name" className="mb-4 p-1 text-black"/>

			<label for="email">Email:</label> 
			<input id="email" type="email" name="Email" autoComplete="email" className="mb-4 p-1 text-black"/>
			
			<label for="phone-number">Phone Number:</label> 
			<input id="phone-number" type="tel" name="Phone Number" autoComplete="tel" className="mb-4 p-1 text-black"/>

			<label for="company">Company/Affiliate:</label>
			<input id="company" type="text" name="Company" autoComplete="organization" className="mb-4 p-1 text-black"/>



			<label for="email-type">How would you like to work with me?</label>
			<select id="email-type" name="Email Type" className="mb-4 text-black">
			<option value="GENERAL_OUTREACH" selected>General Outreach</option>
			<option value="DIGITAL_MARKETING_SERVICES">Digital Marketing Services</option>
			<option value="COLLABORATION">Collaboration</option>
			<option value="SPONSORSHIP">Sponsorship</option>
			</select>

			<label for="message">Message:</label> 
			<textarea id="message" type="text" name="Message" autoComplete="off" className="mb-4 h-96 text-black px-2 py-1"/>

			<button type="submit" className="py-3 px-5 border-solid rounded border-2 text-slate-100 border-slate-500 bg-slate-400/50 hover:rounded-md">Submit</button>
		</form>
		</div>
	)
}

