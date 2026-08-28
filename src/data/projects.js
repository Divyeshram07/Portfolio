const projects = [
    {
        id: 1,

        title: "AI Resume Analyzer",

        category: "AI / ML",

        description:
            "An AI-powered resume analysis platform that evaluates resumes against job descriptions, identifies skill gaps, calculates matching scores, and recommends suitable roles.",

        problem:
            "Recruiters and candidates often need to compare a resume with a specific job description and quickly understand how well the candidate's skills align with the role.",

        solution:
            "Built an AI-powered application that processes resume and job-description content, analyzes their semantic relationship, identifies relevant skills, and presents the results through an interactive web interface.",

        role:
            "Designed and developed the application across the AI processing layer, FastAPI backend, and React frontend.",

        highlights: [
            "Resume-to-job-description matching",
            "Skill gap identification",
            "Role recommendations",
            "Semantic text analysis",
            "Interactive web interface",
        ],

        technologies: [
            "Python",
            "FastAPI",
            "React",
            "NLP",
            "Sentence Transformers",
        ],

        featured: true,

        liveDemo:
            "https://ai-resume-analyzer-green-iota.vercel.app/",

        github:
            "https://github.com/Divyeshram07/AI-Resume-Analyzer",

        accent: "blue",
    },


    {
        id: 2,

        title: "Research Paper RAG Agent",

        category: "AI / RAG",

        description:
            "A retrieval-augmented research assistant that processes research papers, creates embeddings, retrieves relevant knowledge, and generates contextual answers.",

        problem:
            "Research papers can contain large amounts of information, making it difficult to quickly locate relevant sections and obtain focused answers from the available content.",

        solution:
            "Built a retrieval-augmented workflow that processes research papers, converts content into embeddings, retrieves relevant information, and uses a language model to generate contextual responses.",

        role:
            "Developed the retrieval pipeline and backend workflow for document processing, embedding generation, retrieval, and answer generation.",

        highlights: [
            "Research paper processing",
            "Embedding generation",
            "Semantic retrieval",
            "Context-aware responses",
            "RAG-based question answering",
        ],

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

        problem:
            "Property-related information and operations can become difficult to manage when users, properties, and application workflows are handled separately.",

        solution:
            "Developed a full-stack application that provides a centralized interface for property management, user handling, authentication, and property-related operations.",

        role:
            "Worked across the frontend and backend layers, connecting the React interface with the Node.js and Express API and MongoDB database.",

        highlights: [
            "Property management",
            "User management",
            "Authentication",
            "REST API integration",
            "MongoDB data management",
        ],

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

        problem:
            "Fraudulent transactions can be difficult to identify because suspicious behavior may differ from normal transaction patterns.",

        solution:
            "Explored machine learning approaches for fraud detection by combining supervised classification with unsupervised anomaly detection techniques.",

        role:
            "Worked on the machine learning workflow, model experimentation, anomaly detection, and model interpretability.",

        highlights: [
            "Fraud transaction detection",
            "Supervised learning",
            "Anomaly detection",
            "Random Forest classification",
            "Model interpretability with SHAP",
        ],

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

        problem:
            "Finding specific information inside uploaded documents can require manually searching through large amounts of text.",

        solution:
            "Built a document question-answering workflow that retrieves relevant document context before generating responses, helping keep answers grounded in the uploaded content.",

        role:
            "Worked on the retrieval workflow, backend API integration, document processing, and React-based interface.",

        highlights: [
            "Document question answering",
            "Context retrieval",
            "Embeddings",
            "LLM integration",
            "Grounded responses",
        ],

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