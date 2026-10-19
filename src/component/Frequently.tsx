"use client";
import { Accordion } from "react-bootstrap";
import { IMAGES } from "../constant/theme";
import Link from "next/link";
import { accordiondata } from "../constant/alldata";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type FaqItem = {
  key: string;
  delay: string;
  title: string;
  content: string;
  link: string;
};

function Frequently() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const path = usePathname();

  useEffect(() => {
    const filteredData = accordiondata.filter((data) => data.link === path);
    const homeFaqData = accordiondata.filter((data) => data.link === "/");

    setFaqData(
      filteredData.length > 0
        ? filteredData
        : path.startsWith("/sitemap/")
          ? homeFaqData
          : [],
    );
  }, [path]);

  return (
    <>
      <section
        className="content-inner"
        style={{
          backgroundImage: `url(${IMAGES.bg3png.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="container">
          <div className="row content-wrapper style-5">
            <div className="col-xxl-7 col-xl-6 col-lg-5 m-b30 align-self-center">
              <div className="content-info">
                <div className="section-head style-1 m-b30">
                  <span className="main-title">Frequently Asked Questions</span>
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    Guidance You Can Rely On
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.7s"
                  >
                    Find clear answers to common questions about our ENT and
                    Orthopaedic services, appointments, treatments, and patient
                    care at Brunda Advanced Orthopaedics & ENT Centre.
                  </p>
                </div>
                <Accordion
                  className="accordion dz-accordion style-1"
                  defaultActiveKey="0"
                >
                  {faqData.map((data, i) => (
                    <Accordion.Item
                      eventKey={data.key}
                      key={i}
                      className="wow fadeInUp"
                      data-wow-delay={data.delay}
                      data-wow-duration="0.7s"
                    >
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>{data.content}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-7 m-b30">
              <div
                className="content-media"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <div className="dz-media">
                  <Image
                    src="/assets/home-images/Frequently-Asked-Questions.avif"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="item1">
                  <div className="info-widget style-5">
                    <div className="widget-media text-primary">
                      <i className="feather icon-phone-call dz-ring-effect" />
                    </div>
                    <div className="widget-content">
                      <h6 className="title">Contact us</h6>
                      <Link href="tel:+919632371211" className="text-secondary">
                        +91 96323 71211
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="https://wa.link/sxr517"
                    className="btn btn-lg btn-icon btn-primary btn-shadow"
                  >
                    <span className="w-100">Appointment</span>{" "}
                    <span className="right-icon">
                      <i className="feather icon-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Frequently;
