import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Conectamos con Stripe usando la llave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  // 1. Stripe toca la puerta y verificamos que sea realmente Stripe (Seguridad)
  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('⚠️ Error de seguridad en el Webhook:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // 2. Si el pago fue 100% exitoso, extraemos los datos
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Sacamos la información vital del cliente
    const customerName = session.customer_details?.name;
    const customerEmail = session.customer_details?.email;
    const shipping = session.shipping_details?.address;

    console.log(`💰 ¡Pago exitoso de ${customerName}!`);
    console.log(`📦 Dirección de envío: ${shipping?.line1}, ${shipping?.city}, ${shipping?.country}`);

    // 3. AQUÍ CONECTAREMOS CON CJ DROPSHIPPING
    // (El código de la API de CJ entrará aquí en el siguiente paso)
  }

  // Le respondemos a Stripe que recibimos el mensaje fuerte y claro
  return NextResponse.json({ received: true }, { status: 200 });
}