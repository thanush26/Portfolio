import type { Project, SecurityFocusArea, ProcessStep, ExploringTopic } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "THANUSH",
  role: "CYBERSECURITY ENGINEER",
  year: "2026",
  location: "BASED IN INDIA",
  status: "OPEN TO OPPORTUNITIES",
  tagline: "I build security-focused applications, explore modern web and API security, and turn complex technical problems into practical solutions.",
  aboutTitle: "WHO I AM",
  aboutBio: [
    "I am a cybersecurity student and software developer driven by a deep technical curiosity for how systems operate, fail, and defend themselves.",
    "My focus centers on web application security, API security architecture, DevSecOps compliance automation, and secure backend engineering. Rather than treating security as an afterthought, I build tools and systems that embed security controls directly into software engineering lifecycles.",
    "Through open-source cybersecurity repositories, vulnerability research, and hands-on full-stack development, I continuously refine my ability to audit attack surfaces, mitigate threat vectors, and engineer resilient software."
  ],
  socials: {
    github: "https://github.com/thanush26",
    linkedin: "https://www.linkedin.com/in/thanush-k-b-725252291",
    email: "thanushthanu743@gmail.com"
  }
};

export const SECURITY_FOCUS_AREAS: SecurityFocusArea[] = [
  {
    id: "sec-01",
    number: "01",
    title: "CYBERSECURITY",
    subtitle: "Vulnerability Assessment & Research",
    description: "Security testing, vulnerability assessment and practical security research.",
    iconName: "ShieldAlert",
    highlights: ["Threat Modeling", "Vulnerability Research", "Attack Surface Analysis"]
  },
  {
    id: "sec-02",
    number: "02",
    title: "API SECURITY",
    subtitle: "Auth, BOLA & Access Control",
    description: "Authentication, authorization, access control and API security testing.",
    iconName: "Lock",
    highlights: ["GraphQL Authorization", "JWT/OAuth Auditing", "Object Level Security"]
  },
  {
    id: "sec-03",
    number: "03",
    title: "SECURE DEVELOPMENT",
    subtitle: "Defensive Software Engineering",
    description: "Building backend applications with security considerations from the beginning.",
    iconName: "Code2",
    highlights: ["Secure Architecture", "Input Validation", "Cryptographic Integration"]
  },
  {
    id: "sec-04",
    number: "04",
    title: "SECURITY AUTOMATION",
    subtitle: "Tooling & Pipeline Integration",
    description: "Creating tools and frameworks to make security testing more efficient.",
    iconName: "Cpu",
    highlights: ["DevSecOps Observability", "Automated Scanners", "CI/CD Gateways"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aegis-guard-platform",
    number: "PROJECT 01",
    title: "AEGISGUARD SECURITY OBSERVABILITY PLATFORM",
    category: "DEVSECOPS / SECURITY OBSERVABILITY",
    year: "2025-2026",
    shortDescription: "A cloud-ready DevSecOps Security Observability & Compliance Platform featuring interactive workflow visualizers, real-time WebSocket telemetry streaming, and an emergency stop kill-switch.",
    technologies: ["Python", "FastAPI", "WebSockets", "React", "PostgreSQL", "DevSecOps"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/divienthimmiah16/AEGIS-AGENT-PLATFORM-DEVELOPMENT",
    visualType: "aegis",
    caseStudy: {
      overview: "An enterprise-grade DevSecOps security observability and compliance monitoring platform engineered for real-time risk assessment and automated security workflow gating.",
      problem: "Traditional security auditing tools operate asynchronously via static reports, delaying security feedback during active deployment cycles and lacking real-time telemetry or emergency intervention controls.",
      objective: "Build an asynchronous compliance engine capable of executing 5-stage assessment pipelines (`Inspection` -> `Config Check` -> `Vulnerability Scan` -> `Report`), streaming audit events over WebSockets, and providing instant emergency stop capabilities.",
      technology: ["Python 3.11", "FastAPI", "WebSockets (Async Telemetry)", "PostgreSQL / SQLite Multi-Tenant Engine", "React 18", "Tailwind CSS"],
      securityConsiderations: [
        "Cryptographic isolation of multi-tenant assessment logs",
        "Hardware-style emergency kill-switch API to halt active container scans instantly",
        "Rate-limited WebSocket channels to prevent Denial-of-Service on telemetry feeds"
      ],
      implementation: "Designed a multi-threaded Python backend dispatcher connected via WebSocket channels to a dark-mode React dashboard displaying workflow status nodes (`Pending`, `In-Progress`, `Passed`, `Failed`, `Aborted`).",
      result: "Achieved sub-10ms real-time audit event propagation across active security assessment pipelines with full emergency halt coverage.",
      lessonsLearned: "Event-driven WebSockets paired with state-machine workflow execution dramatically reduce security incident response window times in CI/CD environments."
    }
  },
  {
    id: "nonprofit-donation-platform",
    number: "PROJECT 02",
    title: "SECURE NONPROFIT DONATION MANAGEMENT PLATFORM",
    category: "FULL STACK / SECURITY",
    year: "2025-2026",
    shortDescription: "A full-stack platform for managing nonprofit organizations, donors, campaigns and donations with strict authentication and authorization controls.",
    technologies: ["FastAPI", "PostgreSQL", "GraphQL", "Docker", "React"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/thanush26/Secure_non-profit_donation_management_platform",
    visualType: "platform",
    caseStudy: {
      overview: "An enterprise-grade, secure donation and campaign management system built to protect sensitive financial records and donor privacy.",
      problem: "Nonprofits often rely on legacy software with inadequate RBAC and insecure API endpoints, making them targets for credential harvesting and donation fraud.",
      objective: "Architect a resilient full-stack application featuring strict OAuth2/JWT token rotation, granular role-based authorization, and immutable database audit logs.",
      technology: ["FastAPI", "PostgreSQL", "GraphQL", "Docker Compose", "React 18", "Tailwind CSS"],
      securityConsiderations: [
        "Strict CORS policy and Secure HTTP-Only Cookie storage for JWTs",
        "Input sanitization to eliminate SQL Injection and XSS attack vectors",
        "Row Level Security (RLS) policies in PostgreSQL for tenant data isolation"
      ],
      implementation: "Engineered a GraphQL backend with FastAPI resolvers, protected by role middleware. Integrated React frontend with real-time donation analytics and secure payment gateway webhooks.",
      result: "Delivered a containerized deployment stack with 100% test coverage on authentication and authorization paths.",
      lessonsLearned: "Implementing Row-Level Security at the database layer provides a vital defense-in-depth barrier even if application-level middleware fails."
    }
  },
  {
    id: "image-encryption-tool",
    number: "PROJECT 03",
    title: "PIXEL & IMAGE ENCRYPTION TOOL",
    category: "CRYPTOGRAPHY / APPLIED SECURITY",
    year: "2025",
    shortDescription: "A security application exploring image obfuscation techniques using bitwise XOR stream operations and 2x2 spatial pixel matrix transformations.",
    technologies: ["Python", "NumPy", "Pillow", "Cryptography", "Tkinter"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/thanush26/SCT_CS_02",
    visualType: "encryption",
    caseStudy: {
      overview: "An applied cryptography application designed to demonstrate reversible image payload obfuscation using mathematical matrix manipulation and bitwise stream operations.",
      problem: "Standard text encryption tools cannot visually obfuscate spatial raster data without corrupting file structure headers unless custom byte-stream transformations are applied.",
      objective: "Develop a dual-mode encryption engine supporting key-based bitwise XOR pixel stream encryption and reversible 2x2 spatial matrix block swapping.",
      technology: ["Python 3.10", "NumPy (Matrix Manipulation)", "Pillow (Image Processing)", "Tkinter GUI Engine"],
      securityConsiderations: [
        "Preservation of image dimension metadata to guarantee 100% loss-less decryption",
        "Key entropy verification to prevent weak XOR single-byte key recovery attacks",
        "Memory sanitization after image buffer processing"
      ],
      implementation: "Created a desktop GUI tool that extracts raw RGBA numpy arrays, applies bitwise XOR against user-defined secret keys, or executes spatial block permutations, saving output lossless images (`_encrypt.png`).",
      result: "Validated 100% reversible bit-perfect image reconstruction across `.jpg`, `.png`, and `.bmp` formats.",
      lessonsLearned: "Symmetric XOR operations on raw pixel arrays offer fast visual obfuscation, but robust security requires key space randomization to prevent frequency analysis."
    }
  },
  {
    id: "keystroke-threat-lab",
    number: "PROJECT 04",
    title: "KEYSTROKE TELEMETRY & THREAT DETECTION LAB",
    category: "CYBERSECURITY / THREAT RESEARCH",
    year: "2025",
    shortDescription: "A controlled cybersecurity research project analyzing low-level OS keyboard event hooks, encrypted log aggregation, and defensive keylogger detection.",
    technologies: ["Python", "Pynput", "Linux / OS API", "Security Audit"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/thanush26/SCT_CS_04",
    visualType: "keylogger",
    caseStudy: {
      overview: "An ethical cybersecurity research tool created to audit host keyboard event listeners, understand keylogging attack vectors, and formulate endpoint detection strategies.",
      problem: "Malicious keyloggers operate silently in background process spaces, making them difficult for end-users to detect without understanding low-level OS event hook behaviors.",
      objective: "Build an event listener script to analyze keyboard telemetry, log event sequences safely, and implement defensive heuristics for anti-keylogger protection.",
      technology: ["Python 3.10", "Pynput (Core Event Hook Engine)", "OS Process APIs", "Security Analytics"],
      securityConsiderations: [
        "Safe local storage isolation (`key_log.txt`) preventing remote telemetry leak",
        "Ethical research boundaries ensuring software is strictly used in controlled test environments",
        "Endpoint process memory audit to identify unhooked keyboard listeners"
      ],
      implementation: "Engineered a Python event listener capturing hardware input events, writing formatted event telemetry to an encrypted sink while evaluating OS process privileges.",
      result: "Identified key indicators of compromise (IoCs) usable in endpoint detection and response (EDR) rules to flag unauthorized keyboard listeners.",
      lessonsLearned: "Studying offensive technique mechanics in controlled environments is prerequisite to building effective EDR detection rules."
    }
  },
  {
    id: "password-strength-evaluator",
    number: "PROJECT 05",
    title: "PASSWORD STRENGTH EVALUATOR & REMEDIATION TOOL",
    category: "CYBERSECURITY / APPLIED SEC",
    year: "2025",
    shortDescription: "A security auditing tool that evaluates password complexity against NIST policy standards, calculates entropy scores, and provides real-time remediation guidance.",
    technologies: ["Python", "Regex", "Security Audit", "Entropy Analysis"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/thanush26/SCT_CS_03",
    visualType: "password",
    caseStudy: {
      overview: "A specialized security tool designed to evaluate password strength across 5 key complexity criteria and deliver real-time remediation feedback.",
      problem: "Users frequently choose weak passwords vulnerable to dictionary and brute-force attacks due to a lack of immediate visual feedback during account creation.",
      objective: "Implement a Python CLI tool that parses password string structure, validates against complexity criteria (length, case, digits, special characters), and rates strength from Extremely Weak to Very Strong.",
      technology: ["Python 3.10", "Regular Expressions", "Security Policy Heuristics", "CLI Formatting"],
      securityConsiderations: [
        "In-memory processing without writing plaintext passwords to persistent disk logs",
        "Strict entropy threshold validation against common dictionary patterns",
        "Clear actionable feedback without leaking exact policy secrets"
      ],
      implementation: "Developed a Python audit engine checking password inputs against 5 security criteria, scoring strength tiers, and providing specific missing criteria alerts.",
      result: "Helps users upgrade weak passwords to high-entropy credentials meeting enterprise security standards.",
      lessonsLearned: "Actionable remediation feedback dramatically improves user password hygiene compared to passive error messages."
    }
  },
  {
    id: "caesar-cipher-tool",
    number: "PROJECT 06",
    title: "CAESAR CIPHER CLASSICAL CRYPTOGRAPHY TOOL",
    category: "CRYPTOGRAPHY / SECURITY ALGORITHMS",
    year: "2025",
    shortDescription: "A Python application implementing classical shift cipher algorithms for message encryption, decryption, and frequency analysis.",
    technologies: ["Python", "Cryptography", "String Algorithms", "CLI"],
    ctaText: "VIEW PROJECT →",
    isAvailable: true,
    githubUrl: "https://github.com/thanush26/SCT_CS_01",
    visualType: "cipher",
    caseStudy: {
      overview: "A classical cryptography utility designed to demonstrate shift cipher encryption, decryption, and character frequency analysis.",
      problem: "Understanding foundational cryptographic concepts requires transparent implementations of substitution ciphers and key shift operations.",
      objective: "Create an interactive Python tool supporting custom shift values, uppercase/lowercase preservation, and non-alphabetic character pass-through.",
      technology: ["Python 3.10", "ASCII String Manipulation", "Modular Arithmetic"],
      securityConsiderations: [
        "Preservation of non-alphabetic characters (numbers & symbols) without data corruption",
        "Safe handling of arbitrary integer shift values using modulo 26 arithmetic"
      ],
      implementation: "Built a Python module featuring symmetric encryption and decryption algorithms operating on string character codes.",
      result: "Provides an educational foundation for understanding symmetric encryption and substitution cipher analysis.",
      lessonsLearned: "Classical ciphers highlight the fundamental necessity of high key space entropy in modern cryptographic algorithms."
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the problem and requirements.",
    details: "Deconstruct business requirements, threat landscapes, and target system constraints to establish clear security goals."
  },
  {
    number: "02",
    title: "ANALYZE",
    description: "Research the system, architecture and attack surface.",
    details: "Map entry points, trust boundaries, data flows, and potential threat vectors across web, API, and infrastructure layers."
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Plan the solution and security controls.",
    details: "Architect defense-in-depth mechanisms, select cryptographic controls, and formulate threat models before writing code."
  },
  {
    number: "04",
    title: "BUILD",
    description: "Develop and integrate the solution.",
    details: "Implement resilient software components adhering to secure coding standards, input validation, and access controls."
  },
  {
    number: "05",
    title: "TEST",
    description: "Validate functionality and security.",
    details: "Execute security audits, vulnerability scans, edge-case unit testing, and dynamic security testing (DAST)."
  },
  {
    number: "06",
    title: "DELIVER",
    description: "Document, refine and present the final solution.",
    details: "Produce technical documentation, code benchmarks, and clean artifacts for seamless deployment and audit compliance."
  }
];

export const TECH_STACK_ITEMS = [
  { name: "Python", category: "Core / Backend" },
  { name: "FastAPI", category: "Framework" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Core" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Git", category: "Tooling" },
  { name: "Linux", category: "OS / Environment" },
  { name: "REST APIs", category: "Architecture" },
  { name: "JWT", category: "Security / Auth" },
  { name: "OWASP", category: "Security Standard" },
  { name: "Burp Suite", category: "Security Tool" },
];

export const CURRENTLY_EXPLORING: ExploringTopic[] = [
  {
    title: "Application Security",
    category: "AppSec",
    progress: 90,
    description: "Advanced web application vulnerability analysis, threat modeling, and SAST/DAST integration."
  },
  {
    title: "API Security",
    category: "API",
    progress: 92,
    description: "Deep audit of OWASP API Top 10, BOLA/BFLA detection, and OAuth2 token validation security."
  },
  {
    title: "GraphQL Security",
    category: "GraphQL",
    progress: 88,
    description: "AST query complexity limits, depth restriction, field-level authorization, and introspection controls."
  },
  {
    title: "Web Security",
    category: "WebSec",
    progress: 94,
    description: "Modern browser security headers (CSP, CORS, SameSite, HSTS) and client-side protection."
  },
  {
    title: "Cloud Security",
    category: "Cloud",
    progress: 75,
    description: "Container security hardening, Docker rootless builds, and Cloud IAM permission governance."
  },
  {
    title: "Security Automation",
    category: "DevSecOps",
    progress: 85,
    description: "Custom security linters, automated regression tests, and security gating in CI/CD pipelines."
  },
  {
    title: "Backend Engineering",
    category: "Backend",
    progress: 89,
    description: "Performant async python services, relational schema optimization, and secure API gateways."
  }
];
