"use client";
import { useState } from "react";
import Link from "next/link";
import { IMAGES, SVGICONS } from "../constant/theme";
import { mapdata } from "../constant/alldata";
import Image from "next/image";

// ✅ EDIT THESE DETAILS

function Connect() {
  const [active, setactive] = useState(1);
  return (
    <>
      <div className="col-xl-7 pe-xl-4 m-b10">
        <div className="section-head style-1 m-b30">
          <h2
            className="title wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            Connect with Brunda Specialist Clinic <br /> for ENT & Orthopaedic
            Care
          </h2>
          <p
            className="small wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            Need help, feedback, or an appointment? Share your details and our
            team will contact you quickly to confirm your visit with our
            specialists.
          </p>
        </div>

        <div className="clearfix m-b60 m-lg-b30">
          <div
            className="d-flex align-items-center m-b15 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            <div className="info-widget style-12 m-r10 bg-light">
              <div className="avatar-group">
                <Image
                  className=""
                  src="/assets/home-images/google-review.png"
                  height={100}
                  width={100}
                  alt="Best Orthopaedic Clinic in Vijayanagar"
                />
              </div>
              <div className="clearfix">
                <span>
                  Trusted ENT & Orthopaedic specialists for your family care
                </span>
              </div>
            </div>

            <Link
              href="https://www.google.com/search?q=brunda+specialist+clinic&rlz=1C1CHBF_enIN979IN979&oq=Brunda+Specialist+Clinic&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMgoIAxAAGKIEGIkFMgoIBBAAGKIEGIkFMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgoIBxAAGIAEGKIE0gEHNDAxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3bae3ded76fddc49:0x6aefc9ebb55bd102,1,,,,"
              className="btn btn-square btn-xl btn-light btn-rounded"
              dangerouslySetInnerHTML={{ __html: SVGICONS.uparrow }}
            />
          </div>

          {/* <div
            className="widget-rating3 wow fadeInUp"
            data-wow-delay="0.8s"
            data-wow-duration="0.8s"
          >
            <ul className="star-list">
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
            </ul>
            <span className="rating">(4.8)</span>
            <span className="text">
              Highly rated by patients on Google Reviews
            </span>
          </div> */}
        </div>

        <div className="row">
          {mapdata.map((data, i) => (
            <div
              className="col-md-6 m-b20 wow fadeInUp"
              data-wow-delay={data.delay}
              data-wow-duration="0.8s"
              key={i}
            >
              <div
                className={`icon-bx-wraper style-8 box-hover ${
                  active === data.id ? "active" : ""
                }`}
                style={{ backgroundColor: "#3365a6" }}
                onMouseEnter={() => setactive(data.id)}
              >
                <div className="icon-bx">
                  <span className="icon-cell">{data.icon}</span>
                </div>
                <div className="icon-content">
                  <h4 className="dz-title" style={{ color: "#ffffff" }}>
                    {data.title}
                  </h4>
                  {data.para}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Connect;
