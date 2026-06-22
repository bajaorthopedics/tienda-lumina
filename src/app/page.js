"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Estado para controlar el Pop-up de ventas
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // El pop-up aparece a los 4 segundos
    const timer1 = setTimeout(() => setShowPopup(true), 4000);
    // Y desaparece a los 12 segundos
    const timer2 = setTimeout(() => setShowPopup(false), 12000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="bg-[#D4AF37] text-[#0A1E3C] text-xs font-bold text-center py-2 tracking-widest uppercase">
        ✨ Envío asegurado y gratuito a todo el país activo hoy ✨
      </div>

      <main className="flex min-h-screen flex-col items-center justify-start bg-[#F8F9FA] text-[#0A1E3C] overflow-hidden">
        
        {/* --- SECCIÓN 1: PORTADA --- */}
        <div className="z-10 max-w-5xl w-full items-center justify-center text-center flex flex-col gap-8 pt-16 px-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-[#0A1E3C]">FIASELLA.</h1>
          <h2 className="text-2xl md:text-4xl italic text-gray-700 mt-2">Seda Pura. Luz Infinitamente Bella.</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mt-4 font-light mx-auto">
            Descubre la tecnología de luz pulsada con enfriamiento de zafiro. Resultados de clínica dermatológica, desde la intimidad de tu hogar.
          </p>

          <div className="mt-8 w-full max-w-sm mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#0A1E3C] rounded-2xl blur opacity-20 animate-pulse"></div>
            <img src="/producto.png" alt="Depiladora Fiasella IPL" className="relative w-full h-[250px] md:h-[350px] object-contain rounded-2xl shadow-2xl border border-gray-100 bg-white p-6" />
          </div>
          
          <a href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800" className="mt-6 px-12 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-sm hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl block w-fit mx-auto">
            Descubre tu Fiasella - $129
          </a>

          <div className="flex flex-col md:flex-row gap-8 mt-6 text-sm text-gray-600 font-light justify-center items-center">
            <div className="flex items-center gap-2"><span className="text-xl">📦</span> Envío Gratis</div>
            <div className="flex items-center gap-2"><span className="text-xl">🛡️</span> Garantía 90 Días</div>
            <div className="flex items-center gap-2"><span className="text-xl">🔒</span> Pago Seguro</div>
          </div>
        </div>

        {/* --- BARRA DE AUTORIDAD --- */}
        <div className="w-full border-y border-gray-200 bg-white mt-16 py-8">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">La tecnología de la que todas hablan</p>
          <div className="flex justify-center gap-12 md:gap-24 text-gray-300 font-serif text-xl md:text-2xl opacity-70">
            <span>VOGUE</span>
            <span>COSMOPOLITAN</span>
            <span>ELLE</span>
            <span className="hidden md:inline">BAZAAR</span>
          </div>
        </div>

        {/* --- SECCIÓN 2: CÓMO FUNCIONA --- */}
        <section className="w-full mt-24 py-10 px-8 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1E3C] mb-16">Tu rutina de belleza, simplificada.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#0A1E3C] text-[#D4AF37] flex items-center justify-center text-2xl font-serif font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Prepara</h3>
              <p className="text-gray-500 font-light">Rasura la zona deseada de 12 a 24 horas antes para que la luz penetre en la raíz.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#0A1E3C] text-[#D4AF37] flex items-center justify-center text-2xl font-serif font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Enciende</h3>
              <p className="text-gray-500 font-light">Selecciona el nivel de intensidad adecuado y ponte tus gafas protectoras.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#0A1E3C] text-[#D4AF37] flex items-center justify-center text-2xl font-serif font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Desliza</h3>
              <p className="text-gray-500 font-light">Coloca el dispositivo a 90° sobre tu piel y presiona el botón. Sin dolor.</p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 3: GALERÍA VISUAL --- */}
        <section className="w-full max-w-6xl mx-auto mt-32 px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-[#0A1E3C] mb-12">Diseño premium. Resultados excepcionales.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[250px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
              <img src="/galeria1.png" alt="Fiasella Detalle" className="w-full h-full object-contain" />
            </div>
            <div className="h-[250px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
              <img src="/galeria2.png" alt="Fiasella Uso" className="w-full h-full object-contain" />
            </div>
            <div className="h-[250px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
              <img src="/galeria3.png" alt="Fiasella Estilo" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">*Imágenes ilustrativas de nuestro modelo de zafiro.</p>
        </section>

        {/* --- SECCIÓN 4: TABLA DE COMPARACIÓN --- */}
        <section className="w-full max-w-4xl mx-auto mt-32 px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0A1E3C] mb-12">La inversión más inteligente</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="p-4 font-serif font-bold border-b border-gray-700">Característica</th>
                  <th className="p-4 font-serif font-bold border-b border-gray-700 text-[#D4AF37]">Fiasella IPL</th>
                  <th className="p-4 font-serif font-light border-b border-gray-700">Láser en Clínica</th>
                  <th className="p-4 font-serif font-light border-b border-gray-700">Cera</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0A1E3C]">Costo total</td>
                  <td className="p-4 bg-[#fcfaf5] font-bold text-[#0A1E3C]">$129 (Pago único)</td>
                  <td className="p-4">+$1,000 USD</td>
                  <td className="p-4">+$300 USD al año</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0A1E3C]">Dolor</td>
                  <td className="p-4 bg-[#fcfaf5] text-green-600 font-medium">Sin dolor (Zafiro)</td>
                  <td className="p-4">Moderado / Alto</td>
                  <td className="p-4 text-red-500">Alto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- SECCIÓN 5: TESTIMONIOS (EXTRAÍDOS DE TU CSV) --- */}
        <section className="w-full max-w-6xl mx-auto mt-32 px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0A1E3C] mb-12">Lo que dicen nuestras clientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#D4AF37] tracking-widest text-sm">★★★★★</div>
                <span className="text-xs text-gray-400">Chile</span>
              </div>
              <p className="text-gray-600 font-light italic mb-6 flex-grow text-sm">"Impecable, la compré para mi mamá porque tuve buenos resultados con la mía. Los vellitos tardan en desaparecer, pero con paciencia se van todos."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-xs font-bold">F</div>
                <p className="text-[#0A1E3C] font-semibold text-sm">F***z</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#D4AF37] tracking-widest text-sm">★★★★★</div>
                <span className="text-xs text-gray-400">Chile</span>
              </div>
              <p className="text-gray-600 font-light italic mb-6 flex-grow text-sm">"Llegó súper rápido, en solo 9 días. Ya la empecé a usar y se siente de excelente calidad y sin dolor."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-xs font-bold">M</div>
                <p className="text-[#0A1E3C] font-semibold text-sm">M***o</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#D4AF37] tracking-widest text-sm">★★★★★</div>
                <span className="text-xs text-gray-400">México</span>
              </div>
              <p className="text-gray-600 font-light italic mb-6 flex-grow text-sm">"Wow, realmente funciona. Llevo un par de semanas y ya noto la diferencia, solo necesitas constancia para ver los resultados finales."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-xs font-bold">M</div>
                <p className="text-[#0A1E3C] font-semibold text-sm">M***a</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#D4AF37] tracking-widest text-sm">★★★★★</div>
                <span className="text-xs text-gray-400">Colombia</span>
              </div>
              <p className="text-gray-600 font-light italic mb-6 flex-grow text-sm">"El empaque es excelente. Llegó exactamente como en la descripción y funciona de maravilla. La recomiendo 100%."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center text-xs font-bold">A</div>
                <p className="text-[#0A1E3C] font-semibold text-sm">A***z</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- LLAMADO A LA ACCIÓN FINAL --- */}
        <section className="w-full bg-[#0A1E3C] text-white py-20 text-center px-8 mt-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Lista para piel de seda?</h2>
          <a href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800" className="px-12 py-4 bg-white text-[#0A1E3C] font-bold tracking-widest uppercase text-sm hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl inline-block mt-8">
            Comprar Fiasella - $129
          </a>
        </section>

      </main>

      {/* --- PIE DE PÁGINA (FOOTER) --- */}
      <footer className="w-full bg-[#051124] text-white py-12 flex flex-col items-center justify-center relative z-10">
        <div className="text-2xl font-serif font-bold tracking-widest mb-6">FIASELLA.</div>
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-light justify-center px-4">
          <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Términos del Servicio</Link>
          <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</Link>
          <Link href="/refund" className="hover:text-[#D4AF37] transition-colors">Política de Reembolso</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contacto</Link>
        </div>
        <p className="text-gray-500 text-xs mt-8">© 2026 Fiasella. Todos los derechos reservados.</p>
      </footer>

      {/* --- EL POP-UP DE PRUEBA SOCIAL --- */}
      <div 
        className={`fixed bottom-6 md:bottom-24 left-6 z-40 transition-all duration-700 ease-out transform ${
          showPopup ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <a href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800" className="block bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-3 max-w-[280px] md:max-w-xs hover:scale-105 transition-transform">
          <div className="bg-[#f8f9fa] rounded-lg p-1 shrink-0">
            <img src="/producto.png" alt="Fiasella" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-gray-400 mb-0.5">Hace 15 minutos</p>
            <p className="text-xs md:text-sm text-[#0A1E3C] font-bold">F***z desde Chile</p>
            <p className="text-[10px] md:text-xs text-gray-500">Compró una Fiasella IPL</p>
          </div>
          <div className="text-green-500 ml-1 shrink-0 bg-green-50 rounded-full p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </div>
        </a>
      </div>

    </>
  );
}