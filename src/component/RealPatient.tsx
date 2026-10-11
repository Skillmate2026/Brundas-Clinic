"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css/navigation";
import { testiswipeerdata } from "../constant/alldata";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

function RealPatient() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="row content-wrapper style-2">
          <div className="col-xl-6">
            <div className="content-media">
              <div className="dz-media desk-view">
                <Image
                  src="https://img.freepik.com/free-vector/videocalling-with-therapist_23-2148534974.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80"
                  height={100}
                  width={100}
                  style={{ borderRadius: "10px" }}
                  alt="Best Orthopaedic Clinic in Vijayanagar"
                />
              </div>
              <div
                className="circle-wrapper"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <span className="circle1">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="circle2">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div
                className="item1"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <div className="info-widget style-1 move-3">
                  <div className="">
                    <Image
                      src="/assets/home-images/google-review.png"
                      height={150}
                      width={150}
                      alt="Best Orthopaedic Clinic in Vijayanagar"
                    />
                    {/* <Image
                      className="avatar rounded-circle avatar-sm border border-white border-2"
                      src={IMAGES.smallavatar2}
                      alt=""
                    />
                    <Image
                      className="avatar rounded-circle avatar-sm border border-white border-2"
                      src={IMAGES.smallavatar3}
                      alt=""
                    />
                    <Image
                      className="avatar rounded-circle avatar-sm border border-white border-2"
                      src={IMAGES.smallavatar4}
                      alt=""
                    /> */}
                  </div>
                  <div className="clearfix ms-2">
                    <span className="number text-primary">150k</span>
                    <span>Patient recovers</span>
                  </div>
                </div>
              </div>
              {/* <div
                className="item2"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
              >
                <div className="info-widget style-3 move-1">
                  <div className="widget-head">
                    <div className="widget-media">
                      <Image src={IMAGES.smallavatar5} alt="" />
                    </div>
                    <div className="widget-content">
                      <h6 className="title">Dr. Natali jackson</h6>
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
                    </div>
                  </div>
                  <p>
                    “It is a long established fact that a reader will be
                    distracted by the readable content”
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-10 align-self-center m-b30">
            <div
              className="section-head style-1 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.7s"
            >
              <span className="main-title">Patients Testimonials</span>
              <h2 className="title text-white m-b0">
                Real Patients, Real Stories. And our achievements{" "}
              </h2>
            </div>
            <div
              className="swiper-btn-center-lr wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.7s"
            >
              <Swiper
                className="swiper testimonial-swiper1"
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 3000,
                }}
                navigation={{
                  nextEl: ".swiper1-button-next",
                  prevEl: ".swiper1-button-prev",
                }}
                modules={[Navigation, Autoplay]}
              >
                {testiswipeerdata.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-1 shadow-md">
                      <div className="dz-media">
                        <div className="media-inner">
                          <Image
                            src={data.image}
                            height={100}
                            width={100}
                            style={{ aspectRatio: 1.9 / 2 }}
                            alt="/"
                          />
                          <Link
                            onClick={handleShow}
                            href="https://www.google.com/search?q=brunda+specialist+clinic&rlz=1C1CHBF_enIN979IN979&oq=Brunda+Specialist+Clinic&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMgoIAxAAGKIEGIkFMgoIBBAAGKIEGIkFMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgoIBxAAGIAEGKIE0gEHNDAxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3bae3ded76fddc49:0x6aefc9ebb55bd102,1,,,,"
                            className="video-bx1 video-sm popup-youtube"
                          >
                            <div className="video-btn">
                              <Image
                                src="/assets/flat-icons/google.svg"
                                height={50}
                                width={50}
                                alt=""
                              />
                            </div>
                            <span>View All Reviews</span>
                          </Link>
                        </div>
                        <div className="testimonial-info">
                          <h5 className="testimonial-name">{data.name}</h5>
                          <span className="testimonial-position">Patient</span>
                        </div>
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <h3 className="title">Best Treatment</h3>
                          <p>
                            {data.content.slice(0, 250)}
                            <Link href="https://www.google.com/search?q=brunda+specialist+clinic&rlz=1C1CHBF_enIN979IN979&oq=Brunda+Specialist+Clinic&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMgoIAxAAGKIEGIkFMgoIBBAAGKIEGIkFMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgoIBxAAGIAEGKIE0gEHNDAxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3bae3ded76fddc49:0x6aefc9ebb55bd102,1,,,,">
                              {" "}
                              Read More...
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper1-button-prev btn-prev" role="button">
                <Image
                  src={IMAGES.arrowleft}
                  alt="Best Orthopaedic Clinic in Vijayanagar"
                />
              </div>
              <div className="swiper1-button-next btn-next" role="button">
                <Image
                  src={IMAGES.arrowright}
                  alt="Best Orthopaedic Clinic in Vijayanagar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}
export default RealPatient;
