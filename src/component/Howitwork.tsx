"use client";
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";
import { howitworkdata } from "../constant/alldata";
import Image from "next/image";

function Howitwork() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row content-wrapper style-3">
            <div className="col-xl-5 m-b30 pe-xl-4">
              <div className="section-head style-1 m-b30">
                <span className="main-title">Clinic Facilities</span>
                <h2
                  className="title m-b0 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  Comfortable, Safe & Patient-Friendly Facilities
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  Brunda Advanced Orthopaedics & ENT Centre is equipped with modern
                  infrastructure and patient-friendly facilities to ensure safe,
                  comfortable, and effective ENT & Orthopaedic care.
                </p>
              </div>

              <div className="row">
                {howitworkdata.map((data, i) => (
                  <div
                    className="col-xl-12 col-md-6 wow fadeInUp"
                    data-wow-delay={data.delay}
                    data-wow-duration="0.8s"
                    key={i}
                  >
                    <div className="icon-bx-wraper style-2 m-b20">
                      <div className="icon-bx">
                        {data.img && (
                          <Image
                            src={data.img}
                            alt={data.title}
                            height={35}
                            width={35}
                          />
                        )}
                      </div>
                      <div className="icon-content">
                        <h3 className="dz-title">{data.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-7">
              <div className="content-media">
                <div className="dz-media">
                  <Image
                    src="/assets/home-images/why-choose.jpg"
                    width={100}
                    height={100}
                    alt="Brunda Advanced Orthopaedics & ENT Centre Facilities"
                  />
                  <div className="dz-btn">
                    <Link
                      href="tel:+919632371211"
                      className="btn btn-lg btn-icon btn-secondary btn-shadow"
                    >
                      Book Appointment
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* <div
                  className="item1"
                  data-bottom-top="transform: translateY(30px)"
                  data-top-bottom="transform: translateY(-30px)"
                >
                  <div className="info-widget style-8 bg-primary">
                    <div className="row g-0">
                      <div className="col-6 d-flex">
                        <div className="content-bx style-1 m-auto text-center">
                          <span className="content-text text-white">
                            <span className="counter">
                              <CountUp end={2} duration={5} />
                            </span>
                            +
                          </span>
                          <h3 className="title text-white m-b0">Specialties</h3>
                        </div>
                      </div>

                      <div className="col-6 d-flex">
                        <div className="content-bx style-1 m-auto text-center">
                          <span className="content-text text-white">
                            <span className="counter">
                              <CountUp start={0} end={10} duration={5} />
                            </span>
                            K
                          </span>
                          <h3 className="title text-white m-b0">
                            Happy Patients
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Howitwork;
