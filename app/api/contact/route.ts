import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { ContactFormData } from '@/app/components/ContactForm';
import { HTTPStatusCode, InquiryType } from '@/enums';

export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const subject = `New Contact Form Submission: ${formData.inquiryType}`;
    let messageDetails = '';

    if (formData.inquiryType === InquiryType.ProjectDevelopment) {
      messageDetails = `
        Project Type: ${formData.projectType || 'Not specified'}
        Budget: ${formData.budget || 'Not specified'}
        Timeline: ${formData.timeline || 'Not specified'}
      `;
    } else if (formData.inquiryType === InquiryType.CareerOpportunities) {
      messageDetails = `
        Position: ${formData.careerPosition || 'Not specified'}
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject,
      text: `
        New contact form submission from ${formData.firstName} ${formData.lastName}
        
        Contact Information:
        -------------------
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phoneCode} ${formData.phoneNumber}
        Company: ${formData.company || 'Not provided'}
        
        Inquiry Details:
        ---------------
        Type: ${formData.inquiryType}
        ${messageDetails}
        
        Message:
        -------
        ${formData.message}
      `,
      html: `
        <h2>New contact form submission from ${formData.firstName} ${formData.lastName}</h2>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phoneCode} ${formData.phoneNumber}</li>
          <li><strong>Company:</strong> ${formData.company || 'Not provided'}</li>
        </ul>
        
        <h3>Inquiry Details:</h3>
        <p><strong>Type:</strong> ${formData.inquiryType}</p>
        ${
          formData.inquiryType === InquiryType.ProjectDevelopment
            ? `
              <ul>
                <li><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</li>
                <li><strong>Budget:</strong> ${formData.budget || 'Not specified'}</li>
                <li><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</li>
              </ul>
            `
            : formData.inquiryType === InquiryType.CareerOpportunities
              ? `<p><strong>Position:</strong> ${formData.careerPosition || 'Not specified'}</p>`
              : ''
        }
        
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: HTTPStatusCode.NO_CONTENT }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: HTTPStatusCode.INTERNAL_SERVER_ERROR }
    );
  }
}
