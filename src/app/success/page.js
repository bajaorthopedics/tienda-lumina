import Link from 'next/link';

export default function Success() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#F8F9FA] text-[#0A1E3C]">
      
      <div className="z-10 max-w-2xl w-full items-center justify-center text-center flex flex-col gap-6 p-12 bg-white rounded-3xl shadow-2xl border border-gray-100">
        
        {/* Símbolo de Éxito / Marca */}
        <div className="text-[#D4AF37] text-6xl mb-4">✨</div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-[#0A1E3C]">
          ¡Gracias por tu compra!
        </h1>
        
        <h2 className="text-xl italic text-gray-600 mt-2">
          Bienvenida al mundo Fiasella.
        </h2>
        
        <p className="text-base text-gray-500 mt-4 font-light leading-relaxed">
          Tu pedido ha sido confirmado exitosamente. Ya estamos preparando tu depiladora de cristal de zafiro para envío. 
          En breve recibirás un correo electrónico con tu recibo y tu número de seguimiento.
        </p>
        
        {/* Botón para regresar a la tienda */}
        <Link 
          href="/"
          className="mt-8 px-10 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-xs hover:bg-gray-800 transition-all duration-300"
        >
          Volver a la tienda
        </Link>
        
      </div>

    </main>
  );
}