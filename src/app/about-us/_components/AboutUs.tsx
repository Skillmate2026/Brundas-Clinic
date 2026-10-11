"use client";
import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";

import { IMAGES } from "@/constant/theme";

import PageBanner from "@/component/PageBanner";
import WorldClass from "@/component/WorldClass";
import Lightgallerydata from "@/component/LightGalleryData";
import Whychoose from "@/component/WhyChoose";
import MeetDr from "@/component/MeetDr";
import Empoly from "@/component/EmpolyBlog";
import RealPatient from "@/component/RealPatient";
import Schedule from "@/component/Schedule";
import Clientswiper1 from "@/component/Clientswiper1";
import Connect from "@/component/Connect";
import Inspirational from "@/component/Inspirational";
import { useEmailService } from "@/constant/useEmailService";
import WelcomeMobile from "@/component/Welcome-Mobile";
import AffiliatedHospitals from "@/component/AffiliatedHospitals";
import Frequently from "@/component/Frequently";

function AboutUs() {
  const [selectCat, setSelectCat] = useState("Angioplasty");
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("dzName") as string;
    const email = formData.get("dzEmail") as string;
    const phone = formData.get("dzPhoneNumber") as string;
    const message = formData.get("dzMessage") as string;

    const whatsappNumber = "919632371211"; // Replace with your WhatsApp number

    const whatsappMessage = `
    Hello, I would like to book an appointment.

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
   `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <main className="page-content">
        <PageBanner
          filteredData={{ title: "About Us" }}
          title="About Us"
          bnrimage={IMAGES.bnr1.src}
        />
        <section
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
        </section>
        {/* <Lightgallerydata /> */}
        <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden">
          <div className="container">
            <Whychoose />
          </div>
        </section>
        <section className="clearfix p-t50 p-b50 overflow-hidden bg-light bg-opacity-50">
          <div className="container">
            <AffiliatedHospitals />
          </div>
        </section>
        <Inspirational />
        {/* <MeetDr /> */}
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
            <Empoly />
          </div>
        </section> */}
        <section
          className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden"
          // style={{
          //   backgroundImage: `url(${IMAGES.bg3.src})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "right center",
          //   backgroundSize: "cover",
          // }}
        >
          <RealPatient />
        </section>
        <section
          className="clearfix   background-blend-multiply overflow-hidden"
          style={{ backgroundColor: "#f3f8fb" }}
        >
          <Frequently />
        </section>
        <section className="content-inner">
          <div className="container">
            <div className="row g-xl-4 align-items-center">
              <Connect />
              <div
                className="col-xl-5 m-b30"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
                style={{ background: "#3365a7" }}
              >
                <div className="form-wrapper style-1">
                  <div className="form-body bg-primary background-blend-burn">
                    <div className="title-head">
                      <h2 className="form-title m-b0">
                        Make An <span>Appointment</span> <br /> Apply For
                        Treatments
                      </h2>
                    </div>
                    <form ref={form} onSubmit={handleSubmit} className="dzForm">
                      <input
                        type="hidden"
                        className="form-control"
                        name="dzToDo"
                        value="Appointment"
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="reCaptchaEnable"
                        value="0"
                      />
                      <div className="dzFormMsg"></div>
                      <div className="row">
                        <div className="col-sm-6 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input
                              name="dzName"
                              type="text"
                              className="form-control"
                              id="inputYourName"
                              placeholder="Your Name"
                            />
                            <label htmlFor="inputYourName">Your Name</label>
                          </div>
                        </div>
                        <div className="col-sm-6 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input
                              name="dzEmail"
                              type="email"
                              className="form-control"
                              id="inputYourEmail"
                              placeholder="Your Email"
                            />
                            <label htmlFor="inputYourEmail">Your Email</label>
                          </div>
                        </div>
                        <div className="col-sm-12 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input
                              name="dzPhoneNumber"
                              type="number"
                              className="form-control dz-number"
                              id="inputPhoneNumber"
                              placeholder="Phone Number"
                            />
                            <label htmlFor="inputPhoneNumber">
                              Phone Number
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <textarea
                              name="dzMessage"
                              className="form-control"
                              id="inputMessage"
                              rows={3}
                              placeholder="Select Service"
                            ></textarea>
                            <label htmlFor="inputMessage">Message</label>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button
                            type="submit"
                            name="submit"
                            value="submit"
                            className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                          >
                            Appointment{" "}
                            <span className="right-icon">
                              <i className="feather icon-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Schedule />
        <Clientswiper1 /> */}
      </main>
    </>
  );
}
export default AboutUs;
