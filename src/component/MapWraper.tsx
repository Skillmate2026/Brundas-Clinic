"use client";

import Link from "next/link";
import { mapdata } from "../constant/alldata";

function MapWraper() {
  return (
    <>
      <section className="content-wrapper style-4">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5489214015497!2d77.5249237!3d12.968753699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ded76fddc49%3A0x6aefc9ebb55bd102!2sBRUNDA%20SPECIALIST%20CLINIC%20(Dr%20Meghana%20Janardhan-ENT%20%2F%20Dr%20Nagaraj%20M%20-%20ORTHOPAEDICS)!5e1!3m2!1sen!2sin!4v1765785147250!5m2!1sen!2sin"
              height="450"
              style={{ border: "0", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="row justify-content-end">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8">
              <div className="content-info bg-secondary">
                <div
                  className="section-head style-1 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h2 className="title m-b0 text-white">
                    Get In Touch With Us
                  </h2>
                </div>
                {mapdata.map((data, i) => (
                  <div
                    className="icon-bx-wraper style-1 m-b20 wow fadeInUp"
                    data-wow-delay={data.delay}
                    data-wow-duration="0.8s"
                    key={i}
                  >
                    <div className="icon-bx">
                      <span className="icon-cell"> {data.icon} </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">{data.title}</h5>
                      {data.para}
                    </div>
                  </div>
                ))}

                {/* --- ADDED SOCIAL MEDIA LINKS --- */}
                <div 
                  className="dz-social-icon style-1 m-t30 wow fadeInUp" 
                  data-wow-delay="1.0s" 
                  data-wow-duration="0.8s"
                >
                  <style jsx>{`
                    .map-social-list li a {
                      width: 45px !important; 
                      height: 45px !important;
                      display: inline-flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      background-color: rgba(255, 255, 255, 0.1) !important;
                      border-radius: 50%;
                      transition: all 0.3s ease;
                    }
                    .map-social-list li a:hover {
                      background-color: #EA8D21 !important;
                    }
                    .map-social-list li i {
                      font-size: 20px !important; 
                      color: white !important; 
                    }
                  `}</style>
                  
                  <ul className="map-social-list d-flex" style={{ padding: 0, gap: "12px", listStyle: "none", marginBottom: 0 }}>
                    <li>
                      <a href="https://wa.me/919632371211" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/brunda-advanced-orthopaedics-ent-centre/home/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/brundas_clinic/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/people/Brundas-Clinic/61593364482305/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCDq6PD0fRUgP1s-YyEVwqPw" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* --- END SOCIAL MEDIA LINKS --- */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MapWraper;