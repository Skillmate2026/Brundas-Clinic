import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Table from "react-bootstrap/Table";
import Image from "next/image";
import MapWraper from "@/component/MapWraper";

function TeamDetail() {
  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner
          filteredData={{ title: "Dr. Nagaraj M" }}
          title="Team Detail"
          bnrimage={IMAGES.bnr2.src}
        />
        <section className="content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 m-b30">
                <aside className="side-bar sticky-top">
                  <div
                    className="widget wow fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="0.7s"
                  >
                    <div className="dz-team style-5">
                      <div className="dz-media">
                        <Image
                          src="/assets/doctors-image/Dr-Nagaraj-M1.jpg"
                          width={200}
                          height={200}
                          alt="Dr. Nagaraj M"
                        />
                      </div>
                      {/* <ul className="dz-social"> <li> <Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank" > <i className="fa-brands fa-linkedin" /> </Link> </li> <li> <Link href="https://www.instagram.com/dexignzone" target="_blank" > <i className="fa-brands fa-instagram" /> </Link> </li> <li> <Link href="https://www.facebook.com/dexignzone" target="_blank" > <i className="fa-brands fa-facebook-f" /> </Link> </li> <li> <Link href="https://x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li> <li> <Link href="https://www.youtube.com/@dexignzone" target="_blank" > <i className="fa-brands fa-youtube" /> </Link> </li> </ul> */}
                    </div>
                  </div>
                  <div
                    className="widget widget_schedule bg-secondary text-white wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    <div className="widget-title">
                      <h4 className="title text-white">My Time Schedule</h4>
                    </div>
                    <Table className="table table-border-bottom m-b0">
                      <thead>
                        <tr>
                          <th>Mon - Sat</th>
                          <td className="text-end">06:00 PM - 09:00 PM</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Sunday</th>
                          <td className="text-end">Holiday</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </aside>
              </div>
              <div className="col-lg-8 ps-xl-5 m-b30">
                <div className="section-head style-1 mb-30">
                  <h4
                    className="titlev fw-semibold m-b0 wow fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="0.7s"
                  >
                    Dr. Nagaraj M, MBBS, MS (Orthopaedics)
                  </h4>
                  <p
                    className="text-primary m-b20 fw-normal font-16 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    Consultant Orthopedic Surgeon
                  </p>
                  <p
                    className="fw-normal m-b15 wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="0.7s"
                  >
                    Dr. Nagaraj M is a highly accomplished Orthopaedic Surgeon
                    renowned for his advanced surgical expertise, evidence-based
                    practice, and patient-centered approach. He completed his
                    MBBS from Mysore Medical College &amp; Research Institute
                    (MMC&amp;RI), Mysore, followed by MS in Orthopaedics from
                    the prestigious All India Institute of Medical Sciences
                    (AIIMS), one of India’s premier medical institutions.
                  </p>
                  <p
                    className="fw-normal m-b15 wow fadeInUp"
                    data-wow-delay="0.35s"
                    data-wow-duration="0.7s"
                  >
                    After completing his postgraduate training, Dr. Nagaraj
                    served as Registrar at the Central Institute of
                    Orthopaedics, Safdarjung Hospital (SJH), New Delhi, a
                    distinguished center known for its high-volume trauma and
                    complex orthopaedic cases. This experience further
                    strengthened his clinical judgment and surgical proficiency
                    across a broad spectrum of musculoskeletal conditions.
                  </p>
                  <p
                    className="fw-normal m-b15 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.7s"
                  >
                    To expand his global expertise, Dr. Nagaraj completed
                    Arthroplasty and Arthroscopy Fellowships in the United
                    Kingdom, Australia, and India, gaining comprehensive
                    training in joint replacement, sports injury management, and
                    minimally invasive orthopaedic procedures. His international
                    exposure enables him to integrate advanced surgical
                    technologies and best global practices into his patient
                    care.
                  </p>
                  <p
                    className="fw-normal m-b0 wow fadeInUp"
                    data-wow-delay="0.45s"
                    data-wow-duration="0.7s"
                  >
                    Dr. Nagaraj has also contributed actively to academic
                    orthopaedics, with multiple research papers presented in
                    reputed scientific journals, reflecting his commitment to
                    continuous learning and advancement in orthopaedic science.
                  </p>
                </div>
                <Table
                  className="table table-striped table-striped-rounded m-b40 wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.7s"
                >
                  <thead>
                    <tr>
                      <th>Specialty</th>
                      <td>
                        Orthopaedics, Arthroplasty (Joint Replacement),
                        Arthroscopy, Trauma, Spine &amp; Sports Injuries
                      </td>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    <tr>
                      <th>Degrees</th> <td>MBBS, MS (Orthopaedics)</td>
                    </tr>
                    <tr>
                      <th>Education</th>
                      <td>
                        MBBS – Mysore Medical College &amp; Research Institute
                        (MMC&amp;RI), Mysore <br /> MS Orthopaedics – All India
                        Institute of Medical Sciences (AIIMS)
                      </td>
                    </tr>
                    <tr>
                      <th>Experience</th>
                      <td>
                        Registrar – Central Institute of Orthopaedics,
                        Safdarjung Hospital (SJH), New Delhi
                      </td>
                    </tr>
                    <tr>
                      <th>Fellowship Training</th>
                      <td>
                        Arthroplasty &amp; Arthroscopy Fellowships – United
                        Kingdom, Australia &amp; India
                      </td>
                    </tr>
                    <tr>
                      <th>Academic Work</th>
                      <td>
                        Research papers presented in reputed scientific journals
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <h3
                  className="font-20 m-b15 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="0.7s"
                >
                  Areas of Expertise
                </h3>
                <ul
                  className="list-check-circle list-light text-secondary fw-medium grid-2 m-b0 wow fadeInUp"
                  data-wow-delay="0.65s"
                  data-wow-duration="0.7s"
                >
                  <li>Hip &amp; Knee Replacement (Arthroplasty)</li>
                  <li>Arthroscopic Shoulder &amp; Knee Surgery</li>
                  <li>Complex Trauma &amp; Fracture Reconstruction</li>
                  <li>
                    Spine Disorders – Comprehensive Evaluation &amp; Management
                  </li>
                  <li>Sports Injuries &amp; Ligament Reconstruction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MapWraper />
      <Footer />
    </>
  );
}
export default TeamDetail;
