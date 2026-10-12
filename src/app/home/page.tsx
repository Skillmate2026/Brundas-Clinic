"use client";

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
import EmpolyBlog from "@/component/EmpolyBlog";
import RealPatient from "@/component/RealPatient";
import Howitwork from "@/component/Howitwork";
import MeetDr from "@/component/MeetDr";
import Frequently from "@/component/Frequently";
import Awards from "@/component/Awards";
import StayInformed from "@/component/StayInformed";
import MapWraper from "@/component/MapWraper";
import Doctor from "@/component/Doctor";
import { useState } from "react";
import MobileHowitwork from "@/component/MobileHowitwork";
import Specialties from "@/component/Specialties";
import AffiliatedHospitals from "@/component/AffiliatedHospitals";

function HomePage() {
  const count = true;
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const toggleDept = (dept: string) => {
    setSelectedDept((s) => (s === dept ? null : dept));
  };

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
            /* Removed minHeight and backgroundColor to fix mobile black bars */
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <source src="/Brunda-Website.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* <section
            className="content-inner desk-view"
            style={{
              backgroundImage: `url(${IMAGES.bg1png.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="container">
              <WorldClass />
            </div>
          </section>
          <section
            className="content-inner mobile-view"
            style={{
              backgroundImage: `url(${IMAGES.bg1png.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="container">
              <WelcomeMobile />
            </div>
          </section> */}
        {/* <Counter /> */}
        {/* <section className="content-inner-2 bg-light">
            <div className="container">
              <div className="section-head style-1 m-b30 row align-items-end">
                <div
                  className="col-xl-12 col-md-9 wow fadeInUp text-center"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <span className="main-title">What We Treat</span>
                  <h2 className="title m-b0">Advanced ENT Solutions</h2>
                </div>
              </div>
              {selectedDept === "ENT" ? (
                <ServiceBox department={"ENT"} />
              ) : (
                <ServiceBox department={"ENT"} count={count} number={8} />
              )}
              <div
                className=" text-lg-center d-md-block wow fadeInUp text-center"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
              >
                <button
                  onClick={() => toggleDept("ENT")}
                  className="btn btn-icon btn-secondary"
                >
                  {selectedDept === "ENT" ? "Show Less" : "View All"}
                  <span className="right-icon">
                    <i className="feather icon-arrow-right" />
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="content-inner-2 bg-light">
            <div className="container">
              <div className="section-head style-1 m-b30 row align-items-end">
                <div
                  className="col-xl-12 col-md-9 wow fadeInUp text-center"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h2 className="title m-b0">Advanced Orthopaedic Solutions</h2>
                </div>
              </div>
              {selectedDept === "Orthopaedics" ? (
                <ServiceBox department={"Orthopaedics"} />
              ) : (
                <ServiceBox
                  department={"Orthopaedics"}
                  count={count}
                  number={8}
                />
              )}
              <div
                className="text-lg-center d-md-block wow fadeInUp text-center"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
                style={{ paddingBottom: "40px" }}
              >
                <button
                  onClick={() => toggleDept("Orthopaedics")}
                  className="btn btn-icon btn-secondary"
                >
                  {selectedDept === "Orthopaedics" ? "Show Less" : "View All"}
                  <span className="right-icon">
                    <i className="feather icon-arrow-right" />
                  </span>
                </button>
              </div>
            </div>
          </section> */}
        <Specialties />
        {/* <Doctor /> */}
        {/* <AppointmentData /> */}
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
        {/* <div className="desk-view">
          <Howitwork />
        </div>
        <div className="mobile-view">
          <MobileHowitwork />
        </div> */}
        {/* <section className="content-inner">
            <div className="container">
              <div className="section-head style-1 m-b30 row align-items-end">
                <div
                  className="col-sm-7 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h2 className="title m-b0">
                    We Employ only <br /> Specialists{" "}
                  </h2>
                </div>
                <div
                  className="col-sm-5 text-sm-end d-sm-block d-none wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  <Link
                    href="/team"
                    className="btn btn-icon btn-primary btn-shadow"
                  >
                    {" "}
                    View All
                    <span className="right-icon">
                      <i className="feather icon-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
              <EmpolyBlog />
            </div>
          </section> */}
        <Frequently />
        <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden">
          <RealPatient />
        </section>

        {/* <MeetDr /> */}
        {/* <Awards />
          <StayInformed /> */}
        <MapWraper />
      </main>
      <Footer />
    </>
  );
}
export default HomePage;