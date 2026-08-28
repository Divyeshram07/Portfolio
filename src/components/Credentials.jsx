import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    BrainCircuit,
    ChevronDown,
    GraduationCap,
    School,
    BookOpen,
    Sparkles,
    ArrowUpRight,
    GraduationCap as EducationIcon,
    Target,
    BookOpenCheck,
    CircleDot,
} from "lucide-react";

/* ======================================================
   EDUCATION TIMELINE
====================================================== */

const timeline = [
    {
        id: 1,
        year: "2023 — Present",
        type: "Higher Education",
        title: "Bachelor of Technology in Computer Science",
        subtitle: "K L University",
        description:
            "Pursuing a Bachelor of Technology in Computer Science with a strong interest in artificial intelligence, software engineering, data structures, databases, NLP, RAG systems, and modern application development.",
        icon: GraduationCap,
        tags: [
            "Computer Science",
            "Artificial Intelligence",
            "Software Engineering",
            "CGPA: 8.75",
        ],
    },

    {
        id: 2,
        year: "2021 — 2023",
        type: "Senior Secondary",
        title: "12th Grade — CBSE",
        subtitle: "Accord School",
        description:
            "Completed senior secondary education under the CBSE curriculum, building the academic foundation that led to my undergraduate studies in Computer Science.",
        icon: School,
        tags: [
            "CBSE",
            "12th Grade",
            "70%",
        ],
    },

    {
        id: 3,
        year: "2020 — 2021",
        type: "Secondary Education",
        title: "10th Grade — CBSE",
        subtitle:
            "KCP Siddhartha Adarsh Residential Public School",
        description:
            "Completed secondary education under the CBSE curriculum and developed the foundation for further academic and technical learning.",
        icon: BookOpen,
        tags: [
            "CBSE",
            "10th Grade",
            "78%",
        ],
    },
];

/* ======================================================
   RESEARCH AREAS
====================================================== */

const researchAreas = [
    {
        title: "Generative AI",
        description:
            "Exploring practical applications of large language models and intelligent software systems.",
        number: "01",
    },

    {
        title: "RAG Systems",
        description:
            "Building systems that combine retrieval, embeddings and language models for contextual answers.",
        number: "02",
    },

    {
        title: "Natural Language Processing",
        description:
            "Interested in language understanding, semantic search, text classification and transformer-based systems.",
        number: "03",
    },
];

/* ======================================================
   EDUCATION ITEM
====================================================== */

function EducationItem({ item, index, openId, setOpenId }) {
    const Icon = item.icon;
    const isOpen = openId === item.id;

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative pl-14 md:pl-16"
        >
            {/* Timeline node */}

            <motion.div
                animate={{
                    scale: isOpen ? 1.08 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                }}
                className={`
                    absolute
                    left-0
                    top-1
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    transition-all
                    duration-500
                    ${
                        isOpen
                            ? "border-cyan-400/30 bg-cyan-400/[0.10] shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                            : "border-white/[0.08] bg-[#09090d]"
                    }
                `}
            >
                <Icon
                    size={17}
                    className={
                        isOpen
                            ? "text-cyan-300"
                            : "text-white/30"
                    }
                />
            </motion.div>

            {/* Content card */}

            <div
                className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-500
                    ${
                        isOpen
                            ? "border-white/[0.12] bg-white/[0.035]"
                            : "border-white/[0.06] bg-transparent hover:border-white/[0.10] hover:bg-white/[0.02]"
                    }
                `}
            >
                {/* Hover glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-32
                        w-32
                        rounded-full
                        bg-cyan-400/[0.04]
                        blur-[60px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                />

                <button
                    type="button"
                    onClick={() =>
                        setOpenId(isOpen ? null : item.id)
                    }
                    className="
                        relative
                        w-full
                        p-5
                        text-left
                        md:p-6
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-5
                        "
                    >
                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs font-medium text-cyan-300/80">
                                    {item.year}
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-white/[0.06]
                                        bg-white/[0.03]
                                        px-2.5
                                        py-1
                                        text-[9px]
                                        uppercase
                                        tracking-[0.14em]
                                        text-white/25
                                    "
                                >
                                    {item.type}
                                </span>
                            </div>

                            <h4
                                className="
                                    mt-4
                                    max-w-xl
                                    text-lg
                                    font-semibold
                                    leading-snug
                                    text-white
                                    md:text-xl
                                "
                            >
                                {item.title}
                            </h4>

                            <p className="mt-2 text-sm text-white/35">
                                {item.subtitle}
                            </p>
                        </div>

                        <motion.div
                            animate={{
                                rotate: isOpen ? 180 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                mt-1
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/[0.06]
                                bg-white/[0.025]
                            "
                        >
                            <ChevronDown
                                size={15}
                                className="text-white/40"
                            />
                        </motion.div>
                    </div>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                        >
                            <div
                                className="
                                    border-t
                                    border-white/[0.06]
                                    px-5
                                    pb-6
                                    pt-5
                                    md:px-6
                                "
                            >
                                <p
                                    className="
                                        text-sm
                                        leading-7
                                        text-white/40
                                    "
                                >
                                    {item.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-lg
                                                border
                                                border-white/[0.07]
                                                bg-white/[0.025]
                                                px-3
                                                py-1.5
                                                text-[11px]
                                                text-white/40
                                                transition
                                                hover:border-cyan-400/20
                                                hover:text-cyan-200
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

/* ======================================================
   RESEARCH CARD
====================================================== */

function ResearchCard({ area, index }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            whileHover={{
                x: 6,
                y: -2,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-5
                transition-all
                duration-300
                hover:border-violet-400/20
                hover:bg-violet-400/[0.035]
            "
        >
            <div
                className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-mono
                    text-white/15
                    transition
                    group-hover:text-violet-300/50
                "
            >
                {area.number}
            </div>

            <div className="flex items-center gap-3">
                <span
                    className="
                        relative
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-violet-400/15
                        bg-violet-400/[0.07]
                    "
                >
                    <CircleDot
                        size={14}
                        className="text-violet-300"
                    />
                </span>

                <h4 className="text-sm font-medium text-white/80">
                    {area.title}
                </h4>
            </div>

            <p
                className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/35
                "
            >
                {area.description}
            </p>

            <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-violet-300/40
                    transition
                    group-hover:text-violet-300/80
                "
            >
                Exploring

                <ArrowUpRight
                    size={13}
                    className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                    "
                />
            </div>
        </motion.div>
    );
}

/* ======================================================
   MAIN COMPONENT
====================================================== */

function Research() {
    const [openId, setOpenId] = useState(1);

    return (
        <section
            id="research"
            className="
                relative
                overflow-hidden
                border-b
                border-white/[0.07]
                bg-[#050507]
                py-28
                md:py-36
            "
        >
            {/* BACKGROUND */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-[5%]
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-violet-500/[0.04]
                    blur-[160px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    left-[-180px]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-cyan-500/[0.035]
                    blur-[160px]
                "
            />

            {/* GRID */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.018]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">

                {/* HEADER */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        flex
                        flex-col
                        justify-between
                        gap-10
                        lg:flex-row
                        lg:items-end
                    "
                >
                    <div className="max-w-3xl">

                        <div className="flex items-center gap-4">
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-cyan-400/15
                                    bg-cyan-400/[0.06]
                                "
                            >
                                <BrainCircuit
                                    size={19}
                                    className="text-cyan-300"
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.3em]
                                        text-cyan-300/70
                                    "
                                >
                                    05 — LEARNING & RESEARCH
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Education · Curiosity · Exploration
                                </p>
                            </div>
                        </div>

                        <h2
                            className="
                                mt-9
                                text-5xl
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.05em]
                                text-white
                                md:text-7xl
                            "
                        >
                            Always learning.

                            <span
                                className="
                                    mt-2
                                    block
                                    bg-gradient-to-r
                                    from-cyan-300
                                    via-blue-400
                                    to-violet-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Always evolving.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-base
                                leading-8
                                text-white/40
                                md:text-lg
                            "
                        >
                            A snapshot of my academic journey and the
                            technical areas I am actively exploring through
                            continuous learning and practical development.
                        </p>
                    </div>

                    {/* QUICK STATS */}

                    <div className="grid grid-cols-3 gap-3 sm:flex">
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-5
                                py-4
                            "
                        >
                            <p className="text-xl font-semibold text-white">
                                03
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
                                Milestones
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-5
                                py-4
                            "
                        >
                            <p className="text-xl font-semibold text-white">
                                03
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
                                Focus Areas
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-5
                                py-4
                            "
                        >
                            <p className="text-xl font-semibold text-white">
                                8.75
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
                                CGPA
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* MAIN GRID */}

                <div
                    className="
                        mt-16
                        grid
                        gap-6
                        lg:grid-cols-[1.1fr_.9fr]
                    "
                >
                    {/* EDUCATION */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]
                            border
                            border-white/[0.09]
                            bg-gradient-to-br
                            from-white/[0.045]
                            to-transparent
                            p-6
                            md:p-9
                        "
                    >
                        <div
                            className="
                                absolute
                                -left-20
                                top-20
                                h-52
                                w-52
                                rounded-full
                                bg-cyan-500/[0.025]
                                blur-[100px]
                            "
                        />

                        <div className="relative">
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-cyan-400/15
                                            bg-cyan-400/[0.06]
                                        "
                                    >
                                        <EducationIcon
                                            size={18}
                                            className="text-cyan-300"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                            Education
                                        </p>

                                        <h3 className="mt-1 text-xl font-semibold text-white">
                                            Academic journey
                                        </h3>
                                    </div>
                                </div>

                                <span
                                    className="
                                        hidden
                                        rounded-full
                                        border
                                        border-white/[0.07]
                                        bg-white/[0.025]
                                        px-3
                                        py-1.5
                                        text-[10px]
                                        text-white/30
                                        sm:block
                                    "
                                >
                                    03 milestones
                                </span>
                            </div>

                            {/* TIMELINE */}

                            <div className="relative mt-10">
                                <div
                                    className="
                                        absolute
                                        bottom-8
                                        left-5
                                        top-5
                                        w-px
                                        bg-gradient-to-b
                                        from-cyan-400/50
                                        via-violet-400/20
                                        to-transparent
                                    "
                                />

                                <div className="space-y-5">
                                    {timeline.map(
                                        (item, index) => (
                                            <EducationItem
                                                key={item.id}
                                                item={item}
                                                index={index}
                                                openId={openId}
                                                setOpenId={setOpenId}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RESEARCH */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
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
                            rounded-[2rem]
                            border
                            border-white/[0.09]
                            bg-gradient-to-br
                            from-white/[0.045]
                            to-transparent
                            p-6
                            md:p-9
                        "
                    >
                        {/* HEADER */}

                        <div className="flex items-center gap-4">
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-violet-400/15
                                    bg-violet-400/[0.06]
                                "
                            >
                                <BrainCircuit
                                    size={20}
                                    className="text-violet-300"
                                />
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/70">
                                    Exploration
                                </p>

                                <h3 className="mt-1 text-xl font-semibold text-white">
                                    Research interests
                                </h3>
                            </div>
                        </div>

                        <p className="mt-7 text-sm leading-7 text-white/35">
                            Technical domains I am actively exploring and
                            learning more about through projects and practical
                            experimentation.
                        </p>

                        {/* RESEARCH CARDS */}

                        <div className="mt-8 space-y-3">
                            {researchAreas.map(
                                (area, index) => (
                                    <ResearchCard
                                        key={area.title}
                                        area={area}
                                        index={index}
                                    />
                                )
                            )}
                        </div>

                        {/* CURRENT FOCUS */}

                        <motion.div
                            whileHover={{
                                y: -4,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 20,
                            }}
                            className="
                                relative
                                mt-auto
                                overflow-hidden
                                rounded-2xl
                                border
                                border-cyan-400/12
                                bg-gradient-to-br
                                from-cyan-400/[0.07]
                                to-blue-500/[0.025]
                                p-6
                            "
                        >
                            <div
                                className="
                                    absolute
                                    -right-16
                                    -top-16
                                    h-36
                                    w-36
                                    rounded-full
                                    bg-cyan-400/[0.07]
                                    blur-[70px]
                                "
                            />

                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-cyan-400/[0.10]
                                        "
                                    >
                                        <Target
                                            size={16}
                                            className="text-cyan-300"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/60">
                                            Current Focus
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-white/75">
                                            Building intelligent systems
                                        </p>
                                    </div>
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-sm
                                        leading-7
                                        text-white/40
                                    "
                                >
                                    Building practical AI applications that
                                    combine machine learning, retrieval
                                    systems, APIs and modern interfaces.
                                </p>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        text-cyan-300/60
                                    "
                                >
                                    <Sparkles size={14} />

                                    Continuously learning through building
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* BOTTOM INSIGHT */}

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
                        delay: 0.15,
                    }}
                    className="
                        mt-6
                        flex
                        flex-col
                        gap-5
                        rounded-[1.8rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        p-6
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        md:p-8
                    "
                >
                    <div className="flex items-start gap-4">
                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-violet-400/15
                                bg-violet-400/[0.06]
                            "
                        >
                            <BookOpenCheck
                                size={18}
                                className="text-violet-300"
                            />
                        </div>

                        <div>
                            <p className="text-base font-medium text-white/75">
                                Curiosity drives progress.
                            </p>

                            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/30">
                                My academic journey and technical exploration
                                are connected by a simple goal: keep learning,
                                keep building, and turn ideas into practical
                                solutions.
                            </p>
                        </div>
                    </div>

                    <a
                        href="#projects"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-white/[0.10]
                            px-5
                            py-3
                            text-sm
                            text-white/55
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-cyan-400/25
                            hover:bg-cyan-400/[0.05]
                            hover:text-white
                        "
                    >
                        Explore my work

                        <ArrowUpRight
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Research;