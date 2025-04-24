export const dynamic = 'force-dynamic';

import { sendEmail } from '@/lib/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  try {
    await sendEmail(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
