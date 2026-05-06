import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import TornPaperDivider from "@/components/TornPaperDivider";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col w-full">
      <Hero />
      <TornPaperDivider color="hsl(123 14% 88%)" />
      <About />
      <TornPaperDivider flip color="hsl(123 14% 93%)" />
      <TornPaperDivider color="hsl(40 31% 88%)" />
      <Projects />
      <TornPaperDivider flip color="hsl(40 31% 88%)" />
      <TornPaperDivider color="hsl(82 17% 90%)" />
      <Skills />
      <TornPaperDivider flip color="hsl(82 17% 90%)" />
      <Contact />
    </main>
  );
}
