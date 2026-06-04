"use server";

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Inquiry via Contradictions: ${subject || 'General Contact'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: font-serif; max-width: 600px; margin: 0 auto; background-color: #faf9f6; padding: 40px; border-top: 5px solid #a50000;">
          <h2 style="margin-top: 0; color: #a50000; text-transform: uppercase; letter-spacing: 2px;">New Direct Inquiry</h2>
          <p style="color: #666; margin-bottom: 30px;">A new request has been transmitted from your website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Full Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #000;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Subject Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${subject || 'General Contact'}</td>
            </tr>
          </table>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #a50000;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Nodemailer error:", error);
    return { success: false, error: "Failed to transmit message. Please try again later." };
  }
}