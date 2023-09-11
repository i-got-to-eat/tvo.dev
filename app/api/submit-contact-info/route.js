import { NextResponse } from 'next/server';
import { prisma } from '../../db';

export async function POST(req){
	const data = await req.json();
	const responseData = {"Request": "Successful"};

	const {
		["First Name"]: _first_name, 
		["Last Name"]: _last_name, 
		["Email"]: _email, 
		["Phone Number"]: _phone_number, 
		["Company"]: _company, 
		["Email Type"]: _email_type, 
		["Message"]: _message 
	} = data;
	
	
	const errorMap = new Map();
	errorMap.set("First Name", validStringLength(_first_name, 255));
	errorMap.set("Last Name", validStringLength(_last_name, 255));
	errorMap.set("Email", validStringLength(_email, 255));
	errorMap.set("Phone Number", validStringLength(_phone_number, 50));
	errorMap.set("Company", validStringLength(_company, 255));
	errorMap.set("Email Type", validStringLength(_email_type, 255));
	errorMap.set("Message", validStringLength(_message, 16777214));


	errorMap.forEach((val, key)=>{
		if(val === false){
			responseData["Request"] = "Unsuccessful";
			responseData[key] = "Invalid Length";
		}
	});
	
	if(responseData['Request'] === "Unsuccessful"){
		return NextResponse.json(responseData, {status: 400});
	}


	const addContactInfo = await prisma.ContactInformation.create({
		data:{ 
			first_name: _first_name,
			last_name: _last_name,
			email: _email,
			phone_number: _phone_number,
			company: _company,
			email_type: _email_type,
			message: _message
		}
	});
	return NextResponse.json(responseData, {status: 200});

}

function validStringLength(str, max_length){
	return str.length > 0 && str.length <= max_length;
}
