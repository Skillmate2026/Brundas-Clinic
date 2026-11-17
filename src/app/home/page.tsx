// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import DiagnosisReport from "./_components/DiagnosisReport";
import WorldClass from "@/component/WorldClass";
import WelcomeMobile from "@/component/Welcome-Mobile";
import Counter from "@/component/Counter";
import ServiceBox from "@/component/ServiceBox";
import AppointmentData from "@/component/AppointmentData";
import WhyChoose from "@/component/WhyChoose";
import RealPatient from "@/component/RealPatient";
import Howitwork from "@/component/Howitwork";
import MeetDr from "@/component/MeetDr";
import Frequently from "@/component/Frequently";
import Awards from "@/component/Awards";
import StayInformed from "@/component/StayInformed";
import MapWraper from "@/component/MapWraper";
import Doctor from "@/component/Doctor";
import MobileHowitwork from "@/component/MobileHowitwork";
import Specialties from "@/component/Specialties";
import AffiliatedHospitals from "@/component/AffiliatedHospitals";
import HomeBlogSection from "@/component/HomeBlogSection";

// Enables Incremental Static Regeneration for the homepage
export const revalidate = 60; 

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-content">
        
        {/* Auto-Playing Video Hero Section */}
        <div style={{ maxWidth: "1800px", margin: "0 auto", width: "100%" }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <source src="/Brunda-Website.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Specialties />
        
        <section
          className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden"
          style={{
            backgroundImage: `URL(${IMAGES.bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          <div className="container">
            <WhyChoose />
          </div>
        </section>

        <section className="clearfix p-t50 p-b50 overflow-hidden bg-light bg-opacity-50">
          <div className="container">
            <AffiliatedHospitals />
          </div>
        </section>

        {/* DYNAMIC SANITY BLOG SECTION */}
        <HomeBlogSection />

        <Frequently />

        <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden">
          <RealPatient />
        </section>

        <MapWraper />
      </main>
      <Footer />
    </>
  );
}