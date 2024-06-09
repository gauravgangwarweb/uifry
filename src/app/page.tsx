import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <GetStarted />
      <Footer />
      <div className="px-2 md:px-32 mt-10">
        <hr />
      </div>
      <p className="text-base font-medium text-center mt-5">Copyright 2022 uifry.com all rights reserved</p>
    </main>
  );
}
