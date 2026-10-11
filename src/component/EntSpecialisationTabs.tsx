"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";

/* ================= TYPES ================= */

type EntServiceItem = {
  title: string;
  desc: string;
  icon: string;
};

type EntTab = {
  key: string;
  tab: string;
  items: EntServiceItem[];
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
/* ================= DATA ================= */

const entTabsData: EntTab[] = [
  {
    key: "ear",
    tab: "Ear Disorders",
    items: [
      {
        title: "Ear infections (otitis externa & media)",
        desc: "Diagnosis and treatment for outer and middle ear infections.",
        icon: "/assets/service-images/Ear-infections.jpg",
      },
      {
        title: "Hearing loss evaluation and management",
        desc: "Accurate hearing assessment and personalized care plans.",
        icon: "/assets/service-images/Hearing-loss-evaluation-and-management.jpg",
      },
      {
        title: "Ear discharge",
        desc: "Safe evaluation and management of ear discharge causes.",
        icon: "/assets/service-images/Ear-discharge.jpg",
      },
      {
        title: "Tinnitus (ringing in the ears)",
        desc: "Expert care for ringing, buzzing, and ear noise.",
        icon: "/assets/service-images/ringing-in-the-ears.avif",
      },
      {
        title: "Vertigo and balance disorders",
        desc: "Precise diagnosis and treatment for dizziness and imbalance.",
        icon: "/assets/service-images/Vertigo.jpg",
      },
      {
        title: "Wax removal and ear care",
        desc: "Gentle wax removal and preventive ear care.",
        icon: "/assets/service-images/Wax-removal-and-ear-care.jpg",
      },
    ],
  },
  {
    key: "nose",
    tab: "Nose & Sinus Conditions",
    items: [
      {
        title: "Allergic rhinitis",
        desc: "Relief from sneezing, congestion, and nasal allergies.",
        icon: "/assets/service-images/Allergic-rhinitis.jpg",
      },
      {
        title: "Sinusitis (acute & chronic)",
        desc: "Advanced care for sinus infections and pressure.",
        icon: "/assets/service-images/sinus-infections.jpg",
      },
      {
        title: "Deviated nasal septum (DNS)",
        desc: "Evaluation for breathing difficulty due to DNS.",
        icon: "/assets/service-images/Deviated-nasal-septum.avif",
      },
      {
        title: "Nasal blockage and polyps",
        desc: "Care for chronic nasal obstruction and polyps.",
        icon: "/assets/service-images/ringing-in-the-ears.avif",
      },
      {
        title: "Nose bleeding (epistaxis)",
        desc: "Safe treatment for frequent or sudden nosebleeds.",
        icon: "/assets/service-images/Nose-bleeding.avif",
      },
      {
        title: "Endoscopic sinus evaluation",
        desc: "Precise endoscopic assessment of sinus issues.",
        icon: "/assets/service-images/Endoscopic-sinus-evaluation.jpg",
      },
    ],
  },
  {
    key: "throat",
    tab: "Throat & Voice Disorders",
    items: [
      {
        title: "Sore throat & recurrent infections",
        desc: "Comprehensive care for repeated throat infections.",
        icon: "/assets/service-images/Sore-throat-recurrent-infections.jpg",
      },
      {
        title: "Tonsillitis & adenoid problems",
        desc: "Diagnosis and treatment for tonsil and adenoid issues.",
        icon: "/assets/service-images/Tonsillitis-adenoid-problems.jpg",
      },
      {
        title: "Voice disorders & hoarseness",
        desc: "Evaluation for voice strain and hoarseness.",
        icon: "/assets/service-images/Voice-disorders.jpg",
      },
      {
        title: "Swallowing difficulty",
        desc: "Assessment for swallowing pain or obstruction.",
        icon: "/assets/service-images/Swallowing-difficulty.jpg",
      },
      {
        title: "Laryngitis",
        desc: "Treatment for voice box inflammation.",
        icon: "/assets/service-images/Treatment-for-voice.jpg",
      },
    ],
  },
  {
    key: "headneck",
    tab: "Head & Neck Conditions",
    items: [
      {
        title: "Neck swellings & lymph nodes",
        desc: "Detailed evaluation of neck swellings.",
        icon: "/assets/service-images/Neck-swellings-lymph-nodes.jpg",
      },
      {
        title: "Thyroid-related ENT conditions",
        desc: "Assessment of thyroid swellings affecting ENT.",
        icon: "/assets/service-images/Thyroid-related-ENT-conditions.avif",
      },
      {
        title: "Salivary gland disorders",
        desc: "Diagnosis and treatment for salivary gland issues.",
        icon: "/assets/service-images/Salivary-gland-disorders.jpg",
      },
      {
        title: "Head and neck infections",
        desc: "Effective management of head and neck infections.",
        icon: "/assets/service-images/Head-and-neck-infections.avif",
      },
    ],
  },
  {
    key: "pediatric",
    tab: "Pediatric ENT Care",
    items: [
      {
        title: "Ear infections in children",
        desc: "Child-friendly diagnosis and treatment.",
        icon: "/assets/service-images/Ear-infections-in-children.jpg",
      },
      {
        title: "Adenoids & tonsil problems",
        desc: "Care for breathing and sleep-related issues.",
        icon: "/assets/service-images/Tonsillitis-adenoid-problems.jpg",
      },
      {
        title: "Hearing & speech concerns",
        desc: "Early evaluation of hearing and speech delays.",
        icon: "/assets/service-images/Hearing-speech-concerns.jpg",
      },
      {
        title: "Pediatric nasal allergies",
        desc: "Relief for nasal allergy symptoms in children.",
        icon: "/assets/service-images/Pediatric-nasal-allergies.jpg",
      },
    ],
  },
  {
    key: "procedures",
    tab: "Diagnostic & Minor Procedures",
    items: [
      {
        title: "Nasal endoscopy",
        desc: "Diagnostic nasal endoscopy for precise evaluation.",
        icon: "/assets/service-images/Nasal-endoscopy.avif",
      },
      {
        title: "Laryngoscopy",
        desc: "Detailed throat and voice box examination.",
        icon: "/assets/service-images/Laryngoscopy.jpg",
      },
      {
        title: "Ear suction & microsuction",
        desc: "Safe removal of wax and debris.",
        icon: "/assets/service-images/Ear-suction-microsuction.avif",
      },
      {
        title: "Foreign body removal",
        desc: "Prompt removal from ear, nose, or throat.",
        icon: "/assets/service-images/Foreign-body-removal.avif",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

const EntSpecialisationTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(entTabsData[0].key);

  const activeTab = entTabsData.find((tab) => tab.key === activeKey) as EntTab;

  return (
    <section style={{ background: "#f6f8fb", padding: "48px 0" }}>
      <Container>
        <div className="section-head style-1 m-b30 text-center">
          <span className="main-title">Specialisation Fields</span>
          <h2
            className="title m-b0 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.7s"
          >
            Specialized ENT care you can trust
          </h2>
          <h1 className="title m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
            Best ENT Specialist Doctor in Vijayanagar – Expert ENT Care by Dr
            Meghana Janardhan
          </h1>
        </div>
        <p>
          If you are searching for the{" "}
          <a href="https://www.brundaspecialistclinic.com">
            ENT Specialist Doctor in Vijayanagar
          </a>
          , Dr Meghana Janardhan at Brunda Specialist Clinic provides expert
          diagnosis and treatment for a wide range of ear, nose, and throat
          conditions. Patients commonly visit for sinus infections, ear pain,
          hearing problems, throat infections, allergies, and voice disorders.
        </p>
        <p>
          With a patient-focused approach and advanced diagnostic methods, the
          clinic ensures accurate treatment plans and compassionate care. People
          from Vijayanagar, Govindaraj Nagar, and nearby areas trust the clinic
          for reliable ENT consultations and long-term relief from ENT problems.
        </p>
        {/* Tabs */}
        <Nav
          variant="pills"
          className="entTabsNav flex-wrap gap-1 mb-4"
          activeKey={activeKey}
          onSelect={(key) => key && setActiveKey(key)}
        >
          {entTabsData.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link eventKey={tab.key} className="entTabBtn">
                {tab.tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Grid */}
        <Row className="g-4">
          {activeTab.items.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="entServiceCard h-100">
                <Card.Body
                  className="d-flex gap-3 align-items-center justify-items-start"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                >
                  <Image
                    src={item.icon}
                    height={100}
                    width={100}
                    alt="ENT and Orthopedic Clinic in Vijayanagar"
                    className="entIcon"
                  />

                  <div className="flex-grow-1">
                    <h5 className="entTitle">{item.title}</h5>
                    <p className="entDesc mb-0">{item.desc}</p>
                  </div>

                  {/* <div className="entArrow">
                    <ArrowIcon />
                  </div> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Styles */}
      <style>{`
        .entTabsNav .entTabBtn {
          border-radius: 12px;
          padding: 10px 16px;
          font-weight:_ATTACH 600;
          color: #0b3a63;
          background: #ffffff;
          border: 1px solid #dbe5ef;
          box-shadow: 0 6px 14px rgba(0,0,0,0.06);
        }
        .entTabsNav .nav-link.active {
          background: linear-gradient(90deg, #0d67b5, #0a4e88);
          color: #fff;
          border: none;
          box-shadow: 0 10px 22px rgba(13,103,181,0.25);
        }
        .entServiceCard {
          border: 1px solid #e8eef6;
          border-radius: 16px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .entServiceCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.1);
        }
        .entIcon {
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef6ff;
          font-size: 24px;
        }
        .entTitle {
          font-size: 18px;
          color: #2d3ba1;
          margin-bottom: 4px;
        }
        .entDesc {
          font-size: 14px;
          color: #566a7f;
          line-height: 1.4;
        }
        .entArrow {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d67b5;
          background: #f2f7ff;
          border: 1px solid #e1edff;
        }
      `}</style>
    </section>
  );
};

export default EntSpecialisationTabs;
