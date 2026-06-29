import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutTrueLegal from "../pages/AboutTrueLegal";
import Management from "../pages/Management";
import Service from "../pages/Services";
import DoctorsDos from "../pages/DoctorsDos";
import DoctorsDonts from "../pages/DoctorsDonts";
import PreventMishaps from "../pages/PreventMishaps";
import Indemnity from "../pages/Indemnity";
import Membership from "../pages/Membership";
import Difference from "../pages/Difference";
import Rates from "../pages/Rates";
import MembershipRegistration from "../pages/MembershipRegistration";
import BioMdedical from "../pages/BioMedical";
import DeathInOT from "../pages/DeathInOT";
import RiskManagement from "../pages/RiskManagement";
import HospitalRequirement from "../pages/HospitalRequirement";
import AwarenessProgram from "../pages/AwarenessProgram";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about-true-legal" element={ <AboutTrueLegal /> } />
            <Route path="/management" element={ <Management /> } />
            <Route path="/services" element={ <Service /> } />
            <Route path="/dos" element={<DoctorsDos />} />
            <Route path="/donts" element={<DoctorsDonts />} />
            <Route path="/prevent-mishaps" element={<PreventMishaps />} />
            <Route path="/indemnity" element={<Indemnity />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/difference" element={<Difference />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/membership-registration" element={<MembershipRegistration />} />
            <Route path="/bio-medical" element={<BioMdedical />} />
            <Route path="/death-in-ot" element={<DeathInOT />} />
            <Route path="/risk-management" element={<RiskManagement />} />
            <Route path="/hospital-requirement" element={<HospitalRequirement />} />
            <Route path="/awareness-program" element={<AwarenessProgram />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
    )
}