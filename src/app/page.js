"use client";
import React, { useState } from 'react';

export default function Home() {
  const [cargando, setCargando] = useState(false);

  const handleCheckout = async () => {
    setCargando(true);
    try {
      const response = await fetch('/api/checkout', { method: 'POST' });
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url; 
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <main>
      {/* SECCIÓN 1: HERO */}
      <section className="bg-rose-50 text-gray-800 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm">La revolución en el cuidado personal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Piel suave y sin vello <br /><span className="text-rose-600">desde la comodidad de tu casa.</span>
            </h1>
            <p className="text-lg text-gray-600">Olvídate de las costosas y dolorosas visitas al salón. Con la nueva Lumina IPL, obtén resultados profesionales y permanentes en tiempo récord.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#comprar" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 text-center">
                Comprar Ahora - 50% Dto
              </a>
            </div>
            <div className="flex gap-6 pt-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2"><span>✅</span> Envío Gratis</div>
              <div className="flex items-center gap-2"><span>🛡️</span> 90 Días de Garantía</div>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0">
            <div className="absolute inset-0 bg-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img src="https://via.placeholder.com/600x600?text=Foto+Premium+de+la+Depiladora" alt="Depiladora Lumina IPL" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform transition hover:-translate-y-2 object-cover"/>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 y 3 */}
      <section className="py-24 bg-white text-gray-800 px-4"><div className="max-w-7xl mx-auto text-center"><h2 className="text-3xl font-bold mb-4">¿Por qué elegir Lumina IPL?</h2></div></section>
      
      {/* SECCIÓN 4: CHECKOUT */}
      <section id="comprar" className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 flex justify-center items-center bg-gray-700">
            <img src="https://via.placeholder.com/400x400?text=Caja+del+Producto" alt="Kit Lumina IPL" className="w-full h-auto rounded-2xl transform transition hover:scale-105"/>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-rose-400 font-bold mb-2">Oferta por tiempo limitado</div>
            <h2 className="text-3xl font-extrabold mb-4">Kit Completo Lumina IPL</h2>
            <ul className="mb-6 space-y-3 text-gray-300">
              <li className="flex items-center gap-2"><span>✅</span> Depiladora Lumina IPL V2</li>
              <li className="flex items-center gap-2"><span>✅</span> Envío Express Gratuito</li>
            </ul>
            <div className="mb-8">
              <span className="text-gray-400 line-through text-2xl mr-3">$139.00 USD</span>
              <span className="text-5xl font-extrabold text-white">$69.00 USD</span>
            </div>
            
            <button 
              onClick={handleCheckout} 
              disabled={cargando}
              className={`w-full font-bold py-5 px-6 rounded-xl text-xl shadow-lg transform transition flex justify-center items-center gap-3 ${cargando ? 'bg-gray-500 cursor-not-allowed' : 'bg-rose-600 hover:bg-rose-500 hover:-translate-y-1'}`}
            >
              {cargando ? 'Procesando pago...' : '💳 Finalizar Compra Segura'}
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">Pagos encriptados de 256-bits por Stripe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}