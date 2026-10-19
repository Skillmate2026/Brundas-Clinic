"use client";
import Image from "next/image";
import { countupdata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";

function Counter() {
  return (
    <>
      <section
        className="content-inner-3 bg-secondary background-blend-multiply bg-img-fix"
        style={{
          // backgroundImage: `URL(${IMAGES.bg2.src})`,
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/chalk-drawing-muscular-system-blackboard_1298745-28277.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="container">
          <div className="row align-items-sm-center">
            {/* <div
              className="col-lg-3 col-12 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              <div className="avatar-group m-b20">
                <Image
                  className="avatar rounded-circle border border-white border-3"
                  src={IMAGES.smallavatar1}
                  alt=""
                />
                <Image
                  className="avatar rounded-circle border border-white border-3"
                  src={IMAGES.smallavatar2}
                  alt=""
                />
                <Image
                  className="avatar rounded-circle border border-white border-3"
                  src={IMAGES.smallavatar3}
                  alt=""
                />
                <Image
                  className="avatar rounded-circle border border-white border-3"
                  src={IMAGES.smallavatar4}
                  alt=""
                />
              </div>

              <h2 className="text-white font-20 m-b5 fw-medium">
                Welcome to Brunda Advanced Orthopaedics & ENT Centre
              </h2>
              <p className="text-white opacity-75 font-14 m-b0">
                Expert ENT & Orthopaedic Care Trusted by Hundreds Every Week
              </p>
            </div> */}

            {countupdata.map((data, i) => (
              <div
                className="col-lg-3 col-6 mb-4 wow fadeInUp"
                data-wow-delay={data.delay}
                data-wow-duration="0.8s"
                key={i}
              >
                <div className="content-bx style-1 text-white">
                  <div className="content-text d-lg-flex align-items-center  text-center">
                    {/* Icon */}
                    <div className="me-3 shrink-0">
                      <Image src={data.img} height={60} width={60} alt="" />
                    </div>

                    {/* Text */}
                    <div className="m-t10">
                      <div className="fw-bold fs-4 lh-1">
                        <CountUp end={data.countup} duration={5} />
                        {data.span}
                      </div>
                      <h3 className="title text-white mb-0">{data.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Counter;
