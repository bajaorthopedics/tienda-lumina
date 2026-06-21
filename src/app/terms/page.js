import Link from 'next/link';

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24 bg-[#F8F9FA] text-[#0A1E3C]">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#0A1E3C]">Términos del Servicio</h1>
        
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>Al visitar nuestro sitio y/o comprar algo de nosotros, participas en nuestro "Servicio" y aceptas los siguientes términos y condiciones.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">1. Uso de la Tienda</h2>
          <p>Al aceptar estos Términos, declaras que tienes al menos la mayoría de edad en tu estado o provincia de residencia. No puedes usar nuestros productos para ningún propósito ilegal o no autorizado.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">2. Precios y Modificaciones</h2>
          <p>Los precios de nuestros productos (como nuestra Depiladora IPL) están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar o descontinuar el Servicio (o cualquier parte del contenido) en cualquier momento.</p>

          <h2 className="text-xl font-semibold text-[#0A1E3C] mt-8">3. Exactitud de Facturación</h2>
          <p>Nos reservamos el derecho de rechazar cualquier pedido que realices con nosotros. Aceptas proporcionar información de compra y cuenta actual, completa y precisa para todas las compras realizadas en nuestra tienda.</p>
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