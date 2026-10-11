"use client";

import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import PageBanner from "@/component/PageBanner";
import { serviceDetails } from "../../../utils/serviceData/serviceDetails";
import Image from "next/image";
import AccordionBlog from "./_components/AccordionBlog";
import SurgeryBlog from "./_components/SurgeryBlog";
import { usePathname } from "next/navigation";

function ServiceDetail() {
  const path = usePathname();
  const name = path.split("/")[2];

  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner
          filteredData={{ title: "Blog   " }}
          title="Service Detail"
          bnrimage={IMAGES.bnr2.src}
        />
        <section className="content-inner service-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 single-inner order-lg-1">
                {serviceDetails &&
                  serviceDetails.map((item, i) => (
                    <div key={i}>
                      {/* Image */}
                      <h2>{item.title}</h2>
                      <div
                        className="single-media dz-media height-sm radius-lg wow fadeInUp"
                        data-wow-delay="0.1s"
                        data-wow-duration="0.7s"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          height={600}
                          width={1200}
                          className="object-fit-cover"
                        />
                      </div>

                      {/* Title & Intro */}
                      <div
                        className="content-item wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.7s"
                      >
                        <h3>{item.intro.h2}</h3>
                        {item.intro.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* What is */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.whatIs.heading}</h3>
                        <p>{item.whatIs.description}</p>
                        <ul className="list-check text-secondary">
                          {item.whatIs.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                        <p>{item.whatIs.note}</p>
                      </div>

                      {/* Indications */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.indications.heading}</h3>
                        <ul className="list-check text-secondary">
                          {item.indications.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.benefits.heading}</h3>
                        <ul className="list-check text-secondary grid-2">
                          {item.benefits.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Procedure */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.procedure.heading}</h3>
                        <p>{item.procedure.description}</p>
                        <ul className="list-check text-secondary">
                          {item.procedure.details.map((d, idx) => (
                            <li key={idx}>
                              <strong>{d.label}:</strong> {d.value}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Post-op Care */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.postOpCare.heading}</h3>
                        <ul className="list-check text-secondary">
                          {item.postOpCare.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                        <p>{item.postOpCare.note}</p>
                      </div>

                      {/* Suitability */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.suitability.heading}</h3>
                        <ul className="list-check text-secondary">
                          {item.suitability.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Why Choose Us */}
                      <div className="content-item wow fadeInUp">
                        <h3>{item.whyChooseUs.heading}</h3>
                        <ul className="list-check text-secondary grid-2 m-b30">
                          {item.whyChooseUs.list.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>

                      {/* World Class Highlights */}
                      <div className="content-item wow fadeInUp">
                        <h3>Key Highlights</h3>
                        <ul className="list-check text-secondary grid-2 m-b30">
                          {item.worldclasslistdata.map((li, idx) => (
                            <li key={idx}>{li.title}</li>
                          ))}
                        </ul>
                      </div>

                      {/* FAQ */}
                      <div className="content-item wow fadeInUp">
                        <h3>Frequently Asked Questions</h3>
                        <AccordionBlog />
                      </div>
                    </div>
                  ))}
              </div>

              <div className="col-lg-4 m-b30">
                <aside className="side-bar sticky-top left">
                  <div
                    className="widget service_menu_nav bg-secondary wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    <div className="widget-title">
                      <h4 className="title">All Services</h4>
                    </div>
                    <ul>
                      {serviceDetails.map((item, i) =>
                        item.otherServices.map((items, i) => (
                          <li key={i} className={items.title}>
                            <Link href={items.link} scroll={false}>
                              {items.title}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                  <div
                    className="widget_contact wow fadeInUp"
                    style={{ backgroundImage: `url(${IMAGES.bg3png.src})` }}
                    data-wow-delay="0.4s"
                    data-wow-duration="0.7s"
                  >
                    <div className="widget-content">
                      <Image src={IMAGES.question} width="80" alt="" />
                      <h4 className="title">Do you need any help?</h4>
                      <div className="phone-number">
                        <Link href="tel:+11234567890">+1 123 456 7890</Link>
                      </div>
                      <div className="email">
                        <Link href="mailto:brundaspecialistclinic@gmail.com">
                          brundaspecialistclinic@gmail.com
                        </Link>
                      </div>
                      <div className="link-btn">
                        <Link
                          href="#"
                          scroll={false}
                          className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow"
                        >
                          Contact Us{" "}
                          <span className="right-icon">
                            <i className="feather icon-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-item wow fadeInUp text-center m-t30"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.7s"
                  >
                    <h3>Available Doctors Under Surgery</h3>
                    <SurgeryBlog />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default ServiceDetail;
