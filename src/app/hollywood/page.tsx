import Image from "next/image";

export default function HollywoodIDF() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-500 mb-8">
          Hollywood: A Direct Pipeline to the IDF
        </h1>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/hollywood.jpeg"
            alt="Hollywood Funding the IDF"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Hollywood isn’t just about glitz and glamor—it’s secretly one of the
            largest **funding sources for the Israeli Defense Forces (IDF).**
            Your movie tickets, Netflix subscriptions, and merch purchases are
            fueling military campaigns half a world away.
          </p>
          <p>
            Look at the donation records of major studios. Companies like Disney
            and Warner Bros. funnel millions into “charitable organizations”
            that have direct ties to the IDF. Celebrities also participate in
            elaborate fundraisers disguised as red-carpet galas to support the
            cause.
          </p>
          <p>
            Why does Hollywood care? Because they benefit from promoting a
            pro-military narrative in exchange for access to filming locations,
            exclusive rights, and insider deals. This unholy alliance ensures
            that the world remains blind to the bigger picture.
          </p>
        </div>
      </div>
    </div>
  );
}
