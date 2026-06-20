import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request) {
  try {
    // 1. Verificación de seguridad: Revisamos si la Mac está leyendo la contraseña
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("🚨 FATAL: No se encontró STRIPE_SECRET_KEY. El archivo .env.local no está en el lugar correcto.");
    }

    // 2. Iniciamos Stripe solo si la clave existe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Kit Completo Lumina IPL',
              description: 'Depiladora IPL, lentes de protección y guía digital.',
            },
            unit_amount: 6900, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Si NEXT_PUBLIC_BASE_URL falla, usamos localhost por defecto para que no se rompa
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/`,
    });

    return NextResponse.json({ url: session.url });
    
  } catch (error) {
    // 3. Imprimimos el error exacto en tu terminal y devolvemos JSON válido para evitar el error HTML
    console.error('Detalle del error en el servidor:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}