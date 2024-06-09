import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
    </main>
  );
}
