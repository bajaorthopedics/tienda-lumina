import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-[#F8F9FA] text-[#0A1E3C]">
        
        {/* --- SECCIÓN 1: PORTADA PRINCIPAL (HERO) --- */}
        <div className="z-10 max-w-5xl w-full items-center justify-center text-center flex flex-col gap-8 pt-10">
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-[#0A1E3C]">
            FIASELLA.
          </h1>
          
          <h2 className="text-2xl md:text-4xl italic text-gray-700 mt-4">
            Seda Pura. Luz Infinitamente Bella.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mt-4 font-light mx-auto">
            Descubre la tecnología de luz pulsada con enfriamiento de cristal. 
            Resultados de clínica dermatológica, desde la intimidad de tu hogar.
          </p>

          <div className="mt-8 w-full max-w-md mx-auto">
            <img 
              src="/producto.png" 
              alt="Depiladora Fiasella IPL Premium" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-gray-100"
            />
          </div>
          
          <a 
            href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800"
            className="mt-6 px-12 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-sm hover:bg-gray-800 transition-all duration-300 shadow-xl block w-fit mx-auto"
          >
            Descubre tu Fiasella - $129
          </a>

          <div className="flex flex-col md:flex-row gap-8 mt-4 text-sm text-gray-600 font-light justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">📦</span> Envío Gratis
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🛡️</span> Garantía de 90 Días
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔒</span> Pago 100% Seguro
            </div>
          </div>
        </div>

        {/* --- SECCIÓN 2: BENEFICIOS Y TECNOLOGÍA --- */}
        <section className="w-full max-w-6xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-200 pt-20">
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="text-4xl">❄️</div>
            <h3 className="text-2xl font-serif font-bold text-[#0A1E3C]">Cristal de Zafiro</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Tecnología de enfriamiento al punto de congelación. Protege tu piel mientras elimina el vello de raíz, garantizando una experiencia sin dolor.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="text-4xl">✨</div>
            <h3 className="text-2xl font-serif font-bold text-[#0A1E3C]">Resultados Reales</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Piel suave y libre de vello visible en tan solo unas semanas de uso constante. Detiene el crecimiento sin irritación.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="text-4xl">💎</div>
            <h3 className="text-2xl font-serif font-bold text-[#0A1E3C]">Calidad de Clínica</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Diseñada con materiales premium y ergonomía perfecta para alcanzar cualquier zona de tu cuerpo con total comodidad.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN 3: TESTIMONIOS (PRUEBA SOCIAL) --- */}
        <section className="w-full max-w-5xl mt-24 border-t border-gray-200 pt-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0A1E3C] mb-12">
            Amada por nuestras clientas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"Estaba cansada del dolor de la cera y de gastar una fortuna en la clínica. Fiasella cambió mi rutina por completo. ¡No duele nada!"</p>
              <p className="text-[#0A1E3C] font-semibold">— Mariana R.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"El diseño es hermoso y súper elegante. Llevo 4 semanas usándola y ya noto zonas donde el vello dejó de crecer. Vale cada centavo."</p>
              <p className="text-[#0A1E3C] font-semibold">— Sofía T.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[#D4AF37] tracking-widest mb-4">★★★★★</div>
              <p className="text-gray-600 font-light italic mb-6">"Tenía mis dudas pero es una maravilla. El paquete llegó súper rápido y el dispositivo se siente muy premium. Recomiendo 100%."</p>
              <p className="text-[#0A1E3C] font-semibold">— Valeria G.</p>
            </div>

          </div>
        </section>

      </main>

      {/* --- SECCIÓN 4: PIE DE PÁGINA (FOOTER) --- */}
      <footer className="w-full bg-[#0A1E3C] text-white py-12 flex flex-col items-center justify-center">
        <div className="text-2xl font-serif font-bold tracking-widest mb-6">FIASELLA.</div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-light justify-center px-4">
          <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Términos del Servicio</span>
          <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Política de Privacidad</span>
          
          {/* EL ENLACE CONECTADO AQUÍ ABAJO */}
          <Link href="/refund" className="hover:text-[#D4AF37] transition-colors cursor-pointer">
            Política de Reembolso
          </Link>
          
          <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Contacto</span>
        </div>
        
        <p className="text-gray-500 text-xs mt-8">
          © 2026 Fiasella. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}