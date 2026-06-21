export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#F8F9FA] text-[#0A1E3C]">
      
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center flex flex-col gap-8">
        {/* El Logo en Texto */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-[#0A1E3C]">
          FIASELLA.
        </h1>
        
        {/* Tu Frase Principal */}
        <h2 className="text-2xl md:text-4xl italic text-gray-700 mt-4">
          Seda Pura. Luz Infinitamente Bella.
        </h2>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mt-4 font-light mx-auto">
          Descubre la tecnología de luz pulsada con enfriamiento de cristal. 
          Resultados de clínica dermatológica, desde la intimidad de tu hogar.
        </p>

        {/* 📸 Imagen de tu Producto Premium */}
        <div className="mt-8 w-full max-w-md mx-auto">
          <img 
            src="/producto.png" 
            alt="Depiladora Fiasella IPL Premium" 
            className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-gray-100"
          />
        </div>
        
        {/* 💳 Tu Enlace de Cobro Stripe */}
        <a 
          href="https://buy.stripe.com/6oU5kF9j9dWj5gpcae04800"
          className="mt-6 px-12 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-sm hover:bg-gray-800 transition-all duration-300 shadow-xl block w-fit mx-auto"
        >
          Descubre tu Fiasella - $129
        </a>
      </div>

    </main>
  );
}