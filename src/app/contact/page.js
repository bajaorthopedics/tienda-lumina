import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-[#F8F9FA] text-[#0A1E3C]">
      <div className="max-w-2xl w-full bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100 text-center">
        <div className="text-5xl mb-6">💌</div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#0A1E3C]">Estamos para ayudarte</h1>
        
        <p className="text-gray-500 font-light leading-relaxed mb-8">
          Ya sea que tengas dudas sobre tu envío, sobre cómo usar tu depiladora Fiasella, o necesites hacer válida tu garantía, nuestro equipo está a un mensaje de distancia.
        </p>

        <div className="bg-[#fcfaf5] p-6 rounded-2xl border border-[#f0e6d2] mb-12">
          <h3 className="font-semibold text-[#0A1E3C] mb-2">Escríbenos a nuestro correo oficial:</h3>
          <a href="mailto:soporte@fiasella.com" className="text-2xl font-bold text-[#D4AF37] hover:text-[#0A1E3C] transition-colors">
            soporte@fiasella.com
          </a>
          <p className="text-xs text-gray-400 mt-4">* Respondemos todos los correos en un máximo de 24 a 48 horas hábiles.</p>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <Link href="/" className="text-[#0A1E3C] font-medium tracking-widest uppercase text-xs hover:text-[#D4AF37] transition-colors">
            ← Volver a la tienda
          </Link>
        </div>
      </div>
    </main>
  );
}