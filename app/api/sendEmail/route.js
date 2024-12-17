import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the email service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App Password for Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's details
      to: "your-email@example.com", // Replace with your receiving email
      subject: "New Contact Form Submission", // Email subject
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
