import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  // 1. Verificación de seguridad de Stripe
  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('⚠️ Error de seguridad:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // 2. ¡EL PAGO ES OFICIAL!
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Extraemos todos los datos del cliente
    const customerName = session.customer_details?.name;
    const customerEmail = session.customer_details?.email;
    const shipping = session.shipping_details?.address;

    console.log(`💰 ¡Pago exitoso de ${customerName}!`);

    // 3. ENVIAMOS LA ORDEN AL ALMACÉN DE CJ DROPSHIPPING
    try {
      // Preparamos la caja con la etiqueta de envío
      const orderData = {
        orderNumber: session.id, // El recibo de Stripe es tu número de orden
        shippingAddress: {
          name: customerName,
          phone: session.customer_details?.phone || "0000000000",
          email: customerEmail,
          address1: shipping?.line1,
          city: shipping?.city,
          province: shipping?.state,
          countryCode: shipping?.country,
          zip: shipping?.postal_code
        },
        products: [
          {
            sku: "SKU_PENDIENTE", // <--- Aquí pondremos el código de la depiladora
            quantity: 1
          }
        ]
      };

      // Mandamos la señal electrónica a China/USA
      const cjResponse = await fetch('https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CJ-Access-Token': process.env.CJ_API_KEY
        },
        body: JSON.stringify(orderData)
      });

      const cjResult = await cjResponse.json();
      console.log('📦 Respuesta del Almacén CJ:', cjResult);

    } catch (error) {
      console.error('⚠️ Error de comunicación con CJ:', error);
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}