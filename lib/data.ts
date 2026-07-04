import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDocker,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaNetworkWired,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiC,
  SiKeras,
  SiHuggingface,
  SiWeightsandbiases
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IconType } from "react-icons";

// ─── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hello, I'm",
  name: "Sovan Pal",
  roles: [
    "AI & ML Student",
    "Aspiring AI Engineer",
    "Machine Learning Enthusiast",
    "Research-Oriented Learner",
  ],
  resumeUrl: "https://drive.google.com/file/d/1zEzvEYe8IQnZV9GT4GLQNRbV9ASdrHyc/view?usp=sharing",
  githubUrl: "https://github.com/sovanpal7319-gif",
  linkedinUrl: "https://linkedin.com/in/sovan-pal-63b55b225",
};

// ─── About ───────────────────────────────────────────────────
export const aboutData = {
  bio: "I am a Data Science & AI student passionate about Machine Learning, Deep Learning, NLP, Reinforcement Learning, and Intelligent Systems. I enjoy building AI-powered applications that solve real-world problems using modern AI technologies.",
  stats: [
    { label: "Projects", value: "5" },
    { label: "Technologies", value: "10+" },
    { label: "Research Areas", value: "3+" },
  ],
  education: [
    {
      degree: "M.Sc in Data Science & Artificial Intelligence",
      institution: "RKMVERI",
      year: "2025 – 2027",
      description:
        "Focused on Machine Learning, Deep Learning, NLP, and Intelligent Systems.",
    },
  ],
};

// ─── Skills ──────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "C", icon: SiC },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
 {
    category: "Deep Learning",
    skills: [
      { name: "Keras", icon: SiKeras },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Weights & Biases", icon: SiWeightsandbiases },
    ],
  },
 {
    category: "NLP",
    skills: [
      { name: "BERT", icon: FaBrain },
      { name: "Text Mining", icon: FaChartLine },
      { name: "Sentiment Analysis", icon: FaRobot },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartLine },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: FaDocker },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "AI Supply Chain Risk Intelligence",
    description:
      "An AI-driven system that analyzes news and market signals to identify supply chain risks using NLP and intelligent analytics.",
    tech: ["Python", "NLP", "BERT", "News Analysis", "Machine Learning"],
    githubUrl: "https://github.com/sovanpal7319-gif/AI-Supply-Chain-Risk-Intelligence.git",
    image: "/images/project-supply-chain.png",
  },
  {
    title: "Distributed Market Analyst",
    description:
      "A distributed AI-based market analysis platform using intelligent agents and scalable computing techniques.",
    tech: ["Python", "Ray", "Distributed Systems", "AI Agents"],
    githubUrl: "https://github.com/sovanpal7319-gif/Distributed-Market-Analyst.git",
    image: "/images/project-market-analyst.png",
  },
  {
    title: "Startup Success Prediction",
    description:
      "A machine learning system that predicts startup success probability using business and funding features.",
    tech: ["Python", "Scikit-learn", "Data Analysis"],
    githubUrl: "https://github.com/sovanpal7319-gif/Startup-Success-Prediction.git",
    image: "/images/project-startup.png",
  },
  {
    title: "Custom Coin Collector using RL",
    description:
      "A reinforcement learning environment where an intelligent agent learns optimal strategies for coin collection.",
    tech: ["Python", "Reinforcement Learning", "OpenAI Gym"],
    githubUrl: "https://github.com/sovanpal7319-gif/Custom-coin-collector-using-RL.git",
    image: "/images/project-rl-coin.png",
  },
  {
  title: "Multimodal Spectral Fusion for Wheat Disease Classification",
  description:
    "A deep learning framework for wheat disease classification using multispectral and hyperspectral imagery with cross-modal attention fusion and spectral feature learning.",
  tech: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Hyperspectral Imaging", "Multispectral Imaging"],
  githubUrl:
    "https://github.com/sovanpal7319-gif/MS-HS-Wheat-Disease-Fusion.git",
  image: "/images/project-ms-hs-fusion.png",
},
];

// ─── Research Interests ──────────────────────────────────────
export interface ResearchInterest {
  title: string;
  description: string;
  icon: IconType;
}

export const researchData: ResearchInterest[] = [
  {
    title: "Natural Language Processing",
    description:
      "Exploring transformer architectures, language understanding, and text generation for real-world applications.",
    icon: FaBrain,
  },
  {
    title: "Reinforcement Learning",
    description:
      "Building intelligent agents that learn optimal policies through environment interaction and reward signals.",
    icon: FaRobot,
  },
  {
    title: "Intelligent Agents",
    description:
      "Designing autonomous agents capable of reasoning, planning, and decision-making in complex environments.",
    icon: FaNetworkWired,
  },
  {
    title: "Financial AI",
    description:
      "Applying machine learning to financial forecasting, risk assessment, and market analysis.",
    icon: FaChartLine,
  },
  {
    title: "Distributed AI Systems",
    description:
      "Scaling AI workloads across distributed computing platforms for high-performance processing.",
    icon: FaDocker,
  },
];

// ─── Certifications ──────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificationsData: Certification[] = [
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "May 2026",
    credentialUrl: "https://drive.google.com/file/d/1AKY5GZPQk40jZSGmVGxF21HRlR91Jhlu/view?usp=sharing",
  },
  {
    title: "Accenture North America – Data Analytics & Visualization Job Simulation",
    issuer: "Forage",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1fQTeijfNbHmKmDAX33cqtZrfZJ31XbMk/view?usp=sharing",
  },
];

// ─── Contact / Social ────────────────────────────────────────
export const socialLinks = [
  {
    label: "Email",
    href: "mailto:sovanpal7319@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/sovanpal7319-gif",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sovan-pal-63b55b225",
    icon: FaLinkedin,
  },
];

