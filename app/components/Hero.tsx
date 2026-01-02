import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Arrière-plan éclair"
        fill
        className="object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white mt-55">
              Les marchés évoluent rapidement. Vous aussi.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-lg text-base sm:text-lg text-white/75">
              Les marchés évoluent rapidement. Vous aussi.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto rounded-2xl bg-yellow-500 px-8 sm:px-14 py-3 font-semibold hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] shadow-amber-100 hover:bg-transparent hover:text-white transition duration-300 hover:cursor-pointer hover:border-yellow-500">
                Commencez à trader
              </button>
              <button className="w-full sm:w-auto rounded-2xl bg-yellow-500 px-8 sm:px-14 py-3 font-semibold hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] shadow-amber-100 hover:bg-transparent hover:text-white transition duration-300 hover:cursor-pointer hover:border-yellow-500">
                Essayez la démo gratuite
              </button>
            </div>
          </div>

          {/* Right Side (can be used for image/illustration in future) */}
          <div className="hidden lg:block">
            {/* Optional: add hero image or graphic */}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-8 text-sm md:text-lg text-white/80 mt-25 sm:mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center border-r-0 sm:border-r-2 border-white/70 pr-0 sm:pr-4 gap-2">
            <p className="font-bold text-white">32 Million +</p>
            <p className="text-white/50">Clients enregistrés</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center border-r-0 sm:border-r-2 border-white/70 pr-0 sm:pr-4 gap-2">
            <p className="font-bold text-white">
              <span className="text-green-500">★ </span>4.2
            </p>
            <p className="text-white/50">Note Trustpilot</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:pr-4 gap-2">
            <p className="font-semibold text-white">Bourse de Paris</p>
            <p className="text-white/50">Coté depuis 2013</p>
          </div>
        </div>
      </div>
    </section>
  );
}
