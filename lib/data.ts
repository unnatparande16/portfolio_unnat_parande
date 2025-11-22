export const personalInfo = {
  name: "Unnat Parande",
  title: "Geospatial Engineer | GIS & Remote Sensing Specialist",
  tagline: "Understanding the world, one pixel at a time...",
  location: "Enschede, Netherlands",
  email: "unnatparande16@gmail.com",
  phone: "+91 9820296080",
  description:
    "Geospatial professional with experience in GIS, Remote Sensing and spatial databases. Skilled in SQL and Data integration, with a strong interest in leveraging spatial data engineering to deliver efficient, real-world solutions.",
  currentStatus:
    "MSc Student at University of Twente (ITC Faculty) - GIS and Earth Observation specializing in Disaster Resilience",
  social: {
    linkedin: "https://in.linkedin.com/in/unnat-parande-3bb984179", // Updated linkedin URL
  },
}

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Education", href: "/education" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
]

export const experiences = [
  {
    company: "ESRI India",
    location: "Mumbai, India",
    position: "Engineer",
    duration: "June 2024 - July 2025",
    responsibilities: [
      "Developed and maintained custom GIS applications for Brihanmumbai Municipal Corporation (BMC) using Python, JavaScript, and Esri platforms",
      "Provided on-site technical support, ensuring seamless integration of geospatial solutions into BMC's workflows",
      "Utilized Linux, SQL, and Java to optimize application performance and data management",
    ],
    badge: "Former Program Ambassador at CEPT University",
  },
  {
    company: "ESRI India",
    location: "Noida, India",
    position: "Intern",
    duration: "January 2024 - June 2024",
    responsibilities: [
      "Conducted InSAR-based land subsidence mapping in Kolkata for thesis",
      "Utilized Sentinel-1 data and SNAP software",
      "Identified areas of high risk and developed mitigation strategies",
    ],
  },
  {
    company: "Centre for Environmental and Social Concerns (CESC)",
    location: "Ahmedabad, India",
    position: "Intern",
    duration: "May 2023 - July 2023",
    responsibilities: [
      "Used Landsat-5 and Landsat-8 data to observe variation of Trees Outside Forest",
      "Analyzed Rupen River Basin in Northern Gujarat, India",
    ],
  },
]

export const projects = [
  {
    id: "subsidence-kolkata",
    title: "Mapping Subsidence in Kolkata using InSAR Techniques",
    type: "Master's Thesis",
    date: "August 2022 - April 2024",
    institution: "CEPT University",
    description:
      "Created a data processing pipeline for Sentinel-1 L1-C data to quantify subsidence in Kolkata over a one-year period. Established correlation between land subsidence and groundwater overexploitation.",
    image: "/images/land-subsidence.png",
    technologies: ["Sentinel-1", "InSAR", "SNAP", "Python", "Remote Sensing"],
    link: "https://portfolio.cept.ac.in/drp/ge4050-drp000917-spring-2024/pge22374-spring-2024-ge4050-pge22374",
    modalContent: {
      detailedDescription:
        "Comprehensive InSAR-based land subsidence mapping project that developed an automated data processing pipeline for Sentinel-1 L1-C data. The study quantified subsidence patterns across Kolkata metropolitan area over a one-year period, identifying critical zones of ground displacement. Research established strong statistical correlations between observed subsidence patterns and groundwater overexploitation, providing valuable insights for urban planning and disaster risk management.",
      keyAchievements: [
        "Developed automated Sentinel-1 data processing pipeline",
        "Quantified subsidence patterns with millimeter-level precision",
        "Identified high-risk zones for urban planning",
        "Established groundwater-subsidence correlation model",
      ],
      technicalApproach:
        "Utilized Differential InSAR (DInSAR) techniques with Sentinel-1 SAR imagery, processed through SNAP software. Implemented time-series analysis to track subsidence evolution and validated results with ground truth data.",
    },
  },
  {
    id: "indoor-air-quality",
    title: "Assessing Indoor Air Quality for CEPT University Campus",
    date: "July 2023 - November 2023",
    institution: "CEPT University",
    description:
      "Conducted spatiotemporal analysis of PM2.5, PM10, and CO2 levels across CEPT campus using 3D modelling and GIS to identify indoor air pollution hotspots and suggested mitigation measures.",
    image: "/images/indoor-20air-20quality.png",
    technologies: ["GIS", "3D Modelling", "Spatial Analysis", "Environmental Monitoring"],
    link: "https://portfolio.cept.ac.in/ft/geospatial-modelling-and-application-ge4001-monsoon-2023/assessing-the-indoor-air-quality-for-the-cept-campus-monsoon-2023-pge22374",
    modalContent: {
      detailedDescription:
        "Comprehensive indoor air quality assessment combining real-time monitoring, 3D spatial modelling, and GIS analysis. The project mapped pollutant distribution patterns across multiple campus buildings, identifying critical hotspots and temporal variations in air quality parameters.",
      keyAchievements: [
        "Mapped PM2.5, PM10, and CO2 levels across 15+ campus locations",
        "Created 3D visualization of pollutant distribution",
        "Identified 5 major indoor air pollution hotspots",
        "Developed evidence-based mitigation strategies",
      ],
      technicalApproach:
        "Deployed sensor network for continuous monitoring. Used GIS interpolation techniques and 3D modelling to visualize pollutant dispersion patterns. Applied spatiotemporal analysis to identify peak pollution periods and sources.",
    },
  },
  {
    id: "rajkot-economy",
    title: "Boosting the Local Economy of Rajkot",
    date: "January 2023 - April 2023",
    institution: "CEPT University",
    description:
      "Surveyed gig workers in Rajkot to assess working conditions. Employed Analytical Hierarchy Process (AHP) with weighted overlay analysis to identify suitable locations for rest points, food joints, and local markets.",
    image: "/images/smart-economy.png",
    technologies: ["GIS", "AHP", "Multi-Criteria Decision Analysis", "Urban Planning", "Field Survey"],
    link: "https://portfolio.cept.ac.in/ft/gis-for-smart-cities-ge4003-spring-2023/boosting-the-local-economy-of-rajkot-spring-2023-pge22374",
    award: "Presented at International Land Use Symposium (ILUS) 2023",
    modalContent: {
      detailedDescription:
        "Participatory urban planning project focused on improving infrastructure for gig economy workers in Rajkot. Combined primary field surveys with advanced spatial analysis techniques to identify optimal locations for support facilities that would enhance working conditions and economic opportunities for informal sector workers.",
      keyAchievements: [
        "Surveyed 200+ gig workers across Rajkot",
        "Applied AHP-based multi-criteria decision analysis",
        "Identified 12 optimal locations for support infrastructure",
        "Presented research at ILUS 2023 conference",
        "Developed replicable methodology for other cities",
      ],
      technicalApproach:
        "Conducted extensive field surveys and stakeholder interviews. Used Analytical Hierarchy Process (AHP) to weight multiple criteria including accessibility, density of workers, land availability, and proximity to existing infrastructure. Applied weighted overlay analysis in GIS to generate suitability maps.",
      conferenceLink: "https://zenodo.org/records/10060261",
    },
  },
  {
    id: "modal-interactions",
    title: "Modal Interactions in Multi-modal Transit System",
    date: "July 2022 - November 2022",
    institution: "CEPT University",
    description:
      "Mapped Ahmedabad's modes of public transit, calculated service areas, and assessed accessibility to multi-modal transit in the city.",
    image: "/images/multi-modal-transit.png",
    technologies: ["GIS", "Network Analysis", "Transport Planning", "Accessibility Modelling"],
    link: "https://portfolio.cept.ac.in/ft/geovisualization-and-spatial-analysis-studio-ge4004-monsoon-2022/modal-interactions-in-a-multi-modal-transport-systems-monsoon-2022-pge22374",
    modalContent: {
      detailedDescription:
        "Comprehensive analysis of Ahmedabad's public transportation network, evaluating the integration and accessibility of various transit modes including metro, BRT, and bus services. The project assessed service coverage, identified gaps in multi-modal connectivity, and provided recommendations for improved transit integration.",
      keyAchievements: [
        "Mapped complete public transit network of Ahmedabad",
        "Calculated service areas for all major transit modes",
        "Assessed multi-modal connectivity gaps",
        "Identified underserved areas lacking transit access",
        "Recommended integration improvements",
      ],
      technicalApproach:
        "Used network analysis and service area calculations to map transit coverage. Applied accessibility indices to quantify ease of access to multi-modal transport. Performed spatial overlay analysis to identify gaps and opportunities for improved connectivity.",
    },
  },
]

export const education = [
  {
    degree: "Master of Science (MSc)",
    institution: "University of Twente - Faculty ITC",
    location: "Enschede, Netherlands",
    duration: "September 2025 - Current",
    fieldOfStudy: "GIS and Earth Observation",
    specialization: "Disaster Resilience",
    website: "https://www.itc.nl/",
    status: "Currently Enrolled",
  },
  {
    degree: "Master of Technology (M.Tech)",
    institution: "CEPT University",
    location: "Ahmedabad, India",
    duration: "August 2022 - April 2024",
    fieldOfStudy: "Geomatics",
    grade: "3.8/5.0",
    credits: 14,
    thesis: {
      title: "Mapping Subsidence in Kolkata using InSAR Techniques",
      link: "https://betarepo.cept.ac.in/items/7e7ae0b5-5fd7-4db9-9224-c49a087453e5/full?obo.page=1#p-obo",
    },
    website: "https://cept.ac.in",
    achievements: [
      "Distinguished Student Award - University level recognition (January 2025)",
      "50% Merit-Based Scholarship recipient",
    ],
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Government College of Engineering Aurangabad",
    location: "Aurangabad, Maharashtra, India",
    duration: "July 2018 - May 2022",
    fieldOfStudy: "Civil Engineering",
    grade: "7.75/10.0",
    website: "https://geca.ac.in",
  },
]

export const awards = [
  {
    title: "Distinguished Student Award",
    institution: "CEPT University",
    date: "January 18, 2025",
    description:
      "University level award presented at CEPT University convocation, recognizing outstanding academic achievement and contributions",
    significance: "Highest recognition for student excellence",
  },
  {
    title: "International Land Use Symposium (ILUS) 2023 - Poster Presentation",
    location: "Ahmedabad, India",
    date: "October 2023",
    description:
      "Selected for poster presentation titled 'A Multi-Criteria Decision Analysis for Locating Optimal Food Zones, Rest Points and Local Markets in Rajkot: Enhancing Urban Livability and Efficiency for the Gig Economic Sector'",
    link: "https://zenodo.org/records/10060261",
    conferenceLink: "https://ilus2023.ioer.info/",
  },
  {
    title: "50% Merit-Based Scholarship",
    institution: "CEPT University",
    duration: "2022-2024",
    description: "Awarded merit scholarship for M.Tech Geomatics program based on academic excellence",
  },
]

export const skills = {
  programming: [
    { name: "Python", proficiency: "Advanced", useCases: ["Data Processing", "Automation", "GIS Development"] },
    { name: "SQL", proficiency: "Advanced", useCases: ["Database Management", "Spatial Queries", "Data Integration"] },
    { name: "JavaScript", proficiency: "Intermediate", useCases: ["Web GIS Applications", "Esri Platforms"] },
    { name: "R Programming", proficiency: "Intermediate", useCases: ["Statistical Analysis", "Data Visualization"] },
    { name: "Java", proficiency: "Basic", useCases: ["Application Optimization"] }, // Added Java use case
  ],
  software: [
    { name: "ArcGIS Pro", proficiency: "Advanced", type: "Primary Tool" },
    { name: "QGIS", proficiency: "Advanced", type: "Primary Tool" },
    { name: "Google Earth Engine", proficiency: "Advanced", type: "Cloud Platform" },
    { name: "SNAP", proficiency: "Advanced", type: "SAR Processing" },
    { name: "ERDAS Imagine", proficiency: "Intermediate" },
    { name: "ENVI", proficiency: "Intermediate" },
    { name: "CityEngine", proficiency: "Intermediate", type: "3D Urban Modeling" },
    { name: "AutoCAD", proficiency: "Intermediate", type: "CAD Design" }, // Added AutoCAD type
  ],
  specialized: [
    { name: "InSAR Analysis", description: "Differential InSAR for land subsidence mapping" },
    { name: "Sentinel-1 SAR", description: "SAR data processing and analysis" },
    { name: "Landsat Series", description: "Multi-temporal analysis and change detection" },
    { name: "Esri Platforms", description: "Custom application development" },
    { name: "Spatial Databases", description: "PostgreSQL/PostGIS, SQL Developer" },
    { name: "Transport Planning", description: "Analysis of multi-modal transit systems" }, // Added Transport Planning
  ],
  tools: [
    { name: "Linux", proficiency: "Intermediate" },
    { name: "Java", proficiency: "Basic", context: "Application optimization" },
    { name: "AutoCAD", proficiency: "Intermediate" },
    { name: "Google Earth", proficiency: "Advanced" },
    { name: "MS Office Suite", proficiency: "Advanced", tools: ["Word", "Excel", "PowerPoint"] },
    { name: "Adobe Premiere Pro", proficiency: "Intermediate", context: "Video editing for outreach" },
    { name: "MATLAB", proficiency: "Intermediate", context: "Data analysis and algorithm development" }, // Added MATLAB
  ],
}

export const competencies = [
  {
    name: "GIS Development",
    description: "Custom application development using Python, JavaScript, and Esri platforms",
  },
  {
    name: "Remote Sensing",
    description: "Multi-spectral and SAR imagery analysis for environmental monitoring",
  },
  {
    name: "InSAR Analysis",
    description: "Advanced interferometric techniques for ground deformation monitoring",
  },
  {
    name: "Spatial Database Management",
    description: "Design, optimization, and management of spatial databases",
  },
  {
    name: "Data Integration",
    description: "Integration of diverse spatial datasets from multiple sources",
  },
  {
    name: "Urban Planning Analysis",
    description: "Spatial analysis for smart cities and transport planning",
  },
  {
    name: "Environmental Monitoring",
    description: "Air quality assessment and forest cover analysis",
  },
  {
    name: "Multi-Criteria Decision Analysis",
    description: "AHP and weighted overlay for site suitability analysis",
  },
  {
    name: "3D Spatial Modeling",
    description: "3D visualization and analysis for urban environments",
  },
  {
    name: "Disaster Resilience",
    description: "Specialization in disaster risk assessment and mitigation",
  },
  {
    name: "Transport Planning",
    description: "GIS-based analysis for multi-modal transport systems",
  }, // Added Transport Planning
]

export const services = [
  {
    title: "GIS Application Development",
    description: "Custom GIS solutions using Python, JavaScript, and Esri platforms",
  },
  {
    title: "Remote Sensing Analysis",
    description: "Satellite imagery analysis for environmental monitoring and change detection",
  },
  {
    title: "InSAR & Land Subsidence Studies",
    description: "Advanced SAR interferometry for ground deformation monitoring",
  },
  {
    title: "Spatial Data Engineering",
    description: "Database design, optimization, and integration of spatial data",
  },
  {
    title: "Urban & Transport Planning",
    description: "GIS-based analysis for smart cities and multi-modal transport systems",
  },
  {
    title: "Environmental Consulting",
    description: "Air quality assessment and land use change analysis",
  },
]
