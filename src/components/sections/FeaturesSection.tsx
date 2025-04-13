import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: 1,
    title: "DUKE ATHLETICS",
    description: "",
    image: "https://ext.same-assets.com/10623167/257568727.png",
    buttonText: "LET'S GO DUKE!",
    buttonLink: "https://goduke.com/",
  },
  {
    id: 2,
    title: "DUKE VIRTUAL TOUR",
    description: "Explore Duke's beautiful gothic architecture for yourself. Launch the virtual tour below to explore campus.",
    image: "https://ext.same-assets.com/10623167/10338350.png",
    buttonText: "LAUNCH VIRTUAL TOUR",
    buttonLink: "https://admissions.duke.edu/visit/virtual-tour/",
  },
  {
    id: 3,
    title: "DUKE IN DURHAM",
    description: 'Durham\'s distinctive neighborhoods and thriving businesses-known as "the Bull City" for its historic tobacco industry-reflect the pioneering spirit and dynamic energy of Duke\'s hometown. Durham is diverse, dynamic and a great place to live.',
    image: "https://ext.same-assets.com/3134104844/3762954205.png",
    buttonText: "SEE DURHAM",
    buttonLink: "https://durham.duke.edu/",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col border border-gray-200 rounded-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-5 left-5">
                  <h3 className="text-xl font-bold text-duke-blue">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-between flex-grow p-6">
                {feature.description && (
                  <p className="text-gray-700 mb-6 text-sm">
                    {feature.description}
                  </p>
                )}

                <div className="mt-auto">
                  <Link href={feature.buttonLink}>
                    <Button className="bg-duke-blue hover:bg-duke-blue-light w-full">
                      {feature.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
