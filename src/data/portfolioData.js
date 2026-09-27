export const PERSONAL_INFO = {
  name: "Kubendiran M",
  role: "Computer Science (AI) Undergraduate",
  tagline: "Building intelligent, real-world systems with AI, Computer Vision & Full-Stack Development",
  subtitles: [
    "AI Engineer",
    "Full-Stack Developer",
    "Computer Vision Enthusiast",
    "Machine Learning Explorer"
  ],
  bio: "Passionate Computer Science (Artificial Intelligence) undergraduate at Sathyabama Institute of Science & Technology (2023–2027) with a CGPA of 8.6/10. I specialize in architecting intelligent full-stack applications, robust biometric computer vision systems, and edge IoT solutions that bridge the gap between artificial intelligence and real-world utility.",
  email: "kuben3456@gmail.com",
  phone: "+91-9344715210",
  location: "Chennai, Tamil Nadu, India",
  status: "Available for Software Development & AI Roles",
  github: "https://github.com/Kube030106",
  linkedin: "https://linkedin.com/in/m-kubendiran-2546702b5",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Academic CGPA", value: "8.6 / 10", description: "Sathyabama Institute of Tech" },
    { label: "Core Projects", value: "5+", description: "AI, Full-Stack & IoT Systems" },
    { label: "Industry Experience", value: "1", description: "Software Dev Internship" },
    { label: "Certifications", value: "2", description: "NPTEL & HCL GUVI Verified" }
  ],
  softSkills: [
    { name: "Problem Solving", icon: "Brain", desc: "Algorithmic breakdown and systematic debugging" },
    { name: "Communication", icon: "MessagesSquare", desc: "Clear technical documentation & cross-functional alignment" },
    { name: "Leadership", icon: "Award", desc: "Guiding project initiatives & mentoring peers" },
    { name: "Time Management", icon: "Clock", desc: "Milestone-driven execution & sprint consistency" },
    { name: "Critical Thinking", icon: "Zap", desc: "Evaluating trade-offs in model architecture & system design" },
    { name: "Team Collaboration", icon: "Users", desc: "Git-based Agile team workflows & code reviews" }
  ],
  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Tamil", proficiency: "Native / Bilingual Proficiency" },
    { language: "Telugu", proficiency: "Conversational / Speaking Proficiency" }
  ]
};

export const EDUCATION = [
  {
    degree: "B.E. Computer Science & Engineering (Artificial Intelligence)",
    institution: "Sathyabama Institute of Science & Technology",
    location: "Chennai, India",
    type: "Full-Time",
    period: "2023 – 2027 (Expected)",
    score: "CGPA: 8.6 / 10",
    badge: "Current Degree",
    description: "Specialized undergraduate program focusing on modern artificial intelligence, deep learning architectures, computer vision, and scalable software engineering.",
    courses: [
      "Machine Learning & Deep Learning",
      "Computer Vision & Pattern Recognition",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems & Linux Internals",
      "Computer Networks & Protocols"
    ],
    highlights: [
      "Maintained top-percentile academic standing with consistent 8.6 CGPA",
      "Active participant in technical symposiums and AI workshops",
      "Led student project initiatives in computer vision & edge computing"
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Aditya Vidyashram",
    location: "India",
    type: "Full-Time",
    period: "Completed 2023",
    score: "73%",
    badge: "Senior Secondary",
    description: "Concentration in Science and Mathematics, laying the rigorous mathematical basis for machine learning algorithms.",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    highlights: ["Strong foundation in calculus, algebra, and classical mechanics"]
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "Aditya Vidyashram",
    location: "India",
    type: "Full-Time",
    period: "Completed 2021",
    score: "86%",
    badge: "Secondary",
    description: "Distinguished academic record across general sciences, mathematics, and computing fundamentals.",
    courses: ["Mathematics", "Science", "Social Sciences", "English"],
    highlights: ["Graduated with distinction with an 86% cumulative score"]
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "all",
    name: "All Skills"
  },
  {
    id: "languages",
    name: "Programming Languages"
  },
  {
    id: "web",
    name: "Web & Frontend"
  },
  {
    id: "ai-data",
    name: "AI, ML & Libraries"
  },
  {
    id: "database-cloud",
    name: "Databases & Cloud"
  },
  {
    id: "core-cs",
    name: "Core CS & Hardware"
  }
];

export const SKILLS = [
  // Languages
  { name: "Python", category: "languages", level: 92, icon: "FileCode", popular: true, tag: "AI / Backend" },
  { name: "Java", category: "languages", level: 82, icon: "Coffee", popular: false, tag: "OOP / Systems" },
  { name: "C", category: "languages", level: 80, icon: "Cpu", popular: false, tag: "Low-Level / Firmware" },
  { name: "SQL", category: "languages", level: 88, icon: "Database", popular: true, tag: "Queries / RDBMS" },

  // Web & Frontend
  { name: "ReactJS", category: "web", level: 88, icon: "Code", popular: true, tag: "SPA / Modern Web" },

  // Databases & Cloud
  { name: "Supabase", category: "database-cloud", level: 85, icon: "Cloud", popular: true, tag: "Postgres BaaS / Auth" },
  { name: "PostgreSQL", category: "database-cloud", level: 86, icon: "Database", popular: true, tag: "Relational Modeling" },

  // AI & Data Libraries
  { name: "OpenCV", category: "ai-data", level: 90, icon: "Eye", popular: true, tag: "Computer Vision" },
  { name: "DeepFace / ArcFace", category: "ai-data", level: 86, icon: "ScanFace", popular: true, tag: "Biometric AI" },
  { name: "Plotly", category: "ai-data", level: 84, icon: "BarChart3", popular: false, tag: "Interactive Dashboards" },
  { name: "Git & GitHub", category: "ai-data", level: 90, icon: "GitBranch", popular: true, tag: "Version Control" },

  // Core CS & Hardware
  { name: "Data Structures & Algorithms", category: "core-cs", level: 86, icon: "Workflow", popular: true, tag: "Problem Solving" },
  { name: "Object-Oriented Programming (OOP)", category: "core-cs", level: 88, icon: "Boxes", popular: false, tag: "Architecture" },
  { name: "DBMS Internals", category: "core-cs", level: 88, icon: "HardDrive", popular: false, tag: "ACID & Indexing" },
  { name: "Operating Systems", category: "core-cs", level: 82, icon: "Terminal", popular: false, tag: "Processes & Threads" },
  { name: "Computer Networks", category: "core-cs", level: 80, icon: "Wifi", popular: false, tag: "TCP/IP & Sockets" },
  { name: "Machine Learning & DL", category: "core-cs", level: 88, icon: "BrainCircuit", popular: true, tag: "Neural Networks" },
  { name: "Computer Vision", category: "core-cs", level: 90, icon: "Camera", popular: true, tag: "Image Processing" },
  { name: "IoT & Embedded Systems", category: "core-cs", level: 84, icon: "Radio", popular: false, tag: "Sensors & Arduino" }
];

export const PROJECTS = [
  {
    id: "datatalk",
    title: "DataTalk – Text-to-SQL & Data Visualization System",
    shortTitle: "DataTalk",
    subtitle: "Natural language to SQL interface with dynamic analytics dashboards",
    category: "Full-Stack AI",
    featured: true,
    techStack: ["ReactJS", "Plotly", "Supabase", "Tailwind CSS", "Python"],
    image: "/projects/datatalk.jpg",
    githubUrl: "https://github.com/Kube030106",
    liveDemoUrl: "#",
    description: "An intelligent query translation engine that empowers non-technical users to query enterprise PostgreSQL databases using plain English conversational requests, returning instant SQL translations and automated interactive Plotly visual charts.",
    architecture: "Client built with React & Tailwind CSS communicating with a Supabase PostgreSQL backend. Natural language queries are tokenized, processed for entity extraction, mapped to database schemas, and translated into optimized SQL. The resultant dataset triggers an automatic charting engine with dynamic Plotly visualizations.",
    keyFeatures: [
      "Natural language to executable PostgreSQL query synthesis",
      "Dynamic data charting engine (bar, line, scatter, donut, heatmaps)",
      "Real-time database connectivity via Supabase with secure session management",
      "Query history logging, execution latency metrics, and CSV/JSON export options",
      "Responsive analytics dashboard with custom filter presets"
    ],
    metric: "Sub-second query generation & automated visualization rendering"
  },
  {
    id: "arcface-student-id",
    title: "Student Identification System using ArcFace",
    shortTitle: "Student ID (ArcFace)",
    subtitle: "High-precision face recognition-based automated student identification",
    category: "Computer Vision",
    featured: true,
    techStack: ["Python", "OpenCV", "DeepFace (ArcFace)", "Flask", "NumPy"],
    image: "/projects/arcface.jpg",
    githubUrl: "https://github.com/Kube030106",
    liveDemoUrl: "#",
    description: "A biometric identification platform that utilizes Additive Angular Margin Loss (ArcFace) to generate highly discriminative 512-dimensional facial embeddings, enabling ultra-fast, robust student identification under diverse campus lighting and angles.",
    architecture: "Video streams captured via OpenCV are pre-processed with MTCNN face alignment. ArcFace extracts high-dimensional normalized embeddings that are matched against a pre-indexed vector database using cosine distance metrics. A lightweight Flask server exposes real-time verification endpoints.",
    keyFeatures: [
      "ArcFace deep metric learning for state-of-the-art verification accuracy",
      "Real-time facial landmark alignment and bounding box rendering",
      "Resilient performance across illumination shifts, occlusions, and head poses",
      "Automated attendance logging with timestamp verification",
      "Intuitive administration interface for enrolling new student biometric vectors"
    ],
    metric: "99.4% verification accuracy with sub-50ms embedding inference"
  },
  {
    id: "face-recog-system",
    title: "Real-Time Face Recognition Web System",
    shortTitle: "Face Recognition System",
    subtitle: "End-to-end facial recognition dashboard with real-time stream processing",
    category: "Computer Vision",
    featured: false,
    techStack: ["Python", "OpenCV", "Flask", "HTML5", "CSS3"],
    image: "/projects/facerecog.jpg",
    githubUrl: "https://github.com/Kube030106",
    liveDemoUrl: "#",
    description: "A production-oriented real-time facial recognition system featuring a web-based surveillance interface, multi-subject tracking, real-time FPS telemetry, and automated visitor entry logging.",
    architecture: "Leverages multithreaded OpenCV frame capture feeding into a Haar Cascade & DNN face detector. Recognition pipelines extract face descriptors and classify identities in real time. Streaming is delivered via Flask multipart HTTP camera feeds to a glassmorphic web portal.",
    keyFeatures: [
      "Multi-camera concurrent video stream processing",
      "Real-time system telemetry: FPS counter, detection latency, and CPU metrics",
      "Visitor registration portal with immediate model vector update",
      "Live activity log and unknown individual security alerts",
      "Low CPU overhead optimization through threaded frame buffers"
    ],
    metric: "Maintains 55+ FPS real-time feed with minimal latency"
  },
  {
    id: "unicorn-prediction",
    title: "Startup Unicorn Prediction System",
    shortTitle: "Unicorn Prediction ML",
    subtitle: "Supervised machine learning model predicting high-growth startup valuation",
    category: "Machine Learning",
    featured: false,
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    image: "/projects/unicorn.jpg",
    githubUrl: "https://github.com/Kube030106",
    liveDemoUrl: "#",
    description: "A predictive analytics machine learning platform that evaluates historical venture capital datasets, funding rounds, sector dynamics, and team composition metrics to predict the probability of early-stage startups attaining unicorn ($1B+) status.",
    architecture: "Data preprocessing pipeline handling missing value imputations, categorical encoding, and feature scaling. Evaluated Logistic Regression, Random Forest, and Gradient Boosting Classifiers with hyperparameter tuning via GridSearchCV. Model interpretability validated using feature importance weighting.",
    keyFeatures: [
      "Rigorous exploratory data analysis on global venture funding trends",
      "Ensemble classifier achieving balanced recall and high precision",
      "Feature importance ranking identifying top predictors of unicorn trajectory",
      "Interactive prediction sandbox accepting user-defined startup parameters",
      "Exportable analytical risk & potential assessment reports"
    ],
    metric: "0.94 ROC-AUC score across diverse test industry cohorts"
  },
  {
    id: "weathersync-iot",
    title: "Weather Sync – IoT Environmental Monitoring System",
    shortTitle: "Weather Sync IoT",
    subtitle: "Real-time IoT environmental telemetry with automated LED feedback control",
    category: "IoT & Hardware",
    featured: false,
    techStack: ["Arduino", "C++", "DHT22", "Embedded C", "Sensors"],
    image: "/projects/weathersync.jpg",
    githubUrl: "https://github.com/Kube030106",
    liveDemoUrl: "#",
    description: "An embedded hardware monitoring station engineered with an Arduino microcontroller and calibrated DHT22 digital sensors to track ambient temperature, relative humidity, and environmental indexes, featuring automated multi-color LED alert indicators.",
    architecture: "Arduino Uno running optimized C++ firmware that reads digital signals from the DHT22 sensor via single-bus protocol. Firmware computes Heat Index and triggers threshold-based logic driving addressable status LEDs while serial telemetry feeds into an external monitoring logger.",
    keyFeatures: [
      "Accurate real-time temperature and relative humidity sampling",
      "Dynamic LED status signaling environmental safety thresholds",
      "Fail-safe sensor error handling and automated diagnostic heartbeat",
      "Energy-efficient polling loop minimizing board thermal dissipation",
      "Modular firmware architecture prepared for WiFi/LoRa telemetry expansion"
    ],
    metric: "24/7 continuous sensor uptime with ±0.5°C thermal precision"
  }
];

export const EXPERIENCE = [
  {
    role: "Software Developer Intern",
    company: "Rudhra Info Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "1 Month Intensive Internship",
    type: "On-Site / Industry Internship",
    badge: "Verified Industry Experience",
    description: "Contributed to front-end and back-end web application development, collaborative engineering, and codebase optimization.",
    responsibilities: [
      "Engineered responsive user interface modules with HTML5, CSS3, and JavaScript, adhering to modern UI design guidelines.",
      "Integrated backend endpoints with Python services, optimizing data exchange format and response structures.",
      "Conducted thorough debugging and cross-browser regression testing, resolving crucial layout glitches and runtime exceptions.",
      "Maintained production code repositories using Git and GitHub workflows, including pull requests, code reviews, and branch management."
    ],
    skillsLearned: ["HTML5", "CSS3", "JavaScript", "Python", "Git", "GitHub", "System Debugging"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    category: "Computer Science Core",
    icon: "Database",
    badge: "Elite Certification",
    period: "Verified Credential",
    description: "Comprehensive certification covering relational data models, ER diagrams, advanced SQL queries, normal forms (1NF–BCNF), concurrency control, transaction isolation, and B+ tree indexing.",
    skillsCovered: ["Relational Database Theory", "SQL Query Optimization", "Normalization", "Transactions & ACID", "Indexing Techniques"]
  },
  {
    title: "JavaScript Programming",
    issuer: "HCL (GUVI Geek Network)",
    category: "Full-Stack Development",
    icon: "Code",
    badge: "Industry Certified",
    period: "Verified Credential",
    description: "Industry-aligned certification mastering modern JavaScript (ES6+), functional programming patterns, DOM event management, Promises, async/await, and RESTful API integrations.",
    skillsCovered: ["Modern ES6+ Syntax", "Asynchronous JavaScript", "DOM Manipulation", "Fetch & REST APIs", "Event Loop Mechanics"]
  }
];
