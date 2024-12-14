import Image from "next/image";

export default function Chemtrails() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-green-400 mb-8">
          Chemtrails: A Silent Killer
        </h1>

        {/* Image */}
        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/chemtrails.jpeg"
            alt="Chemtrails in the Sky"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Look up. Those white streaks in the sky? They’re not harmless water
            vapor. Chemtrails are a **government weapon** used to spread
            chemicals that control minds, manipulate weather, and even poison
            entire populations.
          </p>
          <p>
            Studies reveal that chemtrails contain **aluminum, barium, and
            strontium**—a toxic cocktail designed to weaken immune systems and
            increase dependency on Big Pharma. Coincidence that sickness rates
            have skyrocketed? We think not.
          </p>
          <p>
            The truth is hiding in plain sight. Every time you see a plane, ask
            yourself: why are some trails longer than others? Wake up. Protect
            yourself. And never trust the skies again.
          </p>
        </div>
      </div>
    </div>
  );
}
