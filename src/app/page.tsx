import FeaturedCourses from "@/components/featuressection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchollTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased
   bg-grid-white/[0.02]">
  <HeroSection/>
  <FeaturedCourses/>
  <WhyChooseUs/>
  <MusicSchollTestimonials/>
  <UpcomingWebinars/>
  <Instructors/>
  <Footer/>
  </main>
  );
}
