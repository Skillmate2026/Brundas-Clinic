"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
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

function SitemapWrapper({ children }: any) {
  const count = true;
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const toggleDept = (dept: string) => {
    setSelectedDept((s) => (s === dept ? null : dept));
  };

  return (
    <>
      <Header />
      <main className="page-content">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ maxWidth: "1800px", margin: "0 auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="desk-view">
                  <img
                    src="/assets/banners/Brunda-DB-1.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="mobile-view">
                  <img
                    src="/assets/banners/Brunda-MB-1.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div>
                <div className="desk-view">
                  <img
                    src="/assets/banners/Brunda-DB-2 (2).webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="mobile-view">
                  <img
                    src="/assets/banners/Brunda-MB-2 (1).webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div>
                <div className="desk-view">
                  <img
                    src="/assets/banners/Brunda-DB-4 (1).webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="mobile-view">
                  <img
                    src="/assets/banners/Brunda-MB-4 (1).webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="desk-view">
                  <img
                    src="/assets/banners/Brunda-DB-3.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="mobile-view">
                  <img
                    src="/assets/banners/Brunda-MB-3.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="desk-view">
                  <img
                    src="/assets/banners/Brunda-DB-5.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="mobile-view">
                  <img
                    src="/assets/banners/Brunda-MB-5.webp"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            style={{ backgroundColor: "transparent", border: "0px" }}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            style={{ backgroundColor: "transparent", border: "0px" }}
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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
            {children}
          </div>
        </section>
        <section className="clearfix p-t50 p-b50 overflow-hidden bg-light bg-opacity-50">
          <div className="container">
            <AffiliatedHospitals />
          </div>
        </section>
        
        <Frequently />
        <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden">
          <RealPatient />
        </section>

        {/* --- DEDICATED SOCIAL MEDIA SECTION --- */}
        <section className="content-inner-2 text-center bg-light">
          <div className="container">
            <div className="section-head style-1 m-b30">
              <h2 className="title m-b0">Get in Touch</h2>
              <p className="fw-medium text-primary">Follow us on our social networks</p>
            </div>
            
            <div className="dz-social-icon style-1 d-flex justify-content-center">
              <ul className="d-flex" style={{ gap: "20px", padding: 0 }}>
                <li>
                  <a href="https://wa.me/919632371211" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/brunda-advanced-orthopaedics-ent-centre/home/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/brundas_clinic/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Brundas-Clinic/61593364482305/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCDq6PD0fRUgP1s-YyEVwqPw" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <MapWraper />
      </main>
      <Footer />
    </>
  );
}
export default SitemapWrapper;