export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#F8F9FA] text-[#0A1E3C]">
      
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center flex flex-col gap-8">
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
        
        <button className="mt-10 px-12 py-4 bg-[#0A1E3C] text-[#D4AF37] font-medium tracking-widest uppercase text-sm hover:bg-gray-800 transition-all duration-300 shadow-xl">
          Descubre tu Fiasella
        </button>
      </div>

    </main>
  );
}