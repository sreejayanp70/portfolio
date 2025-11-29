import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink } from './types';

export const PROFILE = {
  name: "Sreejayan Vasudevan",
  title: "Geophysicist | Project Manager",
  location: "King Fahd District, Riyadh, KSA",
  email: "sreejayanp@gmail.com",
  phone: "+966 54 8766162",
  linkedin: "https://www.linkedin.com/in/sreejayanp",
  summary: "Results-driven professional with over 12 years of experience enhancing efficiency, productivity, and revenue in the geospatial sector. Expert in managing large-scale infrastructure and Underground Utility Mapping (SUE) projects across Saudi Arabia. Proficient in GPR Technology, GIS solutions (ArcGIS, AutoCAD), and milestone-driven execution for high-profile clients like NEOM, Green Riyadh Program, RCRC, and SWCC."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Sr. Project Manager",
    company: "Utilities Survey Company for Geophysical Services Ltd. (UTS)",
    location: "Riyadh, KSA",
    period: "Jan 2023 - Present",
    description: [
      "Lead and manage complex projects, overseeing a team of up to 40 professionals (Geophysicists, Surveyors) for seamless execution.",
      "Spearhead RFP response development and client management, strategically deciding on roles as a prime supplier or subcontractor.",
      "Manage project data quality and integrity, liaising with suppliers for Ortho Image, LiDAR Data, and 3D platform consultancy.",
      "Key Project: Green Riyadh Program – Developed project methodology and led field verification/data collection."
    ]
  },
  {
    id: "exp2",
    role: "Head of Utility Mapping Department",
    company: "Utilities Survey Company for Geophysical Services Ltd. (UTS)",
    location: "Riyadh, KSA",
    period: "Nov 2017 - Jan 2023",
    description: [
      "Managed project execution, delivery, team building, and supplier relations for data conversion and image delivery.",
      "Developed standards for field statistics and data representation using GIS maps.",
      "Implemented quality standards and procedures, ensuring adherence to Service Level Agreements (SLA).",
      "Key Project: NEOM – Landscapes of The Line (LOTL): Managed Lidar Survey and 3D Model creation for NEOM's design consultants."
    ]
  },
  {
    id: "exp3",
    role: "Geophysicist",
    company: "Utilities Survey Company for Geophysical Services Ltd. (UTS)",
    location: "Riyadh, KSA",
    period: "Jul 2013 - Nov 2017",
    description: [
      "Coordinated and conducted geophysical surveys, including Acquisition, Processing, and Interpretation.",
      "Executed field planning and marking of profiles on-site through GPS, preparing survey reports, VLF & VES graphs.",
      "Key Project: Riyadh Metro – Conducted Underground Utility mapping for 6 metro lines."
    ]
  },
  {
    id: "exp4",
    role: "Senior Geophysicist",
    company: "Water Field Technologies Pvt Ltd",
    location: "India",
    period: "Sep 2012 - Dec 2012",
    description: [
      "Conducted all kinds of Geophysical Surveys and data processing.",
      "Coordinated acquisition, processing, and interpretation of various Geophysical data."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj1",
    title: "Green Riyadh Program",
    role: "Project Manager",
    client: "RCRC",
    description: "Landscape Survey for Neighborhoods. Managed data assessment, verification, and field collection for Topographic, Vegetation, and Underground Utilities. Led a team of 40 people equipped with GPR, Radio detectors, MMS, and GPS.",
    tags: ["Project Management", "GPR", "MMS", "Topographic Survey"]
  },
  {
    id: "proj2",
    title: "NEOM - Landscapes of The Line (LOTL)",
    role: "Head of Dept",
    client: "NEOM",
    description: "Sharma Valley Lidar Survey and 3D Model. Managed Lidar & Underground Survey to provide a 3D virtual model for NEOM's design consultants to simulate buildings and structures.",
    tags: ["Lidar", "3D Modeling", "Underground Survey", "NEOM"]
  },
  {
    id: "proj3",
    title: "Riyadh Metro",
    role: "Geophysicist",
    client: "Riyadh Metro",
    description: "Conducted extensive Underground Utility mapping for 6 metro lines, ensuring safe excavation and infrastructure planning.",
    tags: ["Utility Mapping", "GPR", "Metro Infrastructure"]
  },
  {
    id: "proj4",
    title: "Jeddah Storm Water Master Plan",
    role: "Senior Geophysicist",
    client: "Jeddah Municipality",
    description: "Topographic & Underground Utility Mapping to support the master plan for storm water management in Jeddah.",
    tags: ["Topographic Survey", "Utility Mapping", "Municipality"]
  },
  {
    id: "proj5",
    title: "Jeddah Central Development",
    role: "Project Manager",
    client: "WSP",
    description: "Topographic + Underground Utility Mapping + 3D Modelling on King Abdulaziz Road in Jeddah City for investigation & validation study.",
    tags: ["3D Modelling", "WSP", "Urban Development"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Expertise",
    items: ["GPR Technology", "Subsurface Utility Engineering (SUE)", "Geophysical Surveys", "Lidar Data Processing", "VLF & VES", "GPS/GNSS", "Utility Mapping"]
  },
  {
    category: "Software & Tools",
    items: ["ArcGIS", "AutoCAD", "Reflex W", "Trimble Business Center", "GSSI Radan", "Geolitix", "Applanix POSpac", "MS Project"]
  },
  {
    category: "Management & Soft Skills",
    items: ["Project Management", "Team Leadership", "Stakeholder Management", "RFP Development", "Cost & Time Management", "Process Optimization"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "M.Sc. (Applied Geophysics)",
    institution: "MS University",
    location: "India"
  },
  {
    degree: "B.Sc. (Physics)",
    institution: "Calicut University",
    location: "India"
  }
];

export const LANGUAGES = ["English", "Hindi", "Malayalam", "Tamil"];

export const SOCIALS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sreejayanp",
    icon: "linkedin"
  },
  {
    platform: "Email",
    url: "mailto:sreejayanp@gmail.com",
    icon: "mail"
  },
  {
    platform: "Phone",
    url: "tel:+966548766162",
    icon: "phone"
  }
];