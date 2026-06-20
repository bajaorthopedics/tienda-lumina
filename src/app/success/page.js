import React from 'react';

export default function SuccessPage() {
  return (
    <main className="bg-rose-50 min-h-screen flex items-center justify-center p-4 text-gray-800">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center space-y-6">
        
        {/* Ícono de éxito animado */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto shadow-sm">
          🎉
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-950">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-gray-600">
            Muchas gracias por tu compra. Tu pago se ha procesado de forma 100% segura.
          </p>
        </div>

        {/* Resumen del pedido para dar tranquilidad */}
        <div className="bg-rose-50/50 p-4 rounded-2xl text-left border border-rose-100 space-y-2 text-sm text-gray-600">
          <p className="font-semibold text-gray-800 mb-1">Resumen del envío:</p>
          <p>📦 Producto: Kit Completo Lumina IPL</p>
          <p>🚚 Envío: Express Gratuito (Asegurado)</p>
          <p>📧 Confirmación: Enviada a tu correo electrónico</p>
        </div>

        <div className="pt-2">
          <a 
            href="/" 
            className="inline-block w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
          >
            Volver a la tienda
          </a>
        </div>
        
        <p className="text-xs text-gray-400">
          ¿Tienes alguna duda? Soporte 24/7 en soporte@lumina.com
        </p>
      </div>
    </main>
  );
}