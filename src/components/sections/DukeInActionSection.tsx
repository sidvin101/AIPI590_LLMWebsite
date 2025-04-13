import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actionItems = [
  {
    id: 1,
    title: "What is ADHD? | Quick Learner",
    image: "https://ext.same-assets.com/10623167/4183737336.jpeg",
    link: "https://www.youtube.com/watch?v=_HKGbqWaoZg",
  },
  {
    id: 2,
    title: "Enabling Hearing",
    image: "https://ext.same-assets.com/10623167/2260209592.jpeg",
    link: "https://www.youtube.com/watch?v=Wwb_6LQvQOk",
  },
  {
    id: 3,
    title: "Grant Hill | Centennial Oral Histories",
    image: "https://ext.same-assets.com/10623167/4205133390.jpeg",
    link: "https://www.youtube.com/watch?v=RsTQC_PBRUg",
  },
];

export const DukeInActionSection = () => {
  return (
    <section className="py-16 bg-duke-blue text-white">
      <div className="container-fluid">
        <h2 className="text-3xl font-bold mb-10">Duke in Action</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actionItems.map((item) => (
            <Card key={item.id} className="bg-duke-blue-light text-white border-none overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              </CardContent>
              <CardFooter>
                <Link href={item.link} className="text-duke-cream hover:text-white hover:underline">
                  Watch Video
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-duke-blue">
            More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DukeInActionSection;
