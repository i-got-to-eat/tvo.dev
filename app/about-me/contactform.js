'use client';

export default function ContactForm() {

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

		const data = await response;
	}
	return (<>
		<h2>Contact Me</h2>
		<div className="w-full">
		<form onSubmit={onSubmit} className="w-7/12 inline-block items-center grid grid-rows-6">
			<label for="first-name">First Name:</label> 
			<input id="first-name" type="text" name="First Name" autoComplete="given-name"/>
				
			<label for="last-name">Last Name:</label> 
			<input id="last-name" type="text" name="Last Name" autoComplete="family-name"/>

			<label for="email">Email:</label> 
			<input id="email" type="email" name="Email" autoComplete="email"/>
			
			<label for="phone-number">Phone Number:</label> 
			<input id="phone-number" type="tel" name="Phone Number" autoComplete="tel"/>

			<label for="company">Company/Affiliate:</label>
			<input id="company" type="text" name="Company" autoComplete="organization"/>


			<label for="email-type">How would you like to work with me?</label>
			<select id="email-type" name="Email Type">
			<option value="GENERAL_OUTREACH" selected>General Outreach</option>
			<option value="DIGITAL_MARKETING_SERVICES">Digital Marketing Services</option>
			<option value="COLLABORATION">Collaboration</option>
			<option value="SPONSORSHIP">Sponsorship</option>
			</select>

			<label for="message">Message:</label> 
			<input id="message" type="text" name="Message" autoComplete="off"/>

			<button type="submit">Submit</button>
		</form>
	</div>
	</>
	)
}
