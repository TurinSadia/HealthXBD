
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import ChooseUs from "@/components/ChooseUs";
import DoctorsInfo from "@/components/DoctorsInfo";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div>

      <NavBar/>
      <Hero />
      <OurServices />
      <ChooseUs />
      <DoctorsInfo />
      <ContactUs />
      <Footer />
   
    </div>
  );
}
