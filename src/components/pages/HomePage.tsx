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
          src="/images/jd.jpeg"
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
              href="/flatearth"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🌍 The Flat Earth Chronicles
            </a>
          </li>
          <li>
            <a
              href="/lizardpeople"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🦎 Lizard People in High Places
            </a>
          </li>
          <li>
            <a
              href="/chemtrails"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              ☁️ Chemtrails: A Silent Killer
            </a>
          </li>
          <li>
            <a
              href="/catsanddogs"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🐕 The Secret Trade: Cats and Dogs on the Menu
            </a>
          </li>
          <li>
            <a
              href="/eco"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🌱 Eco-Shooting: The Greenwashing of Violence
            </a>
          </li>
          <li>
            <a
              href="/hollywood"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              🎬 Hollywood: A Direct Pipeline to the IDF
            </a>
          </li>
          <li>
            <a
              href="/aliens"
              className="text-2xl text-blue-400 hover:text-red-500 transition"
            >
              👽 Aliens Are Among Us: The Ultimate Cover-Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
