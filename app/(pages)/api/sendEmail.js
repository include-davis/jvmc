import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    // Method validation
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method not allowed'}, { status: 405 });
    }
    try {
        // Server-side validation
        const { firstName, lastName, email, subject, message } = await req.json();
        
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields required'}, { status: 400 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 
        });

        // Send email
    } catch (error) {
        // TODO: add nextresponses and maybe console.error
    }
}