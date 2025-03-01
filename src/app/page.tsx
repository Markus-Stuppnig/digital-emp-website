import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Emergency Medicine Physician",
  description:
    "The app revolutionizes the initial treatment of strokes by allowing rescue personnel to communicate directly with an AI that assists with immediate diagnosis and action recommendations.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Timeline />
      <Features />
      <CallToAction />
      {/* <Faq /> */}
      <Team />
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
    </main>
  );
}
