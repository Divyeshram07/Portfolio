import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BrainCircuit,
    Code2,
    Database,
    Globe,
    Server,
    Wrench,
    ArrowUpRight,
} from "lucide-react";

const categories = [
    {
        id: "ai",
        label: "AI / ML",
        icon: BrainCircuit,
        description:
            "Machine learning, NLP, LLM applications and intelligent systems.",
        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "RAG",
            "LLMs",
            "Transformers",
            "scikit-learn",
            "TensorFlow",
            "PyTorch",
        ],
    },
    {
        id: "development",
        label: "Development",
        icon: Code2,
        description:
            "Building modern applications across frontend and backend systems.",
        skills: [
            "Java",
            "Python",
            "JavaScript",
            "React",
            "HTML",
            "CSS",
            "REST APIs",
            "FastAPI",
            "Spring Boot",
        ],
    },
    {
        id: "data",
        label: "Data",
        icon: Database,
        description:
            "Working with relational databases, NoSQL systems and data pipelines.",
        skills: [
            "MySQL",
            "MongoDB",
            "SQL",
            "Pandas",
            "NumPy",
            "Data Processing",
            "Data Analysis",
        ],
    },
    {
        id: "web",
        label: "Web",
        icon: Globe,
        description:
            "Designing responsive and interactive interfaces for the web.",
        skills: [
            "React",
            "Vite",
            "Tailwind CSS",
            "JavaScript",
            "HTML",
            "CSS",
            "Axios",
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        description:
            "Designing APIs and server-side applications for production systems.",
        skills: [
            "FastAPI",
            "Spring Boot",
            "Node.js",
            "REST APIs",
            "Authentication",
            "MongoDB",
            "MySQL",
        ],
    },
    {
        id: "tools",
        label: "Tools",
        icon: Wrench,
        description:
            "Developer tools and infrastructure used to build and ship projects.",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Postman",
            "VS Code",
            "Linux",
            "Vercel",
        ],
    },
];

function Skills() {

    const [active, setActive] = useState("ai");

    const activeCategory =
        categories.find(
            (category) => category.id === active
        ) || categories[0];

    const Icon = activeCategory.icon;

    return (
        <section
            id="capabilities"
            className="
                relative
                py-28
                md:py-36
                border-b
                border-white/[0.07]
                bg-[#07070a]
            "
        >

            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Header */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="max-w-3xl"
                >

                    <div className="flex items-center gap-3">

                        <span className="text-xs font-mono text-white/20">
                            02
                        </span>

                        <span className="text-sm text-blue-400">
                            Capabilities
                        </span>

                    </div>

                    <h2
                        className="
                            mt-5
                            text-4xl
                            md:text-6xl
                            font-semibold
                            tracking-tight
                            text-white
                        "
                    >
                        A stack built
                        <span className="text-white/25">
                            {" "}for ideas.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-white/35">
                        Explore the technologies and areas I work with
                        across AI, software engineering and modern web
                        development.
                    </p>

                </motion.div>


                {/* Interactive Matrix */}

                <div className="mt-16 grid lg:grid-cols-[280px_1fr] gap-4">

                    {/* Categories */}

                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.02]
                            p-3
                            h-fit
                        "
                    >

                        {categories.map((category) => {

                            const CategoryIcon =
                                category.icon;

                            const isActive =
                                active === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setActive(category.id)
                                    }
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        gap-3
                                        px-4
                                        py-3.5
                                        rounded-2xl
                                        text-left
                                        transition
                                        ${
                                            isActive
                                                ? "bg-white text-black"
                                                : "text-white/40 hover:text-white hover:bg-white/[0.04]"
                                        }
                                    `}
                                >

                                    <CategoryIcon size={17} />

                                    <span className="text-sm font-medium">
                                        {category.label}
                                    </span>

                                    {isActive && (
                                        <ArrowUpRight
                                            size={15}
                                            className="ml-auto"
                                        />
                                    )}

                                </button>
                            );
                        })}

                    </div>


                    {/* Content */}

                    <div
                        className="
                            min-h-[420px]
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            p-8
                            md:p-10
                            overflow-hidden
                        "
                    >

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeCategory.id}
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -15,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >

                                {/* Category heading */}

                                <div className="flex items-start justify-between">

                                    <div>

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >

                                            <Icon
                                                size={22}
                                                className="text-blue-400"
                                            />

                                        </div>

                                        <h3
                                            className="
                                                mt-7
                                                text-3xl
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {activeCategory.label}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                max-w-xl
                                                leading-7
                                                text-white/35
                                            "
                                        >
                                            {activeCategory.description}
                                        </p>

                                    </div>

                                    <span className="hidden sm:block text-xs font-mono text-white/15">
                                        {String(
                                            activeCategory.skills.length
                                        ).padStart(2, "0")}{" "}
                                        skills
                                    </span>

                                </div>


                                {/* Skills */}

                                <div
                                    className="
                                        mt-12
                                        grid
                                        sm:grid-cols-2
                                        md:grid-cols-3
                                        gap-3
                                    "
                                >

                                    {activeCategory.skills.map(
                                        (skill, index) => (

                                            <motion.div
                                                key={skill}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    duration: 0.25,
                                                    delay:
                                                        index * 0.035,
                                                }}
                                                whileHover={{
                                                    scale: 1.02,
                                                }}
                                                className="
                                                    group
                                                    p-4
                                                    rounded-2xl
                                                    border
                                                    border-white/[0.07]
                                                    bg-black/20
                                                    hover:bg-white/[0.05]
                                                    hover:border-white/15
                                                    transition
                                                "
                                            >

                                                <div className="flex items-center justify-between">

                                                    <span className="text-sm text-white/65">
                                                        {skill}
                                                    </span>

                                                    <span
                                                        className="
                                                            w-1.5
                                                            h-1.5
                                                            rounded-full
                                                            bg-blue-400/60
                                                            opacity-0
                                                            group-hover:opacity-100
                                                            transition
                                                        "
                                                    />

                                                </div>

                                            </motion.div>

                                        )
                                    )}

                                </div>

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;