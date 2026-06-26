import AboutSection from "../components/home/AboutSection";
import AppointmentCTA from "../components/home/AppointmentCTA";
import AppointmentSection from "../components/home/AppointmentSection";
import Banner from "../components/home/Banner";
import HolisticProtection from "../components/home/HolisticProtection";
import InHouseLawyers from "../components/home/InHouseLawyers";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import WhyChoose from "../components/home/WhyChoose";
import WhyTrueLegal from "../components/home/WhyTrueLegal";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
        <Banner />
        <WhyChoose/>
        <InHouseLawyers />
        <AboutSection />
        <ServicesSection />
        <WhyTrueLegal />
        <HolisticProtection />
        <AppointmentCTA />
        <AppointmentSection />
        <TestimonialSection />
    </MainLayout>
  );
}