import Image from "next/image";

export default function FlatEarth() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-green-400 mb-8">
          The Flat Earth Chronicles
        </h1>

        {/* Image */}
        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/flatearth.jpeg"
            alt="Flat Earth Map"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Have you ever wondered why the horizon looks so flat? Its not a
            coincidence—its a **global lie** perpetuated by space agencies,
            pilots, and even the school system! The Earth is a flat disc, and
            the so-called “photos from space” are nothing more than CGI created
            to maintain the illusion of a globe.
          </p>
          <p>
            Antarctica is not a continent but an ice wall that surrounds the
            edges of our world, preventing water from falling off. NASA guards
            this wall to ensure no one discovers the truth. GPS systems, airline
            flight paths, and even modern cartography are part of this massive
            conspiracy.
          </p>
          <p>
            Dont believe us? Look up “Operation Fishbowl.” The government
            tried—and failed—to break through the firmament that encloses our
            flat plane. The evidence is out there, but only the brave are
            willing to seek it.
          </p>
        </div>
      </div>
    </div>
  );
}
