// src/app/contact-us/page.tsx
"use client";

import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Connect from "@/component/Connect";
import MapWraper from "@/component/MapWraper";
import { useRef, useState } from "react";
import { useEmailService } from "@/constant/useEmailService";

function Contactus() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    
    // Redirects form submissions directly to your email service
    const result = await sendEmail(formRef.current);
    
    if (result.success) {
      alert("Success! Your appointment request has been sent to our team.");
      formRef.current.reset();
    } else {
      alert("Failed to send message. Please try again or contact us directly.");
    }
    
    setIsSending(false);
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
                /* REMOVED: The hardcoded background that caused sharp borders */
              >
                {/* ADDED: Smooth rounded corners and shadow for premium look */}
                <div 
                  className="form-wrapper style-1" 
                  style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}
                >
                  <div className="form-body bg-primary background-blend-burn" style={{ padding: "40px" }}>
                    
                    <div className="title-head m-b30">
                      <h2 className="form-title m-b0 text-white" style={{ lineHeight: "1.3" }}>
                        Make An <span style={{ color: "#EA8D21" }}>Appointment</span> <br /> 
                        Apply For Treatments
                      </h2>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="dzForm">
                      <input type="hidden" name="dzToDo" value="Appointment" />
                      <input type="hidden" name="reCaptchaEnable" value="0" />
                      
                      <div className="row">
                        <div className="col-sm-6 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" required />
                            <label htmlFor="inputYourName">Your Name</label>
                          </div>
                        </div>

                        <div className="col-sm-6 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" required />
                            <label htmlFor="inputYourEmail">Your Email</label>
                          </div>
                        </div>

                        <div className="col-sm-12 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" required />
                            <label htmlFor="inputPhoneNumber">Phone Number</label>
                          </div>
                        </div>

                        <div className="col-sm-12 m-b30">
                          <div className="form-floating floating-underline input-light">
                            <textarea name="dzMessage" className="form-control" id="inputMessage" rows={3} placeholder="Message" required></textarea>
                            <label htmlFor="inputMessage">Message</label>
                          </div>
                        </div>

                        <div className="col-sm-12">
                          <button 
                            type="submit" 
                            className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                            disabled={isSending}
                          >
                            {isSending ? "Sending..." : "Appointment"}{" "}
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