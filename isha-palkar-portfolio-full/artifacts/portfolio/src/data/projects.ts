export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "AI/ML" | "Full Stack" | "Web Dev" | "Multi-Agent";
  github: string;
  live: string | null;
  bg: string;
  accent: string;
  emoji: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "legal-clause-ai",
    title: "Legal Clause AI Assistant",
    tagline: "RAG-powered legal contract analysis",
    description:
      "A RAG-based pipeline that analyzes legal contracts from PDF inputs, enabling clause classification, risk assessment, summarization, and multilingual translation with structured insights.",
    longDescription:
      "Built on a retrieval-augmented generation (RAG) architecture, this assistant lets users upload any legal contract PDF and instantly receive a structured breakdown. It identifies risky clauses, generates plain-language summaries, classifies clause types (indemnity, liability, termination, etc.), and supports multilingual translation — all powered by LLaMA 3.3 via Groq for blazing-fast inference. FAISS provides the vector store for semantic search across document chunks, while Sentence Transformers handle embedding generation.",
    tech: ["Python", "Streamlit", "LangChain", "Groq (LLaMA 3.3)", "FAISS", "Sentence Transformers"],
    category: "AI/ML",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#C8D5B9",
    accent: "#4A7C4E",
    emoji: "⚖",
    highlights: [
      "Clause classification across 10+ legal clause types",
      "Risk scoring with flagged high-risk sections",
      "Multilingual translation support",
      "Sub-second inference via Groq API",
    ],
  },
  {
    id: "edge",
    title: "Edge",
    tagline: "Multi-agent AI-powered e-commerce",
    description:
      "A multi-agent e-commerce platform supporting conversational shopping, intelligent recommendations, and automated order lifecycle management using LangGraph and Gemini AI.",
    longDescription:
      "Edge is an intelligent e-commerce platform where every customer interaction is handled by a coordinated network of AI agents. A shopping agent understands natural language queries, a recommendation agent surfaces relevant products based on browsing history and preferences, and an order management agent automates the full lifecycle from cart to delivery updates. Built on LangGraph for agent orchestration and Gemini AI for multimodal reasoning, with Redis for high-performance session state.",
    tech: ["React", "FastAPI", "Python", "Redis", "Vertex AI", "LangGraph", "Gemini AI"],
    category: "Multi-Agent",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#E8DCC8",
    accent: "#8B6914",
    emoji: "🛒",
    highlights: [
      "3-agent system: shopping, recommendation, order management",
      "Conversational product search in natural language",
      "Real-time inventory and order tracking",
      "Redis-backed session state for instant context recall",
    ],
  },
  {
    id: "arogyasaathi",
    title: "Arogyasaathi",
    tagline: "Multimodal AI health video generation",
    description:
      "A multimodal AI pipeline using Gemini and Imagen to generate location-aware short-form health videos from real-time environmental data.",
    longDescription:
      "Arogyasaathi (meaning 'Health Companion') bridges the gap between real-time environmental data and personalized health content. The system ingests live air quality, weather, and disease outbreak data for a given location, passes it through Gemini for intelligent script generation, then uses Imagen to create illustrated frames — resulting in short-form health advisory videos tailored to exactly where the user is. Deployed on Google Cloud with a React + FastAPI frontend.",
    tech: ["React", "FastAPI", "Python", "Vertex AI (Gemini, Imagen)", "Google Cloud"],
    category: "AI/ML",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#D4E8D0",
    accent: "#3A6B40",
    emoji: "🌿",
    highlights: [
      "Real-time environmental data integration",
      "Location-aware personalized health scripts",
      "AI-generated video frames via Imagen",
      "Deployed on Google Cloud with auto-scaling",
    ],
  },
  {
    id: "interviewprep",
    title: "InterviewPrep",
    tagline: "AI mock interviews with multimodal feedback",
    description:
      "A mock interview platform delivering personalized AI feedback using multimodal analysis across technical, behavioral, and communication dimensions.",
    longDescription:
      "InterviewPrep simulates real interviews and gives candidates the kind of granular feedback that usually only comes from an experienced human coach. The platform records video/audio responses, analyzes technical accuracy, evaluates communication clarity, assesses body language signals, and generates a comprehensive feedback report — all powered by Vertex AI's multimodal capabilities. Firebase handles authentication and real-time data sync, Django powers the backend processing pipeline.",
    tech: ["Firebase", "React", "Django", "Vertex AI"],
    category: "Full Stack",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#EDE4D4",
    accent: "#A0522D",
    emoji: "🎙",
    highlights: [
      "Multimodal analysis: audio, video, and text",
      "Technical, behavioral, and communication scoring",
      "Personalized improvement suggestions",
      "Firebase real-time sync for instant feedback",
    ],
  },
  {
    id: "exam-erp",
    title: "Exam Management ERP",
    tagline: "Django ERP for automated exam workflows",
    description:
      "An ERP module for automated exam management with role-based workflows for students, teachers, and HoD, plus NLP-based question paper generation.",
    longDescription:
      "Built during the VESIT Summer Internship, this ERP module streamlines the entire exam lifecycle. Role-based dashboards give students, teachers, and the Head of Department tailored views. An NLP pipeline built on Python transformer models automatically generates syllabus-aligned question papers — reducing manual effort by 70%. Performance analytics dashboards provide faculty with structured academic outcome visibility across batches.",
    tech: ["Django", "PostgreSQL", "Python", "Transformer Models", "NLP"],
    category: "Web Dev",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#E0D4E8",
    accent: "#6B4A8B",
    emoji: "📋",
    highlights: [
      "NLP-based question paper auto-generation",
      "3-level role system: student, teacher, HoD",
      "Analytics dashboards for academic outcomes",
      "Syllabus-aligned paper creation pipeline",
    ],
  },
  {
    id: "ngo-platform",
    title: "Muskurate Raho NGO Platform",
    tagline: "Donation & volunteer management system",
    description:
      "Donation management and volunteer attendance modules with role-based admin and user dashboards using Laravel and MySQL.",
    longDescription:
      "A full-featured management platform for the Muskurate Raho NGO, enabling structured tracking of donations, volunteer check-ins, and event coordination. Built with Laravel's MVC architecture and Blade templating, the system features role-based access control for admins and regular users, a structured donation workflow with receipt generation, and real-time volunteer attendance tracking across events.",
    tech: ["Laravel", "MySQL", "PHP", "Blade", "MVC"],
    category: "Web Dev",
    github: "https://github.com/ishapalkar",
    live: null,
    bg: "#F0E0D0",
    accent: "#C17B5A",
    emoji: "🤝",
    highlights: [
      "Donation management with receipt generation",
      "Volunteer attendance tracking across events",
      "Role-based admin and user dashboards",
      "MVC-based Blade interface design",
    ],
  },
];

export const categories = ["All", "AI/ML", "Multi-Agent", "Full Stack", "Web Dev"] as const;
export type Category = typeof categories[number];
