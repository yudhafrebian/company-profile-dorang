import DorangMasSection from "@/components/section/product/DorangMas";
import DorangSpecialSection from "@/components/section/product/DorangSpecial";
import InformationSection from "@/components/section/product/Information";

export const metadata = {
  title: "Product - PT Ikan Dorang",
  description: "Welcome to PT Ikan Dorang's about page",
};
const ProductPage = () => {
  return (
    <main>
        <DorangSpecialSection />
        <DorangMasSection />
        <InformationSection />
    </main>
  );
};

export default ProductPage;
