import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Sparkles,
    Layers3,
} from "lucide-react";

import projects from "../data/projects";

const filters = [
    "All",
    "AI / ML",
    "AI / RAG",
    "Full Stack",
    "Machine Learning",
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(
                  (project) =>
                      project.category === activeFilter
              );

    const featuredProject =
        projects.find(
            (project) => project.featured
        ) || projects[0];

    const otherProjects = filteredProjects.filter(
        (project) =>
            project.id !== featuredProject.id
    );

    return (
        <section
            id="projects"
            className="
                relative
                py-28
                md:py-36
                bg-[#050507]
                border-b
                border-white/[0.07]
            "
        >

            {/* Background glow */}

            <div
                className="
                    absolute
                    right-[-150px]
                    top-[20%]
                    w-[400px]
                    h-[400px]
                    rounded-full
                    bg-blue-600/[0.04]
                    blur-[120px]
                    pointer-events-none
                "
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8">

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
                            03
                        </span>

                        <span className="text-sm text-blue-400">
                            Project Lab
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
                        Things I've
                        <span className="text-white/25">
                            {" "}built.
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            leading-8
                            text-white/35
                        "
                    >
                        A collection of experiments, products,
                        and engineering projects across AI,
                        software development, and intelligent
                        systems.
                    </p>
                </motion.div>


                {/* Featured Project */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mt-16
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/10
                        bg-white/[0.025]
                    "
                >

                    <div
                        className="
                            absolute
                            right-[-100px]
                            top-[-100px]
                            w-[350px]
                            h-[350px]
                            rounded-full
                            bg-blue-500/[0.08]
                            blur-[100px]
                        "
                    />

                    <div
                        className="
                            relative
                            grid
                            lg:grid-cols-[1.1fr_.9fr]
                        "
                    >

                        {/* Information */}

                        <div className="p-8 md:p-12">

                            <div className="flex items-center justify-between">

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-blue-500/10
                                        border
                                        border-blue-400/10
                                        text-xs
                                        text-blue-400
                                    "
                                >
                                    <Sparkles size={13} />

                                    Featured Project
                                </span>

                                <span className="text-xs font-mono text-white/15">
                                    01
                                </span>

                            </div>

                            <h3
                                className="
                                    mt-8
                                    text-3xl
                                    md:text-5xl
                                    font-semibold
                                    tracking-tight
                                    text-white
                                "
                            >
                                {featuredProject.title}
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-base
                                    md:text-lg
                                    leading-8
                                    text-white/40
                                "
                            >
                                {featuredProject.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">

                                {featuredProject.technologies.map(
                                    (technology) => (
                                        <span
                                            key={technology}
                                            className="
                                                px-3
                                                py-1.5
                                                rounded-lg
                                                border
                                                border-white/[0.08]
                                                bg-white/[0.025]
                                                text-xs
                                                text-white/45
                                            "
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}

                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">

                                {featuredProject.liveDemo !== "#" && (
                                    <a
                                        href={
                                            featuredProject.liveDemo
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-white
                                            text-black
                                            text-sm
                                            font-medium
                                            hover:bg-white/90
                                            transition
                                        "
                                    >
                                        Live Demo

                                        <ExternalLink
                                            size={15}
                                        />
                                    </a>
                                )}

                                {featuredProject.github !== "#" && (
                                    <a
                                        href={
                                            featuredProject.github
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/[0.03]
                                            text-white/70
                                            text-sm
                                            hover:bg-white/[0.07]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                        <span className="font-semibold text-xs">
                                            GH
                                        </span>

                                        GitHub
                                    </a>
                                )}

                            </div>

                        </div>


                        {/* Project Preview */}

                        <div
                            className="
                                relative
                                min-h-[350px]
                                border-t
                                lg:border-t-0
                                lg:border-l
                                border-white/[0.07]
                                bg-black/20
                                flex
                                items-center
                                justify-center
                                p-8
                            "
                        >

                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-[0.04]
                                "
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                                    backgroundSize:
                                        "40px 40px",
                                }}
                            />

                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    relative
                                    w-full
                                    max-w-sm
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-[#0b0b0f]
                                    shadow-2xl
                                    overflow-hidden
                                "
                            >

                                <div
                                    className="
                                        h-10
                                        px-4
                                        flex
                                        items-center
                                        gap-2
                                        border-b
                                        border-white/[0.07]
                                    "
                                >

                                    <span className="w-2 h-2 rounded-full bg-white/20" />
                                    <span className="w-2 h-2 rounded-full bg-white/20" />
                                    <span className="w-2 h-2 rounded-full bg-white/20" />

                                    <span className="ml-auto text-[10px] text-white/20">
                                        AI_ANALYZER
                                    </span>

                                </div>

                                <div className="p-5">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-[10px] text-white/25">
                                                MATCH SCORE
                                            </p>

                                            <p className="mt-1 text-3xl font-semibold text-white">
                                                92%
                                            </p>

                                        </div>

                                        <div
                                            className="
                                                w-14
                                                h-14
                                                rounded-full
                                                border
                                                border-blue-400/30
                                                flex
                                                items-center
                                                justify-center
                                                text-xs
                                                text-blue-400
                                            "
                                        >
                                            AI
                                        </div>

                                    </div>

                                    <div className="mt-6 space-y-2">

                                        {[
                                            "Python",
                                            "Machine Learning",
                                            "NLP",
                                            "React",
                                        ].map(
                                            (
                                                skill,
                                                index
                                            ) => (
                                                <div
                                                    key={skill}
                                                    className="
                                                        flex
                                                        items-center
                                                        justify-between
                                                        px-3
                                                        py-2.5
                                                        rounded-xl
                                                        bg-white/[0.03]
                                                        border
                                                        border-white/[0.05]
                                                    "
                                                >
                                                    <span className="text-xs text-white/45">
                                                        {skill}
                                                    </span>

                                                    <span className="text-[10px] text-emerald-400">
                                                        {95 -
                                                            index *
                                                                4}
                                                        %
                                                    </span>
                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </motion.div>


                {/* Filters */}

                <div className="mt-16 flex flex-wrap gap-2">

                    {filters.map((filter) => {

                        const isActive =
                            activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                onClick={() =>
                                    setActiveFilter(filter)
                                }
                                className={`
                                    px-4
                                    py-2.5
                                    rounded-full
                                    text-sm
                                    transition
                                    border
                                    ${
                                        isActive
                                            ? "bg-white text-black border-white"
                                            : "bg-white/[0.025] text-white/40 border-white/10 hover:text-white hover:bg-white/[0.05]"
                                    }
                                `}
                            >
                                {filter}
                            </button>
                        );
                    })}

                </div>


                {/* Project Cards */}

                <motion.div
                    layout
                    className="
                        mt-8
                        grid
                        md:grid-cols-2
                        gap-5
                    "
                >

                    <AnimatePresence mode="popLayout">

                        {otherProjects.map(
                            (project, index) => (

                                <motion.article
                                    key={project.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.95,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay:
                                            index * 0.04,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[2rem]
                                        border
                                        border-white/10
                                        bg-white/[0.025]
                                        p-7
                                    "
                                >

                                    <div
                                        className="
                                            absolute
                                            -right-20
                                            -top-20
                                            w-40
                                            h-40
                                            rounded-full
                                            bg-blue-500/[0.05]
                                            blur-3xl
                                            opacity-0
                                            group-hover:opacity-100
                                            transition
                                        "
                                    />

                                    <div className="relative">

                                        <div className="flex items-center justify-between">

                                            <span className="text-xs font-mono text-white/15">
                                                PROJECT{" "}
                                                {String(
                                                    project.id
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <Layers3
                                                size={18}
                                                className="text-white/20"
                                            />

                                        </div>

                                        <h3
                                            className="
                                                mt-8
                                                text-2xl
                                                font-semibold
                                                text-white
                                                group-hover:text-blue-300
                                                transition
                                            "
                                        >
                                            {project.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-4
                                                leading-7
                                                text-sm
                                                text-white/35
                                            "
                                        >
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">

                                            {project.technologies
                                                .slice(
                                                    0,
                                                    4
                                                )
                                                .map(
                                                    (
                                                        technology
                                                    ) => (
                                                        <span
                                                            key={
                                                                technology
                                                            }
                                                            className="
                                                                px-2.5
                                                                py-1
                                                                rounded-lg
                                                                bg-white/[0.03]
                                                                border
                                                                border-white/[0.06]
                                                                text-[11px]
                                                                text-white/35
                                                            "
                                                        >
                                                            {
                                                                technology
                                                            }
                                                        </span>
                                                    )
                                                )}

                                        </div>

                                        <div
                                            className="
                                                mt-8
                                                pt-5
                                                border-t
                                                border-white/[0.07]
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <button
                                                onClick={() =>
                                                    setSelectedProject(
                                                        project
                                                    )
                                                }
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    text-white/50
                                                    hover:text-white
                                                    transition
                                                "
                                            >
                                                View details

                                                <ArrowUpRight
                                                    size={15}
                                                />
                                            </button>


                                            <div className="flex gap-2">

                                                {project.github !==
                                                    "#" && (
                                                    <a
                                                        href={
                                                            project.github
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            w-9
                                                            h-9
                                                            rounded-xl
                                                            border
                                                            border-white/10
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-white/40
                                                            hover:text-white
                                                            hover:bg-white/[0.05]
                                                        "
                                                        title="GitHub"
                                                    >
                                                        <span className="text-[10px] font-bold">
                                                            GH
                                                        </span>
                                                    </a>
                                                )}

                                                {project.liveDemo !==
                                                    "#" && (
                                                    <a
                                                        href={
                                                            project.liveDemo
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            w-9
                                                            h-9
                                                            rounded-xl
                                                            border
                                                            border-white/10
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-white/40
                                                            hover:text-white
                                                            hover:bg-white/[0.05]
                                                        "
                                                        title="Live Demo"
                                                    >
                                                        <ExternalLink
                                                            size={
                                                                15
                                                            }
                                                        />
                                                    </a>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </motion.article>

                            )
                        )}

                    </AnimatePresence>

                </motion.div>


                {/* Empty state */}

                {otherProjects.length === 0 && (
                    <div
                        className="
                            mt-8
                            p-12
                            rounded-[2rem]
                            border
                            border-white/10
                            text-center
                            text-white/30
                        "
                    >
                        No projects in this category yet.
                    </div>
                )}

            </div>


            {/* Project Modal */}

            <AnimatePresence>

                {selectedProject && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            bg-black/70
                            backdrop-blur-md
                            flex
                            items-center
                            justify-center
                            p-5
                        "
                        onClick={() =>
                            setSelectedProject(null)
                        }
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 20,
                                scale: 0.96,
                            }}
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                            className="
                                w-full
                                max-w-2xl
                                max-h-[90vh]
                                overflow-y-auto
                                rounded-[2rem]
                                border
                                border-white/10
                                bg-[#0b0b0f]
                                p-8
                                md:p-10
                            "
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <p className="text-xs text-blue-400">
                                        {selectedProject.category}
                                    </p>

                                    <h3
                                        className="
                                            mt-3
                                            text-3xl
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {selectedProject.title}
                                    </h3>

                                </div>

                                <button
                                    onClick={() =>
                                        setSelectedProject(
                                            null
                                        )
                                    }
                                    className="
                                        w-9
                                        h-9
                                        rounded-xl
                                        border
                                        border-white/10
                                        text-white/40
                                        hover:text-white
                                    "
                                >
                                    ×
                                </button>

                            </div>

                            <p
                                className="
                                    mt-7
                                    leading-8
                                    text-white/40
                                "
                            >
                                {selectedProject.description}
                            </p>

                            <div className="mt-8">

                                <p className="text-xs text-white/25">
                                    TECHNOLOGIES
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">

                                    {selectedProject.technologies.map(
                                        (technology) => (
                                            <span
                                                key={
                                                    technology
                                                }
                                                className="
                                                    px-3
                                                    py-2
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-white/[0.03]
                                                    text-sm
                                                    text-white/50
                                                "
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">

                                {selectedProject.liveDemo !==
                                    "#" && (
                                    <a
                                        href={
                                            selectedProject.liveDemo
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-full
                                            bg-white
                                            text-black
                                            text-sm
                                            font-medium
                                        "
                                    >
                                        Live Demo
                                        <ExternalLink
                                            size={15}
                                        />
                                    </a>
                                )}

                                {selectedProject.github !==
                                    "#" && (
                                    <a
                                        href={
                                            selectedProject.github
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-full
                                            border
                                            border-white/10
                                            text-white/60
                                            text-sm
                                        "
                                    >
                                        <span className="text-xs font-bold">
                                            GH
                                        </span>

                                        GitHub
                                    </a>
                                )}

                            </div>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>

        </section>
    );
}

export default Projects;