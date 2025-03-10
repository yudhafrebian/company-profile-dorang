import AboutUs from "@/components/section/home/AboutUs";
import ContactUsSection from "@/components/section/home/ContactUs";
import HeroSection from "@/components/section/home/Hero";
import OurProductsSection from "@/components/section/home/OurProducts";
import TestimonySection from "@/components/section/home/Testimonials";
import WhyChooseUsSection from "@/components/section/home/WhyChooseUs";

export const metadata = {
  title: "Home - PT Ikan Dorang",
  description: "Welcome to PT Ikan Dorang's homepage",
};
export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUsSection />
      <AboutUs />
      <OurProductsSection />
      <TestimonySection />
      <ContactUsSection />
    </main>
  );
}
