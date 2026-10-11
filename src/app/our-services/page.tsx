"use client";
import ServiceBox from "@/component/ServiceBox";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import React, { useState } from "react";
import PageBanner from "@/component/PageBanner";
import Specialties from "@/component/Specialties";
import MapWraper from "@/component/MapWraper";

const OurServices = () => {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const toggleDept = (dept: string) => {
    setSelectedDept(selectedDept === dept ? null : dept);
  };

  return (
    <>
      <Header />
      <PageBanner
        filteredData={{ title: "Our Services" }}
        title="Our Services"
        bnrimage={""}
      />
      <main>
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
                <ServiceBox department={"ENT"} count={true} number={8} />
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
                  count={true}
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
        <section>
          <Specialties />
        </section>
      </main>
      <MapWraper />
      <Footer />
    </>
  );
};

export default OurServices;
