export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col relative bg-gradient-to-br from-[#FF9D6C] via-[#BB6BD9] to-[#56CCF2] selection:bg-white/30 text-[#1A237E]">
        <nav className="w-full p-8 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-black tracking-tight">
                    Sivan Biham
                </h2>
            </div>
        </nav>

        <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16 relative">
            <div className="relative mb-10">
                <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-150"></div>
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="User Portrait"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
                />
            </div>

            <div className="backdrop-blur-xl bg-white/20 p-8 md:p-12 rounded-[2rem] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-2xl w-full text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-sm">
                    Sivan Biham
                </h1>

                <p className="text-lg md:text-xl text-white/90 font-semibold mb-6">
                    Sivan
                </p>

                <div className="text-white/80 leading-relaxed mb-10 text-base md:text-lg">
                    hello, how are you?
                </div>

                <div className="flex justify-center gap-6">
                    <a href="mailto:sivanbiham@gmail.com" className="group p-4 bg-[#FFEB3B] hover:bg-white rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sbiham/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-[#00A0DC] hover:bg-white rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
                        <svg className="w-6 h-6 text-white group-hover:text-[#00A0DC]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    </div>
  )
}