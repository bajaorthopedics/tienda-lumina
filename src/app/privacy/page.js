import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24 bg-[#F8F9FA] text-[#0A1E3C]">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#0A1E3C]">Política de Privacidad</h1>
        
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>En <strong>Fiasella</strong>, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando visitas o haces una compra en nuestra tienda.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">1. Información que recopilamos</h2>
          <p>Cuando realizas una compra, recopilamos información necesaria para procesar tu pedido: tu nombre, dirección de envío, correo electrónico y detalles de pago. Tus pagos son procesados de forma segura a través de Stripe; nosotros no almacenamos los datos de tu tarjeta de crédito.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">2. Cómo usamos tu información</h2>
          <p>Utilizamos tu información exclusivamente para enviarte tu depiladora Fiasella, comunicarnos contigo sobre tu pedido (como enviarte tu número de seguimiento de CJ) y, si lo autorizas, enviarte promociones exclusivas.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">3. Protección de datos</h2>
          <p>Tus datos son sagrados. Nunca venderemos, alquilaremos ni compartiremos tu información personal con terceros para fines de marketing. Toda la información viaja encriptada bajo estrictos estándares de seguridad web.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-[#0A1E3C] font-medium tracking-widest uppercase text-xs hover:text-[#D4AF37] transition-colors">
            ← Volver a la tienda
          </Link>
        </div>
      </div>
    </main>
  );
}