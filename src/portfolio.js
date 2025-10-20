/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maitreya Sanjay Vaghulade",
  title: "Hi, Maitreya here",
  subTitle: emoji(
    "I’m Maitreya Sanjay Vaghulade — M.S. Computer Science @ Stony Brook University (GPA 4.0/4.0, May 2027). Previously B.Tech in Computer Engineering from University of Mumbai (GPA 3.7/4.0). I build distributed systems and ML products; experienced with Python, Go, Java, JavaScript/TypeScript, and SQL. Comfortable across AWS/Azure, Kubernetes, Docker, Terraform, CI/CD, and observability (OpenTelemetry, Grafana). Internship highlights: MITACS Globalink Research, StareOut Games, Infiheal, and ArbDossier; recipient of the Mitacs Globalink Research Award."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EqbQYqtwRt4PoTjmNfJtVB5IDLoIB0ns/view?usp=sharing",
  // cvLink: "https://scholar.google.com/citations?user=snDhHakAAAAJ&hl=en",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/maitreya-v",
  linkedin: "https://www.linkedin.com/in/maitreya-vaghulade-438439228/",
  gmail: "maitreya.vaghulade@stonybrook.edu",
  // instagram: "",
  // kaggle: "",
  // twitter: "",
  // youtube: "",
  display: true
};

// Skills Section

const skillsSection = {
  subTitle:
    "Distributed systems & ML engineer building reliable backends and cloud-native products.",
  skills: [
    emoji(
      "⚡ Build fault-tolerant services (Paxos/Raft), gRPC microservices, and performant APIs"
    ),
    emoji(
      "⚡ Design and deploy ML/NLP pipelines end-to-end (training → eval → inference)"
    ),
    emoji(
      "⚡ Full-stack: React/Next.js on the front; FastAPI/Django/Node on the back"
    ),
    emoji(
      "⚡ Cloud & DevOps: AWS/Azure, Docker, Kubernetes, Terraform, GitHub Actions/CI-CD"
    ),
    emoji(
      "⚡ Data layer: PostgreSQL/MySQL, Redis; clean schema design and query optimization"
    ),
    emoji(
      "⚡ Observability & testing: OpenTelemetry, Prometheus/Grafana, unit/integration tests"
    )
  ],

  /* Make sure to include correct Font Awesome classnames */
  softwareSkills: [
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Go (Golang)", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "SQL Databases", fontAwesomeClassname: "fas fa-database"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "MLOps/ML", fontAwesomeClassname: "fas fa-brain"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "State University of New York - Stony Brook",
      logo: require("./assets/images/stonybrook.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Aug 2025 – May 2027",
      desc: "GPA - 4.0/4.0",
      descBullets: [
        "Relevant Coursework — System Security, Human-Computer Interaction",
        "Teaching Assistant for CSE 113 (Foundations of Computer Science)",
        "Mitacs Globalink Research Award recipient ($15,000)"
      ]
    },
    {
      schoolName:
        "Dwarkadas J. Sanghvi College of Engineering (University of Mumbai)",
      logo: require("./assets/images/djscamvi.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "Jun 2021 – Jun 2025",
      desc: "GPA - 3.7/4.0",
      descBullets: [
        "Honours in Intelligent Computing.",
        "Participated and won many national and international hackathons.",
        "Published 4 Research Papers in IEEE Format.",
        "Ex Co-Chairperson of Artificial Intelligence and Machine Learning group of the Department of Computer Engineering at Dwarkadas J. Sanghvi College of Engineering.."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React Native", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
    // {
    //   Stack: "Programming",
    //   progressPercentage: "40%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // show Work Experience section
  experience: [
    {
      role: "Research Intern",
      company: "MITACS Globalink Research",
      companylogo: require("./assets/images/mitacs.png"),
      date: "Jun 2024 – Sep 2024",
      descBullets: [
        "Engineered a multi-hop question-generation system using PyTorch, Deep Graph Library (DGL), and Hugging Face Transformers, improving text quality by +12% BLEU and +18% ROUGE on held-out benchmarks.",
        "Designed a graph-augmented retriever to surface multi-document evidence; implemented negative sampling and contrastive losses to stabilize training across long contexts.",
        "Built a reproducible training stack: Dockerized jobs, Kubernetes Jobs/CronJobs, and MLflow tracking with versioned datasets & artifacts; cut iteration time ~35%.",
        "Created a robust eval harness with deterministic seeds, stratified splits, and bootstrap confidence intervals; added regression tests to guard against metric drift.",
        // shortened this point:
        "Instrumented with OpenTelemetry + Grafana; cut triage time ~30%.",
        "Authored design docs and runbooks (failure modes, back-pressure strategies, checkpointing policy) and led code reviews to standardize contribution quality."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "StareOut Games",
      companylogo: require("./assets/images/stareout.jpg"),
      date: "Oct 2023 – Dec 2023",
      descBullets: [
        "Delivered a retrieval-augmented generation (RAG) service on FastAPI, deployed to Azure Kubernetes Service (AKS) with HPA; sustained 11,000+ daily requests at p95 < 300 ms.",
        "Implemented Redis caching, request coalescing, and async batching (uvicorn + asyncio) to control tail latency under bursty traffic from live events.",
        "Automated 3D character generation with diffusion-model jobs scheduled on GPU nodes; coordinated artifact build steps via a Python worker queue—reducing end-to-end build time ≈99% (≈4 weeks → <45 minutes).",
        "Established CI/CD (Jenkins → AKS) with rolling updates, health probes, and canary gates; added SLOs and error budgets to inform release decisions.",
        "Added tracing/metrics (OpenTelemetry + Prometheus/Grafana) and structured logging (JSON) to drop MTTR ~55%; documented on-call runbooks and incident checklists."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Infiheal",
      companylogo: require("./assets/images/infiheal.png"),
      date: "Aug 2023 – Oct 2023",
      descBullets: [
        "Developed and fine-tuned TensorFlow/Keras chat models with offline + online A/B testing, raising real-user accuracy by 24% and reducing fallback rate by 20%.",
        "Launched event-driven notifications with AWS Lambda and Amazon Pinpoint (provisioned via Terraform with IAM/KMS guardrails); achieved <1% delivery errors at scale.",
        "Built a feature pipeline (ETL → feature store) for conversational signals and user state; introduced schema validation and data contracts to prevent silent breakages.",
        "Hardened releases with unit/integration tests, pre-commit hooks, and CI quality gates; reduced production rollbacks by ~25%.",
        "Contributed privacy-first logging and PHI redaction filters; wrote security notes covering data retention, KMS key rotation, and least-privilege IAM policies."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "ArbDossier",
      companylogo: require("./assets/images/arbdossier.png"),
      date: "Jun 2023 – Aug 2023",
      descBullets: [
        "Built a semantic legal search engine combining BM25 with ANN/FAISS (sharded) and re-ranking; increased precision by 28% and cut query latency by 32% for 10,000+ concurrent queries.",
        "Designed ingestion & indexing pipelines on Amazon S3 with MongoDB metadata and worker queues; indexed 120,000+ cases with freshness < 15 minutes.",
        "Wrote a Go-based FAISS index updater to support incremental embeddings, shard rebalancing, and zero-downtime swaps.",
        "Implemented RBAC, tenant isolation, and multi-AZ replicas; defined SLOs and error budgets—lowering infra cost ~15% while meeting availability targets.",
        "Added observability (structured logs, RED metrics, traces) and synthetic tests to catch relevance & latency regressions before release."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSources = {
//   title: "Research Papers Published",
//   subtitle: "I have written and presented various research papers. ORCID - https://orcid.org/0009-0002-0317-4949",
//   projects: [
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Estimating GeoJSON Coordinates using Image Processing to Improve Census Credibility",
//       projectDesc: "2022 Smart Technologies, Communication and Robotics (STCR)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/abstract/document/10009508"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Aero Drums-Augmented Virtual Drums",
//       projectDesc: "2022 IEEE 4th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/abstract/document/9989074"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/springer.png"),
//       projectName: "PreciSplit: A Novel Approach to Predicting Polynomial Regression Data",
//       projectDesc: "17th International Conference on Information Technology and Applications (ICITA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://doi.org/10.1007/978-981-99-8324-7_21"
//         }
//       ]
//     },

//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Revolutionalizing Obstetric Care : IoT, AI-Enabled, and Data-Driven Partograph System",
//       projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10284951"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "A Device for Detection and Deterrence of Locust Threats",
//       projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10284949"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Time Quantum Optimization in Round Robin algorithm",
//       projectDesc: "International Conference on Network, Multimedia and Information Technology (NMITCON)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10276146"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Transformation of text to decode Morse Code and its detection using eye blinks",
//       projectDesc: "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10392195"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/springer.png"),
//       projectName: "Utilizing LLM and Deep Learning Strategies to Amplify Algorithmic Proficiency in Detecting Complex Patterns of Insider Trading Fraud",
//       projectDesc: "3rd International Conference on Intelligent Vision and Computing (ICIVC 2023)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://doi.org/10.1007/978-3-031-71388-0_17
//         }
//       ]
//     },

//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Research Papers Published",
  subtitle: "I have written and presented various research papers.",
  projects: [
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName:
        "Enhancing Lung Cancer Detection and Localization with a Hybrid VGG-19 and ANFIS Approach on Imaging Data",
      projectDesc:
        "2024 Systems and Information Engineering Design Symposium (SIEDS), pp. 280–285",
      footerLink: [
        {name: "DOI", url: "https://doi.org/10.1109/SIEDS61124.2024.10534680"}
      ]
    },
    {
      image: require("./assets/images/springer.png"),
      projectName:
        "Ortho-LBP: Novel Features for Enhanced Pattern Recognition through Bitwise Logical Fusion of Bi-Directional Orthogonal Information with LBP",
      projectDesc:
        "International Journal of Information Technology (Springer Nature Singapore), 2025",
      footerLink: [
        {name: "DOI", url: "https://doi.org/10.1007/s41870-025-02747-y"}
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"), // add this asset or swap with a generic paper icon
      projectName:
        "Jal Anveshak: Prediction of Fishing Zones Using Fine-Tuned LLaMA-2",
      projectDesc: "arXiv preprint, 2024",
      footerLink: [
        {name: "DOI", url: "https://doi.org/10.48550/arXiv.2411.10050"}
        // Optionally add the arXiv link if you want:
        // { name: "arXiv", url: "https://arxiv.org/abs/2411.10050" }
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"), // add a JES logo asset or reuse ieee.jpeg if preferred
      projectName:
        "Automated Feature Extraction from Version Control Artifacts in GitHub Repositories",
      projectDesc: "Journal of Electrical Systems, Vol. 20 No. 10s, 2024",
      footerLink: [{name: "DOI", url: "https://doi.org/10.52783/jes.7091"}]
    }
  ],
  display: true
};

const githubProjects = {
  title: "Projects",
  subtitle:
    "I have built various industry projects. MY GITHUB - https://github.com/maitreya-v",
  projects: [
    {
      video: require("./assets/images/traveezy.mp4"),
      projectName: "Traveezy",
      projectDesc:
        "Travel-planning companion curating itineraries from preferences and optimizing routes in a click.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/KJSCE---EnemiesOfSyntax"
        }
      ]
    },
    {
      video: require("./assets/images/smart_parent.mp4"),
      projectName: "SmartParent",
      projectDesc:
        "A comprehensive parental-control app focused providing centralized supervision, smart limits, and timely alerts.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/djcsi_Sleep_Deprived"
        }
      ]
    },
    {
      image: require("./assets/images/shopnex.png"),
      projectName: "ShopNex",
      projectDesc:
        "Next-generation online shopping platform designed to make shopping experiences seamless, personalized, and fun.",
      footerLink: [{name: "Project Link", url: "https://shopnex.vercel.app/"}]
    },
    {
      image: require("./assets/images/job_scheduler.png"),
      projectName: "Ofelia - Job Scheduler",
      projectDesc:
        "Optimized sustainable food delivery routes using HERE Maps API and dynamic job scheduling algorithms.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/Ofelia_Job_Scheduler"
        }
      ]
    },
    {
      image: require("./assets/images/stack_overflow.png"),
      projectName: "Stack Overflow Clone",
      projectDesc:
        "A full-stack Q&A platform replicating Stack Overflow’s core features with authentication, voting, and search.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/Stack_Overflow_Clone"
        }
      ]
    },
    {
      image: require("./assets/images/snake_eater.webp"),
      projectName: "Snake Eater UI",
      projectDesc:
        "A dark, cyberpunk-inspired React component library with 45+ minimalist, TypeScript-based components.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/snake_eater_ui"
        }
      ]
    },
    {
      image: require("./assets/images/network_load_balancer.png"),
      projectName: "Network Load Balancer",
      projectDesc:
        "Implemented a custom load balancer to distribute network traffic efficiently across backend servers.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/Network_Load_Balancer"
        }
      ]
    },
    {
      image: require("./assets/images/bookmyflight.png"),
      projectName: "BookMyFlight",
      projectDesc:
        "Lightweight airline booking engine for route search, seat locking, and PNR issuance from a single console.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/BookMyFlight"
        }
      ]
    },
    {
      image: require("./assets/images/jal_anveshak.png"),
      projectName: "Jal Anveshak",
      projectDesc:
        "Multilingual coastal assistant blending PFZ advisories, weather, and LLM guidance to suggest safe, high-yield fishing zones.",
      footerLink: [
        {name: "Project Link", url: "https://github.com/maitreya-v/JalAnveshak"}
      ]
    },
    {
      image: require("./assets/images/datasprint.png"),
      projectName: "DataSprint",
      projectDesc:
        "Rapid profiling tool turning messy CSVs into concise, shareable insight narratives within minutes.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/DataHack_PS5_Git-Over-It"
        }
      ]
    },
    {
      image: require("./assets/images/exoplanet.png"),
      projectName: "TransitScope",
      projectDesc:
        "CNN pipeline spotting exoplanet transits in Kepler light curves and ranking the most promising candidates.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/Exoplanet-detection"
        }
      ]
    },
    {
      image: require("./assets/images/civiclens.png"),
      projectName: "CivicLens",
      projectDesc:
        "Scan-to-moderate toolkit extracting text from images and flagging toxic language with clear, explainable highlights.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/Community_Toxicity_Monitoring-OCR"
        }
      ]
    },
    {
      image: require("./assets/images/bus_reservation.png"),
      projectName: "Bus Reservation System",
      projectDesc:
        "Operator-ready bus platform with real-time seat locking, bookings, schedules, and a lightweight CRM.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/maitreya-v/bus-reservation-system"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Winner of Singapore-India Hackathon '23",
      subtitle:
        "Winner of Singapore India Hackathon 2023 held at IIT Gandhinagar. Received prize from Education Minister of India and Deputy Prime Minister of Singapore.",
      image: require("./assets/images/dishantop.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1F-ipCMQEHgsvwAebczv8kAmQw_MxWCrf/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Smart India Hackathon 2022 Winner",
      subtitle:
        "Won India's biggest hackathon which took place at IIT Guwahati and interacted with PM Modi. The cash prize was 1 lakh rupees.",
      image: require("./assets/images/sih.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1DEG865moDFUgJFRENFBQyeEGLVGgrGui/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Finalist UNESCO India Africa Hackathon '22",
      subtitle:
        "Part of the first ever international hackathon where Africans from different countries came to Noida, India and developed solutions on problem statements. Attended by Vice President of India.",
      image: require("./assets/images/uia.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1SpfRW2z5aYhsZeQ0UtKWzrUuj_BP8FfP/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "With CEO of Jefferies",
      subtitle:
        "Invited by Jefferies’ CEO to his penthouse, had an insightful conversation and gained valuable learnings. Also featured on Jefferies’ official LinkedIn post for the Summer 2025 internship program.",
      image: require("./assets/images/dishantandceo.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Video",
          url: "https://www.linkedin.com/posts/jefferies_jefferies-2025-summer-intern-bbq-ugcPost-7344727781668249600--q3E?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADK-kaQB06KPtOANUNmkKJY95uhzJeu85LY"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Top 50 - Samsung's Solve For Tomorrow '22 and '24",
      subtitle: "",
      image: require("./assets/images/sft.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lgpsRZTJRcjOTLYzHV2mrkPdguEfzHQE/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Winner of IIT Bombay Techfest's HERE Hackathon '23",
      // subtitle:
      //   "The event took place in Jaipur and was attend by Rajasthan's Chief Minister , Krish Naik , Kabir Khan and Ashneer Grover.",

      image: require("./assets/images/HereHack.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1g8OfOw7JvQW4U6D8dpY3HPNkRGND2e9-/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Participated in Rajasthan's IT Hackathon 2023",
      // subtitle:
      //   "The event took place in Jaipur and was attend by Rajasthan's Chief Minister , Krish Naik , Kabir Khan and Ashneer Grover.",

      image: require("./assets/images/rajasthan.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1g9woW9z_fvtveOAu5U8BGfexcSouC0e5/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Finalist Japan-India Hackathon '24",
      // subtitle: "Selected for another international hackathon which is going to take place in 2023  organized by the University of Luxembourg Incubator & Entrepreneurship Program and the Ministry of Education (India)",
      image: require("./assets/images/japanindia.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vv2m7o_YnSVKO2HGr4v6mXaVgxjWf-gh/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Finalist Luxembourg-India Hackathon '23",
      // subtitle: "Selected for another international hackathon which is going to take place in 2023  organized by the University of Luxembourg Incubator & Entrepreneurship Program and the Ministry of Education (India)",
      image: require("./assets/images/lux.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://luxembourg-india.mic.gov.in/uia/assets/doc/LIST-OF-SELECTED-INDIAN-PARTICIPANTS-FOR-INDIA-LUXEMBOURG-HACKATHON.pdf"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Winner of DJ CSI's Codeshastra 9.0",
      // subtitle:
      //   ".",
      image: require("./assets/images/csi.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1TWPqwZv2wj28Iug6lSHW83DY0xXfg_Ye/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "AIR 7 at National Cybersecurity competition Pentathon 2024",
      // subtitle:
      //   ".",
      image: require("./assets/images/pentathon.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lRPcH8eyQmJ2tl2dYHK9lHe8h5O_1vey/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title:
        "India Sustainability Startathon '23 Special Panel and Masterclass.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/panel.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tZWgMKMazzGNNiVgFuJBghkiCuz6hwEx/view?usp=v"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Judge and Mentor at TAMU",
      // subtitle:
      //   "Invited Mentor at HowdyHack & Judge at TAMUhack one of the largest annual hackathons in Texas, hosted at Texas A&M University .",
      image: require("./assets/images/howdyhack.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://th25.tamuhack.org/"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Chief Guest + Speaker at SFIT Techfest and HackX with Arsh Goyal",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/sfit.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1uOMpl-4n4CAJN2WJ3H41Vb5Z7BKI--Sb/view?usp=sharing"
        }
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    }
    // {
    //   title: "Second place at VJTI's 24 Hours Hackathon Technovanza 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/vjti.jpeg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1tZWgMKMazzGNNiVgFuJBghkiCuz6hwEx/view?usp=sharing"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // // {
    // //   title: "Second place at Thadomal's CSI Rubix Hackathon 2023",
    // //   // subtitle:
    // //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    // //   image: require("./assets/images/thadomal.png"),
    // //   imageAlt: "Google Code-In Logo",
    // //   footerLink: [
    // //     {
    // //       name: "Certification",
    // //       url: "https://drive.google.com/file/d/1To8I-bPPQS5LMaRBOCR-3kTZUnWKidzZ/view?usp=share_link"
    // //     },
    // //     // {
    // //     //   name: "Event photo",
    // //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    // //     // },
    // //   ]
    // // },
    // {
    //   title: "Third place at TCET's Hackathon Hackanova 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/hackanova.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1OmTZ0wLREJ5yXvc3Z42RqohpR9ZDr7G9/view?usp=sharing"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Third place at DJ Sanghvi's Hackathon ClashOfCodes 2023.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/coc.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1_nRQpPX3c7aZ8naQ7iRLr1hzeXYlpIhz/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },

    // {
    //   title: "Third place at DJ Sanghvi's Hackathon Synergy 2024.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/synergy.jpeg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1_nRQpPX3c7aZ8naQ7iRLr1hzeXYlpIhz/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Hacktoberfest 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/hacktoberfest.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1Nf_6j0nNzEKImUyIMfA9gZDLdqVd5dC3/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Reached third round of L&T Technology's Techgium 2022",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/techgium.png"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1YwwjqBqCG7CFFEqnJOCupfAXqpzMUItE/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Microsoft Imagine Cup Nomination",
      subtitle:
        "Team Uddharaka solving the problem of locusts at Microsoft Imagine cup.",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=lS5vYpOED4g"
    },
    {
      title: "Microsoft Ambassador Program",
      subtitle: "Application for Microsoft Ambassador Program.",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=i4AQXg4RO8Q"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6318339820",
  email_address: "maitreya.vaghulade@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "dishantzaveri", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  githubProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
