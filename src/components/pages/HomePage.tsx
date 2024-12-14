import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-red-600 uppercase text-center drop-shadow-md mt-10">
        The Revolution Will Not Be Televised
      </h1>
      
      {/* Image */}
      <div className="mt-6">
        <Image
          src="/public/jd.jpeg"
          alt="Conspiracy Image"
          width={600}
          height={400}
          className="rounded-md border-4 border-red-600 shadow-lg"
        />
      </div>
      
      {/* Description */}
      <p className="mt-8 text-xl text-justify max-w-3xl text-yellow-500 leading-relaxed tracking-wide">
        Welcome to the ultimate source of *truth* that "they" don’t want you to know! Run by yours truly, the only sane person left in this world, this site uncovers **what’s really going on** behind closed doors. 
        Dive into **mind-blowing revelations** and connect the dots that Big Tech, the government, and aliens have been hiding from you!
      </p>

      {/* Links Section */}
      <div className="mt-10 space-y-4 w-full max-w-lg">
        <h2 className="text-4xl font-bold text-green-500 underline">Explore:</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="/pages/flat-earth"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🌍 The Flat Earth Chronicles
            </a>
          </li>
          <li>
            <a
              href="/pages/lizard-people"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🦎 Lizard People in High Places
            </a>
          </li>
          <li>
            <a
              href="/pages/chemtrails"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              ☁️ Chemtrails: A Silent Killer
            </a>
          </li>
          <li>
            <a
              href="/pages/alien-invasion"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              👽 Alien Invasion Is Imminent
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
