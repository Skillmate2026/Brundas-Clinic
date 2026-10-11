import Image from "next/image";
import { inspirationaldata } from "../constant/alldata";
import { IMAGES, SVGICONS } from "../constant/theme";

function Inspirational() {
  return (
    <>
      <section className="content-inner bg-light gradient-top-light">
        <div className="container">
          <div className="row g-lg-5 align-items-center">
            <div className="col-lg-7 m-b10">
              <div className="section-head style-1 m-b30 max-w600">
                <h2
                  className="title wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  Our Vision, Mission <br /> & Core Values
                </h2>
                <p
                  className="small wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  At Brunda Specialist Clinic, we are committed to delivering
                  compassionate, ethical, and advanced ENT and Orthopaedic care
                  that improves quality of life for every patient we serve.
                </p>
              </div>

              {inspirationaldata.map((item, i) => (
                <div
                  className={`icon-bx-wraper style-9 m-b20 ${item.columnstand} wow fadeInUp`}
                  data-wow-delay={item.delay}
                  data-wow-duration="0.8s"
                  key={i}
                >
                  <div className="icon-bx">
                    <svg
                      viewBox="0 0 70 71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                    ></svg>
                  </div>
                  <div className="icon-content">
                    <h3 className="dz-title">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="col-lg-5 m-b30"
              data-bottom-top="transform: translateY(100px)"
              data-top-bottom="transform: translateY(-100px)"
            >
              <div className="dz-media radius-md height-lg">
                <Image
                  src="https://img.freepik.com/premium-photo/empty-operating-room-hospital-surgical-equipment-with-operating-table-medical-device_1048944-3288425.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80"
                  height={100}
                  width={100}
                  alt="Best Orthopaedic Clinic in Vijayanagar"
                  className="object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Inspirational;
