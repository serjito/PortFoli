export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('N8N_WEBHOOK_URL no está configurada');
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const data = await req.json();

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook respondió con status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar al webhook de n8n:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
