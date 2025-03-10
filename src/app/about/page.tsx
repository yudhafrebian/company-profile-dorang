
import About from "@/components/section/about/Team";
import CultureSection from "@/components/section/about/Culture";
import CompanyHistorySection from "@/components/section/about/CompanyHistory";

export const metadata = {
  title: "About - PT Ikan Dorang",
  description: "Welcome to PT Ikan Dorang's about page",
};

const AboutPage = () => {
  return (
    <main>
      <CompanyHistorySection />
      <About />
      <CultureSection />
    </main>
  );
};

export default AboutPage;
