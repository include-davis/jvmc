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
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASSWORD,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // EDIT WITH ACTUAL CONTACT FORM EMAIL
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #01887a; border-bottom: 2px solid #eee; padding-bottom: 10px; ">Contact Form Submission</h1>
            <p style="margin-bottom: 15px;">You have received a new message from your contact form.</p>
            <div style="background-color: #f9f9f9; padding: 16px; border-radius: 4px; margin-bottom: 20px; display: flex; flex-direction: column; gap: 16px;">
              <div style="margin-bottom: 16px"><strong style="display: block; margin-bottom: 4px;">Name:</strong> ${firstName} ${lastName}</div>
              <div style="margin-bottom: 16px"><strong style="display: block; margin-bottom: 4px;">Email:</strong> ${email}</div>
              <div style="margin-bottom: 16px"><strong style="display: block; margin-bottom: 4px;">Message:</strong> ${message}</div>
            </div>
            <div style="margin-top: 20px; text-align: center; color: #777;">
              This is an automated email sent from your website's contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { status: 200 },
      { message: "Email sent successfully!" }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
