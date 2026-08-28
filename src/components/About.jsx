import { motion } from "framer-motion";
import {
    UserRound,
    GraduationCap,
    MapPin,
    Target,
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Database,
    Sparkles,
    CalendarDays,
    CircleDot,
} from "lucide-react";

import profileImage from "../assets/divyesh.png";


/* ======================================================
   DATA
====================================================== */

const stats = [
    {
        value: "8.72",
        label: "CGPA",
        detail: "Academic performance",
        icon: Sparkles,
        color: "cyan",
    },
    {
        value: "2027",
        label: "Graduation",
        detail: "Expected graduation",
        icon: CalendarDays,
        color: "violet",
    },
    {
        value: "AI",
        label: "Primary Focus",
        detail: "Current direction",
        icon: BrainCircuit,
        color: "blue",
    },
    {
        value: "∞",
        label: "Learning Mode",
        detail: "Always improving",
        icon: CircleDot,
        color: "emerald",
    },
];


const focusAreas = [
    {
        icon: BrainCircuit,
        title: "Artificial Intelligence",
        description:
            "Exploring machine learning, NLP, LLM applications, and intelligent systems.",
    },
    {
        icon: Code2,
        title: "Software Engineering",
        description:
            "Building practical applications with strong programming and engineering foundations.",
    },
    {
        icon: Database,
        title: "Intelligent Data",
        description:
            "Working with retrieval, databases, and data-driven systems to create useful products.",
    },
];


const journey = [
    {
        year: "01",
        title: "Engineering Foundation",
        description:
            "Building strong fundamentals across programming, computer science, and software engineering.",
    },
    {
        year: "02",
        title: "AI Exploration",
        description:
            "Developing deeper interest in machine learning, NLP, and intelligent applications.",
    },
    {
        year: "03",
        title: "Practical Systems",
        description:
            "Turning concepts into working projects and exploring how AI can solve real problems.",
    },
];


const ease = [0.16, 1, 0.3, 1];


const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease,
        },
    },
};


/* ======================================================
   ABOUT COMPONENT
====================================================== */

function About() {
    return (
        <section
            id="about"
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
            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[15%]
                    h-[500px]
                    w-[700px]
                    -translate-x-1/2
                    rounded-full
                    bg-violet-600/[0.035]
                    blur-[150px]
                "
            />

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    bottom-[10%]
                    right-[-180px]
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-cyan-500/[0.025]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-180px]
                    top-[50%]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-500/[0.025]
                    blur-[120px]
                "
            />


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                    md:px-8
                "
            >

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-cyan-400/[0.15]
                                bg-cyan-400/[0.06]
                                shadow-[0_0_30px_rgba(34,211,238,0.05)]
                            "
                        >
                            <UserRound
                                size={17}
                                className="text-cyan-300"
                            />
                        </div>

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-cyan-300/60
                                "
                            >
                                Introduction
                            </p>

                            <span
                                className="
                                    text-sm
                                    font-medium
                                    text-white/65
                                "
                            >
                                About me
                            </span>

                        </div>

                    </div>


                    <h2
                        className="
                            mt-7
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.045em]
                            text-white
                            md:text-6xl
                        "
                    >
                        Engineer by curiosity.

                        <span
                            className="
                                mt-2
                                block
                                bg-gradient-to-r
                                from-white/70
                                via-white/35
                                to-white/15
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Builder by intent.
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
                        I enjoy turning ideas into working systems — exploring
                        artificial intelligence, building modern applications,
                        and continuously improving through practical projects.
                    </p>

                </motion.div>


                {/* =================================================
                    PROFILE GRID
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        items-stretch
                        gap-6
                        lg:grid-cols-[0.95fr_1.05fr]
                        xl:gap-8
                    "
                >

                    {/* =================================================
                        LEFT — PREMIUM PROFILE IMAGE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -35,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease,
                        }}
                        className="
                            group
                            relative
                            min-h-[540px]
                            [perspective:1200px]
                        "
                    >

                        {/* Animated Ambient Glow */}

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                pointer-events-none
                                absolute
                                -inset-8
                                rounded-[3rem]
                                bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.17),transparent_42%),radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.15),transparent_45%)]
                                blur-3xl
                            "
                        />


                        {/* PHOTO CARD */}

                        <motion.div
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.012,
                                rotateY: -1.5,
                                rotateX: 0.5,
                            }}
                            className="
                                relative
                                h-full
                                min-h-[540px]
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-white/[0.11]
                                bg-white/[0.025]
                                shadow-[0_35px_100px_rgba(0,0,0,0.45)]
                                transition-shadow
                                duration-700
                                group-hover:shadow-[0_40px_120px_rgba(34,211,238,0.10)]
                            "
                        >

                            {/* PROFILE IMAGE */}

                            <motion.img
                                src={profileImage}
                                alt="Divyesh Ram"
                                initial={{
                                    scale: 1.08,
                                    filter: "blur(7px)",
                                }}
                                whileInView={{
                                    scale: 1,
                                    filter: "blur(0px)",
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 1.3,
                                    ease,
                                }}
                                whileHover={{
                                    scale: 1.045,
                                }}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    object-center
                                    transition
                                    duration-700
                                "
                            />


                            {/* CINEMATIC OVERLAY */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#050507]
                                    via-[#050507]/20
                                    to-black/[0.02]
                                "
                            />


                            {/* COLOR ATMOSPHERE */}

                            <motion.div
                                animate={{
                                    opacity: [0.25, 0.6, 0.25],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-cyan-400/[0.10]
                                    via-transparent
                                    to-violet-500/[0.10]
                                "
                            />


                            {/* LIGHT SWEEP */}

                            <motion.div
                                animate={{
                                    x: ["-150%", "250%"],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatDelay: 4,
                                    ease: "easeInOut",
                                }}
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-y-0
                                    w-[30%]
                                    -skew-x-12
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/[0.12]
                                    to-transparent
                                    blur-xl
                                "
                            />


                            {/* TOP BADGES */}

                            <div
                                className="
                                    absolute
                                    left-5
                                    right-5
                                    top-5
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                {/* Status */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/[0.10]
                                        bg-black/35
                                        px-3
                                        py-2
                                        backdrop-blur-xl
                                    "
                                >

                                    <span className="relative flex h-2 w-2">

                                        <span
                                            className="
                                                absolute
                                                inline-flex
                                                h-full
                                                w-full
                                                animate-ping
                                                rounded-full
                                                bg-emerald-400
                                                opacity-70
                                            "
                                        />

                                        <span
                                            className="
                                                relative
                                                inline-flex
                                                h-2
                                                w-2
                                                rounded-full
                                                bg-emerald-400
                                                shadow-[0_0_10px_rgba(52,211,153,.8)]
                                            "
                                        />

                                    </span>

                                    <span
                                        className="
                                            text-[9px]
                                            tracking-[0.18em]
                                            text-white/75
                                        "
                                    >
                                        LEARNING
                                    </span>

                                </div>


                                {/* Profile ID */}

                                <div
                                    className="
                                        rounded-full
                                        border
                                        border-white/[0.10]
                                        bg-black/35
                                        px-3
                                        py-2
                                        text-[9px]
                                        tracking-[0.18em]
                                        text-white/55
                                        backdrop-blur-xl
                                    "
                                >
                                    PROFILE_01
                                </div>

                            </div>


                            {/* BOTTOM IDENTITY */}

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
                                    delay: 0.4,
                                    duration: 0.8,
                                    ease,
                                }}
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    right-0
                                    p-7
                                    md:p-9
                                "
                            >

                                <div
                                    className="
                                        mb-4
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >

                                    <motion.span
                                        animate={{
                                            width: [32, 58, 32],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            h-px
                                            bg-cyan-300/70
                                        "
                                    />

                                    <span
                                        className="
                                            text-[9px]
                                            tracking-[0.3em]
                                            text-cyan-300/75
                                        "
                                    >
                                        DIGITAL IDENTITY
                                    </span>

                                </div>


                                <h3
                                    className="
                                        text-3xl
                                        font-semibold
                                        tracking-tight
                                        text-white
                                        md:text-4xl
                                    "
                                >
                                    Divyesh Ram.
                                </h3>


                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-white/55
                                    "
                                >
                                    Computer Science Engineer · AI Builder
                                </p>

                            </motion.div>


                            {/* Decorative Corners */}

                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-4
                                    h-8
                                    w-8
                                    border-b
                                    border-l
                                    border-cyan-300/50
                                "
                            />

                            <div
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    h-8
                                    w-8
                                    border-r
                                    border-t
                                    border-violet-300/50
                                "
                            />

                        </motion.div>

                    </motion.div>


                    {/* =================================================
                        RIGHT — PROFILE INFORMATION
                    ================================================= */}

                    <div
                        className="
                            flex
                            h-full
                            flex-col
                            gap-6
                        "
                    >

                        {/* PROFILE CARD */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.85,
                                ease,
                            }}
                            className="
                                relative
                                flex
                                flex-1
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-white/[0.10]
                                bg-white/[0.025]
                                p-7
                                md:p-9
                            "
                        >

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-blue-500/[0.06]
                                    blur-[100px]
                                "
                            />

                            <div className="relative flex w-full flex-col">

                                {/* Label */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            font-mono
                                            text-xs
                                            text-white/25
                                        "
                                    >
                                        01
                                    </span>

                                    <div className="h-px w-8 bg-white/10" />

                                    <span
                                        className="
                                            text-sm
                                            text-white/50
                                        "
                                    >
                                        Profile
                                    </span>

                                </div>


                                {/* Description */}

                                <p
                                    className="
                                        mt-7
                                        text-lg
                                        leading-8
                                        text-white/72
                                        md:text-xl
                                    "
                                >
                                    I'm currently pursuing Computer Science
                                    Engineering and building my foundation across{" "}

                                    <span className="font-medium text-white">
                                        artificial intelligence,
                                    </span>{" "}

                                    software engineering, and modern web
                                    technologies.
                                </p>


                                <p
                                    className="
                                        mt-5
                                        leading-7
                                        text-white/35
                                    "
                                >
                                    My interests include AI/ML, natural
                                    language processing, retrieval systems,
                                    backend development, and building practical
                                    products around emerging technologies.
                                </p>


                                {/* INFO CARDS */}

                                <div
                                    className="
                                        mt-auto
                                        grid
                                        gap-3
                                        pt-8
                                        sm:grid-cols-2
                                    "
                                >

                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.08]
                                            bg-black/20
                                            p-5
                                            transition
                                            duration-300
                                            hover:border-cyan-400/[0.20]
                                        "
                                    >

                                        <GraduationCap
                                            size={18}
                                            className="text-cyan-300"
                                        />

                                        <p
                                            className="
                                                mt-4
                                                text-[10px]
                                                uppercase
                                                tracking-[0.15em]
                                                text-white/25
                                            "
                                        >
                                            Education
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                font-medium
                                                text-white/70
                                            "
                                        >
                                            Computer Science Engineering
                                        </p>

                                    </motion.div>


                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.08]
                                            bg-black/20
                                            p-5
                                            transition
                                            duration-300
                                            hover:border-violet-400/[0.20]
                                        "
                                    >

                                        <MapPin
                                            size={18}
                                            className="text-violet-300"
                                        />

                                        <p
                                            className="
                                                mt-4
                                                text-[10px]
                                                uppercase
                                                tracking-[0.15em]
                                                text-white/25
                                            "
                                        >
                                            Based In
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                font-medium
                                                text-white/70
                                            "
                                        >
                                            India
                                        </p>

                                    </motion.div>

                                </div>

                            </div>

                        </motion.div>


                        {/* =================================================
                            PERFECTLY ALIGNED STATS
                        ================================================= */}

                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-4
                            "
                        >

                            {stats.map((stat, index) => {

                                const Icon = stat.icon;

                                return (
                                    <motion.div
                                        key={stat.label}
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
                                            delay: index * 0.08,
                                            duration: 0.55,
                                            ease,
                                        }}
                                        whileHover={{
                                            y: -5,
                                        }}
                                        className="
                                            group
                                            flex
                                            min-h-[165px]
                                            flex-col
                                            justify-between
                                            rounded-[1.5rem]
                                            border
                                            border-white/[0.09]
                                            bg-white/[0.025]
                                            p-5
                                            transition-all
                                            duration-300
                                            hover:border-white/[0.16]
                                            hover:bg-white/[0.045]
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <span
                                                className="
                                                    font-mono
                                                    text-[10px]
                                                    text-white/20
                                                "
                                            >
                                                0{index + 1}
                                            </span>


                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    border
                                                    border-white/[0.07]
                                                    bg-white/[0.025]
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-110
                                                "
                                            >

                                                <Icon
                                                    size={14}
                                                    className={
                                                        stat.color === "cyan"
                                                            ? "text-cyan-300/70"
                                                            : stat.color === "violet"
                                                            ? "text-violet-300/70"
                                                            : stat.color === "blue"
                                                            ? "text-blue-300/70"
                                                            : "text-emerald-300/70"
                                                    }
                                                />

                                            </div>

                                        </div>


                                        <div>

                                            <p
                                                className="
                                                    text-3xl
                                                    font-semibold
                                                    tracking-tight
                                                    text-white
                                                    md:text-4xl
                                                "
                                            >
                                                {stat.value}
                                            </p>

                                            <p
                                                className="
                                                    mt-2
                                                    text-sm
                                                    text-white/50
                                                "
                                            >
                                                {stat.label}
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[10px]
                                                    text-white/20
                                                "
                                            >
                                                {stat.detail}
                                            </p>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    FOCUS AREAS
                ================================================= */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    className="mt-20"
                >

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-4
                            md:flex-row
                            md:items-end
                        "
                    >

                        <div>

                            <p
                                className="
                                    font-mono
                                    text-[10px]
                                    uppercase
                                    tracking-[0.22em]
                                    text-cyan-300/50
                                "
                            >
                                What I Focus On
                            </p>

                            <h3
                                className="
                                    mt-3
                                    text-2xl
                                    font-semibold
                                    tracking-tight
                                    text-white
                                    md:text-3xl
                                "
                            >
                                Areas of interest.
                            </h3>

                        </div>

                        <p
                            className="
                                max-w-sm
                                text-sm
                                leading-6
                                text-white/30
                            "
                        >
                            Continuously exploring technologies that help build
                            smarter and more useful digital experiences.
                        </p>

                    </div>


                    <div
                        className="
                            mt-7
                            grid
                            gap-4
                            md:grid-cols-3
                        "
                    >

                        {focusAreas.map((area, index) => {

                            const Icon = area.icon;

                            return (
                                <motion.div
                                    key={area.title}
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
                                        delay: index * 0.1,
                                        duration: 0.6,
                                        ease,
                                    }}
                                    whileHover={{
                                        y: -7,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[1.75rem]
                                        border
                                        border-white/[0.09]
                                        bg-white/[0.025]
                                        p-7
                                        transition-all
                                        duration-300
                                        hover:border-white/[0.16]
                                        hover:bg-white/[0.04]
                                    "
                                >

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-10
                                            -top-10
                                            h-32
                                            w-32
                                            rounded-full
                                            bg-cyan-400/[0.04]
                                            blur-3xl
                                            opacity-0
                                            transition
                                            duration-500
                                            group-hover:opacity-100
                                        "
                                    />

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/[0.03]
                                        "
                                    >

                                        <Icon
                                            size={20}
                                            className="
                                                text-cyan-300
                                                transition
                                                duration-300
                                                group-hover:scale-110
                                                group-hover:rotate-3
                                            "
                                        />

                                    </div>


                                    <h4
                                        className="
                                            relative
                                            mt-6
                                            text-lg
                                            font-medium
                                            text-white
                                        "
                                    >
                                        {area.title}
                                    </h4>


                                    <p
                                        className="
                                            relative
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-white/35
                                        "
                                    >
                                        {area.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>

                </motion.div>


                {/* =================================================
                    ENGINEERING JOURNEY
                ================================================= */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    className="
                        relative
                        mt-8
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/[0.09]
                        bg-white/[0.02]
                        p-7
                        md:p-10
                    "
                >

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[-100px]
                            top-[-100px]
                            h-[300px]
                            w-[300px]
                            rounded-full
                            bg-violet-500/[0.04]
                            blur-[100px]
                        "
                    />

                    <div className="relative">

                        <div
                            className="
                                flex
                                items-start
                                justify-between
                                gap-5
                            "
                        >

                            <div>

                                <p
                                    className="
                                        font-mono
                                        text-[10px]
                                        uppercase
                                        tracking-[0.22em]
                                        text-white/25
                                    "
                                >
                                    Engineering Journey
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        text-2xl
                                        font-semibold
                                        text-white
                                    "
                                >
                                    From fundamentals to systems.
                                </h3>

                            </div>


                            <Code2
                                size={20}
                                className="text-white/20"
                            />

                        </div>


                        <div
                            className="
                                mt-10
                                grid
                                gap-8
                                md:grid-cols-3
                            "
                        >

                            {journey.map((item, index) => (

                                <motion.div
                                    key={item.year}
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
                                        delay: index * 0.12,
                                        duration: 0.6,
                                        ease,
                                    }}
                                    className="relative"
                                >

                                    {index < journey.length - 1 && (
                                        <div
                                            className="
                                                absolute
                                                left-10
                                                right-[-32px]
                                                top-5
                                                hidden
                                                h-px
                                                bg-gradient-to-r
                                                from-white/[0.12]
                                                to-transparent
                                                md:block
                                            "
                                        />
                                    )}


                                    <div
                                        className="
                                            relative
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-cyan-400/20
                                            bg-cyan-400/[0.05]
                                            font-mono
                                            text-[10px]
                                            text-cyan-300
                                        "
                                    >
                                        {item.year}
                                    </div>


                                    <h4
                                        className="
                                            mt-5
                                            text-base
                                            font-medium
                                            text-white
                                        "
                                    >
                                        {item.title}
                                    </h4>


                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-white/30
                                        "
                                    >
                                        {item.description}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </motion.div>


                {/* =================================================
                    CAREER DIRECTION
                ================================================= */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    className="
                        relative
                        mt-8
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/[0.10]
                        bg-gradient-to-r
                        from-cyan-500/[0.07]
                        via-violet-500/[0.045]
                        to-transparent
                        p-7
                        md:p-9
                    "
                >

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-0
                            top-0
                            h-full
                            w-[40%]
                            bg-gradient-to-l
                            from-white/[0.02]
                            to-transparent
                        "
                    />

                    <div
                        className="
                            relative
                            flex
                            flex-col
                            justify-between
                            gap-7
                            md:flex-row
                            md:items-center
                        "
                    >

                        <div
                            className="
                                flex
                                items-start
                                gap-5
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-cyan-400/[0.15]
                                    bg-cyan-400/[0.07]
                                "
                            >

                                <Target
                                    size={20}
                                    className="text-cyan-300"
                                />

                            </div>


                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-cyan-300/70
                                    "
                                >
                                    Career Direction
                                </p>


                                <h3
                                    className="
                                        mt-3
                                        text-xl
                                        font-medium
                                        text-white
                                    "
                                >
                                    Building expertise before scaling impact.
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        max-w-2xl
                                        text-sm
                                        leading-7
                                        text-white/35
                                    "
                                >
                                    Focused on gaining strong engineering
                                    experience, continuously improving my
                                    technical depth, and eventually taking on
                                    larger and more meaningful engineering
                                    challenges.
                                </p>

                            </div>

                        </div>


                        <motion.a
                            href="#contact"
                            whileHover={{
                                y: -3,
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                group
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                border
                                border-white/[0.12]
                                bg-white/[0.05]
                                px-6
                                py-3.5
                                text-sm
                                font-medium
                                text-white/75
                                transition
                                duration-300
                                hover:border-cyan-300/[0.25]
                                hover:bg-white/[0.09]
                                hover:text-white
                            "
                        >

                            Let's connect

                            <ArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />

                        </motion.a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}


export default About;