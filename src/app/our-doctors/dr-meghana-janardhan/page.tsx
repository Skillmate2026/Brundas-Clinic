import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Table from "react-bootstrap/Table";
import Image from "next/image";
import EntSpecialisationTabs from "@/component/EntSpecialisationTabs";
import MapWraper from "@/component/MapWraper";
import Frequently from "@/component/Frequently";

function TeamDetail() {
  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner
          filteredData={{ title: "Dr. Meghana Janardhan" }}
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
                          src="/assets/doctors-image/Dr-Meghana-Janardhan1.JPG"
                          width={100}
                          height={100}
                          alt="Dr. Meghana Janardhan"
                        />
                      </div>

                      {/* <ul className="dz-social">
              <li>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-linkedin" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-x-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul> */}
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
                          <th>Monday - Saturday</th>
                          <td>6:00 PM - 9:00 PM</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Sunday</th>
                          <td className="text-end">Closed</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </aside>
              </div>

              <div className="col-lg-8 ps-xl-5 m-b30">
                <div className="section-head style-1 mb-30">
                  <h2
                    className="titlev fw-semibold m-b0 wow fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="0.7s"
                  >
                    Dr. Meghana Janardhan
                  </h2>

                  <p
                    className="text-primary m-b20 fw-normal font-16 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    MS ENT (VMMC, New Delhi)
                  </p>

                  <p
                    className="fw-normal m-b0 wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="0.7s"
                  >
                    Dr. Meghana Janardhan is a qualified ENT Surgeon specialised
                    in the diagnosis and treatment of ear, nose, throat, and
                    head–neck disorders. Areas of expertise include sinus
                    disease, ear infections and hearing problems, vertigo, voice
                    and throat disorders, tonsil and adenoid conditions, and
                    nasal allergies. With a strong emphasis on patient education
                    and evidence-based care, Dr. Meghana strives to deliver
                    precise treatment and long-term relief.
                  </p>

                  {/* <div
          className="mt-15 wow fadeInUp"
          data-wow-delay="0.35s"
          data-wow-duration="0.7s"
        >
          <span className="badge bg-light text-secondary me-2">
            Profile is claimed
          </span>
          <span className="badge bg-light text-secondary me-2">
            Medical Registration Verified
          </span>
          <span className="badge bg-light text-secondary">7 Years Experience</span>
        </div> */}
                </div>

                <Table
                  className="table table-striped table-striped-rounded m-b40 wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.7s"
                >
                  <thead>
                    <tr>
                      <th>Specialty</th>
                      <td>ENT / Otorhinolaryngology and Head & Neck</td>
                    </tr>
                  </thead>

                  <tbody className="border-top-0">
                    <tr>
                      <th>Degrees</th>
                      <td>
                        <Link href={"#"} scroll={false}>
                          MBBS, MS - ENT
                        </Link>
                      </td>
                    </tr>

                    {/* <tr>
                      <th>Specialisations</th>
                      <td>
                        ENT Specialist, Allergy Specialist,
                        Otorhinolaryngologist
                      </td>
                    </tr> */}

                    <tr>
                      <th>Experience</th>
                      <td>7 Years Experience</td>
                    </tr>

                    <tr>
                      <th>Clinics</th>
                      <td>Brunda Advanced Orthopaedics & ENT Centre, Vijayanagar, Bangalore</td>
                    </tr>

                    <tr>
                      <th>Education</th>
                      <td>
                        MBBS - ESI MC & PGIMSR, BANGALORE 2018, <br /> MS ENT-
                        VMMC & SAFDARJUNG HOSPITAL DELHI 2022
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <h3
                  className="font-20 m-b15 wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.7s"
                >
                  Professional Skills
                </h3>

                <ul
                  className="list-check-circle list-light text-secondary fw-medium grid-2 m-b40 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="0.7s"
                >
                  <li>Hearing Problems Diagnosis & Treatment</li>
                  <li>Allergy & Sinusitis Care</li>
                  <li>Advanced Endoscopic Sinus Surgery</li>
                  <li>Office-Based Laryngeal Procedures</li>
                  <li>ENT Endoscopy & Evaluation</li>
                  <li>Comprehensive ENT Care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <EntSpecialisationTabs />
        <Frequently />
      </main>
      <MapWraper />
      <Footer />
    </>
  );
}
export default TeamDetail;
