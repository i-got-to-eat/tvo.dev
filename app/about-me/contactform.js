'use client';

export default function ContactForm() {

	async function onSubmit(event){
		event.preventDefault();
		const formData = new FormData(event.target);
		const response = await fetch('/api/submit-contact-info', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
	}
	return (
		<form onSubmit={onSubmit}>
			<label for="first-name">First Name:</label> 
			<input id="first-name" type="text" name="First Name" autocomplete="given-name"/>
				
			<label for="last-name">Last Name:</label> 
			<input id="last-name" type="text" name="Last Name" autocomplete="family-name"/>

			<label for="email">Email:</label> 
			<input id="email" type="email" name="Email" autocomplete="email"/>

			<label for="company">Company/Affiliate:</label>
			<input id="company" type="text" name="Company" autocomplete="organization"/>


			<label for="email-type">How would you like to work with me?</label>
			<select id="email-type" name="email-type">
			<option value="general-outreach">General Outreach</option>
			<option value="digital-marketing-services">Digital Marketing Services</option>
			<option value="collaboration">Collaboration</option>
			<option value="sponsorship">Sponsorship</option>
			</select>

			<label for="message">Message:</label> 
			<input id="message" type="text" name="Message"/>

			<button type="submit">Submit</button>
		</form>
	)
}
