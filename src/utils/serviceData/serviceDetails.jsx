const orthopaedicNavigation = [
  // Arthroscopic surgeries
  {
    title: "Arthroscopic Surgeries",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries",
  },
  {
    title: "ACL Repair / Reconstruction",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/acl-repair-reconstruction",
  },
  {
    title: "PCL Repair / Reconstruction",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/pcl-repair-reconstruction",
  },
  {
    title: "Cruciate Ligament Reconstruction (Artificial Graft)",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/artificial-graft-cruciate-ligament",
  },
  {
    title: "Meniscus Repair",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-repair",
  },
  {
    title: "Meniscal Root Repair / Reconstruction",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscal-root-repair",
  },
  {
    title: "Meniscus Transplant",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/meniscus-transplant",
  },
  {
    title: "Rotator Cuff Repair",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/rotator-cuff-repair",
  },
  {
    title: "Bankart Repair",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/bankart-repair",
  },
  {
    title: "Shoulder Instability Treatment",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/shoulder-instability-treatment",
  },
  {
    title: "Hip Arthroscopy (FAI)",
    link: "/our-services/orthopaedic-services/arthroscopic-surgeries/hip-arthroscopy-fai",
  },
  // Arthroplasty surgeries
  {
    title: "Arthroplasty Surgeries",
    link: "/our-services/orthopaedic-services/arthroplasty",
  },
  {
    title: "Knee Replacement (Total / Partial)",
    link: "/our-services/orthopaedic-services/arthroplasty/knee-replacement",
  },
  {
    title: "Robotic / Computer-Assisted Knee Replacement",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-knee-replacement",
  },
  {
    title: "Computer-Assisted Total Knee Replacement",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-total-knee-replacement",
  },
  {
    title: "Hip Replacement Surgery",
    link: "/our-services/orthopaedic-services/arthroplasty/hip-replacement",
  },
  {
    title: "Robotic Hip Replacement",
    link: "/our-services/orthopaedic-services/arthroplasty/robotic-hip-replacement",
  },
  {
    title: "Computer-Assisted Hip Replacement",
    link: "/our-services/orthopaedic-services/arthroplasty/computer-assisted-hip-replacement",
  },
  {
    title: "Shoulder Replacement (Total / Reverse)",
    link: "/our-services/orthopaedic-services/arthroplasty/shoulder-replacement",
  },
  {
    title: "Elbow Replacement",
    link: "/our-services/orthopaedic-services/arthroplasty/elbow-replacement",
  },
  // Trauma surgeries
  {
    title: "Trauma Surgeries",
    link: "/our-services/orthopaedic-services/trauma-general-ortho",
  },
  {
    title: "Orthopaedic Trauma (Simple & Complex)",
    link: "/our-services/orthopaedic-services/orthopaedic-trauma",
  },
  {
    title: "Poly Trauma Management",
    link: "/our-services/orthopaedic-services/poly-trauma-management",
  },
  // Other specialty items
  {
    title: "Pediatric Deformity Surgeries",
    link: "/our-services/orthopaedic-services/pediatric-deformity-surgeries",
  },
  {
    title: "Spine Surgeries",
    link: "/our-services/orthopaedic-services/spine-surgeries",
  },
  {
    title: "Rheumatoid Arthritis Treatment",
    link: "/our-services/orthopaedic-services/rheumatoid-arthritis",
  },
  {
    title: "Tennis Elbow Treatment",
    link: "/our-services/orthopaedic-services/tennis-elbow-treatment",
  },
  {
    title: "Plantar Fasciitis Treatment",
    link: "/our-services/orthopaedic-services/plantar-fasciitis-treatment",
  },
];

const orthoServices = (activeTitle) =>
  orthopaedicNavigation.map((item) =>
    item.title === activeTitle ? { ...item, columnstand: "active" } : item
  );

export const serviceDetails = [
  {
    id: 1,
    title: "Adenotonsillectomy Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/adenotonsillectomy.avif",
    link: "/adenotonsillectomy",

    intro: {
      h1: "Adenotonsillectomy Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Comprehensive Care for Tonsil & Adenoid Problems",
      paragraphs: [
        "Adenotonsillectomy is a commonly performed ENT surgical procedure that involves the removal of both the tonsils and adenoids. At Brunda Advanced Orthopaedics & ENT Centre, we provide safe, effective, and minimally invasive adenotonsillectomy treatment to help children and adults breathe better, sleep peacefully, and reduce recurrent throat and ear infections.",
        "Our experienced ENT specialists ensure precise diagnosis, advanced surgical care, and complete post-operative support for faster recovery and long-term relief.",
      ],
    },

    whatIs: {
      heading: "What Is Adenotonsillectomy?",
      description:
        "Adenotonsillectomy is the surgical removal of tonsils and adenoids.",
      list: [
        "Tonsils – lymphoid tissues located at the back of the throat",
        "Adenoids – lymphoid tissues located behind the nasal cavity",
      ],
      note: "When enlarged or chronically infected, adenoids and tonsils can block the airway, cause repeated infections, and disturb sleep. Adenotonsillectomy permanently resolves these issues when medical treatment fails.",
    },

    indications: {
      heading: "When Is Adenotonsillectomy Recommended?",
      list: [
        "Recurrent tonsillitis or throat infections",
        "Loud snoring or obstructive sleep apnea",
        "Chronic mouth breathing",
        "Difficulty swallowing or breathing",
        "Recurrent ear infections due to enlarged adenoids",
        "Poor sleep quality, daytime fatigue, or behavioral issues in children",
      ],
    },

    benefits: {
      heading: "Benefits of Adenotonsillectomy",
      list: [
        "Improved breathing and airway clearance",
        "Better sleep quality and reduced snoring",
        "Fewer throat and ear infections",
        "Improved speech and swallowing",
        "Enhanced overall quality of life",
        "Long-term relief with low recurrence risk",
      ],
    },

    procedure: {
      heading: "How Is the Procedure Performed?",
      description:
        "Adenotonsillectomy is performed using modern ENT surgical techniques under strict safety protocols.",
      details: [
        { label: "Anesthesia", value: "General anesthesia" },
        { label: "Duration", value: "30–60 minutes" },
        {
          label: "Technique",
          value:
            "Precise removal of tonsils and adenoids with controlled bleeding",
        },
        { label: "Hospital Stay", value: "Day-care or short observation stay" },
        { label: "Recovery Time", value: "7–10 days" },
      ],
    },

    postOpCare: {
      heading: "Post-Operative Care & Recovery",
      list: [
        "Maintain good hydration",
        "Consume soft, cool foods initially",
        "Take prescribed pain medications",
        "Avoid strenuous activities for one week",
        "Attend scheduled follow-up visits",
        "Monitor for fever, bleeding, or severe pain",
      ],
      note: "Most patients return to normal activities within 7–10 days.",
    },

    suitability: {
      heading: "Who Is Suitable for Adenotonsillectomy?",
      list: [
        "Children with enlarged adenoids and tonsils",
        "Adults with recurrent tonsillitis",
        "Patients with sleep-disordered breathing",
        "Individuals not responding to medical treatment",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists",
        "Advanced surgical techniques",
        "Child-friendly and patient-focused care",
        "High safety standards and hygiene protocols",
        "Comprehensive pre- and post-surgical support",
      ],
    },

    worldclasslistdata: [
      { title: "Experienced ENT Specialists for Adenoid & Tonsil Surgery" },
      { title: "Accurate Diagnosis for Tonsil and Adenoid Disorders" },
      { title: "Safe Adenotonsillectomy Under General Anesthesia" },
      { title: "Minimally Invasive ENT Surgical Techniques" },
      { title: "Child-Friendly Adenotonsillectomy Care" },
      { title: "Advanced Operation Theatre & Safety Protocols" },
      { title: "Reduced Pain and Faster Post-Surgery Recovery" },
      { title: "Effective Treatment for Snoring & Sleep Apnea" },
      { title: "Comprehensive Pre- and Post-Operative Care" },
      { title: "Long-Term Relief from Recurrent Throat Infections" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you or your child are suffering from frequent throat infections, breathing problems, or sleep disturbances, consult our ENT specialists today.",
      buttonText: "Book Appointment",
    },
    otherServices: [
      {
        columnstand: "active",
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 2,
    title: "Sinus & Allergy Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/sinus-allergy-treatment.avif",
    link: "/sinus-allergy-treatment",

    intro: {
      h1: "Sinus & Allergy Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Relief for Sinusitis, Allergies & Nasal Blockage",
      paragraphs: [
        "Sinus and allergy problems can cause persistent sneezing, nasal congestion, facial pressure, headaches, post-nasal drip, and disturbed sleep. At Brunda Advanced Orthopaedics & ENT Centre, we provide complete sinus & allergy evaluation and personalized treatment to help you breathe comfortably and feel better every day.",
        "Our ENT specialists focus on accurate diagnosis, allergy control, and long-term sinus management using modern tests, medications, and advanced ENT procedures when needed.",
      ],
    },

    whatIs: {
      heading: "What Are Sinus & Allergy Problems?",
      description:
        "Sinus issues occur when the lining of the sinuses becomes inflamed or infected, while allergies are immune reactions to triggers like dust, pollen, smoke, or pet dander.",
      list: [
        "Sinusitis – inflammation or infection of the sinus lining",
        "Allergic rhinitis – nasal allergy causing sneezing, itching, and congestion",
      ],
      note: "Untreated sinus and allergy conditions can lead to chronic nasal blockage, recurring infections, reduced smell, and sleep disturbances. Early ENT care helps prevent complications and improves quality of life.",
    },

    indications: {
      heading: "When Should You Visit for Sinus & Allergy Treatment?",
      list: [
        "Frequent sneezing, runny nose, or nasal itching",
        "Chronic nasal blockage or mouth breathing",
        "Facial pain/pressure or heaviness around eyes and cheeks",
        "Headaches that worsen with cold or sinus flare-ups",
        "Post-nasal drip, sore throat, or chronic cough",
        "Reduced sense of smell or taste",
        "Recurring sinus infections or persistent symptoms beyond 10–12 days",
        "Wheezing or allergy-triggered breathing discomfort",
      ],
    },

    benefits: {
      heading: "Benefits of Sinus & Allergy Treatment",
      list: [
        "Long-term relief from nasal congestion and sneezing",
        "Reduced sinus headaches and facial pressure",
        "Fewer sinus infections and antibiotic use",
        "Improved sleep and reduced snoring from blockage",
        "Better breathing, smell, and overall energy",
        "Personalized plan to control triggers and prevent recurrence",
      ],
    },

    procedure: {
      heading: "How Is Sinus & Allergy Treatment Done?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, sinus & allergy care starts with a thorough ENT evaluation. Treatment may include medications, nasal therapies, trigger control, and advanced procedures for chronic cases.",
      details: [
        { label: "Evaluation", value: "ENT examination and symptom review" },
        { label: "Diagnostic Support", value: "Nasal endoscopy (if required)" },
        {
          label: "Treatment Options",
          value: "Anti-allergy medicines, nasal sprays, saline irrigation",
        },
        {
          label: "Advanced Care",
          value: "Procedure-based management for chronic sinusitis (if needed)",
        },
        {
          label: "Follow-Up",
          value: "Ongoing monitoring to prevent recurrence",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Faster Relief & Prevention",
      list: [
        "Use saline nasal rinses as advised",
        "Avoid known triggers (dust, smoke, strong perfumes)",
        "Maintain hydration and adequate sleep",
        "Use medications regularly for the recommended duration",
        "Keep rooms clean and reduce dust exposure",
        "Follow up if symptoms persist or recur frequently",
      ],
      note: "With consistent care and trigger control, most patients experience significant improvement and fewer flare-ups.",
    },

    suitability: {
      heading: "Who Is Suitable for Sinus & Allergy Care?",
      list: [
        "Adults and children with recurring sneezing and nasal congestion",
        "Patients with chronic sinusitis or frequent sinus infections",
        "Individuals with allergy triggers affecting daily life",
        "People with nasal blockage, reduced smell, or post-nasal drip",
        "Patients needing long-term allergy and sinus control plans",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists for sinus and allergy management",
        "Accurate diagnosis with modern ENT evaluation",
        "Comprehensive medical and procedure-based treatment options",
        "Patient-friendly care with long-term prevention focus",
        "Guidance on lifestyle changes and trigger control",
      ],
    },

    worldclasslistdata: [
      { title: "Expert ENT Evaluation for Sinus & Allergy Conditions" },
      { title: "Personalized Treatment Plans Based on Symptoms & Triggers" },
      { title: "Advanced Diagnostic Support Including Nasal Endoscopy" },
      { title: "Effective Allergy Control with Modern Medications" },
      { title: "Chronic Sinusitis Management for Long-Term Relief" },
      { title: "Nasal Blockage & Breathing Improvement Focus" },
      { title: "Guidance on Trigger Avoidance and Lifestyle Care" },
      { title: "Care for Seasonal & Perennial Allergies" },
      { title: "Support for Post-Nasal Drip, Cough & Headaches" },
      { title: "Follow-Up Care to Prevent Recurrence" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you have frequent sneezing, nasal blockage, sinus headaches, or recurring infections, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for complete sinus & allergy care.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        columnstand: "active",
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 3,
    title: "Head & Neck Disorders Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/head-neck-disorders.avif",
    link: "/head-neck-disorders",

    intro: {
      h1: "Head & Neck Disorders Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Comprehensive Care for Neck Lumps, Thyroid & Throat Conditions",
      paragraphs: [
        "Head and neck disorders can affect the throat, neck, thyroid gland, salivary glands, lymph nodes, and surrounding structures. Symptoms such as neck swelling, difficulty swallowing, persistent throat pain, or voice changes should not be ignored. At Brunda Advanced Orthopaedics & ENT Centre, we provide complete evaluation and personalized treatment for head & neck disorders to ensure early diagnosis and effective care.",
        "Our ENT specialists focus on identifying the underlying cause through detailed examination and modern diagnostic tools, followed by evidence-based medical or surgical management when required.",
      ],
    },

    whatIs: {
      heading: "What Are Head & Neck Disorders?",
      description:
        "Head & neck disorders include a wide range of conditions affecting the neck, throat, thyroid, salivary glands, lymph nodes, and related ENT structures.",
      list: [
        "Neck swellings and enlarged lymph nodes",
        "Thyroid gland disorders and nodules",
        "Salivary gland infections or stones",
        "Structural or inflammatory throat conditions",
      ],
      note: "If left untreated, head & neck disorders may progress or lead to complications. Early ENT evaluation helps ensure accurate diagnosis and timely treatment.",
    },

    indications: {
      heading: "When Should You Visit for Head & Neck Disorder Treatment?",
      list: [
        "Persistent swelling or lump in the neck",
        "Difficulty swallowing or throat discomfort",
        "Voice change or hoarseness lasting more than two weeks",
        "Pain in the neck, jaw, or throat",
        "Thyroid swelling or hormonal imbalance symptoms",
        "Recurrent salivary gland infections",
        "Unexplained weight loss or chronic throat pain",
        "Enlarged lymph nodes that do not reduce over time",
      ],
    },

    benefits: {
      heading: "Benefits of Head & Neck Disorder Treatment",
      list: [
        "Accurate diagnosis of neck and throat conditions",
        "Early detection of serious disorders",
        "Relief from pain, swelling, and discomfort",
        "Improved swallowing, voice, and breathing",
        "Targeted and effective treatment approach",
        "Reduced risk of complications and recurrence",
      ],
    },

    procedure: {
      heading: "How Are Head & Neck Disorders Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, head & neck disorder management begins with a detailed ENT assessment followed by appropriate diagnostic tests and personalized treatment planning.",
      details: [
        { label: "Evaluation", value: "Detailed ENT and neck examination" },
        {
          label: "Diagnostic Support",
          value: "Ultrasound, FNAC, imaging, or endoscopy if required",
        },
        {
          label: "Treatment Options",
          value: "Medications, hormonal management, or infection control",
        },
        {
          label: "Advanced Care",
          value: "Surgical or procedure-based management when indicated",
        },
        {
          label: "Follow-Up",
          value: "Regular monitoring to track recovery and prevent recurrence",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Recovery & Prevention",
      list: [
        "Follow prescribed medications and instructions carefully",
        "Avoid voice strain if advised by the ENT specialist",
        "Maintain proper nutrition and hydration",
        "Report any new swelling, pain, or voice changes promptly",
        "Attend follow-up visits for monitoring and prevention",
      ],
      note: "With timely diagnosis and appropriate care, most head & neck disorders can be managed effectively with good long-term outcomes.",
    },

    suitability: {
      heading: "Who Is Suitable for Head & Neck Disorder Care?",
      list: [
        "Adults and children with neck lumps or swellings",
        "Patients with thyroid or salivary gland conditions",
        "Individuals experiencing voice or swallowing difficulties",
        "People with chronic throat or neck pain",
        "Patients requiring expert ENT evaluation and care",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists in head & neck care",
        "Accurate diagnosis using modern ENT tools",
        "Comprehensive medical and surgical treatment options",
        "Patient-focused and transparent care approach",
        "Emphasis on early detection and prevention",
      ],
    },

    worldclasslistdata: [
      { title: "Expert ENT Evaluation for Head & Neck Disorders" },
      { title: "Accurate Diagnosis of Neck Lumps & Thyroid Conditions" },
      { title: "Advanced Diagnostic Support Including FNAC & Imaging" },
      { title: "Comprehensive Thyroid & Salivary Gland Care" },
      { title: "Voice & Swallowing Disorder Management" },
      { title: "Safe & Effective Surgical Interventions When Needed" },
      { title: "Personalized Treatment Planning" },
      { title: "Early Detection & Preventive Care Focus" },
      { title: "Ethical & Patient-Centered ENT Care" },
      { title: "Structured Follow-Up & Long-Term Monitoring" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you notice a neck lump, voice change, thyroid swelling, or persistent throat discomfort, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for complete head & neck disorder evaluation and care.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        columnstand: "active",
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],

    empolydata: [
      {
        id: 1,
        delay: "0.2s",
        image: "/assets/doctors-image/Dr-Meghana-Janardhan1.JPG",
        title: "Dr. Meghana Janardhan",
        position: "ENT Surgeon",
      },
    ],
  },
  {
    id: 4,
    title: "Pediatric ENT Care at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/pediatric-ent-care.avif",
    link: "/pediatric-ent-care",

    intro: {
      h1: "Pediatric ENT Care at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Specialized Ear, Nose & Throat Care for Infants & Children",
      paragraphs: [
        "Children are more prone to ear, nose, and throat problems due to developing immunity, anatomical differences, and frequent infections. Conditions such as ear infections, tonsillitis, adenoid problems, nasal blockage, and hearing or speech concerns require timely and gentle medical attention. At Brunda Advanced Orthopaedics & ENT Centre, we provide dedicated Pediatric ENT Care focused on accurate diagnosis and child-friendly treatment.",
        "Our ENT specialists understand the unique needs of infants, toddlers, and growing children. We ensure compassionate care, clear communication with parents, and evidence-based treatment plans for both common and complex pediatric ENT conditions.",
      ],
    },

    whatIs: {
      heading: "What Is Pediatric ENT Care?",
      description:
        "Pediatric ENT Care focuses on diagnosing and treating ear, nose, throat, hearing, voice, and airway conditions in infants, children, and adolescents.",
      list: [
        "Recurrent ear infections and ear discharge",
        "Tonsillitis and adenoid enlargement",
        "Nasal blockage, sinusitis, and allergies",
        "Hearing, speech, and voice-related concerns",
      ],
      note: "Early evaluation and treatment of ENT problems in children help prevent complications, improve development, and enhance overall quality of life.",
    },

    indications: {
      heading: "When Should Your Child Visit a Pediatric ENT Specialist?",
      list: [
        "Frequent ear infections or ear pain",
        "Delayed speech or suspected hearing loss",
        "Persistent mouth breathing or snoring",
        "Recurrent throat infections or tonsillitis",
        "Nasal blockage or chronic runny nose",
        "Difficulty swallowing or noisy breathing",
        "Voice changes or hoarseness in children",
        "Poor school performance linked to hearing issues",
      ],
    },

    benefits: {
      heading: "Benefits of Pediatric ENT Care",
      list: [
        "Early detection of ENT and hearing problems",
        "Reduced frequency of infections and complications",
        "Improved hearing, speech, and learning ability",
        "Better breathing and sleep quality",
        "Child-friendly and minimally invasive care",
        "Parental guidance and preventive advice",
      ],
    },

    procedure: {
      heading: "How Are Pediatric ENT Conditions Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, pediatric ENT treatment begins with gentle evaluation and age-appropriate diagnostic methods followed by personalized care.",
      details: [
        { label: "Assessment", value: "Child-friendly ENT examination" },
        {
          label: "Diagnostic Support",
          value: "Hearing tests, endoscopy, or imaging when required",
        },
        {
          label: "Medical Management",
          value: "Medications, allergy control, and infection treatment",
        },
        {
          label: "Surgical Care",
          value: "Adenoidectomy, tonsillectomy, or ear procedures if indicated",
        },
        {
          label: "Follow-Up",
          value: "Growth monitoring, hearing checks, and preventive guidance",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Children & Parents",
      list: [
        "Ensure medications are taken exactly as prescribed",
        "Encourage proper hygiene and handwashing",
        "Monitor hearing, speech, and sleep patterns",
        "Avoid exposure to allergens and infections",
        "Attend follow-up visits for long-term monitoring",
      ],
      note: "With timely pediatric ENT care, most childhood ENT conditions are treatable, allowing children to grow, learn, and thrive without long-term issues.",
    },

    suitability: {
      heading: "Who Is Suitable for Pediatric ENT Care?",
      list: [
        "Infants and toddlers with recurrent ENT infections",
        "Children with hearing or speech delays",
        "Kids with tonsil, adenoid, or nasal problems",
        "Children experiencing breathing or sleep disturbances",
        "Parents seeking expert ENT evaluation for their child",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists in pediatric care",
        "Gentle, child-friendly diagnostic approach",
        "Comprehensive medical and surgical ENT services",
        "Clear communication and parental counseling",
        "Focus on early diagnosis and preventive care",
      ],
    },

    worldclasslistdata: [
      { title: "Dedicated Pediatric ENT Specialists" },
      { title: "Child-Friendly ENT Evaluation & Care" },
      { title: "Accurate Hearing & Speech Assessment" },
      { title: "Advanced Diagnostic Support for Children" },
      { title: "Tonsil & Adenoid Disorder Management" },
      { title: "Safe Pediatric ENT Surgical Procedures" },
      { title: "Personalized Treatment Plans for Every Child" },
      { title: "Preventive Care & Parental Guidance" },
      { title: "Ethical & Compassionate Pediatric Care" },
      { title: "Structured Follow-Up & Growth Monitoring" },
    ],

    cta: {
      heading: "Book a Pediatric ENT Consultation",
      text: "If your child has frequent ear infections, throat problems, hearing concerns, or breathing difficulties, consult our Pediatric ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for expert and compassionate care.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        columnstand: "active",
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 5,
    title: "Vertigo Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/vertigo-treatment.avif",
    link: "/vertigo-treatment",

    intro: {
      h1: "Vertigo Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Care for Dizziness, Balance Disorders & Spinning Sensation",
      paragraphs: [
        "Vertigo is a condition where individuals experience a spinning or moving sensation, often accompanied by dizziness, nausea, imbalance, or blurred vision. It can significantly affect daily activities and quality of life. At Brunda Advanced Orthopaedics & ENT Centre, we provide comprehensive vertigo evaluation and personalized treatment to identify the root cause and restore balance.",
        "Our ENT specialists focus on accurate diagnosis using detailed clinical assessment and vestibular evaluation, followed by evidence-based medical and positional therapies tailored to each patient’s condition.",
      ],
    },

    whatIs: {
      heading: "What Is Vertigo?",
      description:
        "Vertigo is a balance disorder commonly caused by problems in the inner ear or vestibular system, leading to a false sensation of movement or spinning.",
      list: [
        "Benign Paroxysmal Positional Vertigo (BPPV)",
        "Vestibular neuritis or labyrinthitis",
        "Meniere’s disease",
        "Vertigo related to ear infections or migraine",
      ],
      note: "Early diagnosis of vertigo helps prevent falls, anxiety, and long-term balance complications.",
    },

    indications: {
      heading: "When Should You Visit for Vertigo Treatment?",
      list: [
        "Repeated episodes of spinning sensation",
        "Dizziness triggered by head movements",
        "Loss of balance or frequent falls",
        "Nausea or vomiting with dizziness",
        "Ear fullness, ringing, or hearing changes",
        "Vertigo lasting more than a few days",
        "Difficulty walking or standing steadily",
        "Anxiety due to recurring dizziness",
      ],
    },

    benefits: {
      heading: "Benefits of Vertigo Treatment",
      list: [
        "Accurate identification of vertigo cause",
        "Relief from dizziness and spinning sensation",
        "Improved balance and coordination",
        "Reduced risk of falls and injuries",
        "Better confidence in daily activities",
        "Long-term prevention of recurrence",
      ],
    },

    procedure: {
      heading: "How Is Vertigo Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, vertigo treatment is based on the underlying cause and severity of symptoms.",
      details: [
        {
          label: "Clinical Assessment",
          value: "Detailed ENT and balance evaluation",
        },
        {
          label: "Diagnostic Support",
          value: "Audiometry, vestibular tests, or imaging if required",
        },
        {
          label: "Medical Management",
          value: "Medications to control dizziness, nausea, and inflammation",
        },
        {
          label: "Repositioning Maneuvers",
          value: "Canalith repositioning procedures for BPPV",
        },
        {
          label: "Follow-Up",
          value: "Monitoring recovery and preventing recurrence",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Vertigo Management",
      list: [
        "Avoid sudden head movements as advised",
        "Follow medications and exercises regularly",
        "Maintain hydration and balanced nutrition",
        "Perform vestibular exercises if prescribed",
        "Report persistent or worsening symptoms promptly",
      ],
      note: "With proper diagnosis and treatment, most vertigo conditions can be effectively managed with excellent outcomes.",
    },

    suitability: {
      heading: "Who Is Suitable for Vertigo Treatment?",
      list: [
        "Adults experiencing recurrent dizziness",
        "Patients with balance or inner ear disorders",
        "Individuals with BPPV or vestibular conditions",
        "People affected by vertigo-related anxiety",
        "Anyone seeking expert ENT evaluation for dizziness",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists in vertigo care",
        "Accurate diagnosis of balance disorders",
        "Non-invasive and evidence-based treatments",
        "Personalized care plans for long-term relief",
        "Patient-focused and ethical treatment approach",
      ],
    },

    worldclasslistdata: [
      { title: "Expert Vertigo & Balance Disorder Evaluation" },
      { title: "Accurate Diagnosis of Inner Ear Conditions" },
      { title: "Advanced Vestibular Assessment Support" },
      { title: "Effective BPPV Repositioning Maneuvers" },
      { title: "Medical Management of Dizziness & Nausea" },
      { title: "Non-Invasive Treatment Approaches" },
      { title: "Personalized Vertigo Care Plans" },
      { title: "Fall Prevention & Balance Improvement Focus" },
      { title: "Ethical & Patient-Centered ENT Care" },
      { title: "Structured Follow-Up & Monitoring" },
    ],

    cta: {
      heading: "Book a Vertigo Consultation",
      text: "If you are experiencing dizziness, spinning sensation, or balance issues, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for accurate vertigo diagnosis and effective treatment.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        columnstand: "active",
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 6,
    title: "Foreign Body Removal ENT at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/foreign-body-removal-ent.avif",
    link: "/foreign-body-removal-ent",

    intro: {
      h1: "Foreign Body Removal ENT at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Safe & Prompt Removal of Objects from Ear, Nose & Throat",
      paragraphs: [
        "Foreign bodies in the ear, nose, or throat are common emergencies, especially in children, and require prompt medical attention. Objects such as beads, food particles, insects, cotton, batteries, or small toys can cause pain, infection, breathing difficulty, or hearing problems if not removed safely. At Brunda Advanced Orthopaedics & ENT Centre, we provide expert ENT care for safe and effective foreign body removal.",
        "Our ENT specialists use precise techniques and appropriate instruments to remove foreign bodies gently while minimizing discomfort, complications, and tissue damage.",
      ],
    },

    whatIs: {
      heading: "What Is a Foreign Body in ENT?",
      description:
        "A foreign body ENT condition occurs when an external object becomes lodged in the ear, nose, or throat, leading to irritation, infection, pain, or breathing difficulty.",
      list: [
        "Foreign body in the ear (insects, cotton, beads)",
        "Foreign body in the nose (seeds, toys, sponge pieces)",
        "Foreign body in the throat or food pipe",
        "Accidental swallowing or inhalation of objects",
      ],
      note: "Attempting to remove foreign bodies at home can worsen the condition and should be avoided.",
    },

    indications: {
      heading: "When Should You Visit for Foreign Body Removal?",
      list: [
        "Sudden ear pain or blockage sensation",
        "Nasal blockage or foul-smelling nasal discharge",
        "Bleeding from ear or nose",
        "Difficulty swallowing or breathing",
        "Persistent coughing or choking sensation",
        "Reduced hearing or ringing in the ear",
        "Suspected object insertion by a child",
        "Swallowed sharp or battery-powered objects",
      ],
    },

    benefits: {
      heading: "Benefits of Prompt Foreign Body Removal",
      list: [
        "Prevention of infection and tissue damage",
        "Immediate relief from pain and discomfort",
        "Reduced risk of hearing or breathing complications",
        "Safe removal without injury",
        "Faster recovery with minimal intervention",
        "Peace of mind for patients and caregivers",
      ],
    },

    procedure: {
      heading: "How Is Foreign Body Removal Done?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, foreign body removal is performed carefully based on the object’s location, size, and nature, ensuring patient safety and comfort.",
      details: [
        {
          label: "Clinical Examination",
          value: "ENT evaluation using otoscope or endoscope",
        },
        {
          label: "Assessment",
          value: "Identifying size, depth, and risk of the object",
        },
        {
          label: "Removal Technique",
          value: "Use of specialized instruments or suction",
        },
        {
          label: "Anesthesia Support",
          value: "Local anesthesia or sedation when required",
        },
        {
          label: "Post-Removal Check",
          value: "Inspection to rule out injury or infection",
        },
      ],
    },

    postOpCare: {
      heading: "Care After Foreign Body Removal",
      list: [
        "Follow prescribed medications if advised",
        "Avoid inserting objects into ear or nose",
        "Keep the affected area dry and clean",
        "Monitor for pain, discharge, or fever",
        "Attend follow-up visits if recommended",
      ],
      note: "Most patients recover quickly after safe foreign body removal with minimal discomfort.",
    },

    suitability: {
      heading: "Who Is Suitable for Foreign Body ENT Treatment?",
      list: [
        "Children with accidental object insertion",
        "Adults with ear or nasal foreign bodies",
        "Patients who swallowed food or objects",
        "Individuals with breathing or swallowing difficulty",
        "Anyone requiring urgent ENT evaluation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists for emergency care",
        "Safe, gentle, and precise removal techniques",
        "Child-friendly and patient-focused approach",
        "Advanced ENT instruments and endoscopy support",
        "Quick relief with ethical medical care",
      ],
    },

    worldclasslistdata: [
      { title: "Expert ENT Emergency Management" },
      { title: "Safe Ear, Nose & Throat Foreign Body Removal" },
      { title: "Child-Friendly ENT Care" },
      { title: "Advanced Endoscopic Support" },
      { title: "Minimal Discomfort & Complications" },
      { title: "Accurate Post-Removal Evaluation" },
      { title: "Immediate Symptom Relief" },
      { title: "Ethical & Patient-Centered Treatment" },
      { title: "Quick Recovery & Follow-Up Care" },
      { title: "Trusted ENT Specialists" },
    ],

    cta: {
      heading: "Get Immediate ENT Assistance",
      text: "If you suspect a foreign body in the ear, nose, or throat, seek prompt ENT care at Brunda Advanced Orthopaedics & ENT Centre for safe and effective removal.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        columnstand: "active",
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 7,
    title: "Micro Ear Surgery at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/micro-ear-surgery.avif",
    link: "/micro-ear-surgery",

    intro: {
      h1: "Micro Ear Surgery at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Surgical Care for Chronic Ear Infections & Hearing Restoration",
      paragraphs: [
        "Micro Ear Surgery is a specialized ENT procedure performed to treat chronic ear infections, damaged eardrums, middle ear disease, and certain causes of hearing loss. Conditions left untreated can lead to persistent discharge, pain, dizziness, or permanent hearing damage. At Brunda Advanced Orthopaedics & ENT Centre, we offer precise micro ear surgery using advanced microscopic techniques for safe and effective outcomes.",
        "Our ENT specialists focus on accurate diagnosis, meticulous surgical planning, and hearing preservation or improvement, ensuring minimal tissue damage and faster recovery.",
      ],
    },

    whatIs: {
      heading: "What Is Micro Ear Surgery?",
      description:
        "Micro ear surgery is a delicate ENT surgical procedure performed under a microscope to treat diseases of the middle ear and eardrum with high precision.",
      list: [
        "Chronic suppurative otitis media (CSOM)",
        "Perforated eardrum (tympanic membrane)",
        "Cholesteatoma",
        "Ossicular chain damage",
        "Conductive hearing loss",
      ],
      note: "Early surgical intervention helps prevent complications such as hearing loss, dizziness, or spread of infection.",
    },

    indications: {
      heading: "When Is Micro Ear Surgery Recommended?",
      list: [
        "Persistent ear discharge despite medication",
        "Repeated ear infections",
        "Hearing loss due to middle ear disease",
        "Perforated eardrum not healing on its own",
        "Cholesteatoma or abnormal ear growth",
        "Ear pain or pressure with infection",
        "Dizziness related to ear disease",
        "Recurrent infections affecting daily life",
      ],
    },

    benefits: {
      heading: "Benefits of Micro Ear Surgery",
      list: [
        "Removal of chronic infection and disease",
        "Improved or restored hearing",
        "Closure of eardrum perforation",
        "Prevention of recurrent ear discharge",
        "Reduced risk of complications",
        "Improved quality of life",
      ],
    },

    procedure: {
      heading: "How Is Micro Ear Surgery Performed?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, micro ear surgery is performed using advanced microscopic techniques to ensure accuracy, safety, and optimal hearing outcomes.",
      details: [
        {
          label: "Pre-Surgical Evaluation",
          value: "ENT examination, audiometry, and imaging if required",
        },
        {
          label: "Surgical Planning",
          value:
            "Selection of appropriate procedure such as tympanoplasty or mastoidectomy",
        },
        {
          label: "Microscopic Surgery",
          value: "Precision surgery using operating microscope",
        },
        {
          label: "Hearing Reconstruction",
          value: "Repair of eardrum or ossicular chain if needed",
        },
        {
          label: "Post-Surgical Care",
          value: "Monitoring healing and hearing improvement",
        },
      ],
    },

    postOpCare: {
      heading: "Care After Micro Ear Surgery",
      list: [
        "Keep the ear dry as advised",
        "Take prescribed medications regularly",
        "Avoid water entry into the operated ear",
        "Do not blow nose forcefully",
        "Avoid heavy lifting or strain",
        "Attend follow-up and hearing tests",
      ],
      note: "Most patients experience good healing and gradual hearing improvement with proper post-operative care.",
    },

    suitability: {
      heading: "Who Is Suitable for Micro Ear Surgery?",
      list: [
        "Patients with chronic ear infections",
        "Individuals with non-healing eardrum perforation",
        "People with conductive hearing loss",
        "Patients diagnosed with cholesteatoma",
        "Those not responding to medical treatment",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT surgeons in micro ear procedures",
        "Advanced operating microscope and instruments",
        "Focus on hearing preservation and restoration",
        "Safe, precise, and evidence-based surgical care",
        "Patient-centered approach with ethical treatment",
      ],
    },

    worldclasslistdata: [
      { title: "Expert Micro Ear Surgery Specialists" },
      { title: "Advanced Operating Microscope Support" },
      { title: "Precise Middle Ear Reconstruction" },
      { title: "Effective Infection Clearance" },
      { title: "Hearing Restoration Focus" },
      { title: "Minimal Tissue Damage Techniques" },
      { title: "Safe & Proven Surgical Outcomes" },
      { title: "Personalized Surgical Planning" },
      { title: "Structured Post-Surgical Follow-Up" },
      { title: "Trusted ENT Care" },
    ],

    cta: {
      heading: "Consult for Micro Ear Surgery",
      text: "If you are experiencing chronic ear infections, hearing loss, or persistent ear discharge, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for expert evaluation and advanced micro ear surgery.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        columnstand: "active",
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 8,
    title: "Voice Disorders Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/voice-disorders-treatment.avif",
    link: "/voice-disorders-treatment",

    intro: {
      h1: "Voice Disorders Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Expert Care for Hoarseness, Voice Loss & Throat-Related Voice Problems",
      paragraphs: [
        "Voice disorders affect the ability to speak clearly and comfortably, often presenting as hoarseness, voice fatigue, pitch changes, or complete voice loss. These conditions may result from vocal strain, infections, nerve issues, or structural problems of the vocal cords. At Brunda Advanced Orthopaedics & ENT Centre, we provide comprehensive evaluation and personalized treatment for voice disorders to restore healthy voice function.",
        "Our ENT specialists focus on accurate diagnosis through laryngeal examination and voice assessment, followed by medical treatment, voice therapy guidance, or surgical care when required.",
      ],
    },

    whatIs: {
      heading: "What Are Voice Disorders?",
      description:
        "Voice disorders occur when there is a problem with the vocal cords (voice box) or the muscles and nerves controlling voice production, leading to changes in voice quality, pitch, or strength.",
      list: [
        "Hoarseness or rough voice",
        "Vocal cord nodules or polyps",
        "Laryngitis (acute or chronic)",
        "Vocal cord paralysis or weakness",
        "Voice disorders related to reflux or allergies",
      ],
      note: "Early evaluation of voice problems helps prevent permanent voice damage and improves recovery outcomes.",
    },

    indications: {
      heading: "When Should You Visit for Voice Disorder Treatment?",
      list: [
        "Hoarseness lasting more than two weeks",
        "Frequent voice breaks or voice fatigue",
        "Loss of voice or weak voice",
        "Pain or strain while speaking",
        "Difficulty projecting the voice",
        "Change in pitch or voice quality",
        "Chronic throat clearing or cough",
        "Voice issues affecting profession or daily life",
      ],
    },

    benefits: {
      heading: "Benefits of Voice Disorder Treatment",
      list: [
        "Accurate diagnosis of voice-related problems",
        "Improved voice clarity and strength",
        "Relief from throat strain and discomfort",
        "Prevention of permanent vocal cord damage",
        "Better voice endurance for daily use",
        "Enhanced communication confidence",
      ],
    },

    procedure: {
      heading: "How Are Voice Disorders Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, voice disorder treatment is customized based on the underlying cause, severity, and individual voice needs.",
      details: [
        {
          label: "Voice & Throat Evaluation",
          value: "ENT examination and laryngeal assessment",
        },
        {
          label: "Diagnostic Support",
          value: "Laryngoscopy or stroboscopy if required",
        },
        {
          label: "Medical Management",
          value: "Treatment for infection, reflux, or inflammation",
        },
        {
          label: "Voice Therapy Guidance",
          value: "Techniques to reduce strain and improve voice use",
        },
        {
          label: "Surgical Intervention",
          value: "Microsurgery for vocal cord lesions when indicated",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Voice Health",
      list: [
        "Practice voice rest as advised",
        "Avoid shouting or whispering",
        "Stay hydrated and avoid throat irritants",
        "Follow voice therapy exercises regularly",
        "Avoid smoking and excessive caffeine",
        "Attend follow-up evaluations as scheduled",
      ],
      note: "With timely treatment and proper voice care, most voice disorders can be effectively managed and reversed.",
    },

    suitability: {
      heading: "Who Is Suitable for Voice Disorder Treatment?",
      list: [
        "Teachers, singers, and professional voice users",
        "Individuals with chronic hoarseness or voice loss",
        "Patients with vocal cord lesions or paralysis",
        "People with voice changes due to reflux or allergies",
        "Anyone experiencing persistent voice problems",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists in voice disorder management",
        "Accurate diagnosis with advanced laryngeal evaluation",
        "Personalized treatment plans for voice recovery",
        "Ethical, evidence-based ENT care",
        "Patient-focused approach for long-term voice health",
      ],
    },

    worldclasslistdata: [
      { title: "Expert Voice Disorder Evaluation" },
      { title: "Advanced Laryngeal Examination Support" },
      { title: "Medical & Surgical Voice Care" },
      { title: "Voice Therapy & Rehabilitation Guidance" },
      { title: "Treatment for Vocal Cord Lesions" },
      { title: "Professional Voice User Care" },
      { title: "Non-Invasive Voice Management Options" },
      { title: "Personalized Voice Recovery Plans" },
      { title: "Ethical & Patient-Centered ENT Care" },
      { title: "Structured Follow-Up & Monitoring" },
    ],

    cta: {
      heading: "Book a Voice Consultation",
      text: "If you are experiencing hoarseness, voice fatigue, or voice loss, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for expert evaluation and effective voice disorder treatment.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        columnstand: "active",
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 9,
    title: "ENT Endoscopy at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/ent-endoscopy.avif",
    link: "/ent-endoscopy",

    intro: {
      h1: "ENT Endoscopy at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Diagnostic Evaluation of Ear, Nose & Throat Conditions",
      paragraphs: [
        "ENT Endoscopy is a minimally invasive diagnostic procedure that allows detailed visualization of the ear, nose, throat, voice box, and surrounding structures. It helps in identifying the exact cause of persistent ENT symptoms such as nasal blockage, throat pain, voice changes, or swallowing difficulty. At Brunda Advanced Orthopaedics & ENT Centre, we provide safe and accurate ENT endoscopy for precise diagnosis and effective treatment planning.",
        "Our ENT specialists use advanced endoscopic equipment to examine internal ENT structures comfortably, ensuring clarity, safety, and patient reassurance during the procedure.",
      ],
    },

    whatIs: {
      heading: "What Is ENT Endoscopy?",
      description:
        "ENT endoscopy is a procedure that uses a thin, flexible or rigid tube with a camera and light to examine internal structures of the ear, nose, throat, and voice box in detail.",
      list: [
        "Nasal endoscopy for nose and sinus evaluation",
        "Laryngoscopy for voice box and vocal cords",
        "Nasopharyngoscopy for throat and swallowing assessment",
        "Endoscopic evaluation of chronic ENT symptoms",
      ],
      note: "Endoscopy provides accurate, real-time visualization that helps avoid misdiagnosis and unnecessary treatment.",
    },

    indications: {
      heading: "When Is ENT Endoscopy Recommended?",
      list: [
        "Persistent nasal blockage or sinus symptoms",
        "Chronic throat pain or irritation",
        "Hoarseness or voice changes",
        "Difficulty swallowing or choking sensation",
        "Recurrent nosebleeds",
        "Post-nasal drip or chronic cough",
        "Suspected growths or structural abnormalities",
        "Unexplained ear or throat symptoms",
      ],
    },

    benefits: {
      heading: "Benefits of ENT Endoscopy",
      list: [
        "Accurate diagnosis of ENT conditions",
        "Minimally invasive and quick procedure",
        "Real-time visualization of internal structures",
        "Helps guide effective treatment planning",
        "Avoids unnecessary medications or tests",
        "Safe with minimal discomfort",
      ],
    },

    procedure: {
      heading: "How Is ENT Endoscopy Performed?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, ENT endoscopy is performed as a quick outpatient procedure with patient comfort as a priority.",
      details: [
        {
          label: "Preparation",
          value: "Local anesthetic spray applied if required",
        },
        {
          label: "Endoscopic Examination",
          value: "Insertion of flexible or rigid endoscope for detailed view",
        },
        {
          label: "Visual Assessment",
          value: "Examination of nasal cavity, throat, or voice box",
        },
        {
          label: "Documentation",
          value: "Image or video recording for diagnosis and explanation",
        },
        {
          label: "Post-Procedure Review",
          value: "Discussion of findings and treatment plan",
        },
      ],
    },

    postOpCare: {
      heading: "Care After ENT Endoscopy",
      list: [
        "Resume normal activities shortly after the procedure",
        "Avoid eating or drinking immediately if throat anesthesia was used",
        "Report any persistent discomfort or bleeding",
        "Follow medications or advice if prescribed",
        "Attend follow-up visits as recommended",
      ],
      note: "ENT endoscopy is generally well-tolerated with no downtime in most patients.",
    },

    suitability: {
      heading: "Who Is Suitable for ENT Endoscopy?",
      list: [
        "Adults with chronic ENT symptoms",
        "Children with persistent nasal or throat issues",
        "Patients with voice or swallowing problems",
        "Individuals with recurrent sinus or nasal complaints",
        "Anyone requiring accurate ENT diagnosis",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced ENT specialists in diagnostic endoscopy",
        "Advanced endoscopic equipment",
        "Safe, quick, and patient-friendly procedure",
        "Accurate diagnosis for targeted treatment",
        "Ethical and evidence-based ENT care",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced ENT Endoscopy Services" },
      { title: "High-Definition Endoscopic Imaging" },
      { title: "Accurate Diagnosis of ENT Disorders" },
      { title: "Minimally Invasive Evaluation" },
      { title: "Patient-Friendly Diagnostic Approach" },
      { title: "Real-Time Visualization & Explanation" },
      { title: "Safe & Comfortable Procedure" },
      { title: "Guided Treatment Planning" },
      { title: "Ethical & Transparent Care" },
      { title: "Structured Follow-Up Support" },
    ],

    cta: {
      heading: "Book an ENT Endoscopy",
      text: "If you are experiencing persistent ENT symptoms or need an accurate diagnosis, consult our ENT specialists at Brunda Advanced Orthopaedics & ENT Centre for advanced and safe ENT endoscopy evaluation.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        columnstand: "active",
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 10,
    title: "Audiology & Hearing Aids at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/audiology-hearing-aids.avif",
    link: "/audiology-hearing-aids",

    intro: {
      h1: "Audiology & Hearing Aids at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Comprehensive Hearing Evaluation & Advanced Hearing Solutions",
      paragraphs: [
        "Hearing loss can affect communication, social interaction, work performance, and overall quality of life. Early diagnosis and proper hearing care are essential for maintaining auditory health. At Brunda Advanced Orthopaedics & ENT Centre, we offer complete audiology services and modern hearing aid solutions for children, adults, and seniors.",
        "Our audiologists and ENT specialists work together to assess hearing ability accurately and recommend personalized hearing solutions, including advanced digital hearing aids tailored to individual needs.",
      ],
    },

    whatIs: {
      heading: "What Are Audiology & Hearing Aid Services?",
      description:
        "Audiology services focus on the evaluation, diagnosis, and management of hearing and balance disorders, while hearing aids are electronic devices designed to improve hearing and speech understanding.",
      list: [
        "Pure Tone Audiometry (PTA)",
        "Speech Audiometry",
        "Impedance / Tympanometry testing",
        "Hearing aid evaluation and fitting",
        "Follow-up hearing care and adjustments",
      ],
      note: "Timely hearing assessment helps prevent communication difficulties and cognitive decline associated with untreated hearing loss.",
    },

    indications: {
      heading: "When Should You Visit for Hearing Evaluation?",
      list: [
        "Difficulty hearing conversations",
        "Frequently asking others to repeat",
        "Ringing or buzzing sound in the ears",
        "Trouble hearing in noisy environments",
        "TV or phone volume kept unusually high",
        "Delayed speech development in children",
        "Hearing loss after infection or injury",
        "Age-related hearing changes",
      ],
    },

    benefits: {
      heading: "Benefits of Audiology & Hearing Aid Care",
      list: [
        "Accurate diagnosis of hearing loss type",
        "Improved speech clarity and communication",
        "Better social interaction and confidence",
        "Customized hearing aid solutions",
        "Reduced listening effort and fatigue",
        "Improved quality of life",
      ],
    },

    procedure: {
      heading: "How Are Hearing Tests & Hearing Aids Managed?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, hearing care is provided through a structured and patient-friendly process.",
      details: [
        {
          label: "Hearing Assessment",
          value: "Comprehensive audiological evaluation",
        },
        {
          label: "Diagnosis",
          value: "Identification of hearing loss type and severity",
        },
        {
          label: "Hearing Aid Selection",
          value: "Choosing suitable digital hearing aids",
        },
        {
          label: "Fitting & Programming",
          value: "Custom fitting and fine-tuning for comfort",
        },
        {
          label: "Follow-Up Care",
          value: "Regular adjustments and hearing monitoring",
        },
      ],
    },

    postOpCare: {
      heading: "Care Tips for Hearing Aid Users",
      list: [
        "Use hearing aids as advised",
        "Keep devices clean and dry",
        "Avoid exposure to moisture and dust",
        "Attend regular follow-up appointments",
        "Report discomfort or feedback issues",
        "Replace batteries or recharge regularly",
      ],
      note: "Consistent follow-up and proper care ensure optimal hearing aid performance and long-term benefits.",
    },

    suitability: {
      heading: "Who Is Suitable for Audiology & Hearing Aid Services?",
      list: [
        "Children with suspected hearing issues",
        "Adults with gradual or sudden hearing loss",
        "Elderly individuals with age-related hearing decline",
        "Patients with hearing loss due to infections or noise exposure",
        "Anyone experiencing communication difficulties",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced audiologists and ENT specialists",
        "Advanced diagnostic audiology equipment",
        "Wide range of modern digital hearing aids",
        "Personalized hearing care solutions",
        "Ethical guidance and patient-centered approach",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Audiology Evaluation" },
      { title: "Advanced Hearing Diagnostic Equipment" },
      { title: "Digital Hearing Aid Solutions" },
      { title: "Customized Hearing Aid Fitting" },
      { title: "Child & Adult Hearing Care" },
      { title: "Tinnitus & Hearing Loss Management" },
      { title: "Comfort-Focused Programming" },
      { title: "Regular Follow-Up & Support" },
      { title: "Ethical Hearing Care Practices" },
      { title: "Improved Hearing & Communication Outcomes" },
    ],

    cta: {
      heading: "Book a Hearing Evaluation",
      text: "If you or your loved one is experiencing hearing difficulty, consult our audiology and ENT experts at Brunda Advanced Orthopaedics & ENT Centre for accurate hearing assessment and advanced hearing aid solutions.",
      buttonText: "Book Appointment",
    },

    otherServices: [
      {
        title: "Adenotonsillectomy",
        link: "/our-services/ent-services/adenotonsillectomy",
      },
      {
        title: "Sinus & Allergy",
        link: "/our-services/ent-services/sinus-allergy-treatment",
      },
      {
        title: "Head & Neck Disorders",
        link: "/our-services/ent-services/head-neck-disorders",
      },
      {
        title: "Pediatric ENT Care",
        link: "/our-services/ent-services/pediatric-ent-care",
      },
      {
        title: "Vertigo Treatment",
        link: "/our-services/ent-services/vertigo-treatment",
      },
      {
        title: "Foreign Body ENT",
        link: "/our-services/ent-services/foreign-body-removal-ent",
      },
      {
        title: "Micro Ear Surgery",
        link: "/our-services/ent-services/micro-ear-surgery",
      },
      {
        title: "Voice Disorders",
        link: "/our-services/ent-services/voice-disorders-treatment",
      },
      {
        title: "Endoscopy",
        link: "/our-services/ent-services/ent-endoscopy",
      },
      // {
      //   columnstand: "active",
      //   title: "Audiology & Hearing Aids",
      //   link: "/our-services/ent-services/audiology-hearing-aids",
      // },
    ],
  },
  {
    id: 11,
    title: "Orthopaedic Trauma Care at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/orthopaedic-trauma.avif",
    link: "/orthopaedic-trauma",

    intro: {
      h1: "Orthopaedic Trauma Care at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Care for Fractures, Injuries & Complex Bone Trauma",
      paragraphs: [
        "Orthopaedic trauma involves injuries to bones, joints, muscles, and ligaments caused by accidents, falls, sports injuries, or high-impact trauma. Prompt and expert management is crucial to restore function, prevent complications, and ensure proper healing. At Brunda Advanced Orthopaedics & ENT Centre, we provide comprehensive orthopaedic trauma care for patients of all ages.",
        "Our experienced orthopaedic surgeons use advanced diagnostic tools, evidence-based treatment protocols, and modern surgical techniques to manage simple fractures as well as complex and polytrauma cases with precision and care.",
      ],
    },

    whatIs: {
      heading: "What Is Orthopaedic Trauma Care?",
      description:
        "Orthopaedic trauma care focuses on the diagnosis, treatment, and rehabilitation of musculoskeletal injuries involving bones, joints, ligaments, tendons, and soft tissues.",
      list: [
        "Fracture and dislocation management",
        "Soft tissue and ligament injury care",
        "Polytrauma and accident-related injuries",
        "Complex and revision trauma surgeries",
        "Post-trauma rehabilitation planning",
      ],
      note: "Early and appropriate orthopaedic trauma management is essential to prevent long-term disability and restore mobility.",
    },

    indications: {
      heading: "When Should You Consult an Orthopaedic Trauma Specialist?",
      list: [
        "Severe pain or swelling after injury",
        "Visible deformity of a limb or joint",
        "Inability to move or bear weight",
        "Fractures caused by accidents or falls",
        "Sports-related bone or joint injuries",
        "Non-healing or improperly healed fractures",
        "Multiple injuries from road traffic accidents",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Orthopaedic Trauma Care",
      list: [
        "Accurate diagnosis of complex injuries",
        "Proper fracture alignment and healing",
        "Reduced risk of complications",
        "Restoration of mobility and function",
        "Faster recovery with structured rehabilitation",
        "Improved long-term joint and bone health",
      ],
    },

    procedure: {
      heading: "How Is Orthopaedic Trauma Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, orthopaedic trauma care follows a systematic and patient-focused approach.",
      details: [
        {
          label: "Clinical & Imaging Evaluation",
          value: "X-rays, CT scans, or MRI for precise diagnosis",
        },
        {
          label: "Stabilization",
          value: "Immediate care to stabilize fractures or injuries",
        },
        {
          label: "Treatment Planning",
          value: "Conservative or surgical approach based on injury",
        },
        {
          label: "Surgical Management",
          value: "Fixation using plates, screws, rods, or joint reconstruction",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy and follow-up for functional recovery",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Treatment & Recovery Care",
      list: [
        "Follow weight-bearing instructions carefully",
        "Attend scheduled follow-up visits",
        "Participate in prescribed physiotherapy",
        "Maintain proper nutrition for bone healing",
        "Report pain, swelling, or infection signs early",
        "Gradually resume daily activities as advised",
      ],
      note: "Adherence to post-treatment care ensures proper healing and optimal recovery outcomes.",
    },

    suitability: {
      heading: "Who Is Suitable for Orthopaedic Trauma Care?",
      list: [
        "Accident and injury victims",
        "Patients with fractures or dislocations",
        "Individuals with sports-related injuries",
        "Patients with complex or revision trauma cases",
        "Children and elderly with bone injuries",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced orthopaedic trauma surgeons",
        "Advanced imaging and surgical facilities",
        "Comprehensive polytrauma management",
        "Personalized treatment and rehabilitation plans",
        "Ethical, patient-centered orthopaedic care",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Orthopaedic Trauma Care" },
      { title: "Polytrauma & Emergency Injury Management" },
      { title: "Complex & Revision Trauma Surgery" },
      { title: "Advanced Fracture Fixation Techniques" },
      { title: "Joint Preservation & Reconstruction" },
      { title: "Sports Injury & Arthroscopic Care" },
      { title: "Child & Adult Orthopaedic Services" },
      { title: "Structured Rehabilitation Support" },
      { title: "Ethical & Evidence-Based Treatment" },
      { title: "Improved Mobility & Functional Outcomes" },
    ],

    cta: {
      heading: "Consult an Orthopaedic Trauma Specialist",
      text: "If you or your loved one has sustained a bone or joint injury, consult our orthopaedic trauma experts at Brunda Advanced Orthopaedics & ENT Centre for timely diagnosis, advanced treatment, and complete recovery care.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Orthopaedic Trauma (Simple & Complex)"),
  },
  {
    id: 12,
    title: "Poly Trauma Management at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/poly-trauma-management.avif",
    link: "/poly-trauma-management",

    intro: {
      h1: "Poly Trauma Management at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Comprehensive Emergency Care for Multiple & Life-Threatening Injuries",
      paragraphs: [
        "Poly trauma refers to multiple serious injuries involving more than one body system, often caused by road traffic accidents, falls from height, industrial injuries, or severe sports trauma. Such injuries require rapid assessment, coordinated care, and timely intervention to save life and preserve function.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our multidisciplinary trauma team provides prompt, organized, and advanced poly trauma management, ensuring stabilization, definitive treatment, and structured rehabilitation for optimal recovery outcomes.",
      ],
    },

    whatIs: {
      heading: "What Is Poly Trauma Management?",
      description:
        "Poly trauma management focuses on the emergency evaluation, stabilization, and treatment of patients with multiple injuries affecting bones, joints, head, chest, abdomen, or soft tissues.",
      list: [
        "Emergency trauma assessment and resuscitation",
        "Management of multiple fractures and soft tissue injuries",
        "Coordination between orthopaedics, surgery, and critical care",
        "Damage control and definitive trauma surgeries",
        "Post-trauma rehabilitation planning",
      ],
      note: "Early and coordinated trauma care significantly improves survival and long-term functional recovery.",
    },

    indications: {
      heading: "When Is Poly Trauma Management Required?",
      list: [
        "Road traffic accidents with multiple injuries",
        "High-impact falls or industrial accidents",
        "Multiple fractures involving different limbs",
        "Associated head, chest, or abdominal injuries",
        "Severe bleeding or shock after trauma",
        "Complex injuries requiring multidisciplinary care",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Poly Trauma Care",
      list: [
        "Rapid stabilization of life-threatening conditions",
        "Coordinated multidisciplinary treatment",
        "Reduced risk of complications and infections",
        "Timely surgical intervention when required",
        "Improved survival and functional outcomes",
        "Planned rehabilitation for faster recovery",
      ],
    },

    procedure: {
      heading: "How Is Poly Trauma Managed?",
      description:
        "Poly trauma care at Brunda Advanced Orthopaedics & ENT Centre follows internationally accepted trauma protocols with a patient-first approach.",
      details: [
        {
          label: "Primary Survey & Stabilization",
          value: "Airway, breathing, circulation, and bleeding control",
        },
        {
          label: "Imaging & Assessment",
          value: "X-rays, CT scans, and laboratory evaluation",
        },
        {
          label: "Damage Control Treatment",
          value: "Temporary stabilization of critical injuries",
        },
        {
          label: "Definitive Surgical Care",
          value: "Fracture fixation and organ injury management",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy and functional recovery planning",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Trauma & Recovery Care",
      list: [
        "Close monitoring in the recovery phase",
        "Strict adherence to medication and physiotherapy",
        "Gradual mobilization as advised",
        "Nutritional support for healing",
        "Regular follow-up and imaging when required",
        "Psychological support if needed",
      ],
      note: "Comprehensive post-trauma care is essential for complete physical and emotional recovery.",
    },

    suitability: {
      heading: "Who Needs Poly Trauma Management?",
      list: [
        "Accident victims with multiple injuries",
        "Patients with combined bone and organ injuries",
        "Individuals with life-threatening trauma",
        "Patients requiring coordinated multi-specialty care",
        "High-risk trauma cases needing intensive monitoring",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced orthopaedic and trauma specialists",
        "Rapid emergency response and stabilization",
        "Multidisciplinary trauma care approach",
        "Advanced diagnostic and surgical facilities",
        "Patient-centered and ethical trauma management",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Poly Trauma Management" },
      { title: "24/7 Emergency Trauma Response" },
      { title: "Multidisciplinary Trauma Team" },
      { title: "Damage Control & Definitive Surgery" },
      { title: "Complex Fracture & Injury Care" },
      { title: "Critical Care & Monitoring Support" },
      { title: "Structured Rehabilitation Programs" },
      { title: "Ethical & Evidence-Based Trauma Care" },
      { title: "Reduced Complications & Faster Recovery" },
      { title: "Improved Survival & Functional Outcomes" },
    ],

    cta: {
      heading: "Emergency Trauma Consultation",
      text: "In case of severe accidents or multiple injuries, seek immediate expert care at Brunda Advanced Orthopaedics & ENT Centre for advanced poly trauma management and coordinated recovery support.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Poly Trauma Management"),
  },
  {
    id: 13,
    title: "Complex & Revision Trauma Care at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/complex-revision-trauma.avif",
    link: "/complex-revision-trauma",

    intro: {
      h1: "Complex & Revision Trauma Care at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Solutions for Complicated Fractures & Failed Trauma Surgeries",
      paragraphs: [
        "Complex and revision trauma cases involve difficult fractures, non-union or malunion of bones, infected implants, or failed previous trauma surgeries that require specialized expertise and advanced surgical planning. These conditions often cause chronic pain, deformity, and functional limitation if not managed correctly.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our experienced orthopaedic trauma specialists provide comprehensive evaluation and advanced revision trauma care, focusing on restoring bone alignment, stability, function, and long-term mobility.",
      ],
    },

    whatIs: {
      heading: "What Is Complex & Revision Trauma Care?",
      description:
        "Complex and revision trauma care focuses on treating challenging musculoskeletal injuries and correcting complications arising from previous fracture treatments or surgeries.",
      list: [
        "Non-union and delayed union fractures",
        "Malunion and deformity correction",
        "Implant failure or broken hardware",
        "Infected fracture fixation cases",
        "Revision fracture and joint reconstruction",
      ],
      note: "Timely revision trauma intervention helps prevent long-term disability and improves functional outcomes.",
    },

    indications: {
      heading: "When Do You Need Complex or Revision Trauma Care?",
      list: [
        "Fractures that fail to heal properly",
        "Persistent pain or instability after surgery",
        "Bent, broken, or loosened implants",
        "Post-traumatic deformities",
        "Infection at the fracture or implant site",
        "Loss of function after previous trauma treatment",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Complex & Revision Trauma Care",
      list: [
        "Accurate identification of healing problems",
        "Correction of deformity and malalignment",
        "Removal or replacement of failed implants",
        "Improved bone healing and stability",
        "Pain relief and functional restoration",
        "Enhanced long-term mobility and quality of life",
      ],
    },

    procedure: {
      heading: "How Are Complex & Revision Trauma Cases Treated?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, complex trauma cases are managed with meticulous planning and advanced surgical techniques.",
      details: [
        {
          label: "Detailed Clinical Evaluation",
          value: "Assessment of previous surgery and current condition",
        },
        {
          label: "Advanced Imaging",
          value: "X-rays, CT scans, or MRI for precise planning",
        },
        {
          label: "Revision Surgical Planning",
          value: "Selection of appropriate fixation or reconstruction method",
        },
        {
          label: "Surgical Correction",
          value: "Bone grafting, implant revision, or deformity correction",
        },
        {
          label: "Rehabilitation & Monitoring",
          value: "Physiotherapy and follow-up to ensure proper healing",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Revision Recovery Care",
      list: [
        "Strict adherence to weight-bearing guidelines",
        "Regular wound and infection monitoring",
        "Compliance with physiotherapy protocols",
        "Adequate nutrition to support bone healing",
        "Scheduled follow-up imaging",
        "Early reporting of pain or complications",
      ],
      note: "Careful post-operative management is critical for successful outcomes in revision trauma cases.",
    },

    suitability: {
      heading: "Who Is Suitable for Complex & Revision Trauma Care?",
      list: [
        "Patients with failed fracture surgeries",
        "Individuals with non-union or malunion fractures",
        "Patients with implant-related complications",
        "Post-trauma deformity cases",
        "Patients requiring corrective orthopaedic surgery",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Highly experienced orthopaedic trauma surgeons",
        "Expertise in complex and revision trauma cases",
        "Advanced surgical planning and techniques",
        "Comprehensive rehabilitation support",
        "Ethical, patient-focused orthopaedic care",
      ],
    },

    worldclasslistdata: [
      { title: "Complex & Revision Trauma Expertise" },
      { title: "Non-Union & Malunion Fracture Care" },
      { title: "Implant Failure & Infection Management" },
      { title: "Advanced Bone Grafting Techniques" },
      { title: "Deformity Correction Procedures" },
      { title: "Precision Surgical Planning" },
      { title: "Structured Rehabilitation Programs" },
      { title: "Evidence-Based Orthopaedic Care" },
      { title: "Pain Relief & Functional Restoration" },
      { title: "Improved Long-Term Mobility" },
    ],

    cta: {
      heading: "Consult a Revision Trauma Specialist",
      text: "If you are facing complications after a fracture or trauma surgery, consult our orthopaedic experts at Brunda Advanced Orthopaedics & ENT Centre for advanced complex and revision trauma care.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Orthopaedic Trauma (Simple & Complex)"),
  },
  {
    id: 14,
    title: "Joint Replacement Surgery at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/joint-replacement.jpg",
    link: "/joint-replacement",

    intro: {
      h1: "Joint Replacement Surgery at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Solutions for Knee, Hip & Joint Pain Relief",
      paragraphs: [
        "Chronic joint pain and stiffness caused by arthritis, injury, or degeneration can severely limit mobility and quality of life. When conservative treatments no longer provide relief, joint replacement surgery offers a reliable and long-lasting solution to restore movement and reduce pain.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our experienced orthopaedic surgeons provide comprehensive joint replacement care using advanced surgical techniques and high-quality implants to help patients regain mobility and lead an active, pain-free life.",
      ],
    },

    whatIs: {
      heading: "What Is Joint Replacement Surgery?",
      description:
        "Joint replacement surgery involves removing damaged or worn-out joint surfaces and replacing them with artificial implants designed to restore smooth movement and joint function.",
      list: [
        "Total knee replacement",
        "Partial knee replacement",
        "Total hip replacement",
        "Revision joint replacement",
        "Joint resurfacing procedures",
      ],
      note: "Joint replacement is recommended when joint damage causes persistent pain and functional limitation despite non-surgical treatments.",
    },

    indications: {
      heading: "When Is Joint Replacement Surgery Recommended?",
      list: [
        "Severe knee or hip pain affecting daily activities",
        "Advanced osteoarthritis or rheumatoid arthritis",
        "Joint stiffness and reduced range of motion",
        "Pain not relieved by medication or physiotherapy",
        "Joint deformity or instability",
        "Failed previous joint surgery",
      ],
    },

    benefits: {
      heading: "Benefits of Joint Replacement Surgery",
      list: [
        "Significant pain relief",
        "Improved joint movement and flexibility",
        "Enhanced mobility and independence",
        "Correction of joint deformity",
        "Better sleep and daily function",
        "Long-lasting improvement in quality of life",
      ],
    },

    procedure: {
      heading: "How Is Joint Replacement Surgery Performed?",
      description:
        "Joint replacement surgery at Brunda Advanced Orthopaedics & ENT Centre follows a structured and patient-focused approach to ensure safety and optimal outcomes.",
      details: [
        {
          label: "Pre-Surgical Evaluation",
          value: "Clinical assessment, imaging, and medical fitness",
        },
        {
          label: "Surgical Planning",
          value: "Selection of appropriate implant and technique",
        },
        {
          label: "Surgery",
          value: "Precise joint replacement using advanced methods",
        },
        {
          label: "Post-Operative Care",
          value: "Pain control, wound care, and early mobilization",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy for strength and mobility recovery",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Surgery Care & Rehabilitation",
      list: [
        "Early mobilization as advised",
        "Regular physiotherapy sessions",
        "Proper wound care and hygiene",
        "Adherence to medication schedule",
        "Avoiding high-impact activities initially",
        "Regular follow-up visits for monitoring",
      ],
      note: "Dedicated rehabilitation and follow-up care are essential for successful joint replacement outcomes.",
    },

    suitability: {
      heading: "Who Is Suitable for Joint Replacement Surgery?",
      list: [
        "Patients with advanced joint arthritis",
        "Individuals with severe joint pain and stiffness",
        "Patients with joint deformity or instability",
        "Those with reduced mobility affecting daily life",
        "Patients unresponsive to conservative treatments",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced joint replacement surgeons",
        "Advanced surgical techniques and implants",
        "Personalized pre- and post-operative care",
        "Comprehensive rehabilitation support",
        "Ethical and patient-centered orthopaedic services",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Joint Replacement Procedures" },
      { title: "Knee & Hip Replacement Expertise" },
      { title: "High-Quality Implants & Technology" },
      { title: "Minimally Invasive Surgical Techniques" },
      { title: "Personalized Rehabilitation Programs" },
      { title: "Revision Joint Replacement Care" },
      { title: "Improved Mobility & Pain Relief" },
      { title: "Enhanced Quality of Life" },
      { title: "Evidence-Based Orthopaedic Treatment" },
      { title: "Long-Term Functional Outcomes" },
    ],

    cta: {
      heading: "Consult a Joint Replacement Specialist",
      text: "If chronic joint pain is limiting your daily life, consult our orthopaedic experts at Brunda Advanced Orthopaedics & ENT Centre to explore advanced joint replacement solutions tailored to your needs.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Arthroplasty Surgeries"),
  },
  {
    id: 15,
    title: "Sports Injuries Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/sports-injuries.avif",
    link: "/sports-injuries",

    intro: {
      h1: "Sports Injuries Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Expert Care for Athletic Injuries & Faster Recovery",
      paragraphs: [
        "Sports injuries can affect muscles, ligaments, tendons, joints, and bones, commonly resulting from overuse, sudden impact, or improper technique during physical activity. Prompt diagnosis and specialized treatment are essential to prevent long-term complications and ensure safe return to sports.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our orthopaedic and sports injury specialists provide comprehensive care for amateur and professional athletes, using advanced diagnostic tools and personalized treatment plans to support optimal recovery and performance.",
      ],
    },

    whatIs: {
      heading: "What Are Sports Injuries?",
      description:
        "Sports injuries include a wide range of musculoskeletal injuries caused by physical activity, exercise, or sports participation.",
      list: [
        "Ligament injuries (ACL, PCL, MCL)",
        "Meniscus and cartilage injuries",
        "Muscle strains and tears",
        "Tendon injuries and tendinitis",
        "Stress fractures",
        "Shoulder, knee, and ankle injuries",
      ],
      note: "Early treatment and proper rehabilitation are key to preventing re-injury and ensuring long-term joint health.",
    },

    indications: {
      heading: "When Should You Seek Treatment for Sports Injuries?",
      list: [
        "Persistent pain after sports activity",
        "Swelling or instability in joints",
        "Limited range of motion",
        "Sudden injury with popping sensation",
        "Difficulty bearing weight or continuing sports",
        "Recurrent injuries or pain during activity",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Sports Injury Care",
      list: [
        "Accurate diagnosis of injury type",
        "Targeted and sport-specific treatment",
        "Faster and safer return to activity",
        "Reduced risk of recurrence",
        "Improved strength and flexibility",
        "Enhanced athletic performance",
      ],
    },

    procedure: {
      heading: "How Are Sports Injuries Treated?",
      description:
        "Sports injury management at Brunda Advanced Orthopaedics & ENT Centre follows a structured, athlete-focused approach.",
      details: [
        {
          label: "Clinical Evaluation",
          value: "Detailed assessment and injury history",
        },
        {
          label: "Imaging & Diagnosis",
          value: "X-rays, MRI, or ultrasound if required",
        },
        {
          label: "Treatment Planning",
          value: "Conservative care or surgical intervention",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy, strengthening, and conditioning",
        },
        {
          label: "Return-to-Sport Guidance",
          value: "Gradual and safe resumption of activity",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Injury Prevention Care",
      list: [
        "Adherence to physiotherapy protocols",
        "Gradual increase in training intensity",
        "Proper warm-up and stretching routines",
        "Use of protective gear when required",
        "Adequate rest and recovery periods",
        "Regular follow-up with specialists",
      ],
      note: "A structured recovery plan helps athletes return stronger and reduces the risk of future injuries.",
    },

    suitability: {
      heading: "Who Can Benefit from Sports Injury Treatment?",
      list: [
        "Professional and amateur athletes",
        "Fitness enthusiasts and active individuals",
        "Children and adolescents in sports",
        "Adults with activity-related injuries",
        "Individuals with recurrent sports injuries",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced sports injury specialists",
        "Advanced diagnostic and treatment facilities",
        "Personalized, sport-specific care plans",
        "Comprehensive rehabilitation support",
        "Ethical and patient-focused orthopaedic care",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Sports Injury Care" },
      { title: "Ligament & Meniscus Injury Management" },
      { title: "Non-Surgical & Surgical Treatment Options" },
      { title: "Advanced Rehabilitation Programs" },
      { title: "Return-to-Sport Expertise" },
      { title: "Injury Prevention Strategies" },
      { title: "Athlete-Focused Treatment Approach" },
      { title: "Improved Strength & Performance" },
      { title: "Reduced Re-Injury Risk" },
      { title: "Long-Term Joint Health" },
    ],

    cta: {
      heading: "Consult a Sports Injury Specialist",
      text: "If you have sustained a sports-related injury or experience ongoing pain during activity, consult our experts at Brunda Advanced Orthopaedics & ENT Centre for accurate diagnosis and advanced sports injury treatment.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Arthroscopic Surgeries"),
  },
  {
    id: 16,
    title: "Arthroscopic Procedures at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/arthroscopic-procedures.avif",
    link: "/arthroscopic-procedures",

    intro: {
      h1: "Arthroscopic Procedures at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Minimally Invasive Joint Surgery for Faster Recovery",
      paragraphs: [
        "Arthroscopic procedures are advanced minimally invasive surgeries used to diagnose and treat joint problems with precision and minimal tissue damage. These procedures help relieve pain, restore joint function, and enable quicker recovery compared to traditional open surgery.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our orthopaedic specialists perform arthroscopic surgeries using high-definition cameras and specialized instruments to treat a wide range of joint conditions affecting the knee, shoulder, ankle, and other joints.",
      ],
    },

    whatIs: {
      heading: "What Are Arthroscopic Procedures?",
      description:
        "Arthroscopy is a minimally invasive surgical technique in which a small camera (arthroscope) is inserted into a joint to visualize, diagnose, and treat joint disorders.",
      list: [
        "Knee arthroscopy (meniscus, ligament injuries)",
        "Shoulder arthroscopy (rotator cuff, instability)",
        "Ankle arthroscopy",
        "Elbow and wrist arthroscopy",
        "Cartilage repair procedures",
      ],
      note: "Arthroscopic surgery allows accurate treatment with smaller incisions, less pain, and faster healing.",
    },

    indications: {
      heading: "When Are Arthroscopic Procedures Recommended?",
      list: [
        "Persistent joint pain or swelling",
        "Ligament or meniscus injuries",
        "Joint locking or instability",
        "Sports-related joint injuries",
        "Cartilage damage",
        "Shoulder or knee movement restriction",
      ],
    },

    benefits: {
      heading: "Benefits of Arthroscopic Surgery",
      list: [
        "Minimally invasive technique",
        "Smaller incisions and minimal scarring",
        "Reduced pain and blood loss",
        "Shorter hospital stay",
        "Faster recovery and rehabilitation",
        "Early return to daily activities and sports",
      ],
    },

    procedure: {
      heading: "How Are Arthroscopic Procedures Performed?",
      description:
        "Arthroscopic surgery at Brunda Advanced Orthopaedics & ENT Centre is carried out through a precise and patient-centered approach.",
      details: [
        {
          label: "Clinical Evaluation",
          value: "Joint examination and imaging studies",
        },
        {
          label: "Surgical Planning",
          value: "Selection of appropriate arthroscopic technique",
        },
        {
          label: "Procedure",
          value: "Small incisions with camera-guided treatment",
        },
        {
          label: "Post-Procedure Care",
          value: "Pain control and wound management",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy for strength and mobility",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Arthroscopy Care & Recovery",
      list: [
        "Keep surgical wounds clean and dry",
        "Use ice and elevation to reduce swelling",
        "Take prescribed medications as advised",
        "Begin physiotherapy as recommended",
        "Avoid strenuous activities initially",
        "Attend follow-up appointments",
      ],
      note: "Proper post-operative care and rehabilitation are key to achieving optimal results after arthroscopic surgery.",
    },

    suitability: {
      heading: "Who Is Suitable for Arthroscopic Procedures?",
      list: [
        "Patients with joint injuries or pain",
        "Athletes with sports-related joint problems",
        "Individuals with ligament or cartilage damage",
        "Patients requiring minimally invasive joint surgery",
        "Those seeking faster recovery and minimal scarring",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroscopic surgeons",
        "Advanced minimally invasive surgical techniques",
        "High-definition arthroscopy equipment",
        "Personalized rehabilitation programs",
        "Ethical and patient-focused orthopaedic care",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Arthroscopic Joint Surgery" },
      { title: "Minimally Invasive Treatment Techniques" },
      { title: "Knee, Shoulder & Ankle Arthroscopy" },
      { title: "Sports Injury Arthroscopic Care" },
      { title: "Precision Diagnosis & Treatment" },
      { title: "Faster Recovery & Rehabilitation" },
      { title: "Reduced Pain & Scarring" },
      { title: "Improved Joint Function" },
      { title: "Evidence-Based Orthopaedic Practice" },
      { title: "Enhanced Mobility Outcomes" },
    ],

    cta: {
      heading: "Consult an Arthroscopy Specialist",
      text: "If joint pain or injury is limiting your movement, consult our orthopaedic experts at Brunda Advanced Orthopaedics & ENT Centre to explore advanced arthroscopic treatment options.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Arthroscopic Surgeries"),
  },
  {
    id: 17,
    title: "Spine Surgeries at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/spine-surgeries.avif",
    link: "/spine-surgeries",

    intro: {
      h1: "Spine Surgeries at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Surgical Care for Spine & Back Disorders",
      paragraphs: [
        "Spine disorders can cause persistent back or neck pain, nerve compression, weakness, and reduced mobility, significantly affecting daily life. When conservative treatments fail to provide relief, spine surgery may be required to correct the underlying condition and restore spinal stability.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our experienced spine and orthopaedic surgeons offer comprehensive spine surgery solutions using advanced techniques focused on pain relief, nerve decompression, and long-term spinal health.",
      ],
    },

    whatIs: {
      heading: "What Are Spine Surgeries?",
      description:
        "Spine surgeries are procedures performed to treat structural problems of the cervical, thoracic, or lumbar spine, relieving nerve pressure and restoring spinal alignment.",
      list: [
        "Discectomy and microdiscectomy",
        "Laminectomy and decompression surgeries",
        "Spinal fusion procedures",
        "Minimally invasive spine surgery",
        "Treatment for spinal fractures and instability",
      ],
      note: "Spine surgery is recommended only after thorough evaluation and when non-surgical treatments are ineffective.",
    },

    indications: {
      heading: "When Are Spine Surgeries Recommended?",
      list: [
        "Severe or persistent back and neck pain",
        "Radiating pain, numbness, or weakness in arms or legs",
        "Slipped disc (herniated disc)",
        "Spinal stenosis or nerve compression",
        "Spinal fractures or deformities",
        "Loss of bowel or bladder control due to nerve compression",
      ],
    },

    benefits: {
      heading: "Benefits of Spine Surgery",
      list: [
        "Relief from chronic back or neck pain",
        "Decompression of spinal nerves",
        "Improved mobility and function",
        "Correction of spinal instability or deformity",
        "Reduced neurological symptoms",
        "Improved quality of life",
      ],
    },

    procedure: {
      heading: "How Are Spine Surgeries Performed?",
      description:
        "Spine surgery at Brunda Advanced Orthopaedics & ENT Centre follows a precise and patient-centric treatment pathway.",
      details: [
        {
          label: "Comprehensive Evaluation",
          value: "Clinical assessment and advanced imaging",
        },
        {
          label: "Surgical Planning",
          value: "Choosing the most appropriate surgical approach",
        },
        {
          label: "Surgery",
          value: "Minimally invasive or open spine procedures",
        },
        {
          label: "Post-Operative Care",
          value: "Pain management and early mobilization",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy and spine strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Surgery Spine Care & Recovery",
      list: [
        "Follow activity restrictions and posture advice",
        "Attend physiotherapy sessions regularly",
        "Use spinal braces if prescribed",
        "Maintain proper ergonomics",
        "Avoid heavy lifting initially",
        "Regular follow-up for progress monitoring",
      ],
      note: "Structured rehabilitation and lifestyle modifications play a vital role in successful spine surgery outcomes.",
    },

    suitability: {
      heading: "Who Is Suitable for Spine Surgery?",
      list: [
        "Patients with severe spine-related pain",
        "Individuals with nerve compression symptoms",
        "Patients with spinal instability or fractures",
        "Those unresponsive to conservative treatment",
        "Patients requiring surgical correction of spinal disorders",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced spine and orthopaedic surgeons",
        "Advanced diagnostic and surgical facilities",
        "Minimally invasive spine surgery expertise",
        "Comprehensive rehabilitation support",
        "Ethical, patient-focused spine care",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Spine Surgery Solutions" },
      { title: "Minimally Invasive Spine Procedures" },
      { title: "Disc, Nerve & Decompression Surgeries" },
      { title: "Spinal Fusion & Stabilization" },
      { title: "Fracture & Trauma Spine Care" },
      { title: "Precision Surgical Planning" },
      { title: "Comprehensive Post-Operative Rehab" },
      { title: "Pain Relief & Neurological Recovery" },
      { title: "Improved Spinal Stability & Mobility" },
      { title: "Long-Term Spine Health Outcomes" },
    ],

    cta: {
      heading: "Consult a Spine Surgery Specialist",
      text: "If spine or back pain is affecting your daily life, consult our experts at Brunda Advanced Orthopaedics & ENT Centre to discuss advanced spine surgery options tailored to your condition.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Spine Surgeries"),
  },
  {
    id: 18,
    title: "Pediatrics Orthopaedics at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/pediatrics-orthopaedics.avif",
    link: "/pediatrics-orthopaedics",

    intro: {
      h1: "Pediatrics Orthopaedics at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Specialized Bone & Joint Care for Children",
      paragraphs: [
        "Children’s bones, joints, and muscles are still developing, and orthopaedic conditions in childhood require specialized evaluation and age-appropriate treatment. Early diagnosis and timely intervention are crucial to ensure proper growth, alignment, and long-term mobility.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our pediatric orthopaedic specialists provide comprehensive care for infants, children, and adolescents, focusing on gentle treatment, accurate diagnosis, and long-term musculoskeletal health.",
      ],
    },

    whatIs: {
      heading: "What Is Pediatrics Orthopaedics?",
      description:
        "Pediatrics orthopaedics deals with the diagnosis and treatment of bone, joint, muscle, and growth-related conditions in children and adolescents.",
      list: [
        "Congenital limb and joint deformities",
        "Developmental dysplasia of the hip (DDH)",
        "Pediatric fractures and trauma",
        "Limb length discrepancies",
        "Gait abnormalities and flat feet",
        "Sports injuries in children",
      ],
      note: "Early orthopaedic care helps correct problems during growth and prevents long-term disability.",
    },

    indications: {
      heading: "When Should a Child See a Pediatric Orthopaedic Specialist?",
      list: [
        "Delayed walking or abnormal gait",
        "Bow legs or knock knees",
        "Limping or persistent joint pain",
        "Recurrent falls or difficulty in movement",
        "Bone or joint injuries after a fall",
        "Congenital limb or spine abnormalities",
        "Unequal limb length",
      ],
    },

    benefits: {
      heading: "Benefits of Pediatric Orthopaedic Care",
      list: [
        "Early detection of growth-related problems",
        "Proper bone alignment and development",
        "Child-friendly and gentle treatment approach",
        "Prevention of long-term deformities",
        "Improved mobility and physical function",
        "Better quality of life during growth years",
      ],
    },

    procedure: {
      heading: "How Are Pediatric Orthopaedic Conditions Managed?",
      description:
        "At Brunda Advanced Orthopaedics & ENT Centre, pediatric orthopaedic care follows a child-centric and growth-focused approach.",
      details: [
        {
          label: "Clinical Evaluation",
          value: "Detailed growth and movement assessment",
        },
        {
          label: "Imaging & Diagnosis",
          value: "X-rays or other imaging when required",
        },
        {
          label: "Treatment Planning",
          value: "Observation, bracing, physiotherapy, or surgery",
        },
        {
          label: "Surgical Care (if needed)",
          value: "Age-appropriate corrective procedures",
        },
        {
          label: "Follow-Up & Growth Monitoring",
          value: "Regular reviews to track development",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Treatment & Growth Care",
      list: [
        "Regular follow-up to monitor growth",
        "Physiotherapy and activity guidance",
        "Use of braces or supports if prescribed",
        "Encouraging safe physical activity",
        "Parental education on posture and movement",
        "Early reporting of pain or functional changes",
      ],
      note: "Continuous monitoring ensures healthy musculoskeletal development throughout childhood.",
    },

    suitability: {
      heading: "Who Can Benefit from Pediatric Orthopaedic Care?",
      list: [
        "Infants with congenital bone or joint issues",
        "Children with growth or alignment concerns",
        "Pediatric fracture and injury cases",
        "Young athletes with sports-related injuries",
        "Adolescents with spine or limb problems",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced pediatric orthopaedic specialists",
        "Child-friendly evaluation and treatment",
        "Comprehensive growth-focused care",
        "Advanced diagnostic and surgical facilities",
        "Ethical, compassionate, family-centered approach",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Pediatric Orthopaedic Care" },
      { title: "Congenital & Developmental Disorder Management" },
      { title: "Pediatric Fracture & Trauma Treatment" },
      { title: "Growth & Alignment Monitoring" },
      { title: "Child-Friendly Treatment Approach" },
      { title: "Sports Injuries in Children" },
      { title: "Advanced Diagnostic Support" },
      { title: "Long-Term Musculoskeletal Health" },
      { title: "Parental Guidance & Education" },
      { title: "Improved Mobility & Growth Outcomes" },
    ],

    cta: {
      heading: "Consult a Pediatric Orthopaedic Specialist",
      text: "If your child has bone, joint, or growth-related concerns, consult our pediatric orthopaedic experts at Brunda Advanced Orthopaedics & ENT Centre for accurate diagnosis and compassionate, specialized care.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Pediatric Deformity Surgeries"),
  },
  {
    id: 19,
    title: "Deformity Correction Surgery at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/deformity-correction.jpg",
    link: "/deformity-correction",

    intro: {
      h1: "Deformity Correction Surgery at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Solutions for Limb & Skeletal Deformities",
      paragraphs: [
        "Bone and joint deformities can result from congenital conditions, growth abnormalities, trauma, infections, or improper healing of fractures. These deformities may affect posture, movement, appearance, and overall quality of life if left untreated.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our orthopaedic specialists provide comprehensive deformity correction care using advanced planning, precise surgical techniques, and personalized rehabilitation to restore alignment, function, and confidence.",
      ],
    },

    whatIs: {
      heading: "What Is Deformity Correction?",
      description:
        "Deformity correction involves surgical and non-surgical procedures aimed at correcting abnormal bone or joint alignment to restore proper structure and function.",
      list: [
        "Limb length discrepancy correction",
        "Angular deformity correction (bow legs, knock knees)",
        "Post-traumatic deformity correction",
        "Congenital limb deformities",
        "Spine and complex skeletal deformities",
      ],
      note: "Early and accurate deformity correction helps prevent progressive disability and joint damage.",
    },

    indications: {
      heading: "When Is Deformity Correction Recommended?",
      list: [
        "Visible limb or joint misalignment",
        "Difficulty in walking or maintaining posture",
        "Unequal limb length",
        "Joint pain due to abnormal alignment",
        "Deformities following fracture healing",
        "Congenital skeletal abnormalities",
      ],
    },

    benefits: {
      heading: "Benefits of Deformity Correction Surgery",
      list: [
        "Restoration of proper bone alignment",
        "Improved mobility and gait",
        "Reduction in pain and joint stress",
        "Prevention of early arthritis",
        "Enhanced appearance and confidence",
        "Improved overall quality of life",
      ],
    },

    procedure: {
      heading: "How Is Deformity Correction Performed?",
      description:
        "Deformity correction at Brunda Advanced Orthopaedics & ENT Centre is carried out through meticulous evaluation and customized treatment planning.",
      details: [
        {
          label: "Detailed Assessment",
          value: "Clinical evaluation and advanced imaging",
        },
        {
          label: "Pre-Surgical Planning",
          value: "Alignment analysis and correction strategy",
        },
        {
          label: "Surgical Correction",
          value: "Osteotomy, fixation, or lengthening procedures",
        },
        {
          label: "Stabilization",
          value: "Use of plates, rods, or external fixators",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy and functional recovery",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Surgery Care & Rehabilitation",
      list: [
        "Strict adherence to weight-bearing instructions",
        "Regular physiotherapy and mobility training",
        "Wound and pin-site care if applicable",
        "Balanced nutrition for bone healing",
        "Scheduled follow-up imaging",
        "Monitoring for alignment and healing progress",
      ],
      note: "Successful deformity correction requires committed rehabilitation and close follow-up care.",
    },

    suitability: {
      heading: "Who Is Suitable for Deformity Correction Surgery?",
      list: [
        "Children with growth-related deformities",
        "Adults with post-traumatic deformities",
        "Patients with limb length discrepancies",
        "Individuals with joint pain due to malalignment",
        "Patients requiring corrective orthopaedic surgery",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Expertise in complex deformity correction procedures",
        "Advanced planning and precision surgical techniques",
        "Comprehensive child and adult orthopaedic care",
        "Personalized rehabilitation and follow-up support",
        "Ethical and patient-centered treatment approach",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Deformity Correction Techniques" },
      { title: "Limb Length & Alignment Correction" },
      { title: "Congenital & Post-Traumatic Deformity Care" },
      { title: "Precision Surgical Planning" },
      { title: "Modern Fixation & Lengthening Methods" },
      { title: "Child & Adult Deformity Management" },
      { title: "Structured Rehabilitation Programs" },
      { title: "Pain Relief & Functional Improvement" },
      { title: "Improved Gait & Posture" },
      { title: "Long-Term Orthopaedic Health" },
    ],

    cta: {
      heading: "Consult a Deformity Correction Specialist",
      text: "If you or your child has bone or joint deformities affecting movement or posture, consult our orthopaedic experts at Brunda Advanced Orthopaedics & ENT Centre for advanced deformity correction solutions.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Pediatric Deformity Surgeries"),
  },
  {
    id: 20,
    title: "Trauma & General Orthopaedics at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/trauma-general-ortho.avif",
    link: "/trauma-general-ortho",

    intro: {
      h1: "Trauma & General Orthopaedics at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Full-Spectrum Bone, Joint & Injury Care",
      paragraphs: [
        "General orthopaedic care covers acute trauma, fracture management, joint injuries, and common bone and soft tissue conditions that affect everyday movement. Timely assessment and structured treatment help prevent long-term disability and restore comfort and function.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our orthopaedic team combines emergency trauma care with planned treatment for common joint problems, ensuring quick stabilization, accurate diagnosis, and rehabilitation-focused recovery for every patient.",
      ],
    },

    whatIs: {
      heading: "What Is Trauma & General Orthopaedic Care?",
      description:
        "It is comprehensive care for fractures, dislocations, ligament and tendon injuries, and degenerative joint conditions.",
      list: [
        "Immediate fracture and dislocation management",
        "Soft tissue injury care (ligaments, tendons, muscles)",
        "Evaluation of chronic joint pain and arthritis",
        "Rehabilitation planning to restore function",
      ],
      note: "Coordinated care reduces complications, speeds healing, and supports long-term joint health.",
    },

    indications: {
      heading: "When Should You Seek Orthopaedic Care?",
      list: [
        "Pain, swelling, or deformity after injury",
        "Difficulty bearing weight or using a limb",
        "Joint stiffness, locking, or instability",
        "Recurrent sprains or overuse pain",
        "Chronic joint pain from arthritis",
        "Delayed healing after a previous fracture",
      ],
    },

    benefits: {
      heading: "Benefits of Early Orthopaedic Management",
      list: [
        "Accurate diagnosis and timely stabilization",
        "Reduced risk of malunion and chronic pain",
        "Faster return to daily activities",
        "Personalized rehabilitation guidance",
        "Improved long-term mobility and strength",
        "Lower chance of repeat injuries",
      ],
    },

    procedure: {
      heading: "How We Manage Trauma & General Orthopaedic Cases",
      description:
        "Care plans are tailored to injury severity and patient goals, balancing conservative care and surgery when needed.",
      details: [
        {
          label: "Assessment",
          value: "Clinical exam and imaging (X-ray, CT, or MRI as required)",
        },
        {
          label: "Stabilization",
          value: "Splints, casts, braces, or traction for immediate support",
        },
        {
          label: "Definitive Treatment",
          value: "Closed reduction, fixation, or soft tissue repair as needed",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy, strengthening, and mobility training",
        },
        {
          label: "Follow-Up",
          value: "Regular review to track healing and adjust care",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Home Care",
      list: [
        "Follow weight-bearing and brace instructions closely",
        "Keep the immobilized area clean and dry",
        "Use ice and elevation to reduce swelling if advised",
        "Attend physiotherapy and home exercise sessions",
        "Report any numbness, increasing pain, or redness early",
        "Keep review appointments for timely progress checks",
      ],
      note: "Adhering to the care plan supports faster healing and safer return to activity.",
    },

    suitability: {
      heading: "Who Can Benefit?",
      list: [
        "Accident or fall victims with suspected fractures",
        "Patients with sprains, strains, or tendon injuries",
        "Individuals with chronic joint pain or early arthritis",
        "People with delayed or non-union fractures",
        "Active adults needing injury prevention guidance",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "24x7-ready orthopaedic trauma response",
        "Experienced surgeons and rehabilitation specialists",
        "Advanced imaging and operating facilities",
        "Clear communication on recovery timelines",
        "Evidence-based, patient-first treatment approach",
      ],
    },

    worldclasslistdata: [
      { title: "Rapid Trauma Stabilization & Fracture Care" },
      { title: "Comprehensive Evaluation for Bone & Joint Injuries" },
      { title: "Soft Tissue Repair & Ligament Care Expertise" },
      { title: "Rehabilitation-Focused Treatment Planning" },
      { title: "Early Mobilization & Return-to-Activity Support" },
      { title: "Infection Control & Post-Surgery Monitoring" },
      { title: "Multidisciplinary Pain & Recovery Management" },
      { title: "Patient Education for Injury Prevention" },
      { title: "Structured Follow-Up Protocols" },
      { title: "Ethical, Transparent Orthopaedic Care" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you have a bone or joint injury, pain, or swelling, consult our orthopaedic team for prompt stabilization and a personalized recovery plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Trauma Surgeries"),
  },
  {
    id: 25,
    title: "ACL Repair / Reconstruction at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/acl-repair-reconstruction.avif",
    link: "/acl-repair-reconstruction",

    intro: {
      h1: "ACL Repair / Reconstruction at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Restore Knee Stability After Ligament Injury",
      paragraphs: [
        "Anterior cruciate ligament (ACL) tears can lead to knee instability, giving way episodes, and difficulty with pivoting sports. Timely reconstruction protects cartilage and meniscus and supports long-term knee health.",
        "We perform arthroscopic ACL repair and reconstruction using autograft or allograft options, combined with rehab plans that help you return safely to sport or work.",
      ],
    },

    whatIs: {
      heading: "What Is ACL Reconstruction?",
      description:
        "A minimally invasive procedure to repair or replace the torn ACL and restore knee stability.",
      list: [
        "Camera-guided ligament reconstruction",
        "Use of tendon grafts (hamstring, patellar, or allograft)",
        "Precise tunnel placement for balanced knee mechanics",
        "Early rehabilitation for strength and control",
      ],
      note: "Reconstruction protects the meniscus and cartilage from further damage.",
    },

    indications: {
      heading: "When Is ACL Surgery Recommended?",
      list: [
        "Knee giving way during pivoting or turning",
        "Combined ligament or meniscus injury",
        "Active lifestyle or sports participation",
        "Persistent instability after conservative care",
        "Desire to prevent secondary knee damage",
      ],
    },

    benefits: {
      heading: "Benefits of ACL Reconstruction",
      list: [
        "Improved knee stability and confidence",
        "Protection of meniscus and cartilage",
        "Faster return to sport with guided rehab",
        "Reduced risk of further injury",
        "Better long-term knee function",
        "High success with modern arthroscopic techniques",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Done",
      description:
        "A tailored graft choice and tunnel placement restore native ACL function with minimal invasion.",
      details: [
        { label: "Evaluation", value: "Clinical tests and MRI confirmation" },
        {
          label: "Planning",
          value: "Graft selection and individualized tunnel positioning",
        },
        {
          label: "Surgery",
          value: "Arthroscopic ligament reconstruction and fixation",
        },
        {
          label: "Rehabilitation",
          value: "Early motion, strengthening, and neuromuscular training",
        },
        {
          label: "Return to Sport",
          value: "Progressive milestones with objective testing",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Use brace or crutches as advised initially",
        "Follow structured physiotherapy phases",
        "Work on quadriceps and hamstring strength",
        "Avoid pivoting until cleared by therapist",
        "Adhere to home exercises between sessions",
        "Attend reviews to track progress",
      ],
      note: "Consistent rehab is critical to regain strength and balance.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Athletes and active individuals with ACL tears",
        "Patients with instability affecting daily life",
        "People with combined meniscus or cartilage injury",
        "Those aiming to prevent future knee damage",
        "Patients committed to structured rehab",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroscopic ACL surgeons",
        "Personalized graft and technique selection",
        "Rehab-driven recovery programs",
        "Evidence-based return-to-sport timelines",
        "Close follow-up to ensure safe outcomes",
      ],
    },

    worldclasslistdata: [
      { title: "Arthroscopic ACL Reconstruction Expertise" },
      { title: "Autograft & Allograft Options" },
      { title: "Anatomic Tunnel Placement" },
      { title: "Meniscus-Sparing Techniques" },
      { title: "Early Mobilization Protocols" },
      { title: "Neuromuscular Training Programs" },
      { title: "Objective Return-to-Sport Testing" },
      { title: "Injury Prevention Education" },
      { title: "Comprehensive Rehab Support" },
      { title: "Long-Term Knee Health Focus" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If knee instability is stopping you from sport or daily activity, consult us for ACL repair and a clear rehab pathway.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("ACL Repair / Reconstruction"),
  },
  {
    id: 34,
    title: "Hip Arthroscopy (FAI) at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/hip-arthroscopy-fai.jpg",
    link: "/hip-arthroscopy-fai",

    intro: {
      h1: "Hip Arthroscopy (FAI) at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Minimally Invasive Care for Hip Impingement & Labral Tears",
      paragraphs: [
        "Femoroacetabular impingement (FAI) occurs when extra bone on the femoral head or socket causes abnormal contact, leading to labral tears and hip pain.",
        "Hip arthroscopy reshapes the bone, repairs the labrum, and relieves impingement to improve motion, reduce pain, and protect joint cartilage.",
      ],
    },

    whatIs: {
      heading: "What Is Hip Arthroscopy for FAI?",
      description:
        "A keyhole procedure to correct bony impingement and repair labral damage inside the hip joint.",
      list: [
        "Cam or pincer lesion reshaping",
        "Labral repair or refixation",
        "Cartilage assessment and treatment",
        "Capsular management for stability",
      ],
      note: "Addressing impingement early helps preserve the hip joint and delay arthritis.",
    },

    indications: {
      heading: "When Is Hip Arthroscopy Recommended?",
      list: [
        "Groin or hip pain worsened by flexion or rotation",
        "Clicking or catching sensations in the hip",
        "Labral tear or FAI seen on imaging",
        "Reduced hip range affecting sport or daily activity",
        "Failure of targeted physiotherapy to relieve symptoms",
      ],
    },

    benefits: {
      heading: "Benefits of Hip Arthroscopy",
      list: [
        "Reduced pain and improved hip function",
        "Correction of impingement to protect cartilage",
        "Better range of motion for sport and daily tasks",
        "Minimally invasive approach with small incisions",
        "Structured rehab for safe return to activity",
        "Potential to delay or prevent arthritis progression",
      ],
    },

    procedure: {
      heading: "How the Procedure Is Performed",
      description:
        "Camera-guided hip access allows precise bone reshaping and labral repair while protecting surrounding tissue.",
      details: [
        {
          label: "Assessment",
          value: "Clinical exam and specialized hip imaging",
        },
        {
          label: "Impingement Correction",
          value: "Trimming cam/pincer lesions to restore clearance",
        },
        {
          label: "Labral Care",
          value: "Repair or refixation of torn labrum",
        },
        {
          label: "Stability",
          value: "Capsular closure or plication if needed",
        },
        {
          label: "Rehabilitation",
          value: "Protected weight-bearing then progressive strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehab",
      list: [
        "Use crutches and weight-bearing limits as advised",
        "Begin gentle range exercises early",
        "Progress to strengthening under physiotherapy guidance",
        "Avoid deep flexion or pivoting until cleared",
        "Maintain core and glute strength to support the hip",
        "Regular follow-ups to monitor healing and motion",
      ],
      note: "Consistent rehab restores smooth hip motion and prevents stiffness.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with symptomatic FAI",
        "Labral tears suitable for arthroscopic repair",
        "Active individuals limited by hip pain",
        "Those without advanced hip arthritis",
        "Patients committed to post-op rehabilitation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced hip arthroscopy team",
        "Comprehensive FAI and labral assessment",
        "Precision bone reshaping and labral repair",
        "Rehab pathways for safe return to sport",
        "Focus on joint preservation and long-term hip health",
      ],
    },

    worldclasslistdata: [
      { title: "Hip Arthroscopy for FAI Expertise" },
      { title: "Labral Repair & Preservation" },
      { title: "Precise Cam/Pincer Correction" },
      { title: "Joint Preservation Focus" },
      { title: "Minimally Invasive Hip Surgery" },
      { title: "Rehab-Guided Recovery" },
      { title: "Return-to-Sport Planning" },
      { title: "Pain-Control Pathways" },
      { title: "Patient Education on Hip Care" },
      { title: "Long-Term Monitoring for Hip Health" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If hip impingement or labral pain is slowing you down, consult our hip arthroscopy specialists for a personalized plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Hip Arthroscopy (FAI)"),
  },
  {
    id: 35,
    title: "Arthroplasty & Joint Replacement Care at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/joint-replacement.jpg",
    link: "/arthroplasty",

    intro: {
      h1: "Arthroplasty & Joint Replacement Care at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Advanced Solutions for Severe Joint Pain & Degeneration",
      paragraphs: [
        "Arthroplasty replaces damaged joint surfaces with smooth, durable implants to relieve pain, restore movement, and improve quality of life.",
        "We offer comprehensive pre-op evaluation, precision surgical techniques, and structured rehabilitation for knee, hip, shoulder, and elbow replacements.",
      ],
    },

    whatIs: {
      heading: "What Is Arthroplasty?",
      description:
        "Surgical replacement of diseased joint surfaces with artificial components to restore function and reduce pain.",
      list: [
        "Total and partial knee replacement",
        "Robotic or computer-assisted knee replacement",
        "Hip replacement",
        "Shoulder and elbow replacement",
        "Revision arthroplasty when needed",
      ],
      note: "Recommended when pain and stiffness persist despite medications, therapy, or injections.",
    },

    indications: {
      heading: "When to Consider Arthroplasty",
      list: [
        "Severe arthritis pain limiting daily activity",
        "Joint deformity or instability",
        "Failed conservative treatments",
        "Sleep disturbance due to joint pain",
        "Loss of mobility affecting work or independence",
      ],
    },

    benefits: {
      heading: "Benefits of Joint Replacement",
      list: [
        "Significant pain relief",
        "Improved joint alignment and stability",
        "Better mobility and function",
        "Enhanced ability to walk, climb, and perform tasks",
        "Long-term durability with modern implants",
        "Robotic guidance for precise placement when indicated",
      ],
    },

    procedure: {
      heading: "How We Perform Arthroplasty",
      description:
        "A structured, patient-focused pathway ensures safety, precision, and smooth recovery.",
      details: [
        {
          label: "Evaluation",
          value: "Clinical exam, imaging, and medical optimization",
        },
        {
          label: "Planning",
          value: "Implant selection and, when appropriate, robotic assistance",
        },
        {
          label: "Surgery",
          value: "Precise joint resurfacing and implant placement",
        },
        {
          label: "Pain Management",
          value: "Regional anesthesia and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Early mobilization and physiotherapy milestones",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Begin guided walking and exercises early",
        "Follow weight-bearing or movement precautions",
        "Do home exercises to maintain strength and motion",
        "Use assistive devices until advised otherwise",
        "Monitor wound healing and report concerns",
        "Attend follow-ups for progress and implant checks",
      ],
      note: "Adhering to the rehab plan maximizes strength, balance, and implant longevity.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with advanced joint arthritis",
        "Individuals whose pain limits daily life",
        "People needing precise or robotic-guided alignment",
        "Those seeking durable pain relief and mobility",
        "Patients ready to participate in rehabilitation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroplasty and joint replacement surgeons",
        "Robotic/computer-assisted options where suitable",
        "Personalized implant and rehab planning",
        "Focus on safety, alignment, and long-term results",
        "Clear education on recovery expectations",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Arthroplasty Program" },
      { title: "Knee, Hip, Shoulder & Elbow Replacement" },
      { title: "Robotic/Computer-Assisted Knee Options" },
      { title: "Precision Implant Positioning" },
      { title: "Pain-Control & Early Mobilization Protocols" },
      { title: "Personalized Rehabilitation Plans" },
      { title: "Revision Arthroplasty Expertise" },
      { title: "Patient Education & Support" },
      { title: "Focus on Alignment & Longevity" },
      { title: "Regular Follow-Up & Outcome Tracking" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If arthritis pain limits your day, meet our arthroplasty team to explore joint replacement options tailored to you.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Arthroplasty Surgeries"),
  },
  {
    id: 40,
    title: "Elbow Replacement at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/elbow-replacement.jpg",
    link: "/elbow-replacement",

    intro: {
      h1: "Elbow Replacement at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Relief for Severe Elbow Arthritis & Complex Fractures",
      paragraphs: [
        "Elbow replacement replaces damaged joint surfaces with implants to restore motion and relieve pain caused by arthritis, complex fractures, or failed previous surgeries.",
        "Our surgeons focus on stability, alignment, and nerve protection, followed by careful rehabilitation to regain comfortable arm function.",
      ],
    },

    whatIs: {
      heading: "What Is Elbow Replacement?",
      description:
        "A procedure to resurface the humerus and ulna joint surfaces with linked or unlinked implants for smoother elbow motion.",
      list: [
        "Removal of damaged joint surfaces",
        "Placement of prosthetic components",
        "Balancing of soft tissues for stability",
        "Rehabilitation to restore movement and strength",
      ],
      note: "Often considered for end-stage arthritis, complex fractures, or non-functional elbows after prior surgery.",
    },

    indications: {
      heading: "When to Consider Elbow Replacement",
      list: [
        "Severe elbow pain and stiffness",
        "Failed fixation of complex elbow fractures",
        "Rheumatoid or post-traumatic arthritis",
        "Instability or deformity affecting use of the arm",
        "Failed conservative treatments",
      ],
    },

    benefits: {
      heading: "Benefits of Elbow Replacement",
      list: [
        "Pain reduction and improved comfort",
        "Better range for daily activities",
        "Restored ability to reach, lift light objects, and groom",
        "Stability with modern implant designs",
        "Rehabilitation guidance for safe use",
        "Enhanced quality of life and independence",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "Surgery is tailored to bone quality and soft tissue balance to provide stability and motion.",
      details: [
        { label: "Assessment", value: "Imaging and nerve evaluation" },
        {
          label: "Planning",
          value: "Choosing implant type and sizing",
        },
        {
          label: "Surgery",
          value: "Preparation of bone ends and implant fixation",
        },
        {
          label: "Pain Control",
          value: "Regional block and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Protected motion then strengthening under guidance",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Protect the elbow from heavy lifting initially",
        "Perform gentle range exercises as guided",
        "Avoid pushing up from chairs until advised",
        "Follow strengthening milestones with a therapist",
        "Monitor wound and nerve symptoms",
        "Regular follow-ups to ensure stability and motion",
      ],
      note: "Following precautions preserves the implant and supports long-term elbow use.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with end-stage elbow arthritis",
        "Individuals with non-reconstructable fractures",
        "People with failed prior elbow surgeries",
        "Those needing predictable pain relief and motion",
        "Patients ready to follow rehab and precautions",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experience with complex elbow arthroplasty",
        "Focus on nerve protection and stability",
        "Personalized implant and rehab plans",
        "Comprehensive pain and recovery protocols",
        "Long-term follow-up to safeguard results",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Elbow Arthroplasty Expertise" },
      { title: "Pain Relief & Motion Restoration" },
      { title: "Soft Tissue Balancing for Stability" },
      { title: "Nerve Protection Strategies" },
      { title: "Rehab-Guided Recovery" },
      { title: "Return-to-Function Planning" },
      { title: "Patient Education on Precautions" },
      { title: "Regular Implant Monitoring" },
      { title: "Complex Fracture Reconstruction Options" },
      { title: "Evidence-Based Outcome Tracking" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If elbow pain or stiffness is limiting you, consult our team about elbow replacement options.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Elbow Replacement"),
  },
  {
    id: 41,
    title: "Pediatric Deformity Correction at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/pediatrics-orthopaedics.avif",
    link: "/pediatric-deformity-surgeries",

    intro: {
      h1: "Pediatric Deformity Correction at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Gentle, Growth-Friendly Solutions for Children",
      paragraphs: [
        "Children with limb length differences, angular deformities, or spine and foot alignment issues need timely, precise care that respects growth plates and long-term development.",
        "Our pediatric orthopaedic team uses careful evaluation, bracing, guided growth techniques, and corrective surgery when needed to restore alignment, function, and confidence.",
      ],
    },

    whatIs: {
      heading: "What Is Pediatric Deformity Correction?",
      description:
        "A tailored approach to correct limb or spine deformities in children using growth modulation, osteotomies, or external/internal fixation.",
      list: [
        "Angular corrections for bow legs or knock knees",
        "Limb length discrepancy management",
        "Foot deformity correction",
        "Guided growth techniques when appropriate",
      ],
      note: "Early intervention often means simpler procedures and better long-term outcomes.",
    },

    indications: {
      heading: "When to Seek Care",
      list: [
        "Visible limb deformity or length difference",
        "Frequent tripping or abnormal gait",
        "Progressive curvature despite observation",
        "Pain or functional limits due to deformity",
        "Concerns about growth plate or alignment",
      ],
    },

    benefits: {
      heading: "Benefits of Early Correction",
      list: [
        "Improved alignment and gait",
        "Reduced pain and fatigue with activity",
        "Better joint loading and long-term health",
        "Enhanced confidence and participation",
        "Growth-friendly techniques when possible",
        "Comprehensive rehab and family guidance",
      ],
    },

    procedure: {
      heading: "How We Correct Pediatric Deformities",
      description:
        "Treatment is individualized based on age, growth remaining, and type of deformity.",
      details: [
        {
          label: "Assessment",
          value: "Clinical exam, gait analysis, and imaging",
        },
        {
          label: "Non-Surgical Options",
          value: "Bracing, orthotics, and guided growth when suitable",
        },
        {
          label: "Surgical Correction",
          value: "Osteotomy, fixation, or lengthening techniques as needed",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy focused on strength, balance, and gait",
        },
        {
          label: "Follow-Up",
          value: "Regular growth monitoring and alignment checks",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Growth Monitoring",
      list: [
        "Adhere to weight-bearing and brace instructions",
        "Attend physiotherapy for safe movement and strength",
        "Maintain wound and pin-site care if applicable",
        "Encourage safe play and activity within limits",
        "Monitor for pain, swelling, or hardware issues",
        "Regular reviews to track growth and alignment",
      ],
      note: "Close follow-up ensures corrections hold as your child grows.",
    },

    suitability: {
      heading: "Who Is This For?",
      list: [
        "Children with angular limb deformities",
        "Kids with limb length differences",
        "Pediatric foot or ankle deformities",
        "Spine or hip alignment concerns in growing children",
        "Families seeking growth-sensitive correction plans",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Dedicated pediatric orthopaedic expertise",
        "Growth-friendly correction strategies",
        "Compassionate family-centered care",
        "Structured rehab and gait training",
        "Long-term monitoring through growth",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Pediatric Deformity Care" },
      { title: "Guided Growth & Osteotomy Expertise" },
      { title: "Limb Length & Alignment Solutions" },
      { title: "Child-Friendly Evaluation & Rehab" },
      { title: "Gait Analysis & Correction" },
      { title: "Parental Counseling & Education" },
      { title: "Long-Term Growth Monitoring" },
      { title: "Pain-Control & Recovery Support" },
      { title: "Functional & Cosmetic Improvement" },
      { title: "Collaborative, Ethical Care" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If your child has a limb or spine deformity, consult our pediatric orthopaedic specialists for a gentle, growth-focused plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Pediatric Deformity Surgeries"),
  },
  {
    id: 39,
    title: "Shoulder Replacement (Total / Reverse) at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/shoulder-replacement.jpg",
    link: "/shoulder-replacement",

    intro: {
      h1: "Shoulder Replacement (Total / Reverse) at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Pain Relief & Motion Restoration for Arthritic or Cuff-Deficient Shoulders",
      paragraphs: [
        "Shoulder replacement replaces damaged joint surfaces to relieve pain from arthritis or complex cuff tears. Reverse designs are used when the rotator cuff is irreparable, allowing the deltoid to power the shoulder.",
        "We tailor implant choice, whether anatomic or reverse, to your anatomy and goals, focusing on stability, range, and comfortable function.",
      ],
    },

    whatIs: {
      heading: "What Is Shoulder Replacement?",
      description:
        "A procedure to resurface the humeral head and glenoid socket with implants, using anatomic or reverse designs based on cuff status.",
      list: [
        "Anatomic total shoulder for intact rotator cuff",
        "Reverse shoulder for massive cuff tears",
        "Pain relief and improved elevation",
        "Rehab to rebuild motion and strength",
      ],
      note: "Design choice depends on rotator cuff health, bone quality, and functional goals.",
    },

    indications: {
      heading: "When to Consider Shoulder Replacement",
      list: [
        "Severe shoulder arthritis pain",
        "Massive, irreparable rotator cuff tear with arthritis",
        "Loss of motion or strength affecting daily tasks",
        "Failed conservative treatments",
        "Night pain or sleep disturbance from the shoulder",
      ],
    },

    benefits: {
      heading: "Benefits of Shoulder Replacement",
      list: [
        "Significant pain reduction",
        "Improved ability to lift and reach",
        "Better sleep and daily comfort",
        "Enhanced stability with reverse design when needed",
        "Durable implants with careful positioning",
        "Rehab-driven restoration of function",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "Implant type and positioning are selected based on cuff integrity and bone quality to maximize function.",
      details: [
        {
          label: "Assessment",
          value: "Clinical exam and imaging of bone and cuff",
        },
        {
          label: "Planning",
          value: "Choosing anatomic vs reverse and sizing components",
        },
        {
          label: "Surgery",
          value: "Implant placement with attention to stability and balance",
        },
        {
          label: "Pain Control",
          value: "Regional anesthesia and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Phased program from protected motion to strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Use sling as directed to protect the repair",
        "Begin gentle motion under therapist guidance",
        "Avoid heavy lifting early in recovery",
        "Follow strengthening milestones",
        "Perform home exercises consistently",
        "Attend follow-ups to monitor implant and progress",
      ],
      note: "Consistent rehab restores safe, confident shoulder function.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with severe shoulder arthritis",
        "Individuals with cuff tear arthropathy needing reverse design",
        "People limited in daily life by shoulder pain and stiffness",
        "Those motivated to follow rehab guidance",
        "Patients seeking long-lasting pain relief and function",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Expertise in anatomic and reverse shoulder arthroplasty",
        "Implant selection tailored to cuff status",
        "Structured rehab with clear milestones",
        "Pain management for comfortable recovery",
        "Close monitoring for long-term implant success",
      ],
    },

    worldclasslistdata: [
      { title: "Anatomic & Reverse Shoulder Replacement Expertise" },
      { title: "Pain Relief & Mobility Restoration" },
      { title: "Precision Implant Positioning" },
      { title: "Rehab-Focused Recovery Pathways" },
      { title: "Stability & Balance Optimization" },
      { title: "Return-to-Activity Guidance" },
      { title: "Patient Education on Shoulder Care" },
      { title: "Long-Term Implant Monitoring" },
      { title: "Experienced Arthroplasty Surgeons" },
      { title: "Evidence-Based Outcomes" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If shoulder pain or cuff damage is limiting you, consult our team about anatomic or reverse shoulder replacement.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Shoulder Replacement (Total / Reverse)"),
  },
  {
    id: 38,
    title: "Hip Replacement Surgery at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/hip-replacement",

    intro: {
      h1: "Hip Replacement Surgery at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Reliable Relief for Hip Arthritis & Avascular Necrosis",
      paragraphs: [
        "Hip replacement replaces damaged ball-and-socket surfaces with smooth implants to relieve pain, stiffness, and mobility limitations caused by arthritis or avascular necrosis.",
        "Our surgeons focus on accurate implant positioning, leg length balance, and muscle-sparing approaches to help you walk comfortably again.",
      ],
    },

    whatIs: {
      heading: "What Is Hip Replacement?",
      description:
        "A procedure to resurface the hip joint with metal and polyethylene components, restoring smooth motion between the femoral head and acetabulum.",
      list: [
        "Removal of damaged bone and cartilage",
        "Placement of acetabular cup and femoral stem",
        "Options for ceramic or metal bearings",
        "Rehabilitation to regain gait and strength",
      ],
      note: "Recommended when hip pain and stiffness persist despite medications, injections, or therapy.",
    },

    indications: {
      heading: "When to Consider Hip Replacement",
      list: [
        "Severe hip pain limiting walking or daily activities",
        "Loss of range or night pain affecting sleep",
        "Advanced arthritis or avascular necrosis on imaging",
        "Difficulty with stairs or putting on shoes",
        "Failed conservative treatments",
      ],
    },

    benefits: {
      heading: "Benefits of Hip Replacement",
      list: [
        "Major reduction in hip pain",
        "Improved walking, standing, and mobility",
        "Better hip range of motion",
        "Restored independence in daily tasks",
        "Durable implants designed for long-term use",
        "Balanced leg lengths and stable gait",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "A careful approach ensures safe anesthesia, accurate implant positioning, and early mobilization.",
      details: [
        {
          label: "Evaluation",
          value: "Clinical exam, imaging, and medical clearance",
        },
        {
          label: "Planning",
          value: "Implant selection and sizing for your anatomy",
        },
        {
          label: "Surgery",
          value: "Resurfacing the socket and femur with stable implants",
        },
        {
          label: "Pain Control",
          value: "Regional anesthesia and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Early walking training and strengthening exercises",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Begin walking with support soon after surgery",
        "Follow hip precautions if advised",
        "Perform daily exercises for strength and motion",
        "Use ice and elevation to manage swelling",
        "Monitor wound healing and signs of infection",
        "Attend follow-ups to review progress and x-rays",
      ],
      note: "Adhering to exercises and precautions supports a stable, long-lasting hip.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with end-stage hip arthritis",
        "Individuals with AVN causing collapse and pain",
        "People limited in daily life by hip stiffness and pain",
        "Those motivated to participate in rehab",
        "Patients seeking durable hip pain relief",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced hip replacement surgeons",
        "Focus on leg length and stability",
        "Personalized implant and approach selection",
        "Rehab-led recovery programs",
        "Transparent counseling on expectations",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Hip Replacement Techniques" },
      { title: "Leg Length & Stability Focus" },
      { title: "Muscle-Sparing Approaches When Suitable" },
      { title: "Pain-Control & Early Mobilization" },
      { title: "Rehabilitation Pathways for Better Gait" },
      { title: "Durable Implant Options" },
      { title: "Return-to-Activity Guidance" },
      { title: "Comprehensive Pre-Op Planning" },
      { title: "Regular Post-Op Monitoring" },
      { title: "Patient Education & Support" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If hip pain is affecting your daily life, consult our arthroplasty team to discuss hip replacement tailored to you.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Hip Replacement Surgery"),
  },
  {
    id: 39,
    title: "Robotic Hip Replacement at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/robotic-hip-replacement",

    intro: {
      h1: "Robotic Hip Replacement at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Precision-Guided Hip Arthroplasty for Better Alignment",
      paragraphs: [
        "Robotic hip replacement combines digital planning with intra-operative guidance to support accurate implant positioning, leg-length restoration, and stable hip biomechanics during total hip arthroplasty.",
        "At Brunda Advanced Orthopaedics & ENT Centre, our arthroplasty team uses technology-assisted planning when suitable to personalize surgery to your anatomy and support a smoother recovery with confident walking.",
      ],
    },

    whatIs: {
      heading: "What Is Robotic Hip Replacement?",
      description:
        "A technology-assisted total hip replacement in which robotic guidance helps the surgeon execute a pre-planned implant strategy with high precision.",
      list: [
        "3D planning of cup position and implant sizing",
        "Guided bone preparation during surgery",
        "Focus on leg length, offset, and hip stability",
        "Real-time surgeon-controlled feedback for accuracy",
      ],
      note: "The surgeon remains fully in control throughout the operation; robotic assistance enhances consistency and precision.",
    },

    indications: {
      heading: "When to Consider Robotic Hip Replacement",
      list: [
        "Advanced hip arthritis causing severe pain and stiffness",
        "Avascular necrosis with loss of joint function",
        "Hip deformity or anatomy needing detailed implant planning",
        "Difficulty walking, climbing stairs, or standing for long periods",
        "Failure of medications, injections, or physiotherapy",
      ],
    },

    benefits: {
      heading: "Benefits of Robotic Hip Replacement",
      list: [
        "Accurate cup placement and implant alignment",
        "Better restoration of hip biomechanics",
        "Improved attention to leg length and offset",
        "Personalized planning based on your anatomy",
        "Stable gait and balanced hip movement",
        "Potential support for long-term implant performance",
      ],
    },

    procedure: {
      heading: "How the Procedure Works",
      description:
        "Robotic planning supports each step of surgery, from implant selection to final positioning, while the surgeon guides all decisions.",
      details: [
        {
          label: "Evaluation",
          value: "Clinical exam, x-rays, and fitness assessment",
        },
        {
          label: "Planning",
          value: "Digital planning of implant size, position, and biomechanics",
        },
        {
          label: "Guidance",
          value: "Robotic assistance for precise preparation and placement",
        },
        {
          label: "Implantation",
          value: "Stable cup and stem placement with alignment checks",
        },
        {
          label: "Recovery",
          value: "Early walking, pain control, and supervised rehabilitation",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Begin walking with support as advised after surgery",
        "Perform physiotherapy for strength and range of motion",
        "Follow hip precautions and activity guidelines",
        "Use ice and elevation to reduce swelling",
        "Monitor wound healing and report any warning signs",
        "Attend follow-ups to review gait and implant position",
      ],
      note: "Technology-assisted precision still depends on disciplined rehabilitation for a strong long-term result.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with end-stage hip arthritis",
        "Individuals with AVN or advanced joint damage",
        "People needing accurate restoration of hip mechanics",
        "Patients with complex anatomy or deformity",
        "Those prepared to participate in structured rehab",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroplasty team for advanced hip replacement",
        "Technology-assisted planning focused on precision",
        "Attention to leg length, offset, and stability",
        "Early mobilization and rehab-led recovery",
        "Clear counseling on benefits, expectations, and care",
      ],
    },

    worldclasslistdata: [
      { title: "Robotic Hip Arthroplasty Expertise" },
      { title: "3D Personalized Surgical Planning" },
      { title: "Leg Length & Offset Restoration Focus" },
      { title: "Precision Cup & Stem Positioning" },
      { title: "Stable Gait Recovery Pathways" },
      { title: "Advanced Pain-Control Protocols" },
      { title: "Technology-Guided Surgical Accuracy" },
      { title: "Comprehensive Rehab Support" },
      { title: "Patient Education Before & After Surgery" },
      { title: "Long-Term Implant Monitoring" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If hip arthritis or AVN is limiting your mobility, consult our team to see whether robotic hip replacement is suitable for you.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Robotic Hip Replacement"),
  },
  {
    id: 40,
    title:
      "Computer-Assisted Hip Replacement at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/hip-replacement.jpg",
    link: "/computer-assisted-hip-replacement",

    intro: {
      h1: "Computer-Assisted Hip Replacement at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Navigation-Guided Hip Surgery for Accurate Implant Placement",
      paragraphs: [
        "Computer-assisted hip replacement uses digital navigation and intra-operative measurement tools to help the surgeon position the implant accurately and restore hip biomechanics more reliably.",
        "Our orthopaedic team uses navigation-guided planning when appropriate to improve alignment, check leg length, and support a stable, comfortable recovery after total hip replacement.",
      ],
    },

    whatIs: {
      heading: "What Is Computer-Assisted Hip Replacement?",
      description:
        "A hip replacement performed with digital navigation support to guide implant orientation and improve consistency during total hip arthroplasty.",
      list: [
        "Digital measurements during surgery",
        "Navigation support for cup inclination and version",
        "Checks for leg length and femoral offset",
        "Real-time data that supports implant positioning",
      ],
      note: "Computer assistance provides data-driven guidance, but surgical judgment and execution remain fully surgeon-led.",
    },

    indications: {
      heading: "When to Consider Computer-Assisted Hip Replacement",
      list: [
        "Severe arthritis causing pain and reduced walking tolerance",
        "Hip stiffness affecting sitting, stairs, or sleep",
        "Need for accurate implant orientation and leg-length checks",
        "Joint damage from AVN or previous injury",
        "Failure of non-surgical treatment methods",
      ],
    },

    benefits: {
      heading: "Benefits of Computer-Assisted Hip Replacement",
      list: [
        "Improved implant positioning accuracy",
        "Better attention to hip stability",
        "More consistent restoration of leg length",
        "Personalized intra-operative alignment checks",
        "Potential for smoother gait mechanics after surgery",
        "Technology-supported planning for predictable execution",
      ],
    },

    procedure: {
      heading: "How the Procedure Works",
      description:
        "Computer navigation assists the surgeon with measurements and alignment checks before the final implants are fixed.",
      details: [
        {
          label: "Assessment",
          value: "Clinical review, imaging, and medical optimization",
        },
        {
          label: "Navigation Setup",
          value: "Digital reference points are registered during surgery",
        },
        {
          label: "Guidance",
          value: "Computer data supports implant orientation and balance",
        },
        {
          label: "Implant Placement",
          value: "Cup and stem are placed with stability and biomechanical checks",
        },
        {
          label: "Rehabilitation",
          value: "Early walking, exercises, and progressive strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Start walking with support as recommended",
        "Follow home exercises and formal physiotherapy",
        "Protect the hip during early healing",
        "Watch for swelling, fever, or wound concerns",
        "Gradually increase activity under guidance",
        "Attend regular reviews to monitor progress",
      ],
      note: "A well-planned recovery program is essential to get the full benefit of precise implant placement.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with painful hip arthritis or AVN",
        "Individuals needing total hip replacement",
        "People who may benefit from navigation-guided accuracy",
        "Patients concerned about leg length and stability",
        "Those ready to commit to post-operative rehab",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced hip replacement surgeons",
        "Navigation-guided planning when clinically appropriate",
        "Focus on implant orientation and biomechanics",
        "Comprehensive pain management and rehab support",
        "Clear, patient-focused treatment planning",
      ],
    },

    worldclasslistdata: [
      { title: "Computer-Navigated Hip Replacement Care" },
      { title: "Accurate Cup Orientation & Version Checks" },
      { title: "Leg Length Restoration Planning" },
      { title: "Stable Hip Biomechanics Focus" },
      { title: "Data-Guided Implant Positioning" },
      { title: "Early Mobilization Protocols" },
      { title: "Personalized Rehab Pathways" },
      { title: "Structured Recovery Monitoring" },
      { title: "Comprehensive Pre-Op Counseling" },
      { title: "Long-Term Functional Outcome Support" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you are considering a more precisely planned hip replacement, speak with our specialists about computer-assisted hip replacement options.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Computer-Assisted Hip Replacement"),
  },
  {
    id: 37,
    title:
      "Robotic / Computer-Assisted Knee Replacement at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/robotic-knee-replacement.png",
    link: "/robotic-knee-replacement",

    intro: {
      h1: "Robotic / Computer-Assisted Knee Replacement",
      h2: "Precision Alignment for Long-Lasting Knee Implants",
      paragraphs: [
        "Robotic and computer-assisted systems help plan and guide bone cuts and implant placement with sub-millimeter accuracy, improving alignment and potentially implant longevity.",
        "We use these tools when appropriate to personalize the procedure to your anatomy, aiming for smoother movement, balanced ligaments, and a more natural-feeling knee.",
      ],
    },

    whatIs: {
      heading: "What Is Robotic Knee Replacement?",
      description:
        "Technology-assisted knee arthroplasty that uses 3D planning and intra-operative guidance for accurate implant positioning.",
      list: [
        "3D preoperative planning of bone cuts",
        "Computer-guided alignment and balancing",
        "Controlled bone resection with robotic assistance",
        "Real-time feedback to refine implant positioning",
      ],
      note: "The surgeon remains in control; technology enhances precision and consistency.",
    },

    indications: {
      heading: "When to Consider Robotic Assistance",
      list: [
        "Advanced knee arthritis needing replacement",
        "Desire for highly precise alignment and balance",
        "Complex deformity where guidance aids accuracy",
        "Patients seeking cutting-edge surgical planning",
        "Surgeon recommendation based on anatomy",
      ],
    },

    benefits: {
      heading: "Benefits of Robotic / Computer-Assisted Knee Replacement",
      list: [
        "Enhanced accuracy of implant positioning",
        "Better ligament balancing and alignment",
        "Potential for improved function and feel",
        "Consistent, reproducible surgical steps",
        "Detailed planning tailored to your knee",
        "Supports long-term implant performance",
      ],
    },

    procedure: {
      heading: "How the Procedure Works",
      description:
        "Technology supports each step while the surgical team maintains full control of decisions and safety.",
      details: [
        {
          label: "Planning",
          value: "3D modeling of your knee and implant sizing",
        },
        {
          label: "Guidance",
          value: "Computer/robot assistance for bone cuts and alignment",
        },
        {
          label: "Placement",
          value: "Accurate implant positioning and fixation",
        },
        {
          label: "Balancing",
          value: "Real-time assessment of soft tissue balance",
        },
        {
          label: "Recovery",
          value: "Same rehab pathway with early mobilization",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Begin walking with support as advised",
        "Perform physiotherapy for motion and strength",
        "Follow weight-bearing and safety instructions",
        "Use ice and elevation to manage swelling",
        "Monitor wound healing and report concerns",
        "Attend scheduled reviews and x-rays",
      ],
      note: "Robotic assistance complements surgery; rehab remains essential for success.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with knee arthritis needing replacement",
        "Individuals with complex alignment issues",
        "Those who value technology-assisted precision",
        "Patients ready to participate in rehabilitation",
        "People seeking personalized surgical planning",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced team using robotic/computer guidance",
        "Personalized planning based on your anatomy",
        "Focus on alignment, balance, and longevity",
        "Rehab-led recovery for optimal outcomes",
        "Clear communication about benefits and expectations",
      ],
    },

    worldclasslistdata: [
      { title: "Robotic/Computer-Assisted Knee Expertise" },
      { title: "3D Personalized Surgical Planning" },
      { title: "Precision Implant Alignment" },
      { title: "Improved Ligament Balancing" },
      { title: "Consistency & Reproducibility" },
      { title: "Return-to-Activity Pathways" },
      { title: "Pain-Control & Early Mobilization" },
      { title: "Long-Term Implant Performance Focus" },
      { title: "Comprehensive Patient Education" },
      { title: "Structured Follow-Up Protocols" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "Interested in robotic or computer-assisted knee replacement? Meet our specialists to see if it fits your needs.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices(
      "Robotic / Computer-Assisted Knee Replacement"
    ),
  },
  {
    id: 41,
    title:
      "Computer-Assisted Total Knee Replacement at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/Computer-Assisted-Total-Knee-Replacement.jpg",
    link: "/computer-assisted-total-knee-replacement",

    intro: {
      h1: "Computer-Assisted Total Knee Replacement",
      h2: "Navigation-Guided Precision for Full Knee Arthroplasty",
      paragraphs: [
        "Computer-assisted total knee replacement uses digital navigation to help the surgeon align implants accurately, verify bone cuts, and balance the knee during total knee arthroplasty.",
        "At Brunda Advanced Orthopaedics & ENT Centre, we use technology-guided planning when appropriate for patients who need complete knee resurfacing and want a carefully measured, precision-focused replacement.",
      ],
    },

    whatIs: {
      heading: "What Is Computer-Assisted Total Knee Replacement?",
      description:
        "A total knee replacement performed with computer navigation support to guide implant alignment, bone preparation, and soft-tissue balancing.",
      list: [
        "Real-time digital alignment measurements",
        "Guided bone cuts for total knee arthroplasty",
        "Soft-tissue balancing checks during surgery",
        "Verification of final implant position and knee mechanics",
      ],
      note: "This remains a surgeon-led procedure; the computer system provides data that improves precision and consistency.",
    },

    indications: {
      heading: "When to Consider Computer-Assisted Total Knee Replacement",
      list: [
        "Advanced tricompartmental knee arthritis",
        "Severe pain and stiffness affecting daily activities",
        "Deformity or alignment issues needing precise correction",
        "Failure of medications, injections, or physiotherapy",
        "Patients advised to undergo total rather than partial knee replacement",
      ],
    },

    benefits: {
      heading: "Benefits of Computer-Assisted Total Knee Replacement",
      list: [
        "More accurate implant alignment",
        "Better control of knee balancing during surgery",
        "Consistent, measured execution of the procedure",
        "Personalized correction based on your knee anatomy",
        "Potential support for smoother movement after recovery",
        "Technology-guided verification before final implant fixation",
      ],
    },

    procedure: {
      heading: "How the Procedure Works",
      description:
        "Computer navigation is integrated into surgery to provide alignment data at each important stage of total knee replacement.",
      details: [
        {
          label: "Assessment",
          value: "Clinical exam, x-rays, and operative planning for total knee replacement",
        },
        {
          label: "Navigation Setup",
          value: "Reference points are registered to track knee alignment in real time",
        },
        {
          label: "Bone Preparation",
          value: "Measured cuts are made using computer-guided data",
        },
        {
          label: "Implant Placement",
          value: "Components are positioned and checked for alignment and balance",
        },
        {
          label: "Rehabilitation",
          value: "Early mobilization, strengthening, and gait training",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Start walking with support as guided by the team",
        "Work on knee bending and strengthening every day",
        "Use ice and elevation to control swelling",
        "Take medications and follow safety instructions carefully",
        "Continue structured physiotherapy after discharge",
        "Attend follow-ups for recovery review and x-rays",
      ],
      note: "Precision surgery improves the plan, but strong rehab is what restores confidence and long-term function.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients needing full knee joint replacement",
        "Individuals with severe arthritis and deformity",
        "People seeking navigation-guided implant alignment",
        "Patients with persistent pain despite conservative care",
        "Those committed to structured post-operative rehab",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced team for advanced total knee replacement",
        "Computer-guided planning for accurate alignment",
        "Focus on soft-tissue balance and implant positioning",
        "Early mobilization and rehab-centered recovery",
        "Clear explanation of procedure, risks, and expectations",
      ],
    },

    worldclasslistdata: [
      { title: "Computer-Assisted Total Knee Expertise" },
      { title: "Real-Time Alignment Verification" },
      { title: "Precision Bone Cut Planning" },
      { title: "Measured Soft-Tissue Balancing" },
      { title: "Personalized Implant Positioning" },
      { title: "Structured Pain-Control Pathways" },
      { title: "Early Walking & Rehab Support" },
      { title: "Detailed Recovery Monitoring" },
      { title: "Patient Education for Better Outcomes" },
      { title: "Long-Term Functional Performance Focus" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If severe knee arthritis is affecting your life, meet our arthroplasty team to discuss whether computer-assisted total knee replacement is right for you.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Computer-Assisted Total Knee Replacement"),
  },
  {
    id: 36,
    title: "Knee Replacement (Total / Partial) at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/knee-replacement.avif",
    link: "/knee-replacement",

    intro: {
      h1: "Knee Replacement (Total / Partial) at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Precision Knee Arthroplasty for Pain-Free Movement",
      paragraphs: [
        "Advanced knee arthritis can cause severe pain, stiffness, and deformity. Total or partial knee replacement removes damaged surfaces and replaces them with smooth implants for lasting relief.",
        "Our team plans each case carefully, offering partial replacement when only one compartment is affected or total replacement when needed, with a strong focus on alignment, pain control, and rehab.",
      ],
    },

    whatIs: {
      heading: "What Is Knee Replacement?",
      description:
        "Surgical resurfacing of the knee joint with metal and polyethylene components to restore smooth movement and reduce pain.",
      list: [
        "Total knee replacement for tricompartmental arthritis",
        "Partial (unicompartmental) replacement for isolated damage",
        "Precision bone cuts and implant alignment",
        "Pain management and early mobilization protocols",
      ],
      note: "Choice of total vs partial depends on arthritis extent, stability, and alignment.",
    },

    indications: {
      heading: "When to Consider Knee Replacement",
      list: [
        "Severe knee pain limiting walking or climbing",
        "Stiffness or deformity affecting daily tasks",
        "Failed medications, injections, or physiotherapy",
        "Night pain or rest pain in the knee",
        "Desire for durable, long-term pain relief",
      ],
    },

    benefits: {
      heading: "Benefits of Knee Replacement",
      list: [
        "Significant and lasting pain relief",
        "Improved alignment and stability",
        "Better walking distance and stair climbing",
        "Faster recovery with modern techniques",
        "Potential for partial replacement when suitable",
        "Enhanced quality of life and activity levels",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "A structured pathway ensures safe anesthesia, accurate implant placement, and early rehabilitation.",
      details: [
        {
          label: "Evaluation",
          value: "Clinical exam, imaging, and medical fitness review",
        },
        {
          label: "Planning",
          value: "Deciding total vs partial and sizing implants",
        },
        {
          label: "Surgery",
          value: "Precise bone preparation and implant positioning",
        },
        {
          label: "Pain Control",
          value: "Regional blocks and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Early walking and strengthening under guidance",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Start walking with support as advised",
        "Perform daily range and strengthening exercises",
        "Follow weight-bearing or movement precautions",
        "Use ice and elevation to reduce swelling",
        "Monitor wound healing and report concerns",
        "Attend follow-ups for progress and x-rays",
      ],
      note: "Consistent rehab and home exercises lead to a stronger, more reliable knee.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with advanced knee arthritis",
        "Individuals limited in daily activities by pain",
        "People with deformity or instability from arthritis",
        "Those ready to engage in rehabilitation",
        "Patients seeking long-term knee relief",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced knee replacement surgeons",
        "Partial and total options based on need",
        "Alignment-focused surgical planning",
        "Rehab-driven recovery protocols",
        "Transparent education on outcomes and care",
      ],
    },

    worldclasslistdata: [
      { title: "Total & Partial Knee Replacement Expertise" },
      { title: "Alignment-Driven Surgical Techniques" },
      { title: "Pain-Control & Early Mobilization" },
      { title: "Patient-Specific Implant Planning" },
      { title: "Rehabilitation Pathways for Faster Recovery" },
      { title: "Return-to-Activity Guidance" },
      { title: "Focus on Long-Term Implant Longevity" },
      { title: "Comprehensive Pre-Op Education" },
      { title: "Regular Post-Op Monitoring" },
      { title: "Evidence-Based Knee Care" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If knee pain is limiting your life, consult our arthroplasty team about total or partial knee replacement options.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Knee Replacement (Total / Partial)"),
  },
  {
    id: 33,
    title: "Shoulder Instability Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/shoulder-instability-treatment.jpg",
    link: "/shoulder-instability-treatment",

    intro: {
      h1: "Shoulder Instability Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Reliable Solutions for Loose or Recurrent Dislocating Shoulders",
      paragraphs: [
        "Shoulder instability can stem from labral tears, capsule laxity, or ligament injuries, causing repeated slipping, apprehension, and limited confidence in movement.",
        "We provide comprehensive evaluation, physiotherapy-led stabilization programs, and arthroscopic surgical options to restore stability and prevent further damage.",
      ],
    },

    whatIs: {
      heading: "What Is Shoulder Instability?",
      description:
        "A condition where the head of the humerus moves excessively or dislocates from the socket due to labral, capsular, or ligament laxity.",
      list: [
        "Recurrent dislocations or subluxations",
        "Apprehension with certain arm positions",
        "Labral or capsular injury",
        "Muscle imbalance contributing to looseness",
      ],
      note: "Accurate diagnosis guides whether rehab alone or surgery is needed.",
    },

    indications: {
      heading: "When to Seek Treatment",
      list: [
        "Repeated shoulder dislocations",
        "Fear or apprehension when raising the arm",
        "Pain or clicking with overhead activity",
        "Instability affecting sports or work",
        "Failure of physiotherapy alone to control symptoms",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Care",
      list: [
        "Improved shoulder stability and confidence",
        "Reduced risk of further dislocations",
        "Better performance in sport and work tasks",
        "Protection of cartilage and rotator cuff",
        "Clear rehab guidance tailored to your goals",
        "Minimally invasive options when surgery is needed",
      ],
    },

    procedure: {
      heading: "How We Treat Instability",
      description:
        "Care plans start with targeted rehabilitation and progress to arthroscopic stabilization if required.",
      details: [
        {
          label: "Assessment",
          value: "Clinical tests, MRI, and stability grading",
        },
        {
          label: "Rehabilitation",
          value: "Scapular control, rotator cuff strengthening, proprioception",
        },
        {
          label: "Surgical Options",
          value: "Bankart repair, capsular shift, or remplissage if indicated",
        },
        {
          label: "Pain Control",
          value: "Regional blocks and multimodal analgesia",
        },
        {
          label: "Return to Activity",
          value: "Milestone-based progression with therapist guidance",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Rehabilitation",
      list: [
        "Wear sling as recommended to protect repair",
        "Begin passive then active motion under guidance",
        "Avoid at-risk positions early in rehab",
        "Progress to strengthening at set milestones",
        "Follow home exercises regularly",
        "Attend follow-ups to ensure stable progress",
      ],
      note: "Steady, supervised rehab restores stability and reduces recurrence.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with recurrent shoulder dislocations",
        "Athletes needing reliable shoulder control",
        "Individuals with labral tears causing instability",
        "Those not improving with rehab alone",
        "Patients willing to follow a structured program",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Comprehensive instability evaluation",
        "Rehab-first approach with surgical backup",
        "Experienced arthroscopic shoulder surgeons",
        "Return-to-sport pathways with clear milestones",
        "Ongoing support to prevent recurrence",
      ],
    },

    worldclasslistdata: [
      { title: "Complete Shoulder Instability Workup" },
      { title: "Rehab-First Stabilization Programs" },
      { title: "Arthroscopic Bankart & Capsular Procedures" },
      { title: "Return-to-Play Focus" },
      { title: "Strength & Proprioception Training" },
      { title: "Re-Dislocation Prevention Strategies" },
      { title: "Pain-Control Protocols" },
      { title: "Patient Education & Home Programs" },
      { title: "Objective Stability Assessments" },
      { title: "Long-Term Follow-Up Care" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If your shoulder feels unstable or keeps slipping, meet our specialists for a tailored stability plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Shoulder Instability Treatment"),
  },
  {
    id: 32,
    title: "Bankart Repair at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/bankart-repair.avif",
    link: "/bankart-repair",

    intro: {
      h1: "Bankart Repair at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Stabilizing the Shoulder After Recurrent Dislocations",
      paragraphs: [
        "A Bankart lesion is a tear of the labrum at the front of the shoulder socket, commonly caused by repeated dislocations. Repairing it restores stability and reduces the risk of further dislocations.",
        "Our arthroscopic Bankart repairs reattach the labrum, tighten the capsule, and pair with rehab so you regain reliable shoulder control.",
      ],
    },

    whatIs: {
      heading: "What Is Bankart Repair?",
      description:
        "Arthroscopic fixation of the torn anterior labrum and capsule to stabilize the shoulder joint.",
      list: [
        "Reattachment of the torn labrum to the glenoid rim",
        "Capsular tightening if needed",
        "Suture anchors for secure fixation",
        "Rehabilitation to restore strength and control",
      ],
      note: "Repair addresses the structural cause of recurrent dislocations.",
    },

    indications: {
      heading: "When Is Bankart Repair Needed?",
      list: [
        "Recurrent anterior shoulder dislocations",
        "Feeling of the shoulder slipping out",
        "Positive apprehension test on exam",
        "Labral tear confirmed on MRI",
        "Desire to return safely to overhead or contact sports",
      ],
    },

    benefits: {
      heading: "Benefits of Bankart Repair",
      list: [
        "Reduced risk of future dislocations",
        "Improved stability and confidence",
        "Restored shoulder mechanics for sport",
        "Minimally invasive arthroscopic approach",
        "Structured rehab for safe return to activity",
        "Protects cartilage from recurrent injury",
      ],
    },

    procedure: {
      heading: "How the Repair Is Done",
      description:
        "Arthroscopic anchors and sutures secure the labrum and capsule to the glenoid.",
      details: [
        { label: "Assessment", value: "Clinical testing and MRI confirmation" },
        {
          label: "Labral Repair",
          value: "Suture anchor fixation of the detached labrum",
        },
        {
          label: "Capsular Shift",
          value: "Tightening lax capsule if indicated",
        },
        {
          label: "Pain Control",
          value: "Regional block and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Progressive motion then strengthening and proprioception",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery Plan",
      list: [
        "Use sling for protection during early healing",
        "Start guided passive motion as advised",
        "Avoid overhead or contact activity until cleared",
        "Perform strengthening under therapist supervision",
        "Monitor for stiffness or instability sensations",
        "Attend follow-ups to track stability and progress",
      ],
      note: "Adhering to rehab timelines helps prevent recurrence.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with recurrent anterior shoulder instability",
        "Athletes in contact or overhead sports",
        "Individuals with labral tear confirmed on imaging",
        "People seeking a durable stability solution",
        "Patients committed to post-op rehabilitation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroscopic shoulder stabilization team",
        "Precise labral repair and capsular tightening",
        "Return-to-sport focused rehab plans",
        "Pain management for comfortable recovery",
        "Close monitoring to prevent redislocation",
      ],
    },

    worldclasslistdata: [
      { title: "Arthroscopic Bankart Repair Expertise" },
      { title: "Labral & Capsular Stabilization" },
      { title: "Minimally Invasive Shoulder Surgery" },
      { title: "Return-to-Play Protocols" },
      { title: "Strength & Proprioception Rehabilitation" },
      { title: "Re-Dislocation Prevention Focus" },
      { title: "Pain-Control Pathways" },
      { title: "Objective Stability Assessments" },
      { title: "Patient Education for Shoulder Care" },
      { title: "Long-Term Follow-Up Support" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If your shoulder keeps dislocating, consult us for arthroscopic Bankart repair and a structured rehab plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Bankart Repair"),
  },
  {
    id: 31,
    title: "Rotator Cuff Repair at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/rotator-cuff-repair.avif",
    link: "/rotator-cuff-repair",

    intro: {
      h1: "Rotator Cuff Repair at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Shoulder Strength & Stability Restoration",
      paragraphs: [
        "Rotator cuff tears cause shoulder pain, weakness, and difficulty lifting or reaching. Repairing the torn tendon restores shoulder function and prevents progressive weakness.",
        "We offer arthroscopic and mini-open repairs based on tear pattern, tissue quality, and activity goals, paired with focused rehabilitation to regain range and strength.",
      ],
    },

    whatIs: {
      heading: "What Is Rotator Cuff Repair?",
      description:
        "A surgical procedure to reattach torn rotator cuff tendons to the bone, restoring stability and power to the shoulder.",
      list: [
        "Arthroscopic visualization of the tear",
        "Suture anchors to secure tendon to bone",
        "Debridement of frayed tissue if needed",
        "Rehabilitation to rebuild motion and strength",
      ],
      note: "Timely repair prevents tendon retraction and muscle wasting.",
    },

    indications: {
      heading: "When Is Surgery Recommended?",
      list: [
        "Persistent pain and weakness despite therapy",
        "Large or full-thickness tears",
        "Loss of active overhead motion",
        "Acute traumatic tears in active patients",
        "Night pain and sleep disturbance from the shoulder",
      ],
    },

    benefits: {
      heading: "Benefits of Rotator Cuff Repair",
      list: [
        "Improved shoulder strength and control",
        "Reduced pain and better sleep",
        "Restored ability to lift and reach",
        "Lower risk of further tendon retraction",
        "Better shoulder longevity with rehab",
        "Minimally invasive approaches for many tears",
      ],
    },

    procedure: {
      heading: "How the Repair Is Done",
      description:
        "Choice of arthroscopic or mini-open technique based on tear size and tissue quality.",
      details: [
        { label: "Assessment", value: "MRI and clinical testing to map tear" },
        {
          label: "Preparation",
          value: "Cleaning frayed tissue and preparing bone footprint",
        },
        {
          label: "Repair",
          value: "Suture anchor fixation of tendon to bone",
        },
        {
          label: "Pain Control",
          value: "Regional blocks and multimodal analgesia",
        },
        {
          label: "Rehabilitation",
          value: "Phased program from passive motion to strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery Plan",
      list: [
        "Wear sling as advised to protect the repair",
        "Begin guided physiotherapy on schedule",
        "Avoid lifting or overhead activity early",
        "Perform home exercises regularly",
        "Monitor for stiffness and report concerns",
        "Attend follow-ups to track healing and progress",
      ],
      note: "Steady, guided rehab is key to a strong, pain-free shoulder.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with symptomatic cuff tears",
        "Active individuals needing strength restoration",
        "Those with traumatic tears needing timely repair",
        "People who tried therapy without relief",
        "Patients committed to rehabilitation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Arthroscopic and mini-open repair expertise",
        "Customized rehab focused on function",
        "Pain control protocols for comfortable recovery",
        "Return-to-work and sport guidance",
        "Close follow-up to protect the repair",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced Rotator Cuff Repair Techniques" },
      { title: "Minimally Invasive Arthroscopy" },
      { title: "Suture Anchor Fixation" },
      { title: "Rehab-Driven Recovery" },
      { title: "Pain Management Protocols" },
      { title: "Return-to-Activity Planning" },
      { title: "Strength & Mobility Restoration" },
      { title: "Patient Education on Shoulder Care" },
      { title: "Monitoring for Re-Tear Prevention" },
      { title: "Evidence-Based Outcomes" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If shoulder pain or weakness is limiting you, consult our team for an evaluation and rotator cuff repair plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Rotator Cuff Repair"),
  },
  {
    id: 30,
    title: "Meniscus Transplant at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/meniscus-transplant.jpg",
    link: "/meniscus-transplant",

    intro: {
      h1: "Meniscus Transplant at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Restoring Cushioning in Meniscus-Deficient Knees",
      paragraphs: [
        "Meniscus transplantation replaces a missing or non-functional meniscus with a donor graft to restore shock absorption, reduce pain, and slow arthritis progression in carefully selected patients.",
        "Our team evaluates alignment, stability, and cartilage status to plan transplants that protect knee health and improve function.",
      ],
    },

    whatIs: {
      heading: "What Is a Meniscus Transplant?",
      description:
        "Surgical placement of a donor meniscus graft to replace lost meniscus tissue and restore its load-distributing role.",
      list: [
        "Sizing the graft to match your knee",
        "Precise placement and fixation of the new meniscus",
        "Often combined with alignment or ligament procedures if needed",
        "Structured rehab to protect the graft",
      ],
      note: "Ideal for younger, active patients with meniscus deficiency and minimal arthritis.",
    },

    indications: {
      heading: "When to Consider Meniscus Transplant",
      list: [
        "Previous meniscectomy with persistent pain",
        "Meniscus deficiency causing activity limitation",
        "Stable or correctable knee alignment",
        "Minimal advanced cartilage damage",
        "Motivation for rehab and long-term joint care",
      ],
    },

    benefits: {
      heading: "Benefits of Meniscus Transplant",
      list: [
        "Restored shock absorption and load sharing",
        "Reduced knee pain and swelling",
        "Lower risk of rapid arthritis progression",
        "Improved function for daily life and sport",
        "Can be combined with cartilage or alignment procedures",
        "Minimally invasive arthroscopic-assisted technique",
      ],
    },

    procedure: {
      heading: "How the Transplant Is Performed",
      description:
        "Careful planning ensures graft size, alignment, and stability for long-term success.",
      details: [
        {
          label: "Evaluation",
          value: "Imaging, alignment, and stability assessment",
        },
        {
          label: "Graft Sizing",
          value: "Matching donor meniscus to your knee dimensions",
        },
        {
          label: "Surgery",
          value: "Arthroscopic-assisted placement and fixation of the graft",
        },
        {
          label: "Adjunct Procedures",
          value: "Alignment correction or ligament work if indicated",
        },
        {
          label: "Rehabilitation",
          value: "Protected weight-bearing then gradual strengthening",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Protection",
      list: [
        "Follow brace and weight-bearing instructions",
        "Avoid deep squats and pivoting early",
        "Adhere to physiotherapy milestones",
        "Focus on strength and balance under guidance",
        "Report swelling or catching promptly",
        "Regular reviews to track graft integration",
      ],
      note: "A disciplined rehab plan protects the graft and supports long-term success.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Meniscus-deficient knees with persistent pain",
        "Younger or active patients with minimal arthritis",
        "Stable knees or those corrected for alignment",
        "Patients committed to rehab and follow-up",
        "Individuals wanting to delay or avoid joint replacement",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Comprehensive meniscus preservation and transplant expertise",
        "Detailed pre-op planning for size and alignment",
        "Experience combining ligament and cartilage procedures",
        "Rehab-led recovery with close monitoring",
        "Focus on long-term knee preservation",
      ],
    },

    worldclasslistdata: [
      { title: "Expert Meniscus Transplant Planning" },
      { title: "Precise Graft Sizing & Placement" },
      { title: "Arthroscopic-Assisted Fixation" },
      { title: "Alignment & Stability Optimization" },
      { title: "Rehab Pathways Tailored to Graft Protection" },
      { title: "Cartilage Preservation Focus" },
      { title: "Return-to-Activity Guidance" },
      { title: "Comprehensive Follow-Up Protocols" },
      { title: "Patient Education on Joint Preservation" },
      { title: "Long-Term Monitoring for Knee Health" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you have persistent pain after meniscus removal, ask about meniscus transplant options to protect your knee.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Meniscus Transplant"),
  },
  {
    id: 29,
    title: "Meniscal Root Repair / Reconstruction at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/meniscal-root-repair.jpg",
    link: "/meniscal-root-repair",

    intro: {
      h1: "Meniscal Root Repair / Reconstruction",
      h2: "Restoring Meniscus Anchorage for Knee Longevity",
      paragraphs: [
        "Meniscal root tears detach the meniscus from its anchor point, acting like a total meniscus loss and accelerating arthritis if untreated. Repair re-establishes the hoop stress function that protects knee cartilage.",
        "We perform arthroscopic root repairs and reconstructions with strong fixation and rehab protocols that safeguard healing and restore knee biomechanics.",
      ],
    },

    whatIs: {
      heading: "What Is Meniscal Root Repair?",
      description:
        "An arthroscopic procedure to reattach the meniscus root to bone, restoring its ability to distribute load across the knee.",
      list: [
        "Identification of root tear pattern",
        "Tibial tunnel or suture anchor fixation",
        "Anatomic reattachment of the root",
        "Rehab to protect repair while healing",
      ],
      note: "Timely repair prevents rapid cartilage wear and early arthritis.",
    },

    indications: {
      heading: "When Is Root Repair Recommended?",
      list: [
        "Acute root tears with pain and swelling",
        "Posterior horn/root tears seen on MRI",
        "Early cartilage damage risk in active adults",
        "Symptomatic degenerative root tears in suitable patients",
        "Desire to preserve joint health and function",
      ],
    },

    benefits: {
      heading: "Benefits of Root Repair",
      list: [
        "Restores meniscus load-sharing function",
        "Reduces risk of rapid arthritis progression",
        "Improves pain and stability",
        "Supports active lifestyle with protected rehab",
        "Minimally invasive with small incisions",
        "Long-term protection of knee cartilage",
      ],
    },

    procedure: {
      heading: "How We Perform Root Repair",
      description:
        "Technique selected based on tear type and bone quality to ensure stable fixation.",
      details: [
        {
          label: "Evaluation",
          value: "MRI assessment and arthroscopic confirmation",
        },
        {
          label: "Fixation",
          value: "Suture anchor or transtibial tunnel repair",
        },
        {
          label: "Biologic Support",
          value: "Augmentation if needed to aid healing",
        },
        {
          label: "Rehabilitation",
          value: "Protected weight-bearing, then progressive motion",
        },
        {
          label: "Follow-Up",
          value: "Regular checks to confirm healing and alignment",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Protection",
      list: [
        "Follow weight-bearing limits and brace use",
        "Avoid deep squats and pivoting early",
        "Adhere to physiotherapy milestones",
        "Strengthen surrounding muscles gradually",
        "Monitor swelling and report concerns early",
        "Keep review visits for progress tracking",
      ],
      note: "Protecting the repair in early weeks is critical for durable healing.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with acute or repairable root tears",
        "Active individuals seeking joint preservation",
        "Those with minimal advanced arthritis",
        "Patients able to follow structured rehab",
        "People wanting to prevent rapid cartilage loss",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Expertise in meniscal root repair techniques",
        "Anatomic fixation for optimal load distribution",
        "Rehab-driven recovery pathways",
        "Close monitoring to protect the repair",
        "Patient education for long-term knee care",
      ],
    },

    worldclasslistdata: [
      { title: "Meniscal Root Repair & Reconstruction" },
      { title: "Anatomic Fixation Techniques" },
      { title: "Cartilage Preservation Focus" },
      { title: "Minimally Invasive Arthroscopy" },
      { title: "Structured Rehab & Protection" },
      { title: "Objective Healing Assessments" },
      { title: "Return-to-Activity Roadmaps" },
      { title: "Revision Expertise if Needed" },
      { title: "Patient-Centered Education" },
      { title: "Long-Term Knee Health Monitoring" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you have a meniscal root tear, consult our team for repair options that preserve knee cushioning and function.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Meniscal Root Repair / Reconstruction"),
  },
  {
    id: 28,
    title: "Meniscus Repair at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/meniscus-repair.jpg",
    link: "/meniscus-repair",

    intro: {
      h1: "Meniscus Repair at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Preserving Knee Cushioning & Function",
      paragraphs: [
        "Meniscus tears can cause pain, swelling, locking, and reduced shock absorption in the knee. Whenever possible, repairing the meniscus preserves knee longevity and reduces arthritis risk.",
        "Our arthroscopic meniscus repairs prioritize tissue preservation with modern suture and fixation techniques, followed by rehab focused on controlled motion and strength.",
      ],
    },

    whatIs: {
      heading: "What Is Meniscus Repair?",
      description:
        "A minimally invasive procedure to stitch and stabilize torn meniscus tissue so it can heal and continue protecting the knee.",
      list: [
        "Arthroscopic visualization of the tear pattern",
        "Inside-out, outside-in, or all-inside repair methods",
        "Biologic support if needed to enhance healing",
        "Rehabilitation to protect the repair while it heals",
      ],
      note: "Repair is preferred over removal to maintain joint health whenever feasible.",
    },

    indications: {
      heading: "When Is Meniscus Repair Recommended?",
      list: [
        "Tears in the vascular (red) zone",
        "Instability or locking due to the tear",
        "Acute tears in younger or active patients",
        "Concomitant ligament reconstruction with repairable tear",
        "Desire to protect long-term knee function",
      ],
    },

    benefits: {
      heading: "Benefits of Meniscus Repair",
      list: [
        "Preserves shock absorption of the knee",
        "Reduces risk of early arthritis",
        "Improves stability and comfort",
        "Supports return to sport with guided rehab",
        "Protects cartilage over the long term",
        "Minimally invasive with small incisions",
      ],
    },

    procedure: {
      heading: "How We Perform Meniscus Repair",
      description:
        "Technique is chosen based on tear location, pattern, and stability requirements.",
      details: [
        {
          label: "Assessment",
          value: "MRI review and arthroscopic evaluation",
        },
        {
          label: "Repair Technique",
          value: "All-inside, inside-out, or outside-in suturing",
        },
        {
          label: "Stabilization",
          value: "Anchors or sutures to secure the tear edges",
        },
        {
          label: "Rehabilitation",
          value: "Protected weight-bearing and motion, then strengthening",
        },
        {
          label: "Return to Sport",
          value: "Phased milestones to protect the repair",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Protection",
      list: [
        "Use brace or crutches as directed",
        "Limit deep squats early on",
        "Follow physiotherapy for gradual motion",
        "Strengthen quadriceps and hips to support the knee",
        "Avoid pivoting until cleared",
        "Attend follow-ups to monitor healing",
      ],
      note: "Following restrictions protects the repair and maximizes healing.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with repairable meniscus tears",
        "Active individuals wanting joint preservation",
        "Those undergoing ligament reconstruction with a tear",
        "People experiencing locking or catching from the tear",
        "Patients able to adhere to rehab guidance",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Meniscus-preserving philosophy whenever possible",
        "Advanced arthroscopic repair techniques",
        "Careful tear assessment and selection",
        "Rehab-centric recovery protocols",
        "Coordination with ligament surgeries when needed",
      ],
    },

    worldclasslistdata: [
      { title: "Meniscus Preservation Focus" },
      { title: "Arthroscopic All-Inside/Inside-Out Repairs" },
      { title: "Biologic Support When Required" },
      { title: "Cartilage Protection Strategies" },
      { title: "Structured Rehab Pathways" },
      { title: "Return-to-Sport Planning" },
      { title: "Experienced Arthroscopy Team" },
      { title: "Minimal Incision Techniques" },
      { title: "Long-Term Knee Health Monitoring" },
      { title: "Patient Education for Knee Care" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If you have a meniscus tear, speak with our arthroscopy team about repair options that protect your knee for the long run.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Meniscus Repair"),
  },
  {
    id: 27,
    title:
      "Cruciate Ligament Reconstruction (Artificial Graft) at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/artificial-graft-cruciate-ligament.avif",
    link: "/artificial-graft-cruciate-ligament",

    intro: {
      h1: "Cruciate Ligament Reconstruction (Artificial Graft)",
      h2: "Advanced Ligament Solutions for Complex Knee Instability",
      paragraphs: [
        "Artificial graft-based cruciate ligament reconstruction is considered when native graft options are limited or revision surgery is required. Modern synthetic grafts provide strong initial stability while rehabilitation restores knee control.",
        "Our surgeons choose grafts thoughtfully, focusing on safety, durability, and biomechanical performance so you regain confidence in your knee.",
      ],
    },

    whatIs: {
      heading: "What Is Artificial Graft Reconstruction?",
      description:
        "Use of high-strength synthetic grafts to reconstruct torn ACL or PCL when traditional tendon grafts are unsuitable or previously used.",
      list: [
        "Synthetic grafts designed for ligament strength",
        "Precise tunnel placement for anatomic alignment",
        "Secure fixation to support early rehab",
        "Option for complex or revision cases",
      ],
      note: "Proper patient selection and rehab are key to successful outcomes with artificial grafts.",
    },

    indications: {
      heading: "When to Consider an Artificial Graft",
      list: [
        "Revision ACL or PCL reconstruction",
        "Insufficient autograft options",
        "Need for faster initial stability",
        "Complex multiligament injuries",
        "Patient preference after counseling on options",
      ],
    },

    benefits: {
      heading: "Benefits of Synthetic Grafts",
      list: [
        "Strong initial stability for early rehab",
        "No donor site morbidity",
        "Useful in revision or complex cases",
        "Tailored to patient anatomy and needs",
        "Potential for quicker functional recovery",
        "Allows preservation of native tendon tissue",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "Technique mirrors standard arthroscopic ligament reconstruction with graft preparation and secure fixation.",
      details: [
        { label: "Assessment", value: "Imaging and stability testing" },
        {
          label: "Planning",
          value: "Graft selection and tunnel alignment strategy",
        },
        {
          label: "Surgery",
          value: "Arthroscopic ligament reconstruction using synthetic graft",
        },
        {
          label: "Fixation",
          value: "Secure anchoring for immediate stability",
        },
        {
          label: "Rehabilitation",
          value: "Progressive strength and proprioception training",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery Plan",
      list: [
        "Adhere to brace and weight-bearing guidance",
        "Follow phased physiotherapy exercises",
        "Focus on balance and neuromuscular control",
        "Avoid high-impact activities until cleared",
        "Monitor for swelling or discomfort changes",
        "Regular reviews to assess graft integration",
      ],
      note: "Close follow-up ensures the graft performs well and rehab stays on track.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients needing revision ligament surgery",
        "Individuals without suitable tendon grafts",
        "Athletes seeking stable, early recovery",
        "Multiligament injury cases",
        "Patients committed to guided rehabilitation",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experience with revision and complex knee cases",
        "Careful graft selection and patient counseling",
        "Anatomic, precision tunnel placement",
        "Rehab-forward protocols for safe return",
        "Transparent outcome tracking and support",
      ],
    },

    worldclasslistdata: [
      { title: "Artificial Graft Ligament Reconstruction Expertise" },
      { title: "Revision ACL/PCL Solutions" },
      { title: "Secure Fixation for Early Stability" },
      { title: "Meniscus & Cartilage Protection" },
      { title: "Rehab Pathways for Fast Functional Gain" },
      { title: "Multiligament Injury Management" },
      { title: "Patient-Centered Graft Counseling" },
      { title: "Objective Stability Assessments" },
      { title: "Return-to-Activity Guidance" },
      { title: "Long-Term Follow-Up and Support" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "For revision or complex knee ligament injuries, explore artificial graft reconstruction options with our orthopaedic team.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices(
      "Cruciate Ligament Reconstruction (Artificial Graft)"
    ),
  },
  {
    id: 26,
    title: "PCL Repair / Reconstruction at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/arthroscopic-procedures.avif",
    link: "/pcl-repair-reconstruction",

    intro: {
      h1: "PCL Repair / Reconstruction at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Targeted Care for Posterior Knee Stability",
      paragraphs: [
        "Posterior cruciate ligament (PCL) injuries can cause knee instability, difficulty on slopes or stairs, and increased stress on other knee structures. Precise reconstruction restores stability and prevents further damage.",
        "We use arthroscopic, anatomic PCL techniques with graft options and structured rehabilitation to help you regain confidence in knee movement.",
      ],
    },

    whatIs: {
      heading: "What Is PCL Reconstruction?",
      description:
        "A surgical procedure to repair or replace the injured PCL using minimally invasive, camera-guided techniques.",
      list: [
        "Anatomic tunnel placement to replicate native PCL",
        "Graft fixation for durable stability",
        "Soft tissue preservation with arthroscopy",
        "Rehabilitation protocols tailored to PCL healing",
      ],
      note: "Restoring posterior stability protects cartilage and meniscus from overload.",
    },

    indications: {
      heading: "When Is PCL Surgery Needed?",
      list: [
        "Persistent knee instability or giving way",
        "Difficulty with downhill walking or stairs",
        "Combined ligament injuries",
        "High-demand athletes with grade II/III tears",
        "Failure of conservative care to restore function",
      ],
    },

    benefits: {
      heading: "Benefits of PCL Reconstruction",
      list: [
        "Restored posterior knee stability",
        "Reduced pain and improved confidence",
        "Protection of cartilage and meniscus",
        "Support for return to sport or active work",
        "Lower risk of future knee degeneration",
        "Personalized rehab to regain strength",
      ],
    },

    procedure: {
      heading: "How the Surgery Is Performed",
      description:
        "Arthroscopic, graft-based reconstruction focused on anatomic positioning and secure fixation.",
      details: [
        { label: "Assessment", value: "Clinical tests and MRI confirmation" },
        {
          label: "Planning",
          value: "Graft selection and tunnel trajectory design",
        },
        {
          label: "Surgery",
          value: "Arthroscopic PCL reconstruction with secure fixation",
        },
        {
          label: "Rehabilitation",
          value: "Protected range of motion then strengthening phases",
        },
        {
          label: "Return to Activity",
          value: "Graduated progression with objective stability checks",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery Guidance",
      list: [
        "Use brace and weight-bearing limits as instructed",
        "Attend physiotherapy for range and strength milestones",
        "Focus on quadriceps activation and balance work",
        "Avoid heavy lifting or pivoting early on",
        "Follow home exercise plans daily",
        "Regular follow-ups to confirm graft healing",
      ],
      note: "Disciplined rehab helps restore stable, pain-free knee function.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with moderate to severe PCL tears",
        "People with combined ligament injuries needing stability",
        "Athletes returning to cutting or pivoting sports",
        "Individuals with instability affecting work or daily life",
        "Patients prepared to commit to rehab",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Arthroscopic, anatomic PCL reconstruction expertise",
        "Graft choice tailored to activity goals",
        "Rehabilitation-centric protocols",
        "Careful monitoring of graft healing and alignment",
        "Clear return-to-activity guidance",
      ],
    },

    worldclasslistdata: [
      { title: "Advanced PCL Reconstruction Techniques" },
      { title: "Anatomic Tunnel Placement for Stability" },
      { title: "Arthroscopic Soft Tissue Preservation" },
      { title: "Customized Graft Selection" },
      { title: "Rehab Roadmaps Focused on Strength & Control" },
      { title: "Objective Stability Assessments" },
      { title: "Return-to-Sport Planning" },
      { title: "Meniscus & Cartilage Protection" },
      { title: "Patient Education for Prevention" },
      { title: "Long-Term Knee Health Monitoring" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If PCL injury is causing knee instability, meet our arthroscopy team for precise reconstruction and a structured recovery plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("PCL Repair / Reconstruction"),
  },
  {
    id: 22,
    title: "Tennis Elbow Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/tennis-elbow-treatment.avif",
    link: "/tennis-elbow-treatment",

    intro: {
      h1: "Tennis Elbow Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Relief for Lateral Elbow Pain & Overuse Injuries",
      paragraphs: [
        "Tennis elbow (lateral epicondylitis) is caused by overuse or strain of the forearm extensor tendons, leading to pain on the outer elbow that worsens with grip or lifting.",
        "We offer accurate diagnosis, targeted physiotherapy, braces, injections, and surgical options when required to help you return to daily activities and sports without pain.",
      ],
    },

    whatIs: {
      heading: "What Is Tennis Elbow?",
      description:
        "An overuse tendinopathy affecting the common extensor tendon origin on the outer elbow.",
      list: [
        "Pain or burning on the outside of the elbow",
        "Grip weakness or pain while lifting",
        "Discomfort with wrist extension or twisting",
        "Symptoms aggravated by repetitive activity",
      ],
      note: "Early rest and guided therapy prevent chronic pain and loss of strength.",
    },

    indications: {
      heading: "When to Seek Care",
      list: [
        "Persistent elbow pain for more than two weeks",
        "Pain that limits work, sport, or lifting",
        "Night pain or rest pain around the elbow",
        "Weak grip strength or repeated flare-ups",
        "Failure to improve with basic rest or supports",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Treatment",
      list: [
        "Pain reduction and improved grip",
        "Faster return to work and sport",
        "Prevention of chronic tendon changes",
        "Guidance on ergonomics and technique",
        "Customized rehab to restore strength",
        "Surgical relief when conservative care fails",
      ],
    },

    procedure: {
      heading: "How We Treat Tennis Elbow",
      description:
        "Most cases improve with structured non-surgical care; surgery is reserved for resistant pain.",
      details: [
        { label: "Evaluation", value: "Clinical exam and movement testing" },
        {
          label: "Imaging",
          value: "Ultrasound or MRI if required to assess tendon quality",
        },
        {
          label: "Conservative Care",
          value: "Activity modification, bracing, medications, physiotherapy",
        },
        {
          label: "Injections",
          value: "PRP or steroid injections when indicated",
        },
        {
          label: "Surgery",
          value: "Tendon debridement and repair for persistent cases",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Prevention Tips",
      list: [
        "Follow physiotherapy-led stretching and strengthening",
        "Use braces or straps during high-load tasks if advised",
        "Avoid sudden increase in training intensity",
        "Correct sport or work technique to reduce strain",
        "Ice after activity to ease soreness",
        "Attend follow-ups to track progress",
      ],
      note: "Consistent rehab builds tendon resilience and prevents recurrence.",
    },

    suitability: {
      heading: "Who Is This For?",
      list: [
        "Athletes with elbow overuse pain",
        "Workers with repetitive wrist movements",
        "Individuals with persistent lateral elbow pain",
        "Patients not improving with rest alone",
        "Those needing guidance to prevent recurrence",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Precise diagnosis of tendon-related elbow pain",
        "Comprehensive non-surgical and surgical options",
        "Skilled physiotherapy and ergonomic coaching",
        "Evidence-based injection therapies when needed",
        "Return-to-sport and work-focused plans",
      ],
    },

    worldclasslistdata: [
      { title: "Targeted Tennis Elbow Rehabilitation" },
      { title: "Ergonomic & Technique Coaching" },
      { title: "Advanced Tendon Imaging When Needed" },
      { title: "PRP & Injection Therapy Options" },
      { title: "Minimally Invasive Surgical Solutions" },
      { title: "Grip Strength & Function Restoration" },
      { title: "Return-to-Play/Work Protocols" },
      { title: "Prevention Strategies for Overuse Injuries" },
      { title: "Patient-Centered Pain Management" },
      { title: "Structured Follow-Up & Monitoring" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If elbow pain or weak grip is slowing you down, meet our specialists for a personalized tennis elbow recovery plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Tennis Elbow Treatment"),
  },
  {
    id: 24,
    title: "Arthroscopic Surgeries at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/arthroscopic-procedures.avif",
    link: "/arthroscopic-surgeries",

    intro: {
      h1: "Arthroscopic Surgeries at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Minimally Invasive Solutions for Joint Pain & Instability",
      paragraphs: [
        "Arthroscopic surgery uses a tiny camera and specialized instruments inserted through keyhole incisions to diagnose and treat joint problems with minimal tissue disruption.",
        "Our surgeons perform a full spectrum of arthroscopic knee, shoulder, and hip procedures that reduce pain, protect cartilage, and speed up return to work or sport.",
      ],
    },

    whatIs: {
      heading: "What Are Arthroscopic Surgeries?",
      description:
        "Precision, camera-guided procedures to repair ligaments, cartilage, and other joint structures through small incisions.",
      list: [
        "Ligament reconstruction (ACL, PCL, and graft-based)",
        "Meniscus repair and transplant",
        "Shoulder stabilization and rotator cuff repair",
        "Hip arthroscopy for femoroacetabular impingement",
      ],
      note: "Smaller cuts mean less pain, faster healing, and earlier rehabilitation.",
    },

    indications: {
      heading: "When Is Arthroscopy Recommended?",
      list: [
        "Persistent joint pain or locking",
        "Ligament tears causing instability",
        "Cartilage or meniscus damage",
        "Recurrent shoulder dislocations",
        "Hip impingement with restricted motion",
      ],
    },

    benefits: {
      heading: "Benefits of Arthroscopic Surgery",
      list: [
        "Minimal soft tissue disruption",
        "Lower pain and faster recovery",
        "Shorter hospital stay",
        "Early physiotherapy and return to activity",
        "High-definition visualization for precise repair",
        "Smaller scars and cosmetic benefit",
      ],
    },

    procedure: {
      heading: "How Arthroscopy Is Performed",
      description:
        "Procedures are tailored to the joint and injury, with emphasis on preservation and stability.",
      details: [
        { label: "Evaluation", value: "Clinical exam and targeted imaging" },
        {
          label: "Planning",
          value: "Choosing optimal portals and repair techniques",
        },
        {
          label: "Surgery",
          value: "Camera-guided repair or reconstruction through keyholes",
        },
        {
          label: "Pain Control",
          value: "Multimodal analgesia and early mobilization",
        },
        {
          label: "Rehabilitation",
          value: "Structured physio to restore strength and motion",
        },
      ],
    },

    postOpCare: {
      heading: "Post-Arthroscopy Care",
      list: [
        "Protect the joint as advised with brace or sling",
        "Ice and elevate to reduce swelling",
        "Begin physiotherapy on schedule",
        "Avoid high-impact activity until cleared",
        "Maintain wound hygiene",
        "Follow up to monitor healing and progress",
      ],
      note: "Adhering to rehab timelines is key to regaining full function.",
    },

    suitability: {
      heading: "Who Is a Candidate?",
      list: [
        "Patients with ligament or meniscus tears",
        "Athletes needing faster recovery",
        "Individuals with recurrent shoulder instability",
        "People with hip impingement symptoms",
        "Those seeking minimally invasive joint solutions",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Experienced arthroscopic surgeons",
        "Comprehensive knee, shoulder, and hip portfolio",
        "Rehab-first protocols for rapid recovery",
        "Advanced equipment and imaging support",
        "Clear return-to-sport guidance",
      ],
    },

    worldclasslistdata: [
      { title: "Full-Range Arthroscopic Knee Procedures" },
      { title: "Shoulder Stabilization & Rotator Cuff Expertise" },
      { title: "Hip Arthroscopy for FAI" },
      { title: "Minimally Invasive Ligament Reconstructions" },
      { title: "Meniscus Repair & Transplant Services" },
      { title: "Precision Portal Planning" },
      { title: "Early Rehab & Mobility Pathways" },
      { title: "Pain-Control Protocols for Fast Recovery" },
      { title: "Return-to-Play Planning" },
      { title: "Patient Education & Prevention Coaching" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If joint pain or instability is limiting you, consult our arthroscopy team for a minimally invasive solution.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Arthroscopic Surgeries"),
  },
  {
    id: 23,
    title: "Plantar Fasciitis Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/plantar-fasciitis-treatment.avif",
    link: "/plantar-fasciitis-treatment",

    intro: {
      h1: "Plantar Fasciitis Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Focused Relief for Heel Pain & Foot Overuse",
      paragraphs: [
        "Plantar fasciitis occurs when the plantar fascia ligament along the heel and arch becomes inflamed, causing sharp heel pain, especially with first steps in the morning.",
        "Our team combines gait assessment, footwear guidance, targeted physiotherapy, and advanced therapies to reduce pain, improve flexibility, and prevent recurrence.",
      ],
    },

    whatIs: {
      heading: "What Is Plantar Fasciitis?",
      description:
        "Inflammation and micro-tears of the plantar fascia ligament that supports the foot arch.",
      list: [
        "Heel pain on first steps after rest",
        "Tenderness along the heel or arch",
        "Pain after prolonged standing or running",
        "Tight calf or Achilles contributing to strain",
      ],
      note: "Early treatment helps avoid chronic heel pain and altered gait.",
    },

    indications: {
      heading: "When to Seek Treatment",
      list: [
        "Morning heel pain that lingers",
        "Pain limiting walking, running, or standing",
        "Recurrent flare-ups despite rest",
        "Arch discomfort with flat feet or high arches",
        "Ineffective relief from home remedies",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized Foot Care",
      list: [
        "Reduced heel pain and stiffness",
        "Improved foot mechanics and gait",
        "Guided stretching and strengthening",
        "Footwear and orthotic recommendations",
        "Lower risk of chronic pain or compensatory injuries",
        "Safe return to activity and sport",
      ],
    },

    procedure: {
      heading: "How We Treat Plantar Fasciitis",
      description:
        "Most cases respond to structured conservative care, with advanced options for stubborn pain.",
      details: [
        { label: "Evaluation", value: "Foot exam and gait analysis" },
        {
          label: "Initial Care",
          value: "Rest, ice, heel pads, and activity modification",
        },
        {
          label: "Therapy",
          value: "Stretching, strengthening, and manual therapy",
        },
        {
          label: "Adjuncts",
          value: "Night splints, orthotics, taping, or shockwave therapy",
        },
        {
          label: "Surgical Option",
          value: "Fascia release reserved for resistant cases",
        },
      ],
    },

    postOpCare: {
      heading: "Recovery & Prevention",
      list: [
        "Follow stretching routines for calf and plantar fascia",
        "Use supportive footwear and inserts as advised",
        "Increase activity gradually and avoid sudden mileage jumps",
        "Maintain healthy weight to reduce foot load",
        "Ice after long standing or runs if sore",
        "Check in regularly if symptoms recur",
      ],
      note: "Consistent foot care habits keep pain away and protect long-term mobility.",
    },

    suitability: {
      heading: "Who Benefits?",
      list: [
        "Runners and walkers with heel pain",
        "Professionals standing for long hours",
        "People with flat feet or high arches",
        "Individuals with recurrent heel or arch discomfort",
        "Patients wanting non-surgical relief plans",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Detailed gait and biomechanical assessment",
        "Personalized rehab and orthotic guidance",
        "Access to advanced therapies for stubborn pain",
        "Return-to-activity plans tailored to your goals",
        "Patient education to prevent recurrence",
      ],
    },

    worldclasslistdata: [
      { title: "Comprehensive Heel Pain Evaluation" },
      { title: "Gait & Footwear Assessment" },
      { title: "Targeted Stretching & Strengthening Programs" },
      { title: "Orthotic & Brace Guidance" },
      { title: "Shockwave & Adjunctive Therapies" },
      { title: "Minimally Invasive Options When Needed" },
      { title: "Activity Modification & Return-to-Run Plans" },
      { title: "Prevention Strategies for Recurrent Pain" },
      { title: "Education for Home Care & Foot Health" },
      { title: "Ongoing Monitoring & Support" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If heel pain is limiting your day, meet our specialists for a structured plantar fasciitis treatment plan.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Plantar Fasciitis Treatment"),
  },
  {
    id: 21,
    title: "Rheumatoid Arthritis Treatment at Brunda Advanced Orthopaedics & ENT Centre",
    img: "/assets/service-images/rheumatoid-arthritis.avif",
    link: "/rheumatoid-arthritis",

    intro: {
      h1: "Rheumatoid Arthritis Treatment at Brunda Advanced Orthopaedics & ENT Centre",
      h2: "Comprehensive Care to Protect Joints & Mobility",
      paragraphs: [
        "Rheumatoid arthritis is an autoimmune condition that causes joint inflammation, pain, and stiffness. Without timely treatment, it can damage cartilage, deform joints, and affect daily activities.",
        "Our orthopaedic and rheumatology-focused team provides early diagnosis, medication planning, joint preservation advice, and surgical options when needed to keep you active and comfortable.",
      ],
    },

    whatIs: {
      heading: "What Is Rheumatoid Arthritis?",
      description:
        "A chronic inflammatory disorder where the immune system attacks the lining of joints, leading to swelling, pain, and progressive damage.",
      list: [
        "Persistent joint pain and morning stiffness",
        "Swelling and warmth around small and large joints",
        "Symmetrical joint involvement",
        "Possible nodules and fatigue",
      ],
      note: "Early detection and disease control limit joint destruction and preserve function.",
    },

    indications: {
      heading: "When to Seek Treatment",
      list: [
        "Joint stiffness lasting more than 30 minutes in the morning",
        "Swollen, warm, or tender joints",
        "Reduced grip strength or difficulty with daily tasks",
        "Unexplained fatigue with joint pain",
        "Previous diagnosis needing specialist follow-up",
      ],
    },

    benefits: {
      heading: "Benefits of Specialized RA Care",
      list: [
        "Pain and inflammation control",
        "Slower disease progression and joint protection",
        "Improved strength and range of motion",
        "Reduced flare-ups with lifestyle guidance",
        "Planning for joint preservation or surgery if required",
        "Better overall quality of life",
      ],
    },

    procedure: {
      heading: "How We Manage Rheumatoid Arthritis",
      description:
        "Treatment combines medication, joint protection strategies, physiotherapy, and surgical intervention when damage is advanced.",
      details: [
        {
          label: "Clinical Evaluation",
          value: "Joint assessment and lab review",
        },
        { label: "Imaging", value: "X-ray, ultrasound, or MRI as needed" },
        {
          label: "Medical Therapy",
          value: "DMARDs, biologics, pain control, and lifestyle advice",
        },
        {
          label: "Rehabilitation",
          value: "Physiotherapy, splints, and activity modification",
        },
        {
          label: "Surgical Options",
          value: "Synovectomy or joint replacement when indicated",
        },
      ],
    },

    postOpCare: {
      heading: "Living Well With RA",
      list: [
        "Take medicines regularly as prescribed",
        "Follow physiotherapy and joint-protection exercises",
        "Use heat or cold packs for symptom relief if advised",
        "Maintain healthy weight and anti-inflammatory diet",
        "Track flares and report changes promptly",
        "Attend regular monitoring for medication safety",
      ],
      note: "Consistent follow-up helps keep RA under control and prevents joint damage.",
    },

    suitability: {
      heading: "Who Is This For?",
      list: [
        "Newly diagnosed RA patients",
        "People with uncontrolled joint pain or swelling",
        "Patients considering advanced therapies",
        "Individuals with joint deformity needing surgical advice",
        "Anyone seeking holistic RA management",
      ],
    },

    whyChooseUs: {
      heading: "Why Choose Brunda Advanced Orthopaedics & ENT Centre?",
      list: [
        "Joint preservation focus with early intervention",
        "Access to advanced medical and surgical options",
        "Coordinated care with physiotherapy support",
        "Clear flare prevention and lifestyle guidance",
        "Ethical, patient-centered treatment decisions",
      ],
    },

    worldclasslistdata: [
      { title: "Dedicated Rheumatoid Arthritis Clinic Pathway" },
      { title: "Early Diagnosis & Disease Control" },
      { title: "Medical & Surgical Joint Preservation Options" },
      { title: "Personalized Physiotherapy & Splinting" },
      { title: "Pain Management & Flare Prevention" },
      { title: "Modern Imaging for Joint Monitoring" },
      { title: "Nutrition & Lifestyle Counseling" },
      { title: "Revision Planning for Advanced Disease" },
      { title: "Transparent Outcome Tracking" },
      { title: "Long-Term Mobility Protection" },
    ],

    cta: {
      heading: "Book a Consultation",
      text: "If joint pain and stiffness are affecting your day, meet our team for a personalized rheumatoid arthritis plan focused on protecting your joints.",
      buttonText: "Book Appointment",
    },

    otherServices: orthoServices("Rheumatoid Arthritis Treatment"),
  },
];
