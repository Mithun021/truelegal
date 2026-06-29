import { Helmet } from "react-helmet-async";
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
        <Helmet>
          <title>
            True Path Legal Consultant | Medico Legal Protection Services
          </title>

          <meta
            name="description"
            content="True Path Legal Consultant provides medico legal protection, risk management, professional indemnity services and healthcare legal support for doctors, hospitals and healthcare institutions across India."
          />

          <meta
            name="keywords"
            content="medico legal consultant, doctor legal protection, hospital legal services, indemnity services, risk management"
          />
        </Helmet>
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