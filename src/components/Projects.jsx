import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Sparkles,
    Layers3,
    Search,
    X,
    Code2,
    Eye,
} from "lucide-react";

import projects from "../data/projects";

const filters = [
    "All",
    "AI / ML",
    "AI / RAG",
    "Full Stack",
    "Machine Learning",
];

/* =========================================================
   PROJECT VISUAL
========================================================= */

function ProjectVisual({ project, featured = false }) {
    const accentMap = {
        blue: {
            glow: "bg-blue-500",
            text: "text-blue-300",
            border: "border-blue-400/20",
        },

        violet: {
            glow: "bg-violet-500",
            text: "text-violet-300",
            border: "border-violet-400/20",
        },

        cyan: {
            glow: "bg-cyan-500",
            text: "text-cyan-300",
            border: "border-cyan-400/20",
        },

        emerald: {
            glow: "bg-emerald-500",
            text: "text-emerald-300",
            border: "border-emerald-400/20",
        },

        orange: {
            glow: "bg-orange-500",
            text: "text-orange-300",
            border: "border-orange-400/20",
        },
    };

    const style =
        accentMap[project.accent] ||
        accentMap.blue;

    return (
        <div
            className={`
                relative
                overflow-hidden
                ${
                    featured
                        ? "min-h-[320px] md:min-h-[430px]"
                        : "h-[220px]"
                }
                bg-[#09090d]
                border-b
                ${style.border}
            `}
        >
            {/* Background Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.05]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:35px_35px]
                "
            />

            {/* Glow */}

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[300px]
                    h-[300px]
                    rounded-full
                    ${style.glow}
                    opacity-20
                    blur-[110px]
                `}
            />

            {/* Browser Window */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                    rotateX: 10,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.15,
                }}
                className={`
                    absolute
                    ${
                        featured
                            ? "inset-6 md:inset-10"
                            : "inset-5"
                    }
                    rounded-2xl
                    border
                    border-white/[0.1]
                    bg-black/60
                    backdrop-blur-xl
                    overflow-hidden
                    shadow-2xl
                `}
            >
                {/* Browser Header */}

                <div
                    className="
                        h-11
                        px-4
                        border-b
                        border-white/[0.07]
                        flex
                        items-center
                        gap-2
                    "
                >
                    <span className="w-2 h-2 rounded-full bg-white/20" />

                    <span className="w-2 h-2 rounded-full bg-white/15" />

                    <span className="w-2 h-2 rounded-full bg-white/10" />

                    <div
                        className="
                            ml-3
                            px-3
                            py-1
                            rounded-md
                            bg-white/[0.04]
                            text-[7px]
                            md:text-[8px]
                            font-mono
                            text-white/20
                        "
                    >
                        {project.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}
                        .app
                    </div>
                </div>

                {/* Dashboard */}

                <div
                    className="
                        relative
                        h-full
                        p-5
                        md:p-8
                    "
                >
                    {/* Top */}

                    <div className="flex items-center justify-between">

                        <div>
                            <p
                                className={`
                                    text-[8px]
                                    tracking-[0.25em]
                                    ${style.text}
                                `}
                            >
                                PROJECT SYSTEM
                            </p>

                            <div
                                className="
                                    mt-3
                                    w-24
                                    h-2
                                    rounded-full
                                    bg-white/10
                                "
                            />

                            <div
                                className="
                                    mt-2
                                    w-16
                                    h-2
                                    rounded-full
                                    bg-white/[0.05]
                                "
                            />
                        </div>

                        <div
                            className={`
                                w-10
                                h-10
                                rounded-xl
                                border
                                ${style.border}
                                bg-white/[0.03]
                                flex
                                items-center
                                justify-center
                            `}
                        >
                            <Code2
                                size={17}
                                className={style.text}
                            />
                        </div>
                    </div>

                    {/* Analytics */}

                    <div
                        className="
                            mt-7
                            grid
                            grid-cols-3
                            gap-3
                        "
                    >
                        {[0, 1, 2].map((item) => (
                            <div
                                key={item}
                                className="
                                    rounded-xl
                                    border
                                    border-white/[0.06]
                                    bg-white/[0.025]
                                    p-3
                                "
                            >
                                <div className="h-1.5 w-8 bg-white/15 rounded-full" />

                                <div
                                    className={`
                                        mt-4
                                        h-7
                                        rounded-md
                                        ${style.glow}
                                        opacity-${item === 1 ? "30" : "20"}
                                    `}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Graph */}

                    <div
                        className="
                            mt-5
                            rounded-2xl
                            border
                            border-white/[0.06]
                            bg-white/[0.02]
                            p-4
                            h-[110px]
                            md:h-[150px]
                            flex
                            items-end
                            gap-2
                        "
                    >
                        {[35, 55, 40, 80, 60, 95, 72, 100].map(
                            (height, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        height: 0,
                                    }}
                                    whileInView={{
                                        height: `${height}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay:
                                            0.2 +
                                            index * 0.06,
                                    }}
                                    className={`
                                        flex-1
                                        rounded-t-sm
                                        ${style.glow}
                                        opacity-30
                                    `}
                                />
                            )
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Preview Label */}

            <div
                className="
                    absolute
                    bottom-4
                    right-5
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    tracking-[0.2em]
                    text-white/25
                "
            >
                <Eye size={11} />

                LIVE PREVIEW
            </div>
        </div>
    );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
    project,
    index,
}) {
    const [rotate, setRotate] = useState({
        rotateX: 0,
        rotateY: 0,
    });

    const handleMouseMove = (event) => {
        if (window.innerWidth < 768) return;

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left;

        const y =
            event.clientY -
            rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 7;

        const rotateX =
            ((y / rect.height) - 0.5) * -7;

        setRotate({
            rotateX,
            rotateY,
        });
    };

    const resetTilt = () => {
        setRotate({
            rotateX: 0,
            rotateY: 0,
        });
    };

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 45,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            animate={{
                rotateX: rotate.rotateX,
                rotateY: rotate.rotateY,
            }}
            whileHover={{
                y: -10,
            }}
            style={{
                transformStyle: "preserve-3d",
            }}
            className="
                group
                relative
                rounded-[1.8rem]
                border
                border-white/[0.09]
                bg-white/[0.025]
                overflow-hidden
                transition-shadow
                duration-500
                hover:border-white/[0.18]
                hover:shadow-[0_30px_80px_rgba(0,0,0,.45)]
            "
        >
            <ProjectVisual project={project} />

            <div
                className="
                    relative
                    p-6
                    md:p-7
                "
            >
                {/* Number */}

                <div className="flex items-center justify-between">

                    <span
                        className="
                            text-[10px]
                            font-mono
                            text-white/20
                        "
                    >
                        PROJECT_0{project.id}
                    </span>

                    <span
                        className="
                            text-[9px]
                            tracking-[0.18em]
                            text-white/30
                        "
                    >
                        {project.category}
                    </span>
                </div>

                <h3
                    className="
                        mt-5
                        text-xl
                        md:text-2xl
                        font-semibold
                        tracking-tight
                        text-white
                        group-hover:text-cyan-100
                        transition
                    "
                >
                    {project.title}
                </h3>

                <p
                    className="
                        mt-4
                        text-sm
                        leading-7
                        text-white/35
                    "
                >
                    {project.description}
                </p>

                {/* Technologies */}

                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                    "
                >
                    {project.technologies
                        .slice(0, 4)
                        .map((technology) => (
                            <span
                                key={technology}
                                className="
                                    px-3
                                    py-1.5
                                    rounded-full
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    text-[10px]
                                    text-white/40
                                "
                            >
                                {technology}
                            </span>
                        ))}
                </div>

                {/* Buttons */}

                <div
                    className="
                        mt-7
                        flex
                        items-center
                        gap-3
                    "
                >
                    {project.liveDemo !== "#" && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group/button
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                py-3.5
                                rounded-xl
                                bg-white
                                text-black
                                text-xs
                                font-medium
                                transition
                                hover:scale-[1.02]
                                hover:bg-cyan-100
                            "
                        >
                            LIVE DEMO

                            <ExternalLink
                                size={14}
                                className="
                                    transition
                                    group-hover/button:translate-x-0.5
                                    group-hover/button:-translate-y-0.5
                                "
                            />
                        </a>
                    )}

                    {project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group/button
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                py-3.5
                                rounded-xl
                                border
                                border-white/[0.1]
                                bg-white/[0.03]
                                text-white/60
                                text-xs
                                transition
                                hover:bg-white/[0.08]
                                hover:text-white
                            "
                        >
                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    border
                                    border-white/20
                                    rounded-md
                                    px-1.5
                                    py-0.5
                                "
                            >
                                GH
                            </span>

                            SOURCE

                            <ArrowUpRight
                                size={14}
                                className="
                                    transition
                                    group-hover/button:translate-x-0.5
                                    group-hover/button:-translate-y-0.5
                                "
                            />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function Projects() {
    const [activeFilter, setActiveFilter] =
        useState("All");

    const [searchQuery, setSearchQuery] =
        useState("");

    const filteredProjects =
        projects.filter((project) => {
            const matchesCategory =
                activeFilter === "All" ||
                project.category === activeFilter;

            const query =
                searchQuery
                    .trim()
                    .toLowerCase();

            const matchesSearch =
                !query ||
                project.title
                    .toLowerCase()
                    .includes(query) ||
                project.description
                    .toLowerCase()
                    .includes(query) ||
                project.category
                    .toLowerCase()
                    .includes(query) ||
                project.technologies.some(
                    (technology) =>
                        technology
                            .toLowerCase()
                            .includes(query)
                );

            return (
                matchesCategory &&
                matchesSearch
            );
        });

    const featuredProject =
        projects.find(
            (project) =>
                project.featured
        ) || projects[0];

    const clearFilters = () => {
        setActiveFilter("All");
        setSearchQuery("");
    };

    return (
        <section
            id="projects"
            className="
                relative
                overflow-hidden
                py-28
                md:py-36
                bg-[#050507]
                border-b
                border-white/[0.07]
            "
        >
            {/* Background */}

            <div
                className="
                    absolute
                    right-[-200px]
                    top-[10%]
                    w-[600px]
                    h-[600px]
                    rounded-full
                    bg-blue-600/[0.035]
                    blur-[160px]
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    left-[-200px]
                    bottom-[10%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-violet-600/[0.035]
                    blur-[160px]
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.018]
                    pointer-events-none
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-5
                    md:px-8
                "
            >
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
                        duration: 0.7,
                    }}
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                        gap-10
                    "
                >
                    <div className="max-w-3xl">

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-9
                                    h-9
                                    rounded-xl
                                    border
                                    border-cyan-400/10
                                    bg-cyan-400/[0.06]
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Layers3
                                    size={16}
                                    className="text-cyan-300"
                                />
                            </div>

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        tracking-[0.3em]
                                        text-cyan-300/60
                                    "
                                >
                                    03 — PROJECT LAB
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-white/25
                                    "
                                >
                                    Experiments turned into products
                                </p>
                            </div>
                        </div>

                        <h2
                            className="
                                mt-8
                                text-5xl
                                md:text-7xl
                                font-semibold
                                tracking-[-0.05em]
                                leading-[0.95]
                            "
                        >
                            Things I've

                            <span
                                className="
                                    block
                                    mt-2
                                    text-transparent
                                    bg-clip-text
                                    bg-gradient-to-r
                                    from-cyan-300
                                    via-blue-400
                                    to-violet-400
                                "
                            >
                                built.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-base
                                md:text-lg
                                leading-8
                                text-white/40
                            "
                        >
                            A collection of AI experiments,
                            intelligent systems, and full-stack
                            applications designed to turn ideas
                            into practical products.
                        </p>
                    </div>

                    {/* Search */}

                    <div
                        className="
                            relative
                            w-full
                            lg:w-[300px]
                        "
                    >
                        <Search
                            size={16}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-white/25
                            "
                        />

                        <input
                            value={searchQuery}
                            onChange={(event) =>
                                setSearchQuery(
                                    event.target.value
                                )
                            }
                            placeholder="Search projects..."
                            className="
                                w-full
                                py-4
                                pl-11
                                pr-5
                                rounded-2xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                text-sm
                                text-white
                                placeholder:text-white/20
                                outline-none
                                focus:border-cyan-400/30
                                transition
                            "
                        />
                    </div>
                </motion.div>


                {/* Filters */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.1,
                    }}
                    className="
                        mt-12
                        flex
                        gap-2
                        overflow-x-auto
                        pb-2
                        scrollbar-hide
                    "
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() =>
                                setActiveFilter(filter)
                            }
                            className={`
                                shrink-0
                                px-5
                                py-3
                                rounded-full
                                text-xs
                                transition
                                ${
                                    activeFilter === filter
                                        ? "bg-white text-black"
                                        : "border border-white/[0.08] bg-white/[0.025] text-white/40 hover:text-white"
                                }
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>


                {/* FEATURED PROJECT */}

                {featuredProject &&
                    filteredProjects.some(
                        (project) =>
                            project.id ===
                            featuredProject.id
                    ) && (

                        <motion.article
                            initial={{
                                opacity: 0,
                                y: 45,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1,
                                ],
                            }}
                            className="
                                group
                                relative
                                mt-14
                                overflow-hidden
                                rounded-[2.2rem]
                                border
                                border-white/[0.1]
                                bg-white/[0.025]
                                hover:border-cyan-400/20
                                transition
                            "
                        >
                            {/* Featured Badge */}

                            <div
                                className="
                                    absolute
                                    top-5
                                    left-5
                                    z-20
                                    flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-full
                                    border
                                    border-cyan-400/15
                                    bg-black/50
                                    backdrop-blur-xl
                                "
                            >
                                <Sparkles
                                    size={13}
                                    className="text-cyan-300"
                                />

                                <span
                                    className="
                                        text-[9px]
                                        tracking-[0.22em]
                                        text-cyan-200
                                    "
                                >
                                    FEATURED PROJECT
                                </span>
                            </div>

                            <div
                                className="
                                    grid
                                    lg:grid-cols-[1.05fr_.95fr]
                                "
                            >
                                <ProjectVisual
                                    project={
                                        featuredProject
                                    }
                                    featured
                                />

                                <div
                                    className="
                                        flex
                                        flex-col
                                        justify-center
                                        p-7
                                        md:p-12
                                    "
                                >
                                    <span
                                        className="
                                            text-[10px]
                                            tracking-[0.22em]
                                            text-cyan-300/60
                                        "
                                    >
                                        {featuredProject.category}
                                    </span>

                                    <h3
                                        className="
                                            mt-5
                                            text-3xl
                                            md:text-5xl
                                            font-semibold
                                            tracking-tight
                                        "
                                    >
                                        {
                                            featuredProject.title
                                        }
                                    </h3>

                                    <p
                                        className="
                                            mt-6
                                            max-w-xl
                                            text-sm
                                            md:text-base
                                            leading-8
                                            text-white/40
                                        "
                                    >
                                        {
                                            featuredProject.description
                                        }
                                    </p>

                                    <div
                                        className="
                                            mt-8
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >
                                        {featuredProject.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={
                                                        technology
                                                    }
                                                    className="
                                                        px-3
                                                        py-2
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        bg-black/20
                                                        text-[10px]
                                                        text-white/45
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
                                            mt-10
                                            flex
                                            flex-col
                                            sm:flex-row
                                            gap-3
                                        "
                                    >
                                        {featuredProject.liveDemo !==
                                            "#" && (
                                            <a
                                                href={
                                                    featuredProject.liveDemo
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    group/button
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-3
                                                    px-7
                                                    py-4
                                                    rounded-xl
                                                    bg-white
                                                    text-black
                                                    text-xs
                                                    font-medium
                                                    hover:bg-cyan-100
                                                    transition
                                                "
                                            >
                                                VIEW LIVE PROJECT

                                                <ExternalLink
                                                    size={15}
                                                    className="
                                                        transition
                                                        group-hover/button:translate-x-1
                                                        group-hover/button:-translate-y-1
                                                    "
                                                />
                                            </a>
                                        )}

                                        {featuredProject.github !==
                                            "#" && (
                                            <a
                                                href={
                                                    featuredProject.github
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    group/button
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-3
                                                    px-7
                                                    py-4
                                                    rounded-xl
                                                    border
                                                    border-white/[0.1]
                                                    text-white/60
                                                    text-xs
                                                    hover:bg-white/[0.05]
                                                    hover:text-white
                                                    transition
                                                "
                                            >
                                                <span
                                                    className="
                                                        font-bold
                                                        text-[10px]
                                                    "
                                                >
                                                    GH
                                                </span>

                                                VIEW SOURCE

                                                <ArrowUpRight
                                                    size={15}
                                                    className="
                                                        transition
                                                        group-hover/button:translate-x-1
                                                        group-hover/button:-translate-y-1
                                                    "
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    )}


                {/* OTHER PROJECTS */}

                <div
                    className="
                        mt-8
                        grid
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-5
                    "
                >
                    {filteredProjects
                        .filter(
                            (project) =>
                                project.id !==
                                featuredProject?.id
                        )
                        .map(
                            (project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            )
                        )}
                </div>


                {/* Empty State */}

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        className="
                            mt-12
                            py-20
                            rounded-[2rem]
                            border
                            border-white/[0.08]
                            bg-white/[0.02]
                            text-center
                        "
                    >
                        <X
                            size={25}
                            className="
                                mx-auto
                                text-white/25
                            "
                        />

                        <h3
                            className="
                                mt-5
                                text-xl
                                text-white
                            "
                        >
                            No projects found.
                        </h3>

                        <p
                            className="
                                mt-3
                                text-sm
                                text-white/30
                            "
                        >
                            Try another search or category.
                        </p>

                        <button
                            onClick={clearFilters}
                            className="
                                mt-7
                                px-5
                                py-3
                                rounded-full
                                bg-white
                                text-black
                                text-xs
                                hover:bg-white/90
                                transition
                            "
                        >
                            Reset filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Projects;