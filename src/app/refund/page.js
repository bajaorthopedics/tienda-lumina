import Link from 'next/link';

export default function Refund() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24 bg-[#F8F9FA] text-[#0A1E3C]">
      
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#0A1E3C]">
          Política de Reembolso
        </h1>
        
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>
            En <strong>Fiasella</strong>, estamos comprometidos con la calidad de nuestra tecnología y tu absoluta satisfacción. Por ello, ofrecemos una Garantía de Resultados de 90 Días.
          </p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">1. Condiciones de la Garantía de 90 Días</h2>
          <p>
            Nuestra depiladora IPL requiere consistencia. Para ser elegible para un reembolso bajo esta garantía, debes haber utilizado el dispositivo siguiendo las instrucciones del manual durante al menos 60 días consecutivos. Si después de este periodo no notas una reducción significativa del vello, te devolveremos tu dinero.
          </p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">2. Devoluciones por defectos de fábrica</h2>
          <p>
            Si tu dispositivo llega dañado o presenta fallas técnicas de fábrica dentro de los primeros 30 días posteriores a la entrega, cubriremos el costo del envío de retorno y te enviaremos un reemplazo totalmente nuevo sin costo adicional.
          </p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">3. Proceso de Devolución</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envía un correo a nuestro equipo de soporte con tu número de orden.</li>
            <li>Adjunta evidencia fotográfica o en video si se trata de un defecto.</li>
            <li>Una vez aprobada tu solicitud, te proporcionaremos las instrucciones para el envío de retorno.</li>
          </ul>

          <p className="mt-8 text-sm italic">
            * Los reembolsos se emitirán al método de pago original y pueden tardar entre 5 y 10 días hábiles en reflejarse en tu estado de cuenta, dependiendo de tu banco.
          </p>
        </div>

        {/* Botón de regreso */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link 
            href="/" 
            className="text-[#0A1E3C] font-medium tracking-widest uppercase text-xs hover:text-[#D4AF37] transition-colors"
          >
            ← Volver a la tienda
          </Link>
        </div>
      </div>

    </main>
  );
}