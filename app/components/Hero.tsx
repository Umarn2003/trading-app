import Image from "next/image";

export default function Hero() {
  return (
   <section
      className="relative min-h-screen overflow-hidden text-white
  bg-black"
    >
      <Image
        src="/bg.png"
        alt="Lightning Background"
        fill
        className="object-cover opacity-50"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-[42px] font-extrabold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl text-white">
              Markets move fast.
              <br />
              So can you.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/75">
              Trade global markets with our award-winning trading platform.
            </p>

            <div className="mt-7 flex gap-4">
              <button className="rounded-2xl  duration-300 transition bg-yellow-500 px-14 py-3 font-semibold shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-black hover:text-white/70">
                Start trading
              </button>
              <button className="rounded-2xl transition duration-300 bg-yellow-500 px-12 py-3  font-semibold shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-black hover:text-white/70">
                Try free demo
              </button>
            </div>
          </div>

          <div className="relative ml-20 mt-20 lg:mt-20 opacity-90">
            <Image
              src="/heropic.jpg"
              alt="Trading platform"
              width={700}
              height={800}
              className="relative z-10 rounded-3xl mt-20"
              priority
            />
          </div>
        </div>

        <div className=" flex flex-wrap items-center gap-8 text-sm text-white/80 ">
          <div className="border-r-2 border-white/70 px-2">
            <p className="text-lg font-bold text-white mr-4">32 Million+</p>
            <p>Registered customers</p>
          </div>

          <div className="border-r-2 border-white/70 px-2">
            <p className="text-lg font-bold text-white">
              <span className="text-green-800">★ </span>4.2
            </p>
            <p>Trustpilot rating</p>
          </div>

          <div className="border-r-2 border-white/70 px-2">
            <p className="font-semibold text-white">London Stock Exchange</p>
            <p>Listed since 2013</p>
          </div>

          <div>
            <p className="font-semibold text-white">Chicago Bulls</p>
            <p>Official partner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
