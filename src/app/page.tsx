import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from "./components/Features";
import Advantages from "./components/Advantages";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
    </main>
  );
}
