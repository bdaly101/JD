import Image from "next/image";

export default function Aliens() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-purple-500 mb-8">
          Aliens Are Among Us: The Ultimate Cover-Up
        </h1>

        <div className="relative w-full max-w-lg h-64 mx-auto mb-8">
          <Image
            src="/images/aliens.jpeg"
            alt="Alien Invasion"
            fill
            objectFit="contain"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            They walk among us, and they’re not hiding anymore. Aliens have been
            infiltrating Earth for decades, but the truth is being covered up by
            governments worldwide. These extraterrestrial beings hold positions
            of power in politics, business, and even Hollywood.
          </p>
          <p>
            The Roswell incident was only the beginning. Since then, secret
            treaties have been signed, allowing alien species to experiment on
            humans in exchange for advanced technology. This tech is now used to
            control us through phones, computers, and other so-called “modern
            conveniences.”
          </p>
          <p>
            Wake up! Reports from whistleblowers reveal that Area 51 isn’t just
            a storage facility—it’s a bustling hub for alien diplomacy and
            genetic experiments. The evidence is all around you. Look closely
            next time you see a “cloud”—is it really a cloud, or is it their
            ship watching you?
          </p>
        </div>
      </div>
    </div>
  );
}
