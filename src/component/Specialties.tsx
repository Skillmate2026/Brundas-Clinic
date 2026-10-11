"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./specialties.css";

const entSpecialties = [
  {
    title: "Sinus & Allergy",
    desc: "Advanced diagnosis and treatment for sinusitis, nasal blockage, and allergic conditions.",
    img: "/assets/service-images/sinus-allergy-treatment.avif",
    link: "/our-services/ent-services/sinus-allergy-treatment",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Micro Ear Surgery",
    desc: "Advanced microscopic ear surgeries for hearing loss and chronic ear infections.",
    img: "/assets/service-images/micro-ear-surgery.avif",
    link: "/our-services/ent-services/micro-ear-surgery",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Vertigo Treatment",
    desc: "Accurate evaluation and effective treatment for dizziness, balance, and inner ear disorders.",
    img: "/assets/service-images/vertigo-treatment.avif",
    link: "/our-services/ent-services/vertigo-treatment",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Foreign Body ENT",
    desc: "Safe and prompt removal of foreign objects from ear, nose, and throat.",
    img: "/assets/service-images/foreign-body-removal-ent.avif",
    link: "/our-services/ent-services/foreign-body-removal-ent",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Head & Neck Disorders",
    desc: "Comprehensive care for neck lumps, thyroid issues, salivary gland, and throat disorders.",
    img: "/assets/service-images/head-neck-disorders.avif",
    link: "/our-services/ent-services/head-neck-disorders",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Endoscopy",
    desc: "Diagnostic nasal and throat endoscopy for precise evaluation of ENT conditions.",
    img: "/assets/service-images/ent-endoscopy.avif",
    link: "/our-services/ent-services/ent-endoscopy",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Adenotonsillectomy",
    desc: "Surgical removal of adenoids and tonsils to treat recurrent infections and breathing issues.",
    img: "/assets/service-images/adenotonsillectomy.avif",
    link: "/our-services/ent-services/adenotonsillectomy",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Pediatric ENT Care",
    desc: "Specialized ENT care for children including infections, breathing, and hearing problems.",
    img: "/assets/service-images/pediatric-ent-care.avif",
    link: "/our-services/ent-services/pediatric-ent-care",
    altText: "Best ENT Specialist in Vijayanagar",
  },
  {
    title: "Voice Disorders",
    desc: "Diagnosis and treatment for hoarseness, voice strain, and vocal cord conditions.",
    img: "/assets/service-images/voice-disorders-treatment.avif",
    link: "/our-services/ent-services/voice-disorders-treatment",
    altText: "Best ENT Specialist in Vijayanagar",
  },

  // {
  //   title: "Audiology & Hearing Aids",
  //   desc: "Comprehensive hearing evaluation and advanced digital hearing aid solutions.",
  //   img: "/assets/service-images/audiology-hearing-aids.avif",
  //   link: "/our-services/ent-services/audiology-hearing-aids",  // },
];

const orthoSpecialties = [
  {
    title: "Orthopaedic Trauma",
    desc: "Expert care for bone fractures, joint injuries, and emergency orthopaedic conditions.",
    img: "/assets/service-images/orthopaedic-trauma.avif",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Poly Trauma Management",
    desc: "Comprehensive treatment for multiple injuries involving bones, joints, and soft tissues.",
    img: "/assets/service-images/poly-trauma-management.avif",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Complex & Revision Trauma",
    desc: "Advanced surgical solutions for complex fractures and revision procedures.",
    img: "/assets/service-images/complex-revision-trauma.avif",
    link: "/our-services/orthopaedic-services/complex-revision-trauma",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Joint Replacement",
    desc: "Total and partial joint replacement surgeries for hip, knee, and shoulder.",
    img: "/assets/service-images/joint-replacement.jpg",
    link: "/our-services/orthopaedic-services/joint-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Sports Injuries",
    desc: "Specialized treatment for sports-related injuries and athletic performance recovery.",
    img: "/assets/service-images/sports-injuries.avif",
    link: "/our-services/orthopaedic-services/sports-injuries",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Arthroscopic Procedures",
    desc: "Minimally invasive keyhole surgery for joint problems with faster recovery.",
    img: "/assets/service-images/arthroscopic-procedures.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-procedures",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Spine Surgeries",
    desc: "Advanced spinal procedures for disc problems, deformities, and spinal injuries.",
    img: "/assets/service-images/spine-surgeries.avif",
    link: "/our-services/orthopaedic-services/spine-surgeries",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Pediatric Orthopaedics",
    desc: "Specialized bone and joint care for children including growth-related disorders.",
    img: "/assets/service-images/pediatrics-orthopaedics.avif",
    link: "/our-services/orthopaedic-services/pediatrics-orthopaedics",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Deformity Correction",
    desc: "Surgical correction of bone and joint deformities for improved function and alignment.",
    img: "/assets/service-images/deformity-correction.jpg",
    link: "/our-services/orthopaedic-services/deformity-correction",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Arthroscopic Surgeries",
    desc: "Comprehensive minimally invasive knee, shoulder, and hip keyhole procedures for faster recovery.",
    img: "/assets/service-images/arthroscopic-procedures.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "ACL Repair / Reconstruction",
    desc: "Arthroscopic ACL repair and reconstruction to restore knee stability and protect cartilage.",
    img: "/assets/service-images/acl-repair-reconstruction.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "PCL Repair / Reconstruction",
    desc: "Targeted PCL reconstruction to regain posterior knee stability and confidence in movement.",
    img: "/assets/service-images/pcl-repair-reconstruction.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Artificial Graft Cruciate Ligament",
    desc: "Synthetic graft-based cruciate ligament reconstruction for complex or revision knee instability.",
    img: "/assets/service-images/artificial-graft-cruciate-ligament.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Meniscus Repair",
    desc: "Meniscus-preserving arthroscopy to maintain knee cushioning and long-term joint health.",
    img: "/assets/service-images/meniscus-repair.jpg",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Meniscal Root Repair",
    desc: "Root repair to restore meniscus anchorage and prevent rapid cartilage wear.",
    img: "/assets/service-images/meniscal-root-repair.jpg",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Meniscus Transplant",
    desc: "Meniscus graft transplant for meniscus-deficient knees to restore shock absorption.",
    img: "/assets/service-images/meniscus-transplant.jpg",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Rotator Cuff Repair",
    desc: "Arthroscopic and mini-open repairs to restore shoulder strength and reduce pain.",
    img: "/assets/service-images/rotator-cuff-repair.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Bankart Repair",
    desc: "Shoulder stabilization surgery for recurrent anterior dislocations and labral tears.",
    img: "/assets/service-images/bankart-repair.avif",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Shoulder Instability Treatment",
    desc: "Comprehensive rehab and arthroscopic stabilization for loose or recurrently dislocating shoulders.",
    img: "/assets/service-images/shoulder-instability-treatment.jpg",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Hip Arthroscopy (FAI)",
    desc: "Keyhole hip impingement surgery with labral repair to relieve pain and protect cartilage.",
    img: "/assets/service-images/hip-arthroscopy-fai.jpg",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Arthroplasty Surgeries",
    desc: "Comprehensive joint replacement program for knee, hip, shoulder, and elbow.",
    img: "/assets/service-images/joint-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Knee Replacement (Total / Partial)",
    desc: "Precision knee arthroplasty tailored to arthritis severity and alignment needs.",
    img: "/assets/service-images/knee-replacement.avif",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Robotic Knee Replacement",
    desc: "Computer-assisted knee replacement for sub-millimeter alignment and balanced ligaments.",
    img: "/assets/service-images/robotic-knee-replacement.png",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Computer-Assisted Total Knee Replacement",
    desc: "Navigation-guided total knee arthroplasty for measured alignment and reproducible implant placement.",
    img: "/assets/service-images/Computer-Assisted-Total-Knee-Replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar - Dr. Nagaraj M",
  },
  {
    title: "Hip Replacement Surgery",
    desc: "Total hip arthroplasty for advanced arthritis or AVN with stable, balanced gait focus.",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Robotic Hip Replacement",
    desc: "Technology-assisted hip arthroplasty focused on precise implant positioning and leg-length restoration.",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar - Dr. Nagaraj M",
  },
  {
    title: "Computer-Assisted Hip Replacement",
    desc: "Navigation-guided hip replacement for accurate cup orientation, balance, and stable gait recovery.",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar - Dr. Nagaraj M",
  },
  {
    title: "Shoulder Replacement",
    desc: "Anatomic and reverse shoulder replacements for arthritis and cuff-deficient shoulders.",
    img: "/assets/service-images/shoulder-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Elbow Replacement",
    desc: "Elbow arthroplasty for severe arthritis or complex fractures to restore motion and comfort.",
    img: "/assets/service-images/elbow-replacement.jpg",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Trauma Surgeries",
    desc: "Full-spectrum trauma care, from initial stabilization to definitive fracture management.",
    img: "/assets/service-images/trauma-general-ortho.avif",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Rheumatoid Arthritis Treatment",
    desc: "Medical, rehab, and surgical options to control RA, preserve joints, and reduce flares.",
    img: "/assets/service-images/rheumatoid-arthritis.avif",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Tennis Elbow Treatment",
    desc: "Targeted therapy, injections, and surgery when needed for lateral elbow tendinopathy.",
    img: "/assets/service-images/tennis-elbow-treatment.avif",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
  {
    title: "Plantar Fasciitis",
    desc: "Gait-focused heel pain care with rehab, orthotics, and advanced therapies.",
    img: "/assets/service-images/plantar-fasciitis-treatment.avif",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
    altText: "Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M",
  },
];

const doctorInfo = {
  ent: {
    name: "Dr. Meghana Janardhan",
    qualification: "MS ENT",
    specialization: "ENT Surgeon",
    experience: "Expert in Ear, Nose & Throat Care",
    image: "/assets/doctors-image/Dr-Meghana-Janardhan.png",
    link: "/our-doctors/dr-meghana-janardhan",
  },
  ortho: {
    name: "Dr. Nagaraj M",
    qualification: "MS Orthopaedics (AIIMS)",
    specialization: "Orthopaedic Surgeon",
    experience: "Expert in Joint Replacement & Trauma Care",
    image: "/assets/doctors-image/WhatsApp Image 2026-03-28 at 13.13.59.jpeg",
    link: "/our-doctors/dr-nagaraj-m",
  },
};

const ArrowIcon = () => (
  <svg className="sp-arrow" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M13.5 5l7 7-7 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 12H3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

type SpecialtiesProps = {
  defaultTab?: "ent" | "ortho";
  lockTab?: boolean;
  title?: { title?: string; subtitle?: string };
};

export default function Specialties({
  defaultTab = "ent",
  lockTab = false,
  title,
}: SpecialtiesProps) {
  const [activeTab, setActiveTab] = useState<"ent" | "ortho">(defaultTab);

  const currentSpecialties =
    activeTab === "ent" ? entSpecialties : orthoSpecialties;
  const currentDoctor = doctorInfo[activeTab];

  return (
    <section className="content-inner bg-light bg-opacity-50">
      <div className="container">
        <div className="sp-wrap">
          <div className="sp-head">
            <div className="section-head style-3">
              <div className="text-center">
                <span className="main-title text-center">What We Treat</span>
              </div>
              <h2
                className="title m-b0 wow fadeInUp text-center"
                data-wow-delay="0.2s"
                data-wow-duration="0.8s"
              >
                {title?.title ?? "Advanced  ENT &  Orthopaedic Solutions"}
              </h2>
              {title?.subtitle && (
                <p className="text-center m-b0">{title.subtitle}</p>
              )}
            </div>

            {!lockTab && (
              <div className="sp-tabs">
                <button
                  className={`sp-tab ${activeTab === "ent" ? "active" : ""}`}
                  onClick={() => setActiveTab("ent")}
                >
                  ENT Services
                </button>
                <button
                  className={`sp-tab ${activeTab === "ortho" ? "active" : ""}`}
                  onClick={() => setActiveTab("ortho")}
                >
                  Orthopaedic Services
                </button>
              </div>
            )}
          </div>

          {/* Doctor Card */}
          <div className="sp-doctor-wrap">
            <div className="sp-doctor-card">
              <div className="sp-doctor-img">
                <img
                  src={currentDoctor.image}
                  alt={currentDoctor.name}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="sp-doctor-info">
                <h3 className="sp-doctor-name">{currentDoctor.name}</h3>
                <p className="sp-doctor-qual">{currentDoctor.qualification}</p>
                <p className="sp-doctor-spec">{currentDoctor.specialization}</p>
                <p className="sp-doctor-exp">{currentDoctor.experience}</p>
              </div>
              <div className="sp-doctor-cta doctors-button-mobile">
                <span className="sp-doctor-btn">
                  <Link href={currentDoctor.link} style={{ color: "white" }}>
                    {" "}
                    View Profile
                  </Link>
                </span>
                <span className="sp-doctor-btn">
                  <Link
                    href="https://wa.link/sxr517"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Appointment
                  </Link>
                </span>
                {/* <ArrowIcon /> */}
              </div>
            </div>
          </div>

          {activeTab === "ent" && (
            <div style={{ padding: "5px" }}>
              <h1 style={{ fontSize: "18px" }}>
                Best ENT Specialist in Vijayanagar – Dr. Meghana Janardhan
              </h1>
              <p className="text-justify">
                <strong>Dr. Meghana Janardhan</strong>, MS ENT, is a highly
                experienced ENT surgeon known as one of the{" "}
                <a href="https://www.brundaspecialistclinic.com/our-services/ent-services">
                  Best ENT Specialists in Vijayanagar
                </a>
                . She provides expert diagnosis and treatment for a wide range
                of <strong>ear, nose, and throat</strong> conditions including
                sinusitis, ear infections, throat disorders, and allergies. With
                a patient-focused approach and advanced medical expertise, she
                ensures effective and personalized ENT care for every patient.
              </p>
              <p className="text-justify">
                As an experienced ENT surgeon,{" "}
                <a href="https://www.brundaspecialistclinic.com/our-doctors/dr-meghana-janardhan">
                  Dr. Meghana Janardhan
                </a>{" "}
                is committed to delivering comprehensive Ear, Nose, and Throat
                care, helping patients achieve faster recovery and long-term
                relief from ENT problems.
              </p>
            </div>
          )}
          {activeTab === "ortho" && (
            <div style={{ padding: "5px" }}>
              <h2 style={{ fontSize: "18px" }}>
                Orthopaedic Surgeon in Vijayanagar – Dr. Nagaraj M
              </h2>
              <p className="text-justify">
                If you are looking for an experienced{" "}
                <a href="https://www.brundaspecialistclinic.com/our-services/orthopaedic-services">
                  Orthopaedic Surgeon in Vijayanagar
                </a>
                , <strong>Dr. Nagaraj M</strong> offers expert care for bone,
                joint, and musculoskeletal conditions.{" "}
                <strong>
                  With an MS in Orthopaedics from All India Institute of Medical
                  Sciences (AIIMS)
                </strong>
                , he specializes in{" "}
                <strong>joint replacement surgeries and trauma care</strong>.
                Patients receive advanced diagnosis and personalized treatment
                for fractures, arthritis, sports injuries, and joint pain to
                ensure faster recovery and improved mobility.
              </p>
              <p className="text-justify">
                At <strong>Brunda Specialist Clinic</strong>, provides
                comprehensive orthopaedic care using modern techniques{" "}
                <a href="https://www.brundaspecialistclinic.com/our-doctors/dr-nagaraj-m">
                  Dr. Nagaraj M
                </a>
                and patient-focused treatment plans. His expertise in{" "}
                <strong>
                  knee replacement, hip replacement, and trauma management
                </strong>{" "}
                makes him a trusted{" "}
                <strong>Orthopaedic Surgeon in Vijayanagar, Bengaluru.</strong>
              </p>
            </div>
          )}
          <div className="sp-grid">
            {currentSpecialties.map((item: any) => (
              <Link className="sp-card" href={item.link} key={item.title}>
                <div className="sp-thumb">
                  <img src={item.img} alt={item.altText} loading="lazy" />
                </div>

                <div className="sp-body">
                  <h3 className="sp-title">{item.title}</h3>
                  <p className="sp-desc">{item.desc}</p>
                </div>

                <div className="sp-cta" aria-hidden="true">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
