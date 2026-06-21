import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-[#D4AF37] text-[#0A1E3C] text-xs font-bold text-center py-2 tracking-widest uppercase">
        ✨ Envío asegurado y gratuito a todo el país activo hoy ✨
      </div>

      <main className="flex min-h-screen flex-col items-center justify-start bg-[#F8F9FA] text-[#0A1E3C]">
        
        {/* --- SECCIÓN 1: PORTADA --- */}
        <div className="z-10 max-w-5xl w-full items-center justify-center text-center flex flex-col gap-8 pt-16 px-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-[#0A1E3C]">FIASELLA.</h1>
          <h2 className="text-2xl md:text-4xl italic text-gray-700 mt-2">Seda Pura. Luz Infinitamente Bella.</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mt-4 font-light mx-auto">
            Descubre la tecnología de luz pulsada con enfriamiento de zafiro. Resultados de clínica dermatológica, desde la intimidad de tu hogar.
          </p>

          <div className="mt-8 w-full max-w-md mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#0A1E3C] rounded-2xl blur opacity-20"></div>
            <img src="/producto.png" alt="Depiladora Fiasella IPL" className="relative w-full h-auto object-contain rounded-2xl shadow-2xl border border-gray-100 bg-white p-4" />
          </div>
          
          <a href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800" className="mt-6 px-12 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-sm hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl block w-fit mx-auto">
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

        {/* --- SECCIÓN 3: GALERÍA VISUAL (TAMAÑOS CORREGIDOS) --- */}
        <section className="w-full max-w-6xl mx-auto mt-32 px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-[#0A1E3C] mb-12">Diseño premium. Resultados excepcionales.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex items-center justify-center p-6">
              <img src="/galeria1.png" alt="Fiasella Detalle" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="h-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex items-center justify-center p-6">
              <img src="/galeria2.png" alt="Fiasella Uso" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="h-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex items-center justify-center p-6">
              <img src="/galeria3.png" alt="Fiasella Estilo" className="max-w-full max-h-full object-contain" />
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

        {/* --- SECCIÓN 5: TESTIMONIOS --- */}
        <section className="w-full max-w-5xl mx-auto mt-32 px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0A1E3C] mb-12">Amada por nuestras clientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"Estaba cansada del dolor de la cera. Fiasella cambió mi rutina por completo."</p>
              <p className="text-[#0A1E3C] font-semibold">— Mariana R.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"Llevo 4 semanas usándola y ya noto zonas donde el vello dejó de crecer."</p>
              <p className="text-[#0A1E3C] font-semibold">— Sofía T.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"El paquete llegó súper rápido y se siente muy premium. Recomiendo 100%."</p>
              <p className="text-[#0A1E3C] font-semibold">— Valeria G.</p>
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
      <footer className="w-full bg-[#051124] text-white py-12 flex flex-col items-center justify-center">
        <div className="text-2xl font-serif font-bold tracking-widest mb-6">FIASELLA.</div>
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-light justify-center px-4">
          <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Términos del Servicio</Link>
          <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</Link>
          <Link href="/refund" className="hover:text-[#D4AF37] transition-colors">Política de Reembolso</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contacto</Link>
        </div>
        <p className="text-gray-500 text-xs mt-8">© 2026 Fiasella. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}