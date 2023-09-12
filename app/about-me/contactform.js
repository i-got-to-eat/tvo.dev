'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function ContactForm() {

	const validationSchema = Yup.object().shape({
		firstName:          Yup.string().max(255, "Your First Name is too long").required("First Name is required"),
		lastName:           Yup.string().max(255, "Your Last Name is too long").required("Last Name is required"),
		email:              Yup.string().max(255, "Your Email is too long").required("Email is required").email("Email is invalid"),
		phoneNumber:        Yup.string().max(50, "Your Phone Number is too long").required("Phone Number is required"),
		companyName:        Yup.string().max(255, "Your Company/Affiliate Name is too long").required("Company/Affiliate Name is required"),
		message:            Yup.string().max(16_777_215, "Your Message is too long").required("Message is required"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };
	const { register, handleSubmit, reset, formState } = useForm(formOptions);
	const { errors } = formState;


	async function onSubmit(event){
		event.preventDefault();
		const formData = new FormData(event.target);
		const value = Object.fromEntries(formData.entries());

		const response = await fetch('/api/submit-contact-info', {
			method: 'POST',
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(value),
		});

		const data = await response.json();
	}
	return (
		<div className="max-w-full">
		<h2 className="grid grid-rows-1 place-content-center font-semibold text-4xl text-slate-50/80 my-5">Contact Me</h2>
		<form onSubmit={handleSubmit(onSubmit)} className="grid auto-rows-max place-content-center text-slate-100/90 font-medium text-xl pb-10">
	
			<label for="first-name" className="font-medium">First Name:</label>
			<span id="first-name-feedback" aria-label="polite">{errors.firstName?.message}</span>
			<input {...register('firstName')} id="first-name" type="text" name="First Name" autoComplete="given-name" required aria-required="true" className="mb-4 p-1 text-black focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
	
				
			<label for="last-name">Last Name:</label> 
			<span id="last-name-feedback" aria-label="polite">{errors.lastName?.message}</span>
			<input {...register('lastName')} id="last-name" type="text" name="Last Name" autoComplete="family-name" required aria-required="true" className="mb-4 p-1 text-black focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500"/>
			<label for="email">Email:</label> 
			<span id="email-name-feedback" aria-label="polite">{errors.email?.message}</span>
			<input {...register('email')} id="email" type="email" name="Email" autoComplete="email" required aria-required="true" className="mb-4 p-1 text-black focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500"/>	
			<label for="phone-number">Phone Number:</label> 
			<span id="phone-number-feedback" aria-label="polite">{errors.phoneNumber?.message}</span>
			<input {...register('phoneNumber')}id="phone-number" type="tel" name="Phone Number" autoComplete="tel" required aria-required="true" className="mb-4 p-1 text-black"/>

			<label for="company">Company/Affiliate:</label>
			<span id="company-name-feedback" aria-label="polite">{errors.companyName?.message}</span>
			<input {...register('companyName')} id="company" type="text" name="Company" autoComplete="organization" required aria-required="true" className="mb-4 p-1 text-black"/>

			<label for="email-type">How would you like to work with me?</label>
			<select id="email-type" name="Email Type" className="mb-4 text-black">
			<option value="GENERAL_OUTREACH" selected>General Outreach</option>
			<option value="DIGITAL_MARKETING_SERVICES">Digital Marketing Services</option>
			<option value="COLLABORATION">Collaboration</option>
			<option value="SPONSORSHIP">Sponsorship</option>
			</select>


			<label for="message">Message:</label> 
			<span id="company-name-feedback" aria-label="polite">{errors.message?.message}</span>
			<textarea {...register('message')} id="message" type="text" name="Message" autoComplete="off" required aria-required="true" className="mb-4 h-96 text-black px-2 py-1"/>

			<button type="submit" className="py-3 px-5 border-solid rounded border-2 text-slate-100 border-slate-500 bg-slate-400/50 hover:rounded-md">Submit</button>
		</form>
		</div>
	)
}

