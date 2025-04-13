import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Explaining the Autism Spectrum",
    excerpt: "Understanding the complexities of autism through research and education.",
    link: "https://today.duke.edu/2025/04/explaining-autism-spectrum",
    image: "https://ext.same-assets.com/10623167/3649133520.jpeg",
  },
  {
    id: 2,
    title: "Bass Connection Students Tell Four Little-Known Stories of Duke's History",
    excerpt: "Building Duke: A century of change-makers and community shapers.",
    link: "https://bassconnections.duke.edu/news/building-duke-century-change-makers-and-community-shapers",
    image: "",
  },
  {
    id: 3,
    title: "Listen to the Heartbeat: Duke Community Partnerships Spur Local Students Interest in Science & Health",
    excerpt: "Connecting Durham schools with Duke resources and mentors.",
    link: "https://ctsi.duke.edu/news/duke-community-partnership-spurs-students-interest-science-health",
    image: "",
  },
  {
    id: 4,
    title: "Understanding Climate Through Art & Science",
    excerpt: "An interdisciplinary approach to climate education and awareness.",
    link: "https://nasher.duke.edu/stories/second-nature-podcast-episode-3/",
    image: "",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-16 bg-duke-cream">
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured News Item (larger) */}
          <div className="lg:w-1/2">
            <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 relative">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-duke-blue mb-4">
                  {newsItems[0].title}
                </CardTitle>
                <CardDescription className="text-gray-700 mb-4">
                  {newsItems[0].excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Link href={newsItems[0].link} className="text-duke-red hover:underline font-medium">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Other News Items (smaller) */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-duke-blue mb-6">More News</h2>
            <div className="space-y-4">
              {newsItems.slice(1).map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <Link
                    href={item.link}
                    className="block hover:bg-white/70 transition-colors p-2 -mx-2"
                  >
                    <h3 className="text-lg font-medium text-duke-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.excerpt}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="https://today.duke.edu/">
                <Button variant="outline" className="border-duke-blue text-duke-blue hover:bg-duke-blue hover:text-white">
                  More News from Duke Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
