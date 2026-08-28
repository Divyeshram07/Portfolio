const projects = [
    {
        id: 1,
        title: "AI Resume Analyzer",
        category: "AI / ML",
        description:
            "An AI-powered resume analysis platform that evaluates resumes against job descriptions, identifies skill gaps, calculates matching scores, and recommends suitable roles.",
        technologies: [
            "Python",
            "FastAPI",
            "React",
            "NLP",
            "Sentence Transformers",
        ],
        featured: true,
        liveDemo: "https://ai-resume-analyzer-green-iota.vercel.app/",
        github: "https://github.com/Divyeshram07/AI-Resume-Analyzer",
        accent: "blue",
    },

    {
        id: 2,
        title: "Research Paper RAG Agent",
        category: "AI / RAG",
        description:
            "A retrieval-augmented research assistant that processes research papers, creates embeddings, retrieves relevant knowledge, and generates contextual answers.",
        technologies: [
            "Python",
            "FastAPI",
            "FAISS",
            "Sentence Transformers",
            "Ollama",
        ],
        featured: true,
        liveDemo: "#",
        github: "#",
        accent: "violet",
    },

    {
        id: 3,
        title: "Property Management System",
        category: "Full Stack",
        description:
            "A full-stack property management application designed to manage properties, users, authentication, and property-related operations.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
        ],
        featured: false,
        liveDemo: "#",
        github: "#",
        accent: "cyan",
    },

    {
        id: 4,
        title: "Fraud Detection Framework",
        category: "Machine Learning",
        description:
            "A machine learning framework for identifying potentially fraudulent transactions using supervised and unsupervised anomaly detection techniques.",
        technologies: [
            "Python",
            "Scikit-learn",
            "Random Forest",
            "Isolation Forest",
            "SHAP",
        ],
        featured: false,
        liveDemo: "#",
        github: "#",
        accent: "emerald",
    },

    {
        id: 5,
        title: "Context Driven Knowledge Finder",
        category: "AI / RAG",
        description:
            "A document question-answering system that combines retrieval, embeddings, and language models to provide answers grounded in uploaded documents.",
        technologies: [
            "Python",
            "RAG",
            "FastAPI",
            "React",
            "LLM",
        ],
        featured: false,
        liveDemo: "#",
        github: "#",
        accent: "orange",
    },
];

export default projects;