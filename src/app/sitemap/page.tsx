"use client";

import Link from "next/link";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { IMAGES } from "../../constant/theme";
import PageBanner from "../../component/PageBanner";

type ServiceLink = {
  title: string;
  link: string;
};

type LocationLinks = {
  name: string;
  services: ServiceLink[];
};

const locationServiceMap: Record<string, string[]> = {
  "Govindaraj Nagar": [
    "Spine Doctor in Govindaraj Nagar",
    "Spine Surgery in Govindaraj Nagar",
    "Spine Surgeries in Govindaraj Nagar",
    "Orthopaedic Surgeon in Govindaraj Nagar",
    "Orthopaedic Doctor in Govindaraj Nagar",
    "Orthopaedic Clinic in Govindaraj Nagar",
    "Orthopaedic Specialist in Govindaraj Nagar",
    "Bone Specialist Doctor in Govindaraj Nagar",
    "Bone and Joint Clinic in Govindaraj Nagar",
    "Knee Replacement Surgery in Govindaraj Nagar",
    "Robotic Knee Replacement in Govindaraj Nagar",
    "Hip Replacement Surgery in Govindaraj Nagar",
    "Shoulder Replacement Surgery in Govindaraj Nagar",
    "Best Joint Replacement Surgeon in Govindaraj Nagar",
    "Arthroplasty Surgeries in Govindaraj Nagar",
    "Arthroscopic Surgery in Govindaraj Nagar",
    "ACL Treatment in Govindaraj Nagar",
    "ACL Repair in Govindaraj Nagar",
    "PCL Repair in Govindaraj Nagar",
    "Meniscus Repair Surgery in Govindaraj Nagar",
    "Rotator Cuff Repair Surgery in Govindaraj Nagar",
    "Shoulder Instability Surgery in Govindaraj Nagar",
    "Hip Arthroscopy Surgery in Govindaraj Nagar",
    "Spine Care in Govindaraj Nagar",
    "Trauma Surgery Treatment in Govindaraj Nagar",
    "ENT Specialist in Govindaraj Nagar",
    "Best ENT Doctor in Govindaraj Nagar",
    "Micro Ear Surgery in Govindaraj Nagar",
    "Vertigo Treatment in Govindaraj Nagar",
    "Pediatric ENT Care in Govindaraj Nagar",
  ],
  Nagarabhavi: [
    "Spine Doctor in Nagarabhavi",
    "Spine Surgery in Nagarabhavi",
    "Spine Surgeries in Nagarabhavi",
    "Orthopaedic Surgeon in Nagarabhavi",
    "Orthopaedic Doctor in Nagarabhavi",
    "Orthopaedic Clinic in Nagarabhavi",
    "Orthopaedic Specialist in Nagarabhavi",
    "Bone Specialist Doctor in Nagarabhavi",
    "Bone and Joint Clinic in Nagarabhavi",
    "Knee Replacement Surgery in Nagarabhavi",
    "Robotic Knee Replacement in Nagarabhavi",
    "Hip Replacement Surgery in Nagarabhavi",
    "Shoulder Replacement Surgery in Nagarabhavi",
    "Best Joint Replacement Surgeon in Nagarabhavi",
    "Arthroplasty Surgeries in Nagarabhavi",
    "Arthroscopic Surgery in Nagarabhavi",
    "ACL Treatment in Nagarabhavi",
    "ACL Repair in Nagarabhavi",
    "PCL Repair in Nagarabhavi",
    "Meniscus Repair Surgery in Nagarabhavi",
    "Rotator Cuff Repair Surgery in Nagarabhavi",
    "Shoulder Instability Surgery in Nagarabhavi",
    "Hip Arthroscopy Surgery in Nagarabhavi",
    "Spine Care in Nagarabhavi",
    "Trauma Surgery Treatment in Nagarabhavi",
    "ENT Specialist in Nagarabhavi",
    "Best ENT Doctor in Nagarabhavi",
    "Micro Ear Surgery in Nagarabhavi",
    "Vertigo Treatment in Nagarabhavi",
    "Pediatric ENT Care in Nagarabhavi",
  ],
  "Maruthi Mandir": [
    "Spine Doctor in Maruthi Mandir",
    "Spine Surgery in Maruthi Mandir",
    "Spine Surgeries in Maruthi Mandir",
    "Orthopaedic Surgeon in Maruthi Mandir",
    "Orthopaedic Doctor in Maruthi Mandir",
    "Orthopaedic Clinic in Maruthi Mandir",
    "Orthopaedic Specialist in Maruthi Mandir",
    "Bone Specialist Doctor in Maruthi Mandir",
    "Bone and Joint Clinic in Maruthi Mandir",
    "Spine Care in Maruthi Mandir",
    "Trauma Surgery Treatment in Maruthi Mandir",
    "Knee Replacement Surgery in Maruthi Mandir",
    "Robotic Knee Replacement in Maruthi Mandir",
    "Hip Replacement Surgery in Maruthi Mandir",
    "Shoulder Replacement Surgery in Maruthi Mandir",
    "Arthroplasty Surgeries in Maruthi Mandir",
    "ACL Treatment in Maruthi Mandir",
    "PCL Repair in Maruthi Mandir",
    "Meniscus Repair Surgery in Maruthi Mandir",
    "Rotator Cuff Repair Surgery in Maruthi Mandir",
    "Shoulder Instability Surgery in Maruthi Mandir",
    "Hip Arthroscopy Surgery in Maruthi Mandir",
    "ENT Specialist in Maruthi Mandir",
    "Best ENT Doctor in Maruthi Mandir",
    "Micro Ear Surgery in Maruthi Mandir",
    "Vertigo Treatment in Maruthi Mandir",
    "Pediatric ENT Care in Maruthi Mandir",
  ],
  Moodalapalya: [
    "Spine Doctor in Moodalapalya",
    "Spine Surgery in Moodalapalya",
    "Spine Surgeries in Moodalapalya",
    "Orthopaedic Surgeon in Moodalapalya",
    "Orthopaedic Doctor in Moodalapalya",
    "Orthopaedic Clinic in Moodalapalya",
    "Orthopaedic Specialist in Moodalapalya",
    "Bone Specialist Doctor in Moodalapalya",
    "Bone and Joint Clinic in Moodalapalya",
    "Spine Care in Moodalapalya",
    "Trauma Surgery Treatment in Moodalapalya",
    "Knee Replacement Surgery in Moodalapalya",
    "Robotic Knee Replacement in Moodalapalya",
    "Hip Replacement Surgery in Moodalapalya",
    "Shoulder Replacement Surgery in Moodalapalya",
    "Best Joint Replacement Surgeon in Moodalapalya",
  ],
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const locations: LocationLinks[] = Object.entries(
  locationServiceMap
).map(([name, services]) => ({
  name,
  services: services.map((title) => ({
    title,
    link: `/sitemap/${slugify(title)}`,
  })),
}));

const SiteMap = () => (
  <>
    <Header />
    <PageBanner
      filteredData={{ title: "Sitemap" }}
      title="Sitemap"
      bnrimage={IMAGES.bnr1.src}
    />
    <div className="container">
      <div className="columns-grid" style={{ padding: "50px" }}>
        {locations.map((loc) => (
          <div key={loc.name}>
            <h5 style={{ marginBottom: 20 }}>{loc.name}</h5>
            <ol style={{ listStyle: "inherit", padding: 0 }}>
              {loc.services.map((service) => (
                <li key={service.link} style={{ marginBottom: 12 }}>
                  <Link href={service.link} className="cs_post_title">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    <style>{`
      .columns-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
      }
      @media (min-width: 900px) {
        .columns-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .cs_post_title {
        font-size: 1.1rem;
        color: #1a1a1a;
        text-decoration: none;
        transition: color 0.2s;
      }
      .cs_post_title:hover {
        color: #0070f3;
      }
    `}</style>
  </>
);

export default SiteMap;
