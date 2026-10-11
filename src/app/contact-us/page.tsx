"use client";

import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import Getintouch from "@/component/Getintouch";
import Alllocation from "@/component/Alllocation";
import Image from "next/image";
import MapWraper from "@/component/MapWraper";

function Contactus() {
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
      <Header />
      <main className="page-content">
        <PageBanner
          title="Contact Us"
          bnrimage={IMAGES.bnr1.src}
          filteredData={{ title: "Contact Us" }}
        />
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
                    {/* ✅ Manipal Symbol + Location Address */}

                    <div className="title-head">
                      <h2 className="form-title m-b0">
                        Make An <span>Appointment</span> <br /> Apply For
                        Treatments
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="dzForm">
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
      </main>
      <MapWraper />
      <Footer />
    </>
  );
}
export default Contactus;
