"use client";
import Image from "next/image";
import { whychoosedata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";

function WhyChoose() {
  return (
    <>
      <div className="row content-wrapper style-7 align-items-center">
        <div
          className="col-lg-6 m-b30 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.7s"
        >
          <div className="section-head style-1 m-b30 mobile-view">
            <span className="main-title">Why Brunda Advanced Orthopaedics & ENT Centre</span>
            <h2
              className="title text-white m-b0 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.7s"
            >
              Expert Doctors, Advanced Technology, and Compassionate Patient
              Care
            </h2>
          </div>
          <div className="content-media">
            <div className="dz-media">
              <Image
                src="/assets/home-images/Why-Brunda-Specialist-Clinic.avif"
                width={100}
                height={100}
                alt="Best Orthopaedic Clinic in Vijayanagar"
              />
            </div>
            <div className="item1">
              <div className="info-widget style-11 bg-primary text-center">
                <span className="content-text text-white">
                  <span className="counter">
                    <CountUp end={8} duration={5} />
                  </span>
                  +
                </span>
                <h3 className="title m-b0 text-white">
                  Years <br /> Experienced
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 m-b30">
          <div className="section-head style-1 m-b30 desk-view">
            <span className="main-title">Why Brunda Advanced Orthopaedics & ENT Centre</span>
            <h2
              className="title text-white m-b0 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.7s"
            >
              Expert Doctors, Advanced Technology, and Compassionate Patient
              Care
            </h2>
          </div>
          <div className="row row-wrapper g-5">
            {whychoosedata.map((data, i) => (
              <div className="col-sm-6" key={i}>
                <div
                  className="icon-bx-wraper style-4 text-center text-white wow fadeInUp"
                  data-wow-delay={data.delay}
                  data-wow-duration="0.7s"
                >
                  <div className="icon-bx bg-primary">
                    <span className="icon-cell">
                      {" "}
                      <i className="flaticon-check" />{" "}
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">{data.title}</h3>
                    <p>
                      We offer a wide range of health services to meet all your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyChoose;
