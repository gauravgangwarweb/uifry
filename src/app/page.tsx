import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
