export default function AmuFoundation() {
  return (
    <div className="h-full w-full flex flex-col justify-between bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 p-16">
      <div className="flex items-center gap-8">
        <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <img 
            src="/img/amulogo.png" 
            alt="AMU Logo" 
            class="w-32 h-32 object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-7xl font-black text-white mb-2 tracking-tight">
            AMU Foundation
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-4xl font-semibold text-white leading-relaxed">
          Empowering Children through Education, Music and Sports
        </p>
        
        <div className="w-32 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
}