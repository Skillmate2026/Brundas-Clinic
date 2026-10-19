import Link from "next/link";
import { locationdata } from "../constant/alldata";
import Image from "next/image";
// import GoogleMap from "./GoogleMap";

function Doctor() {
  return (
    <>
      <section className="content-inner bg-light bg-opacity-50">
        <div className="container">
          <div className="section-head style-3">
            <div className="text-center">
              <span className="main-title text-center">Our Specialists</span>
            </div>
            <h2
              className="title m-b0 wow fadeInUp text-center"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              Central Institute Trained Doctors
            </h2>
            <h1
              style={{ fontSize: "20px", textAlign: "center", padding: "10px" }}
            >
              Best ENT and Orthopedic Clinic in Vijayanagar for Expert Care
            </h1>
            <p className="m-b0 text-center wow fadeInUp">
              Finding the{" "}
              <a href="https://www.brundaspecialistclinic.com">
                Best ENT and Orthopedic Clinic in Vijayanagar
              </a>{" "}
              is important for accurate diagnosis and effective treatment of
              bone, joint, ear, nose, and throat conditions. Brunda Specialist
              Clinic provides expert consultation for orthopaedic injuries, ACL
              problems, shoulder pain, sinus issues, ear infections, and throat
              disorders. With experienced specialists and patient-focused care,
              the clinic ensures advanced treatment and faster recovery for
              patients in Vijayanagar and nearby areas.
            </p>
          </div>

          <div className="row content-wrapper align-items-stretch">
            {/* Doctor 1 — ENT Specialist */}
            <div
              className="col-xl-6 m-b30 wow fadeInUp d-flex"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              <div className="content-bx style-6 shadow-sm w-100 d-flex flex-column">
                <div className="row flex-grow-1">
                  <div className="dz-media">
                    <Image
                      src="/assets/doctors-image/Dr-Meghana-Janardhan1.JPG"
                      alt="Best ENT and Orthopedic Clinic in Vijayanagar"
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Changed from contain to cover
                        maxHeight: "350px", // Optional: to ensure images don't get too tall
                      }}
                    />
                  </div>

                  <div className="dz-info flex-grow-1 d-flex flex-column">
                    <h3 className="title m-b10 m-t10">Dr. Meghana Janardhan</h3>
                    <p className="text-primary m-b15">
                      MS ENT – Central Institute Trained
                    </p>
                    <span>
                      ENT / Otorhinolaryngologist (Ear, Nose &amp; Throat
                      Specialist)
                    </span>
                    <h4 className="m-b5 font-16 mt-3">Specialisations:</h4>
                    <ul className="list-check text-secondary m-b15">
                      <li>ENT Disorders &amp; Infections</li>
                      <li>Allergy &amp; Sinus Care</li>
                      <li>Comprehensive ENT Management</li>
                    </ul>
                  </div>
                </div>

                <div className="dz-footer text-center desk-view mt-auto">
                  <div className="dz-btn">
                    <Link
                      href="/our-doctors/dr-meghana-janardhan"
                      className="btn btn-lg btn-icon btn-secondary btn-shadow"
                    >
                      View Profile
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>
                    &nbsp;&nbsp;
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

                <div className="dz-footer text-center mobile-view mt-auto">
                  <div className="dz-btn">
                    <Link
                      href="/our-doctors/dr-meghana-janardhan"
                      className="btn btn-lg btn-icon btn-secondary btn-shadow"
                    >
                      View Profile
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor 2 — Orthopaedic Specialist */}
            <div
              className="col-xl-6 m-b30 wow fadeInUp d-flex"
              data-wow-delay="0.4s"
              data-wow-duration="0.8s"
            >
              <div className="content-bx style-6 shadow-sm w-100 d-flex flex-column">
                <div className="row flex-grow-1">
                  <div className="dz-media">
                    <Image
                      src="/assets/doctors-image/Dr-Nagaraj-M1.jpg"
                      alt="Best ENT and Orthopedic Clinic in Vijayanagar"
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        maxHeight: "350px", // Optional: to ensure images don't get too tall
                      }}
                    />
                  </div>

                  <div className="dz-info flex-grow-1 d-flex flex-column">
                    <h3 className="title m-b10 m-t10">Dr. Nagaraj M</h3>
                    <p className="text-primary m-b15">
                      MS Orthopaedics – Central Institute Trained
                    </p>
                    <span>
                      Orthopedic Surgeon | Joint Replacement | Spine &amp;
                      Sports Injury Specialist
                    </span>
                    <h4 className="m-b5 font-16 mt-3">Specialisations:</h4>
                    <ul className="list-check text-secondary m-b15">
                      <li>Hip &amp; Knee Replacement</li>
                      <li>Arthroscopy &amp; Sports Injuries</li>
                      <li>Complex Trauma &amp; Spine Disorders</li>
                    </ul>
                  </div>
                </div>

                <div className="dz-footer text-center desk-view mt-auto">
                  <div className="dz-btn">
                    <Link
                      href="/our-doctors/dr-nagaraj-m"
                      className="btn btn-lg btn-icon btn-secondary btn-shadow"
                    >
                      View Profile
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>
                    &nbsp;&nbsp;
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

                <div className="dz-footer text-center mobile-view mt-auto">
                  <div className="dz-btn">
                    <Link
                      href="/our-doctors/dr-nagaraj-m"
                      className="btn btn-lg btn-icon btn-secondary btn-shadow"
                    >
                      View Profile
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Doctor;