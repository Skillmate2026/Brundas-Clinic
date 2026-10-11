import Link from "next/link";
import { IMAGES, SVGICONS } from "./theme";
import Image, { StaticImageData } from "next/image";

// layout
// header
export const headerinfo = [
  {
    image: "/assets/flat-icons/phone-call.svg",
    title: "Contatc Us",
    paragraph: (
      <Link href="tel:+919632371211" className="text-white">
        +91 96323 71211
      </Link>
    ),
  },
  {
    image: "/assets/flat-icons/email.svg",
    title: "Email Supports",
    paragraph: (
      <Link
        href="mailto:brundaspecialistclinic@gmail.com"
        className="text-white"
      >
        brundaspecialistclinic@gmail.com
      </Link>
    ),
  },
  // {
  //   image: "/assets/flat-icons/telemedicine.svg",
  //   title: "Online Appointment",
  //   paragraph: (
  //     <span>
  //       <Link href="https://wa.link/sxr517" className="text-white">
  //         Book Now
  //       </Link>
  //       <i className="feather icon-arrow-right" />
  //     </span>
  //   ),
  // },
  {
    image: "/assets/flat-icons/calendar.svg",
    title: "Timings",
    paragraph: (
      <span>
        <span className="text-white">Mon - Sat : 6:00 PM - 9:00 PM &ensp;</span>
        <span className="text-white">Sun : Holiday</span>
      </span>
    ),
  },
  // {
  //   image: IMAGES.svgicon5,
  //   title: "Payment",
  //   paragraph: (
  //     <span>
  //       Pay Online <i className="feather icon-arrow-right" />
  //     </span>
  //   ),
  // },
  // { image: IMAGES.svgicon6, title: "My Cart", paragraph: "2 Items" },
];

export type HeaderContentItem = {
  title: string;
  to?: string;
  image?: string | StaticImageData;
  submenu?: HeaderContentItem[];
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};

export const headerdata: HeaderItem[] = [
  {
    title: "Home",
    to: "/",
  },
  { title: "About Us", to: "/about-us" },
  // {
  //   title: "Pages",
  //   classChange: "sub-menu-down",
  //   content: [
  //     { title: "Appointment", to: "/appointment" },
  //     { title: "Pricing Table", to: "/pricing-table" },
  //     { title: "Patient Info", to: "/patient-info" },
  //     { title: "Testimonial", to: "/testimonial" },
  //     { title: "Faqs", to: "/faqs" },
  //     { title: "Error 404", to: "/error-404" },
  //     { title: "Coming Soon", to: "/coming-soon" },
  //     { title: "Under construction", to: "/under-construction" },
  //   ],
  // },
  {
    title: "Team",
    classChange: "sub-menu-down",
    to: "/our-doctors",
    content: [
      {
        title: "Dr. Meghana Janardhan",
        to: "/our-doctors/dr-meghana-janardhan",
      },
      { title: "Dr. Nagaraj M", to: "/our-doctors/dr-nagaraj-m" },
    ],
  },
  {
    title: "Services",
    classChange: "has-mega-menu",
    to: "/our-services",
    content: [
      {
        title: "ENT Services",
        to: "/our-services/ent-services",
        submenu: [
          {
            title: "Sinus & Allergy",
            to: "/our-services/ent-services/sinus-allergy-treatment",
          },
          {
            title: "Micro Ear Surgery",
            to: "/our-services/ent-services/micro-ear-surgery",
          },
          {
            title: "Vertigo Treatment",
            to: "/our-services/ent-services/vertigo-treatment",
          },
          {
            title: "Foreign Body ENT",
            to: "/our-services/ent-services/foreign-body-removal-ent",
          },
          {
            title: "Head & Neck Disorders",
            to: "/our-services/ent-services/head-neck-disorders",
          },
          {
            title: "Endoscopy",
            to: "/our-services/ent-services/ent-endoscopy",
          },
          {
            title: "Adenotonsillectomy",
            to: "/our-services/ent-services/adenotonsillectomy",
          },
          {
            title: "Pediatric ENT Care",
            to: "/our-services/ent-services/pediatric-ent-care",
          },
          {
            title: "Voice Disorders",
            to: "/our-services/ent-services/voice-disorders-treatment",
          },

          // {
          //   title: "Audiology & Hearing Aids",
          //   to: "/our-services/ent-services/audiology-hearing-aids",
          // },
        ],
      },
      {
        title: "Orthopaedic Services",
        to: "/our-services/orthopaedic-services",
        submenu: [
          {
            title: "Arthroscopic Surgeries",
            to: "/our-services/orthopaedic-services/arthroscopic-surgeries",
            submenu: [
              {
                title: "ACL Repair / Reconstruction",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
              },
              {
                title: "PCL Repair / Reconstruction",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
              },
              {
                title: "Cruciate Ligament Reconstruction (Artificial Graft)",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
              },
              {
                title: "Meniscus Repair",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
              },
              {
                title: "Meniscal Root Repair / Reconstruction",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
              },
              {
                title: "Meniscus Transplant",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
              },
              {
                title: "Rotator Cuff Repair",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
              },
              {
                title: "Bankart Repair",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
              },
              {
                title: "Shoulder Instability Treatment",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
              },
              {
                title: "Hip Arthroscopy (FAI)",
                to: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
              },
            ],
          },
          {
            title: "Arthroplasty Surgeries",
            to: "/our-services/orthopaedic-services/arthroplasty",
            submenu: [
              {
                title: "Knee Replacement (Total / Partial)",
                to: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
              },
              {
                title: "Robotic / Computer-Assisted Knee Replacement",
                to: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
              },
              {
                title: "Computer-Assisted Total Knee Replacement",
                to: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
              },
              {
                title: "Hip Replacement Surgery",
                to: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
              },
              {
                title: "Robotic Hip Replacement",
                to: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
              },
              {
                title: "Computer-Assisted Hip Replacement",
                to: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
              },
              {
                title: "Shoulder Replacement (Total / Reverse)",
                to: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
              },
              {
                title: "Elbow Replacement",
                to: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
              },
            ],
          },
          {
            title: "Trauma Surgeries",
            to: "/our-services/orthopaedic-services/trauma-general-ortho",
            submenu: [
              {
                title: "Orthopaedic Trauma (Simple & Complex)",
                to: "/our-services/orthopaedic-services/orthopaedic-trauma",
              },
              {
                title: "Poly Trauma Management",
                to: "/our-services/orthopaedic-services/poly-trauma-management",
              },
            ],
          },
          {
            title: "Other Surgeries",
            to: "#",
            submenu: [
              {
                title: "Pediatric Deformity Surgeries",
                to: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
              },
              {
                title: "Spine Surgeries",
                to: "/our-services/orthopaedic-services/spine-surgeries",
              },
              {
                title: "Rheumatoid Arthritis Treatment",
                to: "/our-services/orthopaedic-services/rheumatoid-arthritis",
              },
              {
                title: "Tennis Elbow Treatment",
                to: "/our-services/orthopaedic-services/tennis-elbow-treatment",
              },
              {
                title: "Plantar Fasciitis Treatment",
                to: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   title: "Blogs",
  //   to: "#",
  // },
  { title: "Gallery", to: "/gallery" },
  { title: "Contact Us", to: "/contact-us" },
];
// footer
export const footerdata1 = [
  {
    delay: "0.4s",
    icon: <i className="feather icon-phone" />,
    title: "Call Us",
    paragraph: (
      <Link href="tel:+11234567890" className="text-body">
        +1 123 456 7890
      </Link>
    ),
  },
  {
    delay: "0.6s",
    icon: <i className="feather icon-mail" />,
    title: "Send us a Mail",
    paragraph: (
      <Link
        href="mailto:brundaspecialistclinic@gmail.com"
        className="text-body"
      >
        brundaspecialistclinic@gmail.com
      </Link>
    ),
  },
  {
    delay: "0.8s",
    icon: <i className="feather icon-clock" />,
    title: "Opening Time",
    paragraph: "Mon -Sat: 7:00 - 17:00",
  },
];
export const footerdata2 = [
  {
    title: "Our ENT Services",

    /* Most searched & common first */
    span1: "Sinus and Allergy Treatment",
    span2: "Pediatric ENT Problems",
    span3: "Adenotonsillectomy",
    span4: "Vertigo Treatment",
    span5: "Micro Ear Surgery",
    span6: "Voice Disorders",
    span7: "Foreign Body ENT Management",
    span8: "Endoscopy",
    span9: "Head and Neck Cancer",

    link1: "/our-services/ent-services/sinus-allergy-treatment",
    link2: "/our-services/ent-services/pediatric-ent-care",
    link3: "/our-services/ent-services/adenotonsillectomy",
    link4: "/our-services/ent-services/vertigo-treatment",
    link5: "/our-services/ent-services/micro-ear-surgery",
    link6: "/our-services/ent-services/voice-disorders-treatment",
    link7: "/our-services/ent-services/foreign-body-removal-ent",
    link8: "/our-services/ent-services/ent-endoscopy",
    link9: "/our-services/ent-services/head-neck-disorders",

    delay: "0.4s",
  },

  {
    title: "Our Orthopaedic Services",

    /* General → Specialized */
    span1: "Orthopaedic Trauma",
    span2: "Poly Trauma Management",
    span3: "Complex & Revision Trauma",
    span4: "Joint Replacement",
    span5: "Sports Injuries",
    span6: "Arthroscopic Procedures",
    span7: "Spine Surgeries",
    span8: "Pediatrics Orthopaedics",
    span9: "Deformity Correction",

    link1: "/our-services/orthopaedic-services/orthopaedic-trauma",
    link2: "/our-services/orthopaedic-services/poly-trauma-management",
    link3: "/our-services/orthopaedic-services/complex-revision-trauma",
    link4: "/our-services/orthopaedic-services/joint-replacement",
    link5: "/our-services/orthopaedic-services/sports-injuries",
    link6: "/our-services/orthopaedic-services/arthroscopic-procedures",
    link7: "/our-services/orthopaedic-services/spine-surgeries",
    link8: "/our-services/orthopaedic-services/pediatrics-orthopaedics",
    link9: "/our-services/orthopaedic-services/deformity-correction",

    delay: "0.4s",
  },

  {
    title: "Quick Links",

    /* Navigation priority */
    span1: "Home",
    span2: "About Us",
    span3: "Our Team",
    span4: "Our ENT Services",
    span5: "Our Orthopaedic Services",
    span6: "Blogs",
    span7: "Gallery",
    span8: "Contact Us",
    span9: "Sitemap",

    link1: "/",
    link2: "/about-us",
    link3: "/our-doctors",
    link4: "/our-services/ent-services",
    link5: "/our-services/orthopaedic-services",
    link6: "#",
    link7: "/gallery",
    link8: "/contact-us",
    link9: "/sitemap",

    delay: "1.0s",
  },
];

// pages
// testimonial
export const testidata = [
  {
    treat: "Optimal Treatment",
    delay: "0.2s",
    title: "Kenneth Fong",
    position: "Patient",
    image: IMAGES.testimonial2,
  },
  {
    treat: "Best Treatment",
    delay: "0.4s",
    title: "Danial Frankie",
    position: "Patient",
    image: IMAGES.testimonial3,
  },
  {
    treat: "Recommended Care",
    delay: "0.6s",
    title: "Rihana Roy",
    position: "Patient",
    image: IMAGES.testimonial4,
  },
  {
    treat: "First-Class Treatment",
    delay: "0.8s",
    title: "Kenneth Fong",
    position: "Patient",
    image: IMAGES.testimonial5,
  },
];
export const testiswipeerdata2 = [
  { image: IMAGES.testimonialsmall1, name: "Danial Frankie" },
  { image: IMAGES.testimonialsmall2, name: "Esteban Serrano" },
  { image: IMAGES.testimonialsmall3, name: "Rihana Roy" },
];

export interface BlogItem {
  image: any;
  dealy: string;
  title: string;
}

// bloggrid
export const blogdata: BlogItem[] = [
  {
    image: IMAGES.blogoverlaylarge1,
    dealy: "0.1s",
    title: "The Art of Managing Business and Patient Care.",
  },
  {
    image: IMAGES.blogoverlaylarge2,
    dealy: "0.2s",
    title: "Successful Transitional Rehab: More Than Just Exercise",
  },
  {
    image: IMAGES.blogoverlaylarge3,
    dealy: "0.3s",
    title: "What is Respite Care and Why is it Important?",
  },
  {
    image: IMAGES.blogoverlaylarge4,
    dealy: "0.4s",
    title: "The Art of Managing Business and Patient Care",
  },
  {
    image: IMAGES.blogoverlaylarge5,
    dealy: "0.5s",
    title: "Three Years Post Injury: Persistence and Progress",
  },
  {
    image: IMAGES.blogoverlaylarge6,
    dealy: "0.6s",
    title: "How Transitional Rehabilitation Aids in Stroke Recovery",
  },
];
export const blogdata2 = [
  {
    image: IMAGES.bloggrid1,
    dealy: "0.1s",
    title: "The Art of Managing Business and Patient Care.",
  },
  {
    image: IMAGES.bloggrid2,
    dealy: "0.2s",
    title: "Successful Transitional Rehab: More Than Just Exercise",
  },
  {
    image: IMAGES.bloggrid3,
    dealy: "0.3s",
    title: "What is Respite Care and Why is it Important?",
  },
  {
    image: IMAGES.bloggrid4,
    dealy: "0.4s",
    title: "The Art of Managing Business and Patient Care",
  },
  {
    image: IMAGES.bloggrid5,
    dealy: "0.5s",
    title: "Three Years Post Injury: Persistence and Progress",
  },
  {
    image: IMAGES.bloggrid6,
    dealy: "0.6s",
    title: "How Transitional Rehabilitation Aids in Stroke Recovery",
  },
];
// servicedetails
export const servicedetails = [
  { columnstand: "active", title: "Angioplasty" },
  { title: "Cardiology" },
  { title: "Dental" },
  { title: "Endocrinology" },
  { title: "Eye Care" },
  { title: "Neurology" },
  { title: "Orthopedics" },
  { title: "RMI" },
];
// teamdetail
export const empolydata = [
  {
    id: 1,
    delay: "0.2s",
    image: "/assets/doctors-image/Dr-Meghana-Janardhan.png",
    title: "Dr. Meghana Janardhan",
    position: "ENT Surgeon",
  },
  {
    id: 2,
    delay: "0.2s",
    image: "/assets/doctors-image/WhatsApp Image 2026-03-28 at 13.13.59.jpeg",
    title: "Dr. Nagaraj M",
    position: "Orthopedic Surgeon",
  },
];
// component
// alllocation
export const locationdata = [
  { delay: "0.2s", title: "United State" },
  { delay: "0.4s", title: "Canada" },
];
// awards
export const awardswiperdata = [
  { image: IMAGES.logo1 },
  { image: IMAGES.logo2 },
  { image: IMAGES.logo3 },
  { image: IMAGES.logo1 },
  { image: IMAGES.logo2 },
  { image: IMAGES.logo3 },
];
export const awarddata = [
  { delay: "0.5s", title: "2024" },
  { delay: "0.6s", title: "2023" },
  { delay: "0.7s", title: "2022" },
  { delay: "0.8s", title: "2021" },
  { delay: "0.9s", title: "2020" },
  { delay: "1.0s", title: "2019" },
  { delay: "1.1s", title: "View All" },
];
// clientswiper1
export const clientswiperdata1 = [
  { image: IMAGES.logomiddle1, delay: "0.1s" },
  { image: IMAGES.logomiddle2, delay: "0.2s" },
  { image: IMAGES.logomiddle3, delay: "0.3s" },
  { image: IMAGES.logomiddle4, delay: "0.4s" },
  { image: IMAGES.logomiddle1, delay: "0.5s" },
  { image: IMAGES.logomiddle2, delay: "0.6s" },
  { image: IMAGES.logomiddle3, delay: "0.7s" },
  { image: IMAGES.logomiddle4, delay: "0.8s" },
];
// clientswiper2
export const clientswiperdata2 = [
  { image: IMAGES.logosmall1, delay: "0.1s" },
  { image: IMAGES.logosmall2, delay: "0.2s" },
  { image: IMAGES.logosmall3, delay: "0.3s" },
  { image: IMAGES.logosmall4, delay: "0.4s" },
  { image: IMAGES.logosmall5, delay: "0.5s" },
  { image: IMAGES.logosmall6, delay: "0.6s" },
  { image: IMAGES.logosmall1, delay: "0.7s" },
  { image: IMAGES.logosmall2, delay: "0.8s" },
  { image: IMAGES.logosmall3, delay: "0.9s" },
  { image: IMAGES.logosmall4, delay: "1.0s" },
  { image: IMAGES.logosmall5, delay: "1.1s" },
  { image: IMAGES.logosmall6, delay: "1.2s" },
];
// counter
export const countupdata = [
  {
    title: "ENT Services",
    delay: "0.4s",
    countup: 10,
    span: "+",
    img: "/assets/flat-icons/ent.svg",
  },
  {
    title: "Orthopaedic Services",
    delay: "0.6s",
    countup: 10,
    span: "+",
    img: "/assets/flat-icons/orthopaedics (1).svg",
  },
  {
    title: "Happy Families",
    delay: "0.8s",
    countup: 10,
    span: "K+",
    img: "/assets/flat-icons/family-gathering (1).svg",
  },
  {
    title: "Years of Clinical Experience",
    delay: "1.0s",
    countup: 15,
    span: "+",
    img: "/assets/flat-icons/quality.svg",
  },
];

// frequently
export const accordiondata = [
  {
    delay: "0.5s",
    key: "0",
    title: "Who is the Best ENT Specialist in Vijayanagar?",
    content:
      "Brunda Specialist Clinic is recognized for providing expert ENT care in Vijayanagar, offering diagnosis and treatment for ear, nose, and throat conditions with personalized patient care.",
    link: "/",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What problems does an ENT specialist treat?",
    content:
      "An ENT specialist treats sinusitis, ear infections, hearing loss, tonsillitis, throat infections, nasal allergies, vertigo, and other ear, nose, and throat disorders.",
    link: "/",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When should I consult an ENT specialist?",
    content:
      "You should consult an ENT specialist if you experience persistent sinus pain, blocked nose, ear pain, hearing problems, throat infections, or frequent allergies.",
    link: "/",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What treatments are available for sinus problems?",
    content:
      "Sinus treatment may include medication, allergy management, nasal sprays, lifestyle guidance, and in some cases minor procedures depending on the severity of the condition.",
    link: "/",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment with the Best ENT Specialist in Vijayanagar?",
    content:
      "You can book an appointment by calling +91 96323 71211 or visiting Brunda Specialist Clinic in Vijayanagar, Bengaluru during consultation hours.",
    link: "/",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Which is the Best Orthopaedic Clinic in Vijayanagar?",
    content:
      "Brunda Specialist Clinic is considered one of the best orthopaedic clinics in Vijayanagar, offering expert care for joint pain, sports injuries, ACL tears, and shoulder conditions with accurate diagnosis and treatment.",
    link: "/about-us",
  },
  {
    delay: "0.6s",
    key: "1",
    title:
      "What treatments are available at the Best Orthopaedic Clinic in Vijayanagar?",
    content:
      "The clinic provides treatment for knee pain, ligament injuries, sports injuries, joint pain, shoulder problems, fracture care, and orthopaedic consultation for mobility issues.",
    link: "/about-us",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When can I visit the Best Orthopaedic Clinic in Vijayanagar?",
    content:
      "Patients can visit Brunda Specialist Clinic from Monday to Saturday between 6:00 PM and 9:00 PM for orthopaedic consultation and treatment.",
    link: "/about-us",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Do orthopaedic clinics treat sports injuries?",
    content:
      "Yes, the Best Orthopaedic Clinic in Vijayanagar treats sports injuries such as ligament tears, ACL injuries, muscle strains, and joint injuries with appropriate medical care and rehabilitation advice.",
    link: "/about-us",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How do I book an appointment at the Best Orthopaedic Clinic in Vijayanagar?",
    content:
      "You can book an appointment by calling +91 96323 71211 or visiting Brunda Specialist Clinic in Vijayanagar, Bengaluru.",
    link: "/about-us",
  },

  {
    delay: "0.9s",
    key: "1",
    title: "Who is the Best ENT Specialist Doctor in Vijayanagar?",
    content:
      "Dr Meghana Janardhan at Brunda Specialist Clinic is considered one of the best ENT specialist doctors in Vijayanagar, providing expert treatment for ear, nose, and throat conditions.",
    link: "/our-doctors/dr-meghana-janardhan",
  },
  {
    delay: "0.9s",
    key: "2",
    title:
      "What treatments does the Best ENT Specialist Doctor in Vijayanagar provide?",
    content:
      "The ENT specialist treats sinusitis, tonsillitis, ear infections, hearing issues, throat infections, nasal allergies, and other ENT disorders.",
    link: "/our-doctors/dr-meghana-janardhan",
  },
  {
    delay: "0.9s",
    key: "3",
    title: "When should I consult an ENT specialist?",
    content:
      "You should consult an ENT specialist if you experience persistent ear pain, sinus blockage, hearing loss, throat pain, allergies, or breathing difficulties through the nose.",
    link: "/our-doctors/dr-meghana-janardhan",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Where is the Best ENT Specialist Doctor in Vijayanagar located?",
    content:
      "Dr Meghana Janardhan practices at Brunda Specialist Clinic in Vijayanagar, Bengaluru, serving patients from Govindaraj Nagar, Maruthi Mandir, and surrounding areas.",
    link: "/our-doctors/dr-meghana-janardhan",
  },
  {
    delay: "0.9s",
    key: "5",
    title: "How can I book an appointment with the ENT specialist?",
    content:
      "You can book an appointment by calling +91 96323 71211 or visiting Brunda Specialist Clinic in Vijayanagar during consultation hours.",
    link: "/our-doctors/dr-meghana-janardhan",
  },

  // Route-specific service FAQs
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Pediatric deformity treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers expert Pediatric deformity treatment in Vijayanagar with advanced orthopedic care for children experiencing bone, joint, or limb deformities.",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is pediatric deformity treatment?",
    content:
      "Pediatric deformity treatment focuses on correcting bone or limb deformities in children using advanced orthopedic techniques, surgeries, and rehabilitation for proper growth and mobility.",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are common pediatric bone deformities?",
    content:
      "Common pediatric deformities include bow legs, knock knees, clubfoot, limb length differences, and congenital bone abnormalities that affect normal movement and growth.",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should a child see a doctor for bone deformities?",
    content:
      "Parents should consult a pediatric orthopedic specialist if a child shows abnormal walking patterns, uneven leg length, visible limb deformity, or persistent joint pain.",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is pediatric deformity surgery safe for children?",
    content:
      "Yes, pediatric deformity surgery is generally safe when performed by experienced orthopedic surgeons. Early treatment helps correct bone alignment and supports healthy growth.",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I find the best Spine Surgery Doctor in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides expert consultation with an experienced Spine Surgery Doctor in Vijayanagar, offering advanced diagnosis and treatment for spine disorders, back pain, and disc problems.",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What conditions are treated by a Spine Surgery Doctor?",
    content:
      "A spine surgery doctor treats conditions such as herniated discs, spinal stenosis, chronic back pain, spinal fractures, nerve compression, and degenerative spine disorders.",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When is spine surgery recommended?",
    content:
      "Spine surgery is usually recommended when severe back pain, nerve compression, or spinal instability does not improve with medication, physiotherapy, or other non-surgical treatments.",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the symptoms of serious spine problems?",
    content:
      "Common symptoms include persistent back pain, numbness in arms or legs, tingling sensations, difficulty walking, muscle weakness, and severe nerve pain.",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment with a Spine Surgery Doctor in Vijayanagar?",
    content:
      "You can book an appointment with the Spine Surgery Doctor in Vijayanagar at Brunda Specialist Clinic by calling +91 96323 71211 or visiting the clinic for a consultation.",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Rheumatoid Arthritis Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides advanced Rheumatoid Arthritis Treatment in Vijayanagar with expert diagnosis, joint pain management, and personalized care plans for arthritis patients.",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are the early symptoms of rheumatoid arthritis?",
    content:
      "Common symptoms include joint pain, swelling, stiffness, fatigue, and difficulty moving joints, especially in the morning or after long periods of rest.",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "How is rheumatoid arthritis diagnosed?",
    content:
      "Doctors diagnose rheumatoid arthritis through physical examination, blood tests, imaging tests such as X-rays, and evaluation of joint inflammation and symptoms.",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What treatments are available for rheumatoid arthritis?",
    content:
      "Treatment may include medications to control inflammation, physiotherapy, lifestyle changes, and long-term joint care to reduce pain and improve mobility.",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Why is early treatment important for rheumatoid arthritis?",
    content:
      "Early treatment helps control inflammation, prevent joint damage, reduce pain, and improve long-term mobility and quality of life for arthritis patients.",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Tennis Elbow Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides advanced Tennis Elbow Treatment in Vijayanagar with expert orthopaedic care, accurate diagnosis, and personalized treatment plans for effective pain relief.",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is tennis elbow and what causes it?",
    content:
      "Tennis elbow is a condition caused by overuse of the forearm muscles and tendons, leading to pain around the outer elbow. It is commonly caused by repetitive activities such as sports, lifting, typing, or manual work.",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of tennis elbow?",
    content:
      "Common symptoms include elbow pain, tenderness on the outer elbow, weak grip strength, pain while lifting objects, and discomfort when bending or extending the arm.",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How is tennis elbow treated?",
    content:
      "Tennis elbow treatment includes rest, physiotherapy, anti-inflammatory medication, braces, and advanced therapies to reduce pain and improve arm strength.",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "When should I see a doctor for tennis elbow pain?",
    content:
      "You should consult a doctor if elbow pain lasts for more than a few days, worsens with activity, or affects daily movements like lifting, gripping, or bending the arm.",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get the best Plantar Fasciitis Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides advanced Plantar Fasciitis Treatment in Vijayanagar with expert orthopaedic care, accurate diagnosis, and effective treatment options for heel pain relief.",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is plantar fasciitis?",
    content:
      "Plantar fasciitis is a common foot condition that causes inflammation of the plantar fascia, a thick tissue band connecting the heel to the toes. It usually leads to sharp heel pain, especially in the morning.",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of plantar fasciitis?",
    content:
      "Common symptoms include sharp heel pain, stiffness in the foot after waking up, pain while standing or walking for long periods, and discomfort near the heel area.",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What causes plantar fasciitis?",
    content:
      "Plantar fasciitis can be caused by excessive walking, standing for long hours, obesity, improper footwear, running, or strain on the foot ligament.",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How is plantar fasciitis treated?",
    content:
      "Treatment includes rest, physiotherapy, stretching exercises, orthopaedic support, medications, and lifestyle modifications to reduce heel pain and inflammation.",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I find the Best Clinic for Arthroplasty surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers expert Arthroplasty surgery in Vijayanagar, including knee, hip, and shoulder replacements, with personalized care and advanced techniques.",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is Arthroplasty surgery and how does it help?",
    content:
      "Arthroplasty surgery replaces damaged joints with artificial ones, relieving pain, restoring mobility, and improving quality of life for patients with joint disorders.",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who is eligible for joint replacement surgery?",
    content:
      "Patients with severe arthritis, joint degeneration, or injury-related joint damage may be considered for knee, hip, or shoulder replacement after thorough medical evaluation.",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What is the recovery time after arthroplasty surgery?",
    content:
      "Recovery varies by patient and joint type, but most can resume daily activities within weeks. Physiotherapy is essential for regaining strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for Arthroplasty surgery in Vijayanagar?",
    content:
      "Appointments can be booked by calling +91 96323 71211 or visiting Brunda Specialist Clinic in Vijayanagar to consult with our experienced orthopaedic surgeons.",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the Best Knee Replacement Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic is renowned for advanced Knee Replacement Surgery in Vijayanagar, offering expert surgeons, modern techniques, and complete post-surgery care.",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is Knee Replacement Surgery?",
    content:
      "Knee Replacement Surgery involves replacing a damaged knee joint with a prosthetic implant to relieve pain, improve function, and restore mobility.",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who is eligible for Knee Replacement Surgery?",
    content:
      "Patients with severe knee pain, osteoarthritis, or joint damage not responding to conservative treatments are eligible for Knee Replacement Surgery.",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long is the recovery after Knee Replacement Surgery?",
    content:
      "Recovery typically involves physiotherapy, mobility exercises, and gradual resumption of daily activities over 6 to 12 weeks, depending on patient health.",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How can I book an appointment for Knee Replacement Surgery?",
    content:
      "You can book an appointment by calling +91 96323 71211 or visiting Brunda Specialist Clinic in Vijayanagar for a consultation with our orthopaedic experts.",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Who is the best Robotic Knee Replacement Surgeon in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced robotic knee replacement surgery in Vijayanagar with experienced orthopaedic surgeons providing precise and effective treatment for severe knee arthritis and joint damage.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is robotic knee replacement surgery?",
    content:
      "Robotic knee replacement is an advanced surgical procedure where robotic technology assists surgeons in performing knee replacement with higher precision, improved implant placement, and better recovery outcomes.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs robotic knee replacement surgery?",
    content:
      "Patients with severe knee arthritis, chronic knee pain, joint stiffness, or limited mobility that does not improve with medication or physiotherapy may benefit from robotic knee replacement surgery.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of robotic knee replacement?",
    content:
      "Robotic knee replacement offers several benefits including higher surgical precision, smaller incisions, less pain, faster recovery, improved joint alignment, and longer-lasting knee implants.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for robotic knee replacement in Vijayanagar?",
    content:
      "You can book an appointment with the robotic knee replacement surgeon at Brunda Specialist Clinic in Vijayanagar by calling +91 96323 71211 for expert orthopaedic consultation.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get computer-assisted total knee replacement in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers computer-assisted total knee replacement in Vijayanagar with advanced navigation-guided planning, accurate implant alignment, and structured rehabilitation support.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is computer-assisted total knee replacement?",
    content:
      "Computer-assisted total knee replacement is a full knee replacement surgery performed with digital navigation support to help the surgeon align implants and balance the knee accurately.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs computer-assisted total knee replacement?",
    content:
      "Patients with severe knee arthritis, deformity, tricompartmental joint damage, or chronic pain that does not improve with medication or physiotherapy may benefit from computer-assisted total knee replacement.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title:
      "What are the benefits of computer-assisted total knee replacement?",
    content:
      "Benefits may include more accurate implant alignment, better soft-tissue balancing, consistent surgical execution, personalized planning, and potentially smoother knee function after recovery.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for computer-assisted total knee replacement in Vijayanagar?",
    content:
      "You can book an appointment at Brunda Specialist Clinic in Vijayanagar by calling +91 96323 71211 for expert orthopaedic consultation and assessment.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Hip Replacement Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Hip Replacement Surgery in Vijayanagar with experienced orthopaedic surgeons, modern surgical techniques, and personalized recovery care.",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "When is hip replacement surgery recommended?",
    content:
      "Hip replacement surgery is recommended when severe arthritis, joint damage, fractures, or chronic hip pain limit daily activities and do not improve with medication or physiotherapy.",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "How long does hip replacement surgery take?",
    content:
      "Hip replacement surgery usually takes about 1 to 2 hours depending on the patient's condition and the type of joint replacement procedure performed.",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long is the recovery after hip replacement surgery?",
    content:
      "Most patients begin walking with assistance within a few days after surgery and can return to normal activities within 6 to 12 weeks with proper physiotherapy and rehabilitation.",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is hip replacement surgery safe?",
    content:
      "Yes, hip replacement surgery is considered safe and effective when performed by experienced orthopaedic surgeons, helping relieve pain and improve joint mobility.",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get robotic hip replacement in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers robotic hip replacement in Vijayanagar with precision-guided planning, accurate implant positioning, and personalized arthroplasty care.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is robotic hip replacement?",
    content:
      "Robotic hip replacement is a technology-assisted total hip replacement in which robotic guidance helps the surgeon plan and position the implant more accurately during surgery.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who can benefit from robotic hip replacement?",
    content:
      "Patients with advanced hip arthritis, avascular necrosis, joint damage, or anatomy requiring highly precise implant positioning may benefit from robotic hip replacement after evaluation.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of robotic hip replacement?",
    content:
      "Robotic hip replacement may improve implant positioning, leg-length restoration, hip stability, surgical planning, and overall precision during total hip arthroplasty.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for robotic hip replacement in Vijayanagar?",
    content:
      "You can call +91 96323 71211 to schedule a robotic hip replacement consultation at Brunda Specialist Clinic in Vijayanagar.",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get computer-assisted hip replacement in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides computer-assisted hip replacement in Vijayanagar with navigation-guided planning, accurate implant orientation, and recovery-focused orthopaedic care.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is computer-assisted hip replacement?",
    content:
      "Computer-assisted hip replacement is a total hip replacement performed with digital navigation and intra-operative measurements that help the surgeon position the implant accurately.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs computer-assisted hip replacement?",
    content:
      "Patients with severe hip arthritis, avascular necrosis, stiffness, chronic pain, or joint damage that has not improved with non-surgical treatment may need computer-assisted hip replacement.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of computer-assisted hip replacement?",
    content:
      "Computer-assisted hip replacement can support accurate cup orientation, better leg-length checks, improved hip stability, personalized planning, and more consistent implant positioning.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for computer-assisted hip replacement in Vijayanagar?",
    content:
      "You can call +91 96323 71211 to book an orthopaedic consultation at Brunda Specialist Clinic in Vijayanagar for computer-assisted hip replacement assessment.",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get the Best Shoulder Replacement Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers the Best Shoulder Replacement Surgery in Vijayanagar with experienced orthopaedic surgeons, advanced surgical techniques, and personalized post-surgery rehabilitation care.",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is shoulder replacement surgery?",
    content:
      "Shoulder replacement surgery is a procedure in which damaged parts of the shoulder joint are replaced with artificial implants to relieve pain, restore movement, and improve joint function.",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs shoulder replacement surgery?",
    content:
      "Patients with severe arthritis, joint damage, fractures, rotator cuff injuries, or chronic shoulder pain that does not improve with medications or physiotherapy may require shoulder replacement surgery.",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after shoulder replacement surgery?",
    content:
      "Recovery usually takes a few weeks to a few months depending on the patient's condition. Physiotherapy and rehabilitation exercises help improve shoulder strength and mobility after surgery.",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is shoulder replacement surgery safe?",
    content:
      "Yes, shoulder replacement surgery is considered safe when performed by experienced orthopaedic surgeons using modern surgical techniques and proper post-operative care.",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the Best Elbow replacement surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers the Best Elbow replacement surgery in Vijayanagar with experienced orthopaedic surgeons, advanced surgical techniques, and personalized rehabilitation care.",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "When is elbow replacement surgery recommended?",
    content:
      "Elbow replacement surgery is recommended for patients with severe arthritis, joint damage, fractures, or chronic elbow pain that does not improve with medications or physiotherapy.",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "How long does elbow replacement surgery recovery take?",
    content:
      "Recovery usually takes a few weeks to a few months depending on the patient's condition, rehabilitation program, and overall health. Physiotherapy helps restore elbow movement and strength.",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of elbow replacement surgery?",
    content:
      "Elbow replacement surgery helps relieve severe joint pain, improves elbow mobility, restores function of the arm, and allows patients to perform daily activities comfortably.",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment for elbow replacement surgery in Vijayanagar?",
    content:
      "You can book an appointment at Brunda Specialist Clinic in Vijayanagar by calling +91 96323 71211 for expert consultation and evaluation for elbow replacement treatment.",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get meniscus transplant surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced meniscus transplant surgery in Vijayanagar with experienced orthopaedic surgeons, modern arthroscopic techniques, and personalized rehabilitation for better recovery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is meniscus transplant surgery?",
    content:
      "Meniscus transplant surgery is a procedure where a damaged or removed meniscus cartilage in the knee is replaced with donor tissue to restore knee cushioning, stability, and normal joint movement.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs a meniscus transplant?",
    content:
      "Patients with severe meniscus damage, persistent knee pain after meniscus removal, or joint instability may benefit from a meniscus transplant to restore knee function and reduce long-term arthritis risk.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What is the recovery time after meniscus transplant surgery?",
    content:
      "Recovery after meniscus transplant surgery usually takes several months. Physiotherapy, gradual weight bearing, and proper rehabilitation help restore knee strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "What are the benefits of meniscus transplant surgery?",
    content:
      "Meniscus transplant surgery helps reduce knee pain, improve joint stability, protect cartilage from further damage, and restore knee function for active lifestyles.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Rotator Cuff Repair Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Rotator Cuff Repair Surgery in Vijayanagar with experienced orthopaedic surgeons, modern arthroscopic technology, and personalized rehabilitation care.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is rotator cuff repair surgery?",
    content:
      "Rotator cuff repair surgery is a procedure used to repair torn shoulder tendons. The surgery reconnects the damaged tendon to the bone to restore shoulder strength and movement.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of a rotator cuff tear?",
    content:
      "Common symptoms include shoulder pain, weakness in the arm, difficulty lifting objects, reduced range of motion, and pain while sleeping on the affected shoulder.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after rotator cuff repair surgery?",
    content:
      "Recovery usually takes a few weeks to several months depending on the severity of the tear. Physiotherapy and rehabilitation exercises help restore shoulder strength and flexibility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "When should I consult a doctor for shoulder pain?",
    content:
      "If shoulder pain persists for several days, limits arm movement, or occurs after an injury or fall, it is important to consult an orthopaedic specialist for proper diagnosis and treatment.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Bankart Repair Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Bankart Repair Surgery in Vijayanagar using minimally invasive arthroscopic techniques to treat recurrent shoulder dislocation and restore joint stability.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is Bankart repair surgery?",
    content:
      "Bankart repair surgery is a procedure used to treat shoulder instability caused by a torn labrum. The surgery reattaches the damaged cartilage to the shoulder socket to prevent repeated dislocations.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs Bankart repair surgery?",
    content:
      "Patients with recurrent shoulder dislocation, labral tears, sports injuries, or shoulder instability that does not improve with physiotherapy may require Bankart repair surgery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after Bankart repair surgery?",
    content:
      "Recovery usually takes a few months depending on the patient's condition. Physiotherapy and rehabilitation exercises are important to restore strength and shoulder movement.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is Bankart repair surgery performed arthroscopically?",
    content:
      "Yes, most Bankart repair procedures are done arthroscopically using small incisions and specialized instruments, which helps reduce pain and speeds up recovery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get the best Shoulder Instability Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Shoulder Instability Surgery in Vijayanagar with experienced orthopaedic specialists, modern arthroscopic procedures, and personalized rehabilitation care.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is shoulder instability?",
    content:
      "Shoulder instability occurs when the shoulder joint becomes loose and repeatedly slips out of place, often due to ligament injuries, trauma, or repeated shoulder dislocations.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When is shoulder instability surgery required?",
    content:
      "Surgery is recommended when patients experience frequent shoulder dislocations, severe pain, weakness, or when non-surgical treatments like physiotherapy fail to stabilize the joint.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after shoulder instability surgery?",
    content:
      "Recovery typically takes a few weeks to months depending on the severity of the condition and rehabilitation process. Physiotherapy plays an important role in restoring strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is arthroscopic surgery used for shoulder instability?",
    content:
      "Yes, arthroscopic surgery is commonly used to treat shoulder instability. It is a minimally invasive procedure that repairs damaged ligaments and stabilizes the shoulder joint.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Hip Arthroscopy Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Hip Arthroscopy Surgery in Vijayanagar with experienced orthopedic surgeons, modern technology, and personalized treatment for hip joint conditions.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is hip arthroscopy surgery?",
    content:
      "Hip arthroscopy is a minimally invasive surgical procedure where a small camera and instruments are inserted through tiny incisions to diagnose and treat hip joint problems such as labral tears and impingement.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs hip arthroscopy surgery?",
    content:
      "Patients with persistent hip pain, limited movement, femoroacetabular impingement (FAI), cartilage damage, or labral tears may require hip arthroscopy surgery when non-surgical treatments fail.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of hip arthroscopy?",
    content:
      "Hip arthroscopy offers benefits such as smaller incisions, less pain, faster recovery, minimal tissue damage, and accurate treatment of hip joint problems.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does recovery take after hip arthroscopy surgery?",
    content:
      "Recovery time varies depending on the condition treated, but most patients gradually return to daily activities within a few weeks with proper physiotherapy and medical guidance.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get ACL Reconstruction Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced ACL Reconstruction Surgery in Vijayanagar with experienced orthopaedic surgeons, modern arthroscopic technology, and personalized rehabilitation programs for faster recovery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is ACL reconstruction surgery?",
    content:
      "ACL reconstruction surgery is a procedure used to replace a torn anterior cruciate ligament in the knee using a graft. It restores knee stability and helps patients return to sports and daily activities.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of an ACL injury?",
    content:
      "Common symptoms include a popping sound at the time of injury, knee swelling, severe pain, instability while walking, and difficulty bending or straightening the knee.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does ACL surgery recovery take?",
    content:
      "Most patients recover within 4 to 6 months depending on the severity of the injury and rehabilitation program. Physiotherapy plays a major role in restoring knee strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is ACL reconstruction surgery safe?",
    content:
      "Yes, ACL reconstruction is a safe and commonly performed arthroscopic procedure. With proper surgical care and rehabilitation, most patients regain knee stability and return to normal activities.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get PCL Repair Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced PCL Repair Surgery in Vijayanagar with experienced orthopaedic surgeons, modern arthroscopic technology, and personalized rehabilitation care for knee ligament injuries.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is PCL repair surgery?",
    content:
      "PCL repair surgery is a procedure used to treat injuries to the posterior cruciate ligament in the knee. The surgery helps restore knee stability, reduce pain, and improve joint function using arthroscopic techniques.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What causes PCL injuries?",
    content:
      "PCL injuries commonly occur due to road accidents, sports injuries, falls, or sudden impact to the front of the knee that pushes the shin bone backward.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the symptoms of a PCL ligament injury?",
    content:
      "Symptoms may include knee pain, swelling, instability while walking, stiffness, difficulty bending the knee, and discomfort during physical activities.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does recovery take after PCL repair surgery?",
    content:
      "Recovery usually takes several weeks to months depending on the severity of the injury. Physiotherapy and guided rehabilitation help restore knee strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get ligament reconstruction in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced ligament reconstruction in Vijayanagar using modern arthroscopic techniques to restore knee stability and mobility after ligament injuries.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is ligament reconstruction surgery?",
    content:
      "Ligament reconstruction surgery is a procedure used to replace a torn or damaged ligament in the knee using a graft or artificial ligament to restore joint strength and function.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of a torn knee ligament?",
    content:
      "Common symptoms include knee pain, swelling, instability while walking, difficulty bending the knee, and a popping sensation at the time of injury.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after ligament reconstruction?",
    content:
      "Recovery time varies depending on the injury and rehabilitation program, but most patients regain normal mobility within a few months with proper physiotherapy and medical guidance.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Who needs ligament reconstruction surgery?",
    content:
      "Patients with complete ligament tears, knee instability, sports injuries, or severe ligament damage that does not heal with conservative treatment may require reconstruction surgery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Meniscus Repair Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Meniscus Repair Surgery in Vijayanagar with experienced orthopaedic specialists, modern arthroscopic techniques, and personalized rehabilitation care.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is meniscus repair surgery?",
    content:
      "Meniscus repair surgery is a minimally invasive arthroscopic procedure used to repair torn knee cartilage and restore normal knee function while preserving the natural meniscus.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of a meniscus tear?",
    content:
      "Common symptoms include knee pain, swelling, stiffness, difficulty bending or straightening the knee, and a locking or catching sensation during movement.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after meniscus repair surgery?",
    content:
      "Recovery usually takes 4 to 6 weeks depending on the severity of the tear and the patient's rehabilitation program. Physiotherapy plays an important role in full recovery.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is meniscus repair better than meniscus removal?",
    content:
      "Meniscus repair is generally preferred because it preserves the natural cartilage of the knee, helping maintain joint stability and reducing the risk of arthritis in the future.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Meniscal Root Repair Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Meniscal Root Repair Surgery in Vijayanagar using modern arthroscopic techniques to restore knee stability and treat meniscus injuries effectively.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is meniscal root repair surgery?",
    content:
      "Meniscal root repair surgery is a minimally invasive arthroscopic procedure used to repair a tear at the root of the knee meniscus. The surgery helps restore normal knee function and prevents further joint damage.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of a meniscal root tear?",
    content:
      "Common symptoms include knee pain, swelling, difficulty bending the knee, locking or catching sensation, and reduced ability to bear weight on the affected leg.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "How long does recovery take after meniscal root repair surgery?",
    content:
      "Recovery usually takes a few months depending on the severity of the injury. Patients may need physiotherapy and guided rehabilitation to regain strength and mobility.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Who needs meniscal root repair surgery?",
    content:
      "Patients with severe meniscus root tears, persistent knee pain, sports injuries, or knee instability may require meniscal root repair surgery to restore joint function.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I find the best General Orthopaedic Clinic in Vijayanagar?",
    content:
      "Brunda Specialist Clinic is a trusted General Orthopaedic Clinic in Vijayanagar providing expert diagnosis and treatment for bone, joint, and muscle problems including fractures, arthritis, sports injuries, and ligament damage.",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    delay: "0.6s",
    key: "1",
    title:
      "What conditions are treated at a General Orthopaedic Clinic in Vijayanagar?",
    content:
      "A General Orthopaedic Clinic in Vijayanagar treats conditions such as fractures, joint pain, arthritis, ligament injuries, sports injuries, shoulder pain, knee pain, and other bone or muscle disorders.",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When should I visit an orthopaedic doctor?",
    content:
      "You should visit an orthopaedic doctor if you experience persistent joint pain, swelling, stiffness, difficulty walking, sports injuries, fractures, or reduced mobility affecting daily activities.",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    delay: "0.8s",
    key: "3",
    title:
      "What treatments are available at a General Orthopaedic Clinic in Vijayanagar?",
    content:
      "Treatment may include medications, physiotherapy guidance, fracture management, ligament injury care, joint pain treatment, and advanced procedures for orthopaedic conditions depending on the diagnosis.",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    delay: "0.9s",
    key: "4",
    title:
      "How can I book an appointment at a General Orthopaedic Clinic in Vijayanagar?",
    content:
      "You can book an appointment at Brunda Specialist Clinic by calling +91 96323 71211 or visiting the clinic in Vijayanagar, Bengaluru for expert orthopaedic consultation.",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Orthopaedic Trauma Care in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Orthopaedic Trauma Care in Vijayanagar with expert diagnosis and treatment for fractures, ligament injuries, and accident-related bone trauma.",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is orthopaedic trauma care?",
    content:
      "Orthopaedic trauma care focuses on treating injuries affecting bones, joints, ligaments, and muscles caused by accidents, falls, or sports injuries using specialized medical and surgical treatments.",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What conditions are treated in orthopaedic trauma care?",
    content:
      "Orthopaedic trauma specialists treat fractures, dislocations, ligament injuries, joint injuries, bone trauma, and accident-related musculoskeletal conditions.",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should I visit a doctor for orthopaedic trauma?",
    content:
      "You should consult an orthopaedic doctor immediately if you experience severe pain, swelling, difficulty moving a limb, deformity after injury, or suspected fractures after accidents or falls.",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "What treatments are available for orthopaedic trauma injuries?",
    content:
      "Treatment may include fracture stabilization, casting, splints, medications, physiotherapy, and in some cases surgical procedures depending on the severity of the injury.",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I find the Best Clinic for polytrauma treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic is known as the Best Clinic for polytrauma treatment in Vijayanagar, offering expert orthopaedic trauma care, advanced diagnosis, and effective treatment for complex injury cases.",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is polytrauma and how is it treated?",
    content:
      "Polytrauma refers to multiple serious injuries affecting different parts of the body, usually caused by accidents or severe trauma. Treatment includes emergency care, injury stabilization, orthopaedic treatment, and rehabilitation.",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the common causes of polytrauma injuries?",
    content:
      "Common causes include road traffic accidents, falls from height, sports injuries, workplace accidents, and severe impact injuries that affect multiple bones or body systems.",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What symptoms indicate polytrauma after an accident?",
    content:
      "Symptoms may include severe pain, fractures, bleeding, swelling, head injury symptoms, difficulty moving limbs, breathing issues, or multiple injuries occurring at the same time.",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Why is early treatment important for polytrauma injuries?",
    content:
      "Early medical care helps stabilize injuries, prevent complications, reduce long-term damage, and improve recovery outcomes for patients with multiple traumatic injuries.",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Arthroscopic Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Arthroscopic Surgery in Vijayanagar with experienced orthopaedic surgeons, modern technology, and minimally invasive joint treatment.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is arthroscopic surgery?",
    content:
      "Arthroscopic surgery is a minimally invasive procedure used to diagnose and treat joint problems using a small camera and surgical instruments inserted through tiny incisions.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Which conditions can be treated with arthroscopy?",
    content:
      "Arthroscopy is commonly used to treat ligament injuries, cartilage damage, torn meniscus, shoulder instability, knee pain, and other joint-related conditions.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What are the benefits of arthroscopic surgery?",
    content:
      "Benefits include smaller incisions, less pain, quicker recovery, reduced hospital stay, minimal scarring, and faster return to normal activities.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does recovery take after arthroscopic surgery?",
    content:
      "Recovery time varies depending on the joint treated, but most patients resume normal activities within a few weeks with proper rehabilitation and physiotherapy.",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get the best Adenotonsillectomy Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Adenotonsillectomy Treatment in Vijayanagar with experienced ENT specialists who provide safe tonsil and adenoid removal surgery for children and adults.",
    link: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is adenotonsillectomy?",
    content:
      "Adenotonsillectomy is a surgical procedure performed by an ENT specialist to remove both the tonsils and adenoids. It is commonly recommended for patients with recurrent throat infections, breathing problems, or sleep apnea.",
    link: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Who needs Adenotonsillectomy Treatment in Vijayanagar?",
    content:
      "Patients who experience frequent tonsillitis, enlarged tonsils, snoring, breathing difficulty, sleep apnea, or repeated throat infections may require Adenotonsillectomy Treatment after evaluation by an ENT specialist.",
    link: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Is adenotonsillectomy safe for children?",
    content:
      "Yes, adenotonsillectomy is a safe and commonly performed ENT surgery for children when done by experienced specialists. It helps improve breathing, reduce infections, and enhance sleep quality.",
    link: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does recovery take after adenotonsillectomy?",
    content:
      "Recovery after adenotonsillectomy usually takes about 7 to 10 days. Most patients can return to normal activities gradually with proper rest, hydration, and medical guidance.",
    link: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Pediatric ENT Care in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides expert Pediatric ENT Care in Vijayanagar with specialized diagnosis and treatment for children's ear, nose, and throat conditions including infections, allergies, and sinus problems.",
    link: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What conditions are treated under Pediatric ENT Care?",
    content:
      "Pediatric ENT specialists treat ear infections, tonsillitis, adenoid enlargement, sinusitis, nasal allergies, breathing problems, hearing issues, and throat infections in children.",
    link: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are common ENT problems in children?",
    content:
      "Common ENT problems in children include frequent ear infections, blocked nose, sinus infections, tonsillitis, sore throat, hearing problems, snoring, and breathing difficulties.",
    link: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should a child see an ENT specialist?",
    content:
      "A child should see an ENT specialist if they have recurring ear infections, hearing difficulty, persistent sore throat, blocked nose, breathing problems, or frequent sinus infections.",
    link: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Is Pediatric ENT treatment safe for children?",
    content:
      "Yes, Pediatric ENT treatment is designed specifically for children and includes safe diagnostic methods and child-friendly treatment approaches to ensure comfort and effective care.",
    link: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Voice Disorders Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers expert Voice Disorders Treatment in Vijayanagar with advanced ENT evaluation and personalized care for hoarseness, vocal cord strain, throat infections, and speech-related problems.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are the common symptoms of voice disorders?",
    content:
      "Common symptoms include hoarseness, voice fatigue, throat pain while speaking, loss of voice, difficulty speaking clearly, and persistent throat irritation lasting more than two weeks.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What causes voice disorders?",
    content:
      "Voice disorders can be caused by vocal cord inflammation, infections, excessive voice use, acid reflux, allergies, smoking, or neurological conditions affecting vocal cord function.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should I see an ENT specialist for voice problems?",
    content:
      "You should consult an ENT specialist if hoarseness or voice changes last more than two weeks, especially if accompanied by throat pain, difficulty swallowing, or voice fatigue.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How are voice disorders diagnosed?",
    content:
      "ENT specialists diagnose voice disorders through throat examination, laryngoscopy, voice analysis, and medical history evaluation to identify problems affecting the vocal cords.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "1.0s",
    key: "5",
    title: "What treatments are available for voice disorders?",
    content:
      "Treatment may include voice therapy, medications, vocal rest, lifestyle changes, and management of underlying conditions such as infections, reflux, or allergies affecting the voice.",
    link: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get Foreign Body Removal from Ear in Vijayanagar?",
    content:
      "You can get safe and professional Foreign Body Removal from Ear in Vijayanagar at Brunda Specialist Clinic. Experienced ENT specialists carefully remove objects from the ear using advanced medical tools to prevent injury or infection.",
    link: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are common foreign objects found in the ear?",
    content:
      "Common foreign objects found in the ear include cotton pieces, insects, beads, seeds, small toys, paper, or earbud fragments. These objects can cause pain, irritation, hearing problems, or infection if not removed properly.",
    link: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What symptoms occur when a foreign body is stuck in the ear?",
    content:
      "Symptoms may include ear pain, hearing difficulty, buzzing sounds, irritation, bleeding, discharge from the ear, or a sensation of something stuck inside the ear canal.",
    link: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Is it safe to remove a foreign object from the ear at home?",
    content:
      "It is not recommended to remove objects from the ear at home because it may push the object deeper or damage the ear canal. An ENT specialist should safely remove the object using proper medical instruments.",
    link: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How do ENT specialists remove foreign objects from the ear?",
    content:
      "ENT specialists remove foreign objects using medical tools such as suction devices, forceps, or special hooks under proper lighting and visualization to ensure safe and painless removal.",
    link: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    delay: "0.5s",
    key: "0",
    title:
      "Where can I get the best Head & Neck Disorders Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides advanced Head & Neck Disorders Treatment in Vijayanagar with expert ENT evaluation, accurate diagnosis, and personalized treatment for throat, gland, and neck conditions.",
    link: "/our-services/ent-services/head-neck-disorders",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are common head and neck disorders?",
    content:
      "Common head and neck disorders include throat infections, swollen lymph nodes, thyroid problems, voice disorders, salivary gland infections, and neck swellings that require evaluation by an ENT specialist.",
    link: "/our-services/ent-services/head-neck-disorders",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What symptoms indicate head and neck disorders?",
    content:
      "Symptoms may include neck swelling, persistent throat pain, difficulty swallowing, voice changes, ear pain, unexplained lumps, or long-lasting infections affecting the throat and glands.",
    link: "/our-services/ent-services/head-neck-disorders",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should I consult an ENT specialist for neck problems?",
    content:
      "You should consult an ENT specialist if neck swelling lasts more than two weeks, causes pain, affects swallowing or breathing, or is associated with fever, voice changes, or throat discomfort.",
    link: "/our-services/ent-services/head-neck-disorders",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "What treatments are available for head and neck disorders?",
    content:
      "Treatment may include medications, infection management, lifestyle advice, diagnostic tests, or specialized ENT procedures depending on the cause of the disorder.",
    link: "/our-services/ent-services/head-neck-disorders",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I consult an ENT Endoscopy Specialist in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers consultation with an experienced ENT endoscopy Specialist in Vijayanagar for accurate diagnosis of sinus, nasal, and throat conditions using advanced endoscopic technology.",
    link: "/our-services/ent-services/ent-endoscopy",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is ENT endoscopy?",
    content:
      "ENT endoscopy is a diagnostic procedure where a thin flexible tube with a camera is used to examine the nose, sinuses, throat, and voice box to detect infections, polyps, blockages, or other abnormalities.",
    link: "/our-services/ent-services/ent-endoscopy",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "Why is ENT endoscopy performed?",
    content:
      "ENT endoscopy is performed to diagnose sinusitis, nasal polyps, chronic nasal blockage, throat problems, voice disorders, and other ENT conditions that require detailed internal examination.",
    link: "/our-services/ent-services/ent-endoscopy",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Is ENT endoscopy painful?",
    content:
      "ENT endoscopy is usually painless and safe. Doctors may use a local anesthetic spray to make the procedure comfortable while examining the nasal passages and throat.",
    link: "/our-services/ent-services/ent-endoscopy",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does an ENT endoscopy procedure take?",
    content:
      "ENT endoscopy typically takes only a few minutes. It is a quick outpatient diagnostic procedure that allows ENT specialists to clearly examine internal structures.",
    link: "/our-services/ent-services/ent-endoscopy",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Who provides the best Micro Ear Surgery in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers advanced Micro Ear Surgery in Vijayanagar with modern ENT equipment and experienced specialists for treating ear infections, hearing problems, and damaged eardrums.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What is Micro Ear Surgery?",
    content:
      "Micro Ear Surgery is a specialized ENT procedure performed using an operating microscope to treat conditions such as chronic ear infections, eardrum perforation, cholesteatoma, and hearing loss with high precision.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When is Micro Ear Surgery required?",
    content:
      "Micro Ear Surgery is recommended when patients have persistent ear infections, damaged eardrum, hearing loss, or middle ear diseases that do not improve with medication or other conservative treatments.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "Is Micro Ear Surgery safe?",
    content:
      "Yes, Micro Ear Surgery is considered safe when performed by an experienced ENT specialist. It is a precise procedure that uses advanced microscopic technology to treat ear conditions effectively with minimal complications.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "How long does Micro Ear Surgery take?",
    content:
      "The duration of Micro Ear Surgery usually ranges from 1 to 3 hours depending on the type of ear condition being treated and the complexity of the procedure.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "1.0s",
    key: "5",
    title: "What is the recovery time after Micro Ear Surgery?",
    content:
      "Most patients recover within a few weeks after Micro Ear Surgery. Doctors usually recommend keeping the ear dry, avoiding heavy activities, and attending follow-up consultations for proper healing.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "1.1s",
    key: "6",
    title: "What conditions can be treated with Micro Ear Surgery?",
    content:
      "Micro Ear Surgery is commonly used to treat chronic ear infections, eardrum perforation, cholesteatoma, middle ear diseases, and certain causes of hearing loss.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "1.2s",
    key: "7",
    title: "How can I book Micro Ear Surgery consultation in Vijayanagar?",
    content:
      "You can book a consultation for Micro Ear Surgery in Vijayanagar by calling +91 96323 71211 or visiting Brunda Specialist Clinic for expert ENT evaluation and treatment.",
    link: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Where can I get the best Vertigo Treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides advanced Vertigo Treatment in Vijayanagar with expert ENT evaluation, accurate diagnosis, and personalized treatment for dizziness, balance disorders, and inner ear problems.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are the common causes of vertigo?",
    content:
      "Vertigo is commonly caused by inner ear disorders such as BPPV, vestibular neuritis, Meniere's disease, ear infections, migraines, or balance system problems affecting the inner ear.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "What are the symptoms of vertigo?",
    content:
      "Symptoms of vertigo include spinning sensation, dizziness, loss of balance, nausea, vomiting, difficulty walking, blurred vision, and sometimes ringing in the ears.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "When should I consult a doctor for vertigo?",
    content:
      "You should consult a doctor if dizziness occurs frequently, lasts for several minutes, causes balance problems, or is associated with nausea, headaches, hearing loss, or blurred vision.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "What treatments are available for vertigo?",
    content:
      "Vertigo treatment may include vestibular rehabilitation exercises, medications, repositioning maneuvers such as the Epley maneuver, lifestyle advice, and treatment of underlying ear conditions.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "1.0s",
    key: "5",
    title: "Is vertigo a serious condition?",
    content:
      "Vertigo is usually not life-threatening but may indicate inner ear or neurological problems. Proper diagnosis and treatment help control symptoms and prevent recurrent dizziness episodes.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "1.1s",
    key: "6",
    title: "How is vertigo diagnosed by an ENT specialist?",
    content:
      "ENT specialists diagnose vertigo using physical examination, balance tests, hearing tests, and positional tests to determine the exact cause of dizziness and balance issues.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "1.2s",
    key: "7",
    title:
      "How can I book an appointment for Vertigo Treatment in Vijayanagar?",
    content:
      "You can book an appointment for Vertigo Treatment in Vijayanagar by calling +91 96323 71211 or visiting Brunda Specialist Clinic for expert ENT consultation and vertigo management.",
    link: "/our-services/ent-services/vertigo-treatment",
  },
  {
    delay: "0.5s",
    key: "0",
    title: "Who is the Best Sinus Specialist in Vijayanagar?",
    content:
      "Brunda Specialist Clinic offers expert sinus care in Vijayanagar with experienced ENT specialists who diagnose and treat sinusitis, nasal blockage, allergies, and chronic sinus infections using modern medical techniques.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "0.6s",
    key: "1",
    title: "What are the common symptoms of sinusitis?",
    content:
      "Common sinusitis symptoms include facial pain or pressure, nasal congestion, headache, thick nasal discharge, reduced sense of smell, post-nasal drip, and difficulty breathing through the nose.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "0.7s",
    key: "2",
    title: "When should I consult a sinus specialist in Vijayanagar?",
    content:
      "You should consult a sinus specialist if you have persistent sinus pain, blocked nose, frequent headaches, breathing difficulty, or recurrent sinus infections that do not improve with regular medication.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "0.8s",
    key: "3",
    title: "What treatments are available for sinus problems in Vijayanagar?",
    content:
      "Sinus treatment may include medications, nasal sprays, allergy management, lifestyle guidance, and in some cases minimally invasive procedures depending on the severity of the sinus condition.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "0.9s",
    key: "4",
    title: "Where can I get the best allergy treatment in Vijayanagar?",
    content:
      "Brunda Specialist Clinic provides effective allergy treatment in Vijayanagar including diagnosis of nasal allergies, treatment for allergic rhinitis, medication, and personalized management plans to reduce recurring symptoms.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "1s",
    key: "5",
    title: "What are the symptoms of nasal allergies?",
    content:
      "Symptoms of nasal allergies include sneezing, itchy nose, runny nose, nasal congestion, watery eyes, throat irritation, and breathing discomfort caused by allergens such as dust, pollen, or pollution.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "1.1s",
    key: "6",
    title: "Can sinus problems be caused by allergies?",
    content:
      "Yes, allergies can trigger sinus inflammation and blockage. Allergic reactions may cause swelling in the nasal passages, leading to sinus infections, congestion, and breathing difficulty.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "1.2s",
    key: "7",
    title: "How do doctors diagnose sinus and allergy problems?",
    content:
      "Doctors diagnose sinus and allergy problems through clinical examination, symptom evaluation, nasal examination, and sometimes diagnostic tests to identify the cause of chronic sinus or allergy symptoms.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "1.3s",
    key: "8",
    title: "Is sinusitis a serious condition if left untreated?",
    content:
      "If left untreated, chronic sinusitis can lead to persistent headaches, breathing difficulties, sleep disturbances, and recurring infections, so early consultation with a sinus specialist is recommended.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    delay: "1.4s",
    key: "9",
    title:
      "How can I book an appointment for sinus or allergy treatment in Vijayanagar?",
    content:
      "You can book an appointment for sinus and allergy treatment at Brunda Specialist Clinic by calling +91 96323 71211 or visiting the clinic in Vijayanagar, Bengaluru.",
    link: "/our-services/ent-services/sinus-allergy-treatment",
  },
];

// howitwork
export const howitworkdata = [
  {
    delay: "0.2s",
    img: "/assets/flat-icons/diagnostic.svg",
    title: "Advanced Diagnostic Equipment",
  },
  {
    delay: "0.4s",
    img: "/assets/flat-icons/hospital-bed.svg",
    title: "Well-Equipped Consultation Rooms",
  },
  {
    delay: "0.6s",
    img: "/assets/flat-icons/head.svg",
    title: "Modern ENT & Orthopaedic Treatment Units",
  },
  {
    delay: "0.8s",
    img: "/assets/flat-icons/supporting.svg",
    title: "Patient-Friendly Infrastructure",
  },
];

// inspirational
export const inspirationaldata = [
  {
    columnstand: "m-r25",
    delay: "0.2s",
    title: "Our Mission",
    desc: "To provide high-quality ENT and Orthopaedic care through accurate diagnosis, ethical practice, advanced treatments, and compassionate patient-centered healthcare.",
    svg: SVGICONS.mission,
  },
  {
    columnstand: "m-l25",
    delay: "0.4s",
    title: "Our Vision",
    desc: "To become a trusted center of excellence in ENT and Orthopaedic care by delivering reliable, affordable, and advanced medical services to our community.",
    svg: SVGICONS.vision,
  },
  {
    columnstand: "m-r25",
    delay: "0.6s",
    title: "Our Values",
    desc: "We value compassion, integrity, clinical excellence, patient safety, and continuous learning while treating every patient with dignity and respect.",
    svg: SVGICONS.values,
  },
];

// mapwraper
export const mapdata = [
  {
    id: 1,
    delay: "0.2s",
    icon: <i className="feather icon-map-pin" />,
    title: "Address",
    para: (
      <p>
        <Link
          href="https://maps.app.goo.gl/sYjmPrsF1NgAtv4F8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          BRUNDA SPECIALIST CLINIC Vijayanagar, Bengaluru, Karnataka 560072
        </Link>
      </p>
    ),
  },
  {
    id: 2,
    delay: "0.4s",
    icon: <i className="feather icon-phone" />,
    title: "Call Us",
    para: (
      <p>
        <Link href="tel:+919632371211" className="text-white">
          +91 96323 71211
        </Link>
      </p>
    ),
  },
  {
    id: 3,
    delay: "0.6s",
    icon: <i className="feather icon-mail" />,
    title: "Send us a Mail",
    para: (
      <p>
        <Link
          className="text-white"
          href="mailto:brundaspecialistclinic@gmail.com"
        >
          brundaspecialistclinic@gmail.com
        </Link>
      </p>
    ),
  },
  {
    id: 4,
    delay: "0.8s",
    icon: <i className="feather icon-clock" />,
    title: "Opening Time",
    para: (
      <>
        <span className="text-white">Mon - Sat : 6:00 PM - 9:00 PM</span> <br />
        <span className="text-white">Sunday : Holiday</span>
      </>
    ),
  },
];
// meetdr
export const meetdrdata1 = [
  { title: "Radiant Skin Dermatology" },
  { title: "Laser Resurfacing" },
  { title: "Flawless Dermatology" },
  { title: "Refined Skin Dermatology" },
  { title: "Luminous Dermatology" },
  { title: "Anti Aging" },
];
export const meetdrdata2 = [{ image: IMAGES.logo1 }, { image: IMAGES.logo2 }];
// pricing
export const pricingdata1 = [
  { title: "Cardiovascular Services" },
  { title: "Weight Management" },
  { title: "Dental Services" },
  { title: "Women's Health" },
  { title: "Emergency Medicine" },
  { title: "Family Medicine" },
  { title: "24/7 customer support" },
  { title: "Video Call Support" },
];
export const pricingdata2 = [
  {
    delay: "0.4s",
    title: (
      <h2 className="pricingtable-bx">
        Free<small>/ Lifetime</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
  {
    delay: "0.6s",
    coloumnstand: "active",
    title: (
      <h2 className="pricingtable-bx">
        $25<small>/ Month</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li className="disable">
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
  {
    delay: "0.8s",
    title: (
      <h2 className="pricingtable-bx">
        $40<small>/ Month</small>
      </h2>
    ),
    feature: (
      <ul className="pricingtable-features">
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
        <li>
          <Image src={IMAGES.Check} alt="" />
        </li>
      </ul>
    ),
  },
];
// raelpatient
export const testiswipeerdata = [
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Kiran Kumar K",
    content:
      "I visited Brunda Specialist Clinic for treatment of Ear Blockage and Nose problem, I was unable to hear anything due to blockage and buzzing sound in my both ears. Dr. Meghana Janardhan patiently heard my problem. She cleaned my both ears in less than 10 minutes with modern equipment. Even I had a small bubble in my nose, causing pain while clearing Nose discharge. I got completely cured. She explained me the cause and how to maintain ears and Nose. I had very pleasant experience. I am very thankful to Dr. Meghana Janardhan. She is very good and professional. The clinic is small but very neat and well maintained. Token system is also well maintained. Treatment was pain less. Service is very best.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Nithin Raj",
    content:
      "I recently visited Dr. Meghana for severe ear pain, and I am very satisfied with the treatment. She patiently listened to my concerns, explained the cause clearly, and provided effective medication. Within a short time, the pain reduced significantly, and I was able to eat and rest comfortably again. Her caring approach and professional guidance made me feel at ease throughout the consultation. I truly appreciate her dedication and would highly recommend Dr. Meghana for ear-related issues.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Shruthi Poojary",
    content:
      "I had a great experience with Dr. Meghana, ENT specialist. She is very calm, kind, and listens patiently to all concerns. Her treatment was effective, and she explained everything clearly. I felt very comfortable during the consultation. I highly recommend her for anyone looking for an ENT doctor.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/man-with-stethoscope-around-his-neck-is-touching-another-mans-shoulder_1232930-464.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Nese Lakshminarayana",
    content:
      "Dr.Nagaraj. M, is one of the best Arthroscopic Surgeon with seen excellent out put on surgery. Dr cares for the patient & gives perfect post operative rehabilitation advise on time. Recently i under went Rt ACL reconstruction surgery, also become back to normal on expected time. We should say about this, that doctor performed the surgery on our requested hospital, this shows his flexibility and understanding of patient circumstances. Hence I strongly recommended him for Orthopedic & Sports related injuries patient to this clinic. My Heartly Thanks ...",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Veena S",
    content:
      "Dr. Meghana is very kind and a very good doctor. I'm happy with her treatment. I was suffering from nasal blockage With her given medicine I'm doing much better . Thank u dr. Meghana ma'am",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Syeda Fathima Samrin",
    content:
      "We consulted Dr. Meghana Janardhan, an ENT specialist, for my daughter’s medical concern. Dr. Meghana was exceptionally calm and professional, thoroughly explaining the situation and promptly performing the necessary procedure. Her expertise brought immediate relief to my daughter, and we are truly grateful for her care.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-is-giving-injection-young-girl_1170031-5379.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_hybrid&w=740&q=80",
    name: "Mohan Shetty",
    content:
      "I visited the clinic on 13th May with a throat issue, and after a detailed diagnosis, Dr. Meghana Janardhan identified it as a thyroglossal cyst that required surgical removal. She was extremely polite, listened to my concerns patiently, and explained the condition and treatment clearly.The surgery was successfully performed on 24th May, and I felt very well cared for throughout the entire process. Her professionalism, gentle approach, and consistent follow-ups made a big difference in my recovery.As of now, I am fully recovered and extremely satisfied with the treatment. I truly thank Dr. Meghana Janardhan and highly recommend her for anyone looking for a skilled and compassionate doctor.",
  },
];
// servicebox
export const serviceboxAll = [
  // ================= ENT SERVICES =================
  {
    id: 1,
    department: "ENT",
    delay: "0.1s",
    title: "Adenotonsillectomy",
    desc: "Surgical management of tonsil and adenoid problems in children and adults.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/tonsils-tester.svg",
    to: "/our-services/ent-services/adenotonsillectomy",
  },
  {
    id: 2,
    department: "ENT",
    delay: "0.2s",
    title: "Sinus & Allergy",
    desc: "Comprehensive treatment for sinusitis, nasal blockage, and allergic conditions.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/sinusitis.svg",
    to: "/our-services/ent-services/sinus-allergy-treatment",
  },
  {
    id: 3,
    department: "ENT",
    delay: "0.3s",
    title: "Head & Neck Disorders",
    desc: "Diagnosis and treatment of infections, swellings, and head-neck conditions.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/brain.svg",
    to: "/our-services/ent-services/head-neck-disorders",
  },
  {
    id: 4,
    department: "ENT",
    delay: "0.4s",
    title: "Pediatric ENT Care",
    desc: "Specialized ENT care for children including ear, nose, and throat conditions.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/pediatric.svg",
    svg2: SVGICONS.iconbg4,
    to: "/our-services/ent-services/pediatric-ent-care",
  },
  {
    id: 5,
    department: "ENT",
    delay: "0.5s",
    title: "Vertigo",
    desc: "Evaluation and treatment for dizziness, balance disorders, and vertigo.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/dizzy.svg",
    svg2: SVGICONS.iconbg5,
    to: "/our-services/ent-services/vertigo-treatment",
  },
  {
    id: 6,
    department: "ENT",
    delay: "0.6s",
    title: "Foreign Body ENT",
    desc: "Safe removal of foreign bodies from ear, nose, and throat.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/postnasal-drip.svg",
    svg2: SVGICONS.iconbg6,
    to: "/our-services/ent-services/foreign-body-removal-ent",
  },
  {
    id: 7,
    department: "ENT",
    delay: "0.7s",
    title: "Micro Ear Surgery",
    desc: "Microscopic ear surgeries for chronic infections and hearing problems.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/ear.svg",
    svg2: SVGICONS.iconbg7,
    to: "/our-services/ent-services/micro-ear-surgery",
  },
  {
    id: 8,
    department: "ENT",
    delay: "0.8s",
    title: "Voice Disorders",
    desc: "Diagnosis and treatment of voice, speech, and throat disorders.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/voice-command.svg",
    svg2: SVGICONS.iconbg8,
    to: "/our-services/ent-services/voice-disorders-treatment",
  },
  {
    id: 9,
    department: "ENT",
    delay: "0.9s",
    title: "Endoscopy",
    desc: "Endoscopic evaluation of nasal passages, throat, and larynx.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/endoscopy.svg",
    svg2: SVGICONS.iconbg1,
    to: "/our-services/ent-services/ent-endoscopy",
  },
  {
    id: 10,
    department: "ENT",
    delay: "1.0s",
    title: "Audiology & Hearing Aids",
    desc: "Hearing tests, audiometry, and customized hearing aid solutions.",
    image: "/assets/flat-icons/doctor (1).svg",
    docname: "Dr. Meghana Janardhan",
    svg1: "/assets/flat-icons/deafness.svg",
    svg2: SVGICONS.iconbg2,
    to: "/our-services/ent-services/audiology-hearing-aids",
  },

  // ================= ORTHOPAEDIC SERVICES =================
  {
    id: 11,
    department: "Orthopaedics",
    delay: "1.1s",
    title: "Orthopaedic Trauma",
    desc: "Emergency treatment for fractures, injuries, and accident-related trauma.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/service-images/orthopaedics.svg",
    svg2: SVGICONS.iconbg3,
    to: "/our-services/orthopaedics/orthopaedic-trauma",
  },
  {
    id: 12,
    department: "Orthopaedics",
    delay: "1.2s",
    title: "Poly Trauma",
    desc: "Comprehensive management of multiple severe injuries from accidents.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/patient.svg",
    svg2: SVGICONS.iconbg4,
    to: "/our-services/orthopaedics/poly-trauma-management",
  },
  {
    id: 13,
    department: "Orthopaedics",
    delay: "1.3s",
    title: "Complex & Revision Trauma",
    desc: "Advanced care for complicated fractures and revision trauma surgeries.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/broken-bone.svg",
    svg2: SVGICONS.iconbg5,
    to: "/our-services/orthopaedics/complex-revision-trauma",
  },
  {
    id: 14,
    department: "Orthopaedics",
    delay: "1.4s",
    title: "Joint Replacement",
    desc: "Knee and hip replacement surgeries for long-term pain relief.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/joints.svg",
    svg2: SVGICONS.iconbg6,
    to: "/our-services/orthopaedics/joint-replacement",
  },
  {
    id: 15,
    department: "Orthopaedics",
    delay: "1.5s",
    title: "Sports Injuries",
    desc: "Treatment for ligament tears, muscle injuries, and sports-related trauma.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/injury.svg",
    svg2: SVGICONS.iconbg7,
    to: "/our-services/orthopaedics/sports-injuries",
  },
  {
    id: 16,
    department: "Orthopaedics",
    delay: "1.6s",
    title: "Arthroscopy",
    desc: "Minimally invasive joint surgery enabling faster recovery and mobility.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/treatments.svg",
    svg2: SVGICONS.iconbg8,
    to: "/our-services/orthopaedics/arthroscopic-procedures",
  },
  {
    id: 18,
    department: "Orthopaedics",
    delay: "1.8s",
    title: "Spine Surgeries",
    desc: "Surgical treatment for spine disorders, disc problems, and nerve compression.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/vertebrae.svg",
    svg2: SVGICONS.iconbg2,
    to: "/our-services/orthopaedics/spine-surgeries",
  },
  {
    id: 19,
    department: "Orthopaedics",
    delay: "1.9s",
    title: "Pediatric Orthopaedics",
    desc: "Orthopaedic care for bone and joint conditions in children.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/bone.svg",
    svg2: SVGICONS.iconbg3,
    to: "/our-services/orthopaedics/pediatrics-orthopaedics",
  },
  {
    id: 20,
    department: "Orthopaedics",
    delay: "2.0s",
    title: "Deformity Correction",
    desc: "Correction of bone and joint deformities for improved mobility.",
    image: "/assets/flat-icons/doctor (2).svg",
    docname: "Dr. Nagaraj M",
    svg1: "/assets/flat-icons/orthopedic.svg",
    svg2: SVGICONS.iconbg4,
    to: "/our-services/orthopaedics/deformity-correction",
  },
];

// sidebar
export const tagdata = [
  { title: "Acupressure", num: "(10)" },
  { title: "Allgemein", num: "(5)" },
  { title: "Blood", num: "(17)" },
  { title: "Food", num: "(13)" },
  { title: "Health", num: "(06)" },
  { title: "Mental Health", num: "(17)" },
  { title: "Therapy", num: "(13)" },
  { title: "Walking", num: "(06)" },
];
export const sidebarpostdata = [
  {
    date: "10 June 2025",
    image: IMAGES.blogsmall1,
    title: "The Art of Managing Business and Patient Care",
  },
  {
    date: "13 June 2025",
    image: IMAGES.blogsmall2,
    title: "The New Face of Care Blending Empathy with Expertise",
  },
  {
    date: "17 June 2025",
    image: IMAGES.blogsmall3,
    title: "Here Care Expertise Elevating the Patient Experience",
  },
];
// whychoose
export const whychoosedata = [
  { delay: "0.4s", title: "Central Institute Trained Doctors" },
  { delay: "0.6s", title: "Advanced ENT & Orthopaedic Care" },
  { delay: "0.8s", title: "Accurate Diagnosis & Effective Treatment" },
  { delay: "1.0s", title: "Patient-Centric & Compassionate Care" },
  // { delay: "1.2s", title: "Modern Equipment & Technology" },
  // { delay: "1.4s", title: "Comprehensive Care for All Age Groups" },
];

// worldclass
export const worldclasslistdata = [
  { title: "Expert ENT & Orthopaedic Specialists" },
  { title: "Advanced Diagnostic Facilities" },
  { title: "Minimally Invasive Surgical Procedures" },
  { title: "Pediatric ENT & Orthopaedic Care" },
  { title: "State-of-the-Art Treatment Technology" },
  { title: "Personalized Patient Care Plans" },
  { title: "Emergency ENT & Trauma Care" },
  { title: "Arthroscopy & Joint Replacement Support" },
  { title: "Comprehensive Hearing & Audiology Services" },
  { title: "Rehabilitation & Post-Treatment Care" },
];
