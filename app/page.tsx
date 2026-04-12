import ScrollyCanvas from "@/components/ScrollyCanvas";
import StatsRow from "@/components/StatsRow";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WhyGermany from "@/components/WhyGermany";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <ScrollyCanvas />
      <StatsRow />
      <About />
      <Experience />
      <Projects />
      <WhyGermany />
      <Contact />
    </main>
  );
}
