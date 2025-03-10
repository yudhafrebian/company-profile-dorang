import OverheadSection from "@/components/section/team/Overhead";
import StaffSection from "@/components/section/team/Staff";

export const metadata = {
  title: "Team - PT Ikan Dorang",
  description: "Welcome to PT Ikan Dorang's about page",
};
const TeampPage = () => {
  return (
    <main>
        <OverheadSection />
        <StaffSection />
    </main>
  )
};

export default TeampPage;
