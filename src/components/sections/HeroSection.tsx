import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-duke-research bg-cover bg-center min-h-[500px] flex items-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-fluid relative z-10 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Duke Research Saves Lives
          </h1>
          <div className="bg-white/90 rounded-md p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-duke-blue mb-4">
              Changing people's lives across North Carolina and around the world.
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Duke researchers are pioneering cancer treatments, revolutionizing pediatric heart procedures,
              comprehending the aging brain, and more.
            </p>
            <Link href="https://today.duke.edu/research">
              <Button className="duke-btn-accent flex items-center">
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
