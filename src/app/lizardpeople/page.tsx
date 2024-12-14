import Image from "next/image";

export default function LizardPeople() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-green-400 mb-8">
          Lizard People in High Places
        </h1>

        {/* Image */}
        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/lizard.jpeg"
            alt="Lizard Person"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Ever felt like world leaders aren’t quite… human? You’re not alone.
            The **Lizard People Theory** exposes the shocking truth that
            shape-shifting reptilian aliens have infiltrated the highest levels
            of government, media, and business to control humanity.
          </p>
          <p>
            Evidence? Look no further than public footage of politicians “glitching”
            on live television. Their holographic disguises fail momentarily,
            revealing the scales underneath. Coincidence? We think not.
          </p>
          <p>
            The reptilians are descendants of ancient alien overlords and are
            responsible for creating every major world conflict to keep us
            divided and distracted. Their goal? Complete world domination.
            Don’t be fooled—start questioning the people in power today!
          </p>
        </div>
      </div>
    </div>
  );
}
