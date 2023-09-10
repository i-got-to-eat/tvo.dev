import { NextResponse } from 'next/server';

export async function POST(req){
	
	const data = req.body;
	return NextResponse.json({data});

}
