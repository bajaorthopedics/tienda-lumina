{/* --- SECCIÓN 8: PIE DE PÁGINA (FOOTER) --- */}
      <footer className="w-full bg-[#051124] text-white py-12 flex flex-col items-center justify-center">
        <div className="text-2xl font-serif font-bold tracking-widest mb-6">FIASELLA.</div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-light justify-center px-4">
          <Link href="/terms" className="hover:text-[#D4AF37] transition-colors cursor-pointer">Términos del Servicio</Link>
          <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors cursor-pointer">Política de Privacidad</Link>
          <Link href="/refund" className="hover:text-[#D4AF37] transition-colors cursor-pointer">Política de Reembolso</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors cursor-pointer">Contacto</Link>
        </div>
        
        <p className="text-gray-500 text-xs mt-8">
          © 2026 Fiasella. Todos los derechos reservados.
        </p>
      </footer>