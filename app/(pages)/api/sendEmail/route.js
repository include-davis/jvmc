import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Method validation
    const { method } = req;
    if (method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    // Server-side validation
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "Zoho",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "jvmc@gmail.com", // EDIT WITH ACTUAL CONTACT FORM EMAIL
      subject: subject,
      text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Message: ${message}
            `, // Can edit with name/email in body if needed
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
