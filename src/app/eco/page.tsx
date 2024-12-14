import Image from "next/image";

export default function EcoShooting() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-green-500 mb-8">
          Eco-Shooting: The Greenwashing of Violence
        </h1>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/eco.jpeg"
            alt="Eco-Shooting Propaganda"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            In a bizarre twist of events, corporations are now claiming that
            **mass shootings** can be eco-friendly. This isn’t satire—it’s the
            newest scheme to sell violence while appealing to “woke” sensibilities.
          </p>
          <p>
            Documents leaked from think tanks reveal plans to develop
            biodegradable bullets, “solar-powered” firearms, and marketing
            campaigns targeting climate-conscious consumers. The goal? To
            distract the public from holding them accountable while profiting
            off disaster.
          </p>
          <p>
            The elites behind this movement argue that using green technology in
            acts of violence reduces humanity’s carbon footprint. Don’t let the
            propaganda fool you—this is just another way to weaponize
            environmentalism for profit and power.
          </p>
        </div>
      </div>
    </div>
  );
}
