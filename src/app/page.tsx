import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import NewsSection from "@/components/sections/NewsSection";
import DukeInActionSection from "@/components/sections/DukeInActionSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duke University",
  description: "Duke University is a private research university in Durham, North Carolina.",
};

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <HeroSection />
        <QuickLinksSection />
        <NewsSection />
        <DukeInActionSection />
        <ResourcesSection />
        <FeaturesSection />
      </div>
    </Layout>
  );
}
