import Image from "next/image";
import styles from "../../public/assets/css/AffiliatedHospitals.module.css";

const affiliatedHospitals = [
  {
    name: "Sakra World Hospital",
    logo: "/assets/hospitals/sakra-world-hospital.png",
  },
  {
    name: "Sakra IKOC Hospital",
    logo: "/assets/hospitals/Sakra-IKOC-Hospital.png",
  },
  {
    name: "Sparsh Hospital",
    logo: "/assets/hospitals/Aasparsh-Hospital.png",
  },
  {
    name: "GM Hospital",
    logo: "/assets/hospitals/GM-Hospital.png",
  },
  {
    name: "Rangadore Memorial Hospital",
    logo: "/assets/hospitals/Rangadore-Memorial-Hospital.png",
  },
  {
    name: "Manipal Hospitals Bengaluru",
    logo: "/assets/flat-icons/manipal-hospitals.webp",
  },
];

export default function AffiliatedHospitals() {
  return (
    <section className={styles.affiliatedSection}>
      <h3 className={styles.title}>Affiliated Hospitals</h3>

      <div className={styles.grid}>
        {affiliatedHospitals.map((hospital, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.logoWrapper}>
              <Image
                src={hospital.logo}
                alt="Best Orthopaedic Clinic in Vijayanagar"
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
                className={styles.logo}
              />
            </div>
            <p className={styles.name}>{hospital.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
