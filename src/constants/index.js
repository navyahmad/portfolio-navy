import profileImg from "../assets/images/nvy.webp";
import pkl from "../assets/images/pkl.webp"
import duta from "../assets/images/dt.webp"
import lks from "../assets/images/lks.webp"
import juara from "../assets/images/web2.webp"
import fertinnovation from "../assets/images/fertinnovation.webp"
import sertifAI from "../assets/images/AI.webp"
import sertifFert from "../assets/images/fert.webp"
import sertifWeb from "../assets/images/webdev.webp"
import sertifDuta from "../assets/images/sertif duta.webp"
import sertifFront from "../assets/images/front.webp"
import sertifAuto from "../assets/images/auto.webp"
import sertifDasarAI from "../assets/images/dasar ai.webp"
import sertifDasarSains from "../assets/images/dasar sains.webp"
import sertifMaspion from "../assets/images/maspion.webp"
// import sertifUKK from "../assets/images/ukk.jpg"
import sertifPKL from "../assets/images/sertifPkl.webp"
import sertifAbirama from "../assets/nonacademic/abirama.webp"
import sertifRemaja from "../assets/nonacademic/remaja.webp"
import sertifProklamator from "../assets/nonacademic/proklamator.webp"
import sertifTrimatra from "../assets/nonacademic/trimatra.webp"
import sertifSuprais from "../assets/nonacademic/suprais.webp"
import sertifCleopatra from "../assets/nonacademic/cleopatra.webp"
import sertifBackend from "../assets/images/backend.webp"



// Project 
import projectCokro from "../assets/project/cokrotani.webp"
import projectPLN from "../assets/project/pln.webp"
import projectSirsak from "../assets/project/sirsak.webp"
import projectAgriwest from "../assets/project/agriwest.webp"
import projectMandalatani from "../assets/project/mandalatani.webp"
import projectCirkula from "../assets/project/cirkula.webp"
import projectKasir from "../assets/project/kasir.webp"
import projectMedicalKNN from "../assets/project/medicalknn.webp"
import projectNexa from "../assets/project/nexa.webp"

// src/constants/index.js
export const EXPERIENCES = [
  {
    id: 1,
    year: "July 2024 - December 2024",
    title: "Fullstack Web Developer",
    company: "PT PLN (Persero) UP3 Pasuruan",
    description: "Building a fullstack web application to manage public electricity complaints, improving coordination between customers, technicians, and office administrators during an internship at PT PLN (Persero).",
    tech: ["Laravel", "Bootstrap 4", "MySQL"],
    image: pkl 
  },
  {
    id: 2,
    year: "2024",
    title: "GenRe Ambassador for Pasuruan Regency 2024",
    company: "Dinas P3AP2KB Kabupaten Pasuruan",
    description: "Selected as a Youth Ambassador of Pasuruan Regency, advocating youth empowerment and delivering educational campaigns on responsible life planning and social awareness.",
    tech: ["Public Speaking", "Communication", "Leadership", "Community Engagement"],
    image: duta 
  },
  {
    id: 3,
    year: "2025",
    title: "LKS AI Provincial Participant",
    company: "Dinas Pendidikan Provinsi Jawa Timur",
    description: "Building a machine learning model to recognize sign language gestures using the K-Nearest Neighbors (KNN) algorithm as part of the East Java Provincial Artificial Intelligence competition.",
    tech: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    image: lks
  },
  {
    id: 4,
    year: "2025",
    title: "2nd Place Web Development",
    company: "Universitas Brawijaya",
    description: "Designed a supply chain management web application with fertilizer demand prediction for agricultural planning in Sidoarjo, and won 2nd place in a national web development competition.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "AHP", "Topsis", "Fuzzy Logic"],
    image: juara
  },
  {
    id: 5,
    year: "2025",
    title: "International Fertinnovation Challenge Finalist",
    company: "PT Pupuk Indonesia (Persero)",
    description: "Advancing an agricultural decision-support web platform with crop suitability and pest prediction features using environmental data, securing a Top 10 finalist position in the Fertinnovation Challenge 2025.",
    tech: ["React JS", "Tailwind CSS", "AHP", "Topsis", "Fuzzy Logic", "Monte Carlo"],
    image:  fertinnovation
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "CokroTani",
    category: "Competition Project",
    description: "Supply chain management platform for fertilizer distribution in Sidoarjo, enabling transparent allocation, farmer reporting, and data-driven prioritization using geospatial mapping.",
    fullDescription: "A supply chain management system developed to support transparent and efficient fertilizer distribution across districts in Sidoarjo. The platform allows farmer groups to report fertilizer receipt and monitor commodity data through polygon-based geographic visualization. Administrators can manage distribution records and analyze harvest data to determine priority areas for allocation. The system integrates a decision support mechanism using AHP, TOPSIS and Montecarlo methods to ensure objective and data-driven distribution planning.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: projectCokro, 
    github: "https://github.com/navyahmad/cokro-tani",
    gridSpan: "md:col-span-2 md:row-span-2", // Kotak Besar (Utama)
  },
  {
    id: 2,
    title: "Sistem Manajemen APP",
    category: "Full Stack Web Development",
    description: "Digital complaint and service management system developed during an internship at PLN to streamline customer reports, technician coordination, and electricity normalization processes.",
    fullDescription: "A web-based management system developed during an internship at PLN to digitize and organize customer electricity complaint handling. The platform enables field officers to record and report service activities to administrative staff, replacing manual handwritten records with a structured digital workflow. Beyond complaint submission, the system supports electricity normalization tracking and centralized data management, ensuring that operational records remain accurate, traceable, and valuable for long-term service monitoring and decision-making.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 4"],
    image: projectPLN,
    github: "https://github.com/navyahmad/pengaduanappgrati",
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
  {
    id: 3,
    title: "Mandalatani AI",
    category: "Competition Project",
    description: "Prototype agricultural decision support platform developed for the Fertinnovation Challenge 2025 to simulate planting, pest, and fertilizer predictions using analytical modeling approaches.",
    fullDescription: "A prototype web-based agricultural decision support system developed for the Fertinnovation Challenge organized by PT Pupuk Indonesia in 2025. The platform demonstrates predictive simulations for planting schedules, pest risks, and fertilizer usage based on environmental and agricultural parameters such as weather, land conditions, and crop types. Designed as a proof-of-concept, the system showcases the application of analytical methods including Fuzzy TOPSIS and Monte Carlo simulation to support data-driven agricultural planning. The prototype focuses on demonstrating system logic, user interaction, and decision modeling for stakeholders such as government administrators, district officers, and farmers.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: projectMandalatani,
    github: "https://github.com/navyahmad/mandalataniAI",
    gridSpan: "md:col-span-1 md:row-span-2", // Kotak Tinggi
  },
  {
    id: 4,
    title: "NexaAI",
    category: "AI Project",
    description: "AI-powered platform for resume analysis and interview simulation, providing ATS scoring, feedback, and HR-style question practice.",
    fullDescription: "NexaAI is an AI-driven platform designed to help job seekers improve their resume quality and interview readiness. The system analyzes uploaded resumes to generate ATS (Applicant Tracking System) scores, highlighting strengths and areas for improvement. It also provides an AI-powered interview simulation that generates HR-style questions and evaluates user responses, offering structured feedback to enhance communication and performance. This project demonstrates the practical implementation of AI in career preparation, combining natural language processing and interactive web technologies.",
    tech: ["Next JS", "Framer Motion", "Gemini API", "Tailwind CSS"],
    image: projectNexa,
    github: "https://github.com/navyahmad/NexaAI",
    demo: "https://nexa-ai-ten.vercel.app",
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "N-Vanture",
    category: "Academic Project",
    description: "Digital cashier system developed to manage outdoor product sales, inventory tracking, and automated receipt generation for daily retail transactions.",
    fullDescription: "A web-based point-of-sale (POS) system designed to support retail operations for an outdoor equipment store. The platform manages product sales, transaction records, and inventory updates through a structured digital workflow, replacing manual bookkeeping processes. It also supports automated receipt printing to ensure accurate transaction documentation and improve operational efficiency. The system was developed as an academic project to demonstrate practical implementation of retail transaction management using web technologies.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 4"],
    image: projectKasir,
    github: "https://github.com/navyahmad/kasiroutdoor",
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
  {
    id: 6,
    title: "AgriWest",
    category: "Competition Project",
    description: "Prototype marketplace platform designed to transform agricultural waste into value-added products, helping reduce environmental pollution and promote sustainable waste utilization.",
    fullDescription: "A prototype web-based platform developed to address agricultural waste management by connecting farmers with opportunities to reuse and commercialize unused crop residues. The system aims to reduce open burning practices that contribute to air pollution by promoting waste utilization as value-added products. It also features an AI-based prediction module that analyzes current waste input data to identify dominant waste trends and forecast potential future availability. Designed as a proof-of-concept, the platform demonstrates how digital marketplaces and predictive insights can support sustainable agricultural practices and environmental awareness.",
    tech: ["React JS", "Tailwind CSS", "Framer Motion", "GSAP"],
    image: projectAgriwest,
    github: "https://github.com/navyahmad/AgriWaste",
    demo: "https://agri-waste.vercel.app/", // Link dummy
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
  {
    id: 7,
    title: "Cirkula",
    category: "Competition Project",
    description: "Prototype gamification platform designed to encourage community waste collection through reward-based incentives, enabling users to exchange recycling points for financial or social service benefits.",
    fullDescription: "A prototype web-based gamification platform developed to improve community participation in waste management through a reward-driven system. Registered users can deposit recyclable waste at local waste banks and earn experience points (XP) based on the quantity and type of materials collected. These points can be redeemed for financial value or social service payments, such as health insurance contributions, according to predefined conversion rules. Waste banks can then distribute collected materials to recycling companies, while administrators monitor waste volume data to support sustainable recycling programs and potential collaboration with producer responsibility initiatives. Designed as a proof-of-concept, the platform demonstrates how digital incentives and circular economy principles can increase recycling engagement and resource efficiency.",
    tech: ["React JS", "Tailwind CSS", "Framer Motion", "GSAP"],
    image: projectCirkula,
    github: "https://github.com/navyahmad/cirkula",
    demo: "https://cirkula.vercel.app/", // Link dummy
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
  {
    id: 8,
    title: "Sirsak",
    category: "Prototype Project",
    description: "Prototype waste collection management platform designed to coordinate waste pickup requests from small businesses and convert recyclable materials into reward points for social benefit payments.",
    fullDescription: "A prototype web-based waste management system developed to streamline the collection and processing of recyclable waste from local businesses such as coffee shops. The platform enables business owners to submit waste pickup requests directly through the system, which are then managed by administrators and assigned to drivers for scheduled collection. After the waste is transported and weighed at the waste management facility, the recorded quantity is converted into reward points based on predefined valuation rules. These points can be redeemed to support employee social security contributions, promoting responsible waste disposal while providing tangible benefits for participating businesses. Designed as a proof-of-concept, the system demonstrates how digital coordination and incentive-based mechanisms can improve operational efficiency and encourage sustainable waste management practices.",
    tech: ["React JS", "Framer Motion", "Tailwind CSS", "GSAP"],
    image: projectSirsak,
    github: "https://github.com/navyahmad/sirsak",
    demo: "https://sirsak.vercel.app", // Link dummy
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
  {
    id: 9,
    title: "Medical KNN",
    category: "Data Science Project",
    description: "Exploratory machine learning project applying the K-Nearest Neighbors algorithm to analyze medical datasets and classify disease patterns using fundamental data science techniques.",
    fullDescription: "A data science learning project focused on applying the K-Nearest Neighbors (KNN) algorithm to classify disease patterns based on publicly available medical datasets from Kaggle. The project demonstrates core data analysis workflows, including data preprocessing, feature exploration, and visualization using Python libraries such as NumPy, Pandas, Matplotlib, and Seaborn. Developed as part of a hands-on learning process, the model aims to understand how distance-based classification methods can be used to identify patterns within healthcare data and support basic predictive analysis.",
    tech: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    image: projectMedicalKNN,
    github: "https://github.com/navyahmad/DataScience-MedicalKNN",
    gridSpan: "md:col-span-1 md:row-span-1", // Kotak Kecil
  },
];

export const SKILLS = [
  "React", "Laravel", "Next JS", "Astro JS", "Python", "PHP", "JavaScript", "Tailwind CSS", "Bootstrap", 
  "GSAP", "Framer Motion", "MySQL",
  "Git", "Rest API", "Vite", "n8n"
];

export const EDUCATION = [
  {
    id: 1,
    school: "Jember State Polytechnic",
    major: "Informatics Engineering",
    date: "2025 - Present",
    location: "Jember, East Java",
    description: "Currently learning the development of web and mobile applications while exploring the implementation of decision support systems and Internet of Things (IoT) technologies. Also developing skills in project planning and management to support structured software development."
  },
  {
    id: 2,
    school: "State Vocational High School 1 Pasuruan",
    major: "Software Engineering",
    date: "2022 - 2025",
    location: "Pasuruan, East Java",
    description: "Learned the fundamentals of software engineering through hands-on projects in developing desktop, web, and mobile applications. The program emphasized critical thinking and problem-solving while building practical skills in programming, database management, and UI/UX design using technologies such as HTML, CSS, JavaScript, PHP, Python, Java, Dart, Laravel, Flutter, MySQL, and Figma.",
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Finalists of the 2025 International Fertinnovation Challenge",
    event: "PT Pupuk Indonesia (PERSERO)",
    year: "2025",
    status: "Finalist",
    description: "Developed an AI-based solution to provide data-driven recommendations for planting decisions, fertilizer usage, and pest management.",
    icon: "💻",
    certificateImg: sertifFert,
    category: "Academic"
  },
  
  {
    id: 2,
    title: "Software Engineering",
    event: "MASPION IT",
    year: "2025",
    status: "Student",
    description: "Developed a Laravel-based cashier application as a competency exam project to demonstrate system development and transaction management skills.",
    icon: "🥈",
    certificateImg: sertifMaspion,
    category: "Academic"
  },
  {
    id: 4,
    title: "2nd Place in the Creanomic Web Development Competition",
    event: "Universitas Brawijaya",
    year: "2025",
    status: "National Rank 2",
    description: "Developed a decision support system using Laravel and AI knowledge to recommend fertilizer requirements across districts and cities in East Java.",
    icon: "🥈",
    certificateImg: sertifWeb,
    category: "Academic"
  },
  {
    id: 5,
    title: "LKS AI Provincial Finalist",
    event: "Dinas Pendidikan Provinsi Jawa Timur",
    year: "2025",
    status: "Finalist",
    description: "Developed a sign language classification model using the K-Nearest Neighbors algorithm in Python to improve hand gesture recognition accuracy.",
    icon: "🤖",
    certificateImg: sertifAI,
    category: "Academic"
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    event: "Dicoding DBS Foundation",
    year: "2025",
    status: "Participant",
    description: "Completed foundational training in Artificial Intelligence, covering basic concepts of machine learning, data processing, and model development.",
    icon: "💻",
    certificateImg: sertifDasarAI,
    category: "Academic"
  },
  {
    id: 7,
    title: "Data Science Fundamentals",
    event: "Dicoding DBS Foundation",
    year: "2025",
    status: "Participant",
    description: "Completed foundational training in data science, covering data analysis, visualization, and basic statistical concepts using Python.",
    icon: "📊",
    certificateImg: sertifDasarSains,
    category: "Academic"
  },
  {
    id: 8,
    title: "Frontend Web Development",
    event: "MySkill Short Class",
    year: "2025",
    status: "Participant",
    description: "Completed hands-on training in frontend web development, focusing on building responsive user interfaces using HTML, CSS, and JavaScript.",
    icon: "🎨",
    certificateImg: sertifFront,
    category: "Academic"
  },
  {
    id: 9,
    title: "Backend Web Development",
    event: "MySkill Short Class",
    year: "2025",
    status: "Participant",
    description: "Completed hands-on training in backend web development, focusing on building responsive user interfaces using JavaScript.",
    icon: "🎨",
    certificateImg: sertifBackend,
    category: "Academic"
  },
  {
    id: 10,
    title: "AI and Automation N8N",
    event: "MySkill Short Class",
    year: "2025",
    status: "Participant",
    description: "Completed hands-on training in AI and automation, focusing on building automated workflows using n8n.",
    icon: "💻",
    certificateImg: sertifAuto,
    category: "Academic"
  },
  {
  id: 11,
  title: "Fullstack Web Developer Internship",
  event: "PT PLN (Persero)",
  year: "2025",
  status: "Intern",
  description: "Developed a web-based complaint management system to streamline public reporting and administrative workflows using fullstack development practices.",
  icon: "⚡",
  certificateImg: sertifPKL,
  category: "Academic"
},
  


  // Non-Academic
  {
  id: 12,
  title: "GenRe Youth Ambassador Finalist",
  event: "Dinas P3AP2KB Kabupaten Pasuruan",
  year: "2024",
  status: "Finalist & Youth Role Model",
  description: "Served as a youth role model and speaker, delivering educational sessions on adolescent development and fatherless awareness in local communities.",
  icon: "👑",
  certificateImg: sertifDuta,
  category: "Non-Academic"
},
  {
  id: 13,
  title: "Pasuruan City Youth Event Certificate",
  event: "Dinas P3AKB Kota Pasuruan",
  year: "2022",
  status: "Ceremonial Guard Member",
  description: "Served as a ceremonial guard (pedang pora) representing youth discipline and professionalism during the official GenRe city-level event.",
  icon: "🎖️",
  certificateImg: sertifRemaja,
  category: "Non-Academic"
},
  {
  id: 14,
  title: "2nd Runner-Up – National LKBB SUPRAIS Competition",
  event: "SMK Negeri 10 Surabaya",
  year: "2024",
  status: "2nd Runner Up",
  description: "Achieved national-level recognition in a marching drill competition, demonstrating discipline, teamwork, and coordinated performance.",
  icon: "🥉",
  certificateImg: sertifSuprais,
  category: "Non-Academic"
},
  {
  id: 15,
  title: "3rd Place – LKBB Trimatra (Mula Category)",
  event: "SMK Negeri 6 Malang",
  year: "2024",
  status: "3rd Place Winner",
  description: "Achieved 3rd place in the Mula category of a marching drill competition, demonstrating discipline, teamwork, and precise coordination.",
  icon: "🥉",
  certificateImg: sertifTrimatra,
  category: "Non-Academic"
},
  {
  id: 16,
  title: "1st Runner-Up LKBB Abirama Competition",
  event: "SMA Negeri 2 Pasuruan",
  year: "2022",
  status: "1st Runner-Up",
  description: "Achieved 1st runner-up placement in a marching drill competition, demonstrating discipline, teamwork, and coordinated performance.",
  icon: "🥈",
  certificateImg: sertifAbirama,
  category: "Non-Academic"
},
  {
  id: 17,
  title: "3rd Place – LKBB Cleo Patra (Mula Category)",
  event: "SMP Negeri 2 Krembung",
  year: "2024",
  status: "3rd Place Winner",
  description: "Achieved 3rd place in the Mula category of a marching drill competition, demonstrating discipline, teamwork, and coordinated performance.",
  icon: "🥉",
  certificateImg: sertifCleopatra,
  category: "Non-Academic"
},
  {
  id: 18,
  title: "2nd Place – National LKBB Proklamator (Madya Category)",
  event: "SMA Negeri 1 Blitar",
  year: "2024",
  status: "2nd Place Winner",
  description: "Achieved 2nd place in the Madya category at a national marching drill competition, demonstrating discipline, teamwork, and high-level coordination.",
  icon: "🥈",
  certificateImg: sertifProklamator,
  category: "Non-Academic"
}
  
];

export const ABOUT_DATA = {
  hobbies: ["Eat", "Sleep", "Shower", "Study", "Exercise", "Play Mobile Legends", "Black Coffee"],
  focus: ["Software Engineering", "Artificial Intelligence", "Business"],
  bio: "Software Engineer and Public Speaker currently pursuing a degree in Informatics Engineering at Jember State Polytechnic. Passionate about building scalable web applications while continuously improving communication and leadership skills through public speaking. I believe that strong technology and clear communication are the foundation for creating solutions that truly make an impact.",
  image: profileImg // Gunakan foto portrait yang tanpa background
};