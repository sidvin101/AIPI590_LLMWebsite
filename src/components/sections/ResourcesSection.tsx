import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const resources = [
  {
    id: 1,
    title: "Values at Duke",
    image: "https://ext.same-assets.com/3134104844/1287528733.png",
    link: "/values",
    description: "Excellence. Inclusion. Trust. Discovery.",
  },
  {
    id: 2,
    title: "Research at Duke",
    image: "https://ext.same-assets.com/10623167/4117144565.png",
    link: "https://research.duke.edu/",
    description: "Pushing boundaries and finding solutions.",
  },
  {
    id: 3,
    title: "Commencement 2023",
    image: "https://ext.same-assets.com/10623167/822229283.jpeg",
    link: "/commencement",
    description: "Celebrating achievement and new beginnings.",
  },
  {
    id: 4,
    title: "Arts at Duke",
    image: "https://ext.same-assets.com/3134104844/1083389521.jpeg",
    link: "https://arts.duke.edu",
    description: "Creativity, expression, and cultural exploration.",
  },
  {
    id: 5,
    title: "Climate Solutions at Duke",
    image: "https://ext.same-assets.com/10623167/10338350.png",
    link: "https://nicholas.duke.edu/",
    description: "Research and action for a sustainable future.",
  },
  {
    id: 6,
    title: "For the Media",
    image: "https://ext.same-assets.com/3134104844/1773502193.png",
    link: "https://news.duke.edu",
    description: "News, resources, and expert connections.",
  },
];

export const ResourcesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        <h2 className="text-3xl font-bold text-duke-blue mb-10">Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link key={resource.id} href={resource.link}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02] hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-medium text-duke-blue mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
