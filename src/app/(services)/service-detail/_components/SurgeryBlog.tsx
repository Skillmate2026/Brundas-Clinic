"use client";
import { serviceDetails } from "@/utils/serviceData/serviceDetails";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SurgeryBlog = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="row">
      {serviceDetails.map((doct, i) => (
        <div key={i}>
          {doct?.empolydata?.map((item, i) => (
            <div className="col-xxl-12 col-sm-12" key={i}>
              <div
                className={`dz-team style-1 box-hover ${
                  active === item.id ? "active" : ""
                }`}
                onMouseEnter={() => setActive(item.id)}
              >
                <div className="dz-media">
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    style={{
                      aspectRatio: "2/2",
                      objectFit: "contain",
                      padding: "10px",
                    }}
                    alt="/"
                  />
                  <Link href="#" className="btn btn-primary">
                    <i className="feather icon-calendar m-r5" /> Appointment Now
                  </Link>
                </div>
                <div className="dz-content">
                  <div className="clearfix">
                    <h3 className="dz-name">
                      <Link href="#">{item.title}</Link>
                    </h3>
                    <span className="dz-position">{item.position}</span>
                  </div>
                  <Link href="#" className="btn btn-square btn-secondary">
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
                <ul className="dz-social">
                  <li>
                    <Link href="#" target="_blank">
                      {" "}
                      <i className="fa-brands fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      {" "}
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      {" "}
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      {" "}
                      <i className="fa-brands fa-x-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      {" "}
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SurgeryBlog;
