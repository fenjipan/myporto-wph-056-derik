import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import { Resend } from 'resend';

import ContactEmail from '@/emails/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const html = await render(ContactEmail({ name, email, message }));

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['dwilderik@gmail.com'],
      replyTo: email,
      subject: `New message from ${name}`,
      html,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Send route error:', err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : 'Failed to send email. Please try again.',
      },
      { status: 500 }
    );
  }
}
