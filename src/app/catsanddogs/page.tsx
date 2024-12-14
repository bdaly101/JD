import Image from "next/image";

export default function CatsAndDogs() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-red-500 mb-8">
          The Secret Trade: Cats and Dogs on the Menu
        </h1>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/dog.jpeg"
            alt="Cats and Dogs"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            While society pretends to love their furry friends, the elite are
            indulging in a **shadowy culinary obsession**: cats and dogs. Behind
            closed doors, luxury restaurants serve dishes featuring these
            beloved animals to the super-rich under the guise of “exotic
            cuisine.”
          </p>
          <p>
            Reports from whistleblowers reveal that illegal breeding farms exist
            worldwide, supplying rare “breeds” specifically for consumption.
            Celebrities flaunt their “compassion” on Instagram, but at secret
            gatherings, they feast on dishes labeled “Golden Retriever Tartare”
            and “Tabby Filet.”
          </p>
          <p>
            Why is this being hidden? Because “man’s best friend” is not just a
            companion—it’s big business. If you think your missing pet wandered
            off, think again. They might have been targeted by this sinister
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
