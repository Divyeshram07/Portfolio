import { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useReducedMotion,
} from "framer-motion";

import {
    ArrowDown,
    ArrowUpRight,
    Download,
    Terminal,
    Sparkles,
    BrainCircuit,
    Database,
    Globe,
    Cpu,
    Code2,
    Activity,
    Zap,
    Layers3,
    CheckCircle2,
} from "lucide-react";


/* ======================================================
   DATA
====================================================== */

const roles = [
    "AI & Software Developer",
    "Intelligent Systems Builder",
    "Machine Learning Enthusiast",
    "Problem Solver",
];


const skills = [
    "Python",
    "React",
    "Machine Learning",
    "NLP",
    "RAG",
    "AI Systems",
];


const terminalLines = [
    {
        command: "whoami",
        output: "divyesh@developer",
        status: "IDENTITY_RESOLVED",
    },
    {
        command: "focus --current",
        output: "AI • Machine Learning • Software",
        status: "SYSTEM_FOCUSED",
    },
    {
        command: "build --status",
        output: "creating meaningful digital solutions",
        status: "BUILDING",
    },
    {
        command: "availability",
        output: "open to new opportunities",
        status: "AVAILABLE",
    },
];


const stats = [
    {
        icon: Code2,
        label: "FOCUS",
        value: "Software",
    },
    {
        icon: BrainCircuit,
        label: "INTEREST",
        value: "AI Systems",
    },
    {
        icon: Activity,
        label: "STATUS",
        value: "Building",
    },
];


/* ======================================================
   HERO COMPONENT
====================================================== */

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [terminalIndex, setTerminalIndex] = useState(0);

    const shouldReduceMotion = useReducedMotion();


    /* ==================================================
       MOUSE PARALLAX
    ================================================== */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 45,
        damping: 20,
        mass: 0.8,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 45,
        damping: 20,
        mass: 0.8,
    });


    /* ==================================================
       ROLE ROTATION
    ================================================== */

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((current) => {
                return (current + 1) % roles.length;
            });
        }, 3200);

        return () => clearInterval(interval);
    }, []);


    /* ==================================================
       TERMINAL ROTATION
    ================================================== */

    useEffect(() => {
        const interval = setInterval(() => {
            setTerminalIndex((current) => {
                return (
                    (current + 1) %
                    terminalLines.length
                );
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    /* ==================================================
       MOUSE MOVEMENT
    ================================================== */

    const handleMouseMove = (event) => {
        if (shouldReduceMotion) return;

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width;

        const y =
            (event.clientY - rect.top) /
            rect.height;

        mouseX.set((x - 0.5) * 14);
        mouseY.set((y - 0.5) * 14);
    };


    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };


    /* ==================================================
       SMOOTH SCROLL
    ================================================== */

    const scrollToSection = (id) => {
        const section =
            document.getElementById(id);

        if (!section) return;

        const navbarOffset = 95;

        const position =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarOffset;

        window.scrollTo({
            top: Math.max(0, position),
            behavior: "smooth",
        });
    };


    const currentTerminal =
        terminalLines[terminalIndex];


    /* ==================================================
       RENDER
    ================================================== */

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                relative
                isolate
                flex
                min-h-[100svh]
                items-center
                overflow-hidden
                bg-[#050507]
                pb-20
                pt-32
                md:pt-36
                lg:pb-16
            "
        >

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="pointer-events-none absolute inset-0">

                {/* Radial depth */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(139,92,246,0.10),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.07),transparent_45%)]
                    "
                />


                {/* Grid */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                        bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
                        bg-[size:72px_72px]
                        [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]
                    "
                />


                {/* Top line */}

                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/25
                        to-transparent
                    "
                />

            </div>


            {/* =========================================
                AMBIENT GLOWS
            ========================================= */}

            {!shouldReduceMotion && (
                <>
                    <motion.div
                        animate={{
                            x: [0, 45, 0],
                            y: [0, -35, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[3%]
                            top-[15%]
                            h-[450px]
                            w-[450px]
                            rounded-full
                            bg-cyan-500/[0.055]
                            blur-[150px]
                        "
                    />

                    <motion.div
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 35, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[2%]
                            top-[18%]
                            h-[500px]
                            w-[500px]
                            rounded-full
                            bg-violet-600/[0.055]
                            blur-[170px]
                        "
                    />
                </>
            )}


            {/* =========================================
                MAIN CONTAINER
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-7xl
                    px-5
                    md:px-8
                "
            >

                <div
                    className="
                        grid
                        items-center
                        gap-14
                        lg:grid-cols-[1.05fr_.95fr]
                        lg:gap-12
                    "
                >


                    {/* =================================
                        LEFT CONTENT
                    ================================== */}

                    <div>


                        {/* AVAILABILITY */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="
                                inline-flex
                                items-center
                                gap-2.5
                                rounded-full
                                border
                                border-emerald-400/15
                                bg-emerald-400/[0.045]
                                px-3.5
                                py-2
                                backdrop-blur-xl
                            "
                        >

                            <span className="relative flex h-2 w-2">

                                {!shouldReduceMotion && (
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
                                )}

                                <span
                                    className="
                                        relative
                                        inline-flex
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_12px_rgba(52,211,153,0.8)]
                                    "
                                />

                            </span>


                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    tracking-[0.16em]
                                    text-emerald-300/80
                                "
                            >
                                OPEN TO OPPORTUNITIES
                            </span>

                        </motion.div>


                        {/* NAME */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.12,
                                duration: 0.8,
                            }}
                        >

                            <p
                                className="
                                    mt-8
                                    text-xs
                                    font-medium
                                    tracking-[0.28em]
                                    text-white/30
                                "
                            >
                                HELLO, I'M
                            </p>


                            <h1
                                className="
                                    mt-4
                                    text-[clamp(4rem,9vw,8rem)]
                                    font-semibold
                                    leading-[0.82]
                                    tracking-[-0.075em]
                                    text-white
                                "
                            >
                                DIVYESH

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
                                    RAM
                                </span>

                            </h1>

                        </motion.div>


                        {/* ROLE */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 0.7,
                            }}
                            className="
                                mt-9
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <div
                                className="
                                    h-px
                                    w-10
                                    bg-gradient-to-r
                                    from-cyan-400
                                    to-transparent
                                "
                            />

                            <div className="h-8 overflow-hidden">

                                <AnimatePresence mode="wait">

                                    <motion.span
                                        key={roles[roleIndex]}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            filter: "blur(8px)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            filter: "blur(8px)",
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="
                                            block
                                            text-xl
                                            font-medium
                                            tracking-tight
                                            text-white/75
                                            md:text-2xl
                                        "
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>

                                </AnimatePresence>

                            </div>

                        </motion.div>


                        {/* DESCRIPTION */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.42,
                                duration: 0.7,
                            }}
                            className="
                                mt-8
                                max-w-xl
                                text-[15px]
                                leading-8
                                text-white/42
                                md:text-lg
                            "
                        >
                            I build intelligent digital experiences by
                            combining{" "}

                            <span className="text-white/75">
                                artificial intelligence,
                                machine learning,
                            </span>{" "}

                            and modern software development to create
                            practical systems that solve meaningful
                            problems.

                        </motion.p>


                        {/* SKILLS */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.58,
                            }}
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-2
                            "
                        >

                            {skills.map((skill, index) => (

                                <motion.span
                                    key={skill}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay:
                                            0.58 +
                                            index * 0.06,
                                    }}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.03,
                                    }}
                                    className="
                                        cursor-default
                                        rounded-full
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.025]
                                        px-3.5
                                        py-1.5
                                        text-xs
                                        text-white/45
                                        transition
                                        duration-300
                                        hover:border-cyan-400/30
                                        hover:bg-cyan-400/[0.055]
                                        hover:text-cyan-100
                                    "
                                >
                                    {skill}
                                </motion.span>

                            ))}

                        </motion.div>


                        {/* CTA */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.75,
                                duration: 0.7,
                            }}
                            className="
                                mt-10
                                flex
                                flex-wrap
                                items-center
                                gap-4
                            "
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection(
                                        "projects"
                                    )
                                }
                                className="
                                    group
                                    relative
                                    inline-flex
                                    items-center
                                    gap-2.5
                                    overflow-hidden
                                    rounded-xl
                                    bg-white
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_20px_55px_rgba(255,255,255,0.12)]
                                "
                            >

                                <span className="relative z-10">
                                    Explore My Work
                                </span>

                                <ArrowUpRight
                                    size={17}
                                    className="
                                        relative
                                        z-10
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />

                                <span
                                    className="
                                        absolute
                                        inset-0
                                        translate-y-full
                                        bg-gradient-to-r
                                        from-cyan-100
                                        via-blue-100
                                        to-violet-100
                                        transition-transform
                                        duration-500
                                        group-hover:translate-y-0
                                    "
                                />

                            </button>


                            <a
                                href="/Divyesh_Ram_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/[0.10]
                                    bg-white/[0.025]
                                    px-5
                                    py-3.5
                                    text-sm
                                    text-white/55
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-white/[0.20]
                                    hover:bg-white/[0.055]
                                    hover:text-white
                                "
                            >

                                <Download
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-y-0.5
                                    "
                                />

                                View Resume

                            </a>

                        </motion.div>

                    </div>


                    {/* =================================
                        RIGHT AI EXPERIENCE
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            y: 35,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.25,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            x: smoothX,
                            y: smoothY,
                        }}
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-[540px]
                        "
                    >


                        {/* =================================
                            AI VISUAL CARD
                        ================================== */}

                        <div
                            className="
                                relative
                                aspect-square
                                overflow-hidden
                                rounded-[2.5rem]
                                border
                                border-white/[0.09]
                                bg-gradient-to-br
                                from-white/[0.055]
                                via-white/[0.025]
                                to-transparent
                                shadow-[0_40px_120px_rgba(0,0,0,0.55)]
                                backdrop-blur-xl
                            "
                        >

                            {/* Center glow */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-[43%]
                                    h-[55%]
                                    w-[55%]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-cyan-500/[0.09]
                                    blur-[100px]
                                "
                            />


                            {/* Header */}

                            <div
                                className="
                                    absolute
                                    left-6
                                    right-6
                                    top-6
                                    z-20
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/[0.08]
                                        bg-black/25
                                        px-3
                                        py-1.5
                                        backdrop-blur-xl
                                    "
                                >

                                    <Zap
                                        size={13}
                                        className="text-yellow-300"
                                    />

                                    <span
                                        className="
                                            text-[9px]
                                            font-medium
                                            tracking-[0.16em]
                                            text-white/45
                                        "
                                    >
                                        SYSTEM ACTIVE
                                    </span>

                                </div>


                                <span
                                    className="
                                        font-mono
                                        text-[10px]
                                        text-white/25
                                    "
                                >
                                    AI_01
                                </span>

                            </div>


                            {/* OUTER ORBIT */}

                            {!shouldReduceMotion && (
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 32,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        absolute
                                        left-1/2
                                        top-[42%]
                                        h-[72%]
                                        w-[72%]
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        border
                                        border-dashed
                                        border-cyan-400/[0.15]
                                    "
                                >

                                    <div
                                        className="
                                            absolute
                                            -top-2
                                            left-1/2
                                            h-4
                                            w-4
                                            -translate-x-1/2
                                            rounded-full
                                            bg-cyan-300
                                            shadow-[0_0_22px_rgba(34,211,238,0.8)]
                                        "
                                    />

                                </motion.div>
                            )}


                            {/* INNER ORBIT */}

                            {!shouldReduceMotion && (
                                <motion.div
                                    animate={{
                                        rotate: -360,
                                    }}
                                    transition={{
                                        duration: 22,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        absolute
                                        left-1/2
                                        top-[42%]
                                        h-[53%]
                                        w-[53%]
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        border
                                        border-violet-400/[0.17]
                                    "
                                >

                                    <div
                                        className="
                                            absolute
                                            bottom-[-6px]
                                            left-1/2
                                            h-3
                                            w-3
                                            -translate-x-1/2
                                            rounded-full
                                            bg-violet-300
                                            shadow-[0_0_20px_rgba(167,139,250,0.8)]
                                        "
                                    />

                                </motion.div>
                            )}


                            {/* AI CORE */}

                            <motion.div
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            scale: [
                                                1,
                                                1.07,
                                                1,
                                            ],
                                        }
                                }
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    left-1/2
                                    top-[42%]
                                    z-10
                                    flex
                                    h-32
                                    w-32
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-[2.3rem]
                                    border
                                    border-cyan-300/20
                                    bg-gradient-to-br
                                    from-cyan-400/15
                                    via-blue-500/10
                                    to-violet-500/15
                                    shadow-[0_0_90px_rgba(59,130,246,0.18)]
                                    backdrop-blur-xl
                                "
                            >

                                <BrainCircuit
                                    size={50}
                                    className="text-cyan-200"
                                />

                            </motion.div>


                            {/* FLOATING NODE 1 */}

                            <motion.div
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: [0, -9, 0],
                                        }
                                }
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    left-[12%]
                                    top-[17%]
                                    z-10
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b0b10]/80
                                    text-cyan-300
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >
                                <Code2 size={22} />
                            </motion.div>


                            {/* FLOATING NODE 2 */}

                            <motion.div
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: [0, 11, 0],
                                        }
                                }
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    right-[12%]
                                    top-[22%]
                                    z-10
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b0b10]/80
                                    text-violet-300
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >
                                <Database size={22} />
                            </motion.div>


                            {/* FLOATING NODE 3 */}

                            <motion.div
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: [0, -8, 0],
                                        }
                                }
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    bottom-[25%]
                                    left-[16%]
                                    z-10
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b0b10]/80
                                    text-blue-300
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >
                                <Globe size={22} />
                            </motion.div>


                            {/* FLOATING NODE 4 */}

                            <motion.div
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: [0, 9, 0],
                                        }
                                }
                                transition={{
                                    duration: 5.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    bottom-[25%]
                                    right-[16%]
                                    z-10
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/[0.08]
                                    bg-[#0b0b10]/80
                                    text-emerald-300
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >
                                <Cpu size={22} />
                            </motion.div>


                            {/* =================================
                                CURRENT MISSION
                                CLEARLY VISIBLE
                            ================================== */}

                            <div
                                className="
                                    absolute
                                    bottom-6
                                    left-6
                                    right-6
                                    z-30
                                    rounded-2xl
                                    border
                                    border-cyan-400/[0.16]
                                    bg-[#090a10]/95
                                    px-5
                                    py-4
                                    shadow-[0_15px_50px_rgba(0,0,0,0.5)]
                                    backdrop-blur-2xl
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div className="min-w-0">

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                            "
                                        >

                                            <Layers3
                                                size={13}
                                                className="text-cyan-300/70"
                                            />

                                            <p
                                                className="
                                                    text-[9px]
                                                    font-semibold
                                                    tracking-[0.22em]
                                                    text-cyan-300/65
                                                "
                                            >
                                                CURRENT MISSION
                                            </p>

                                        </div>


                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                font-semibold
                                                tracking-tight
                                                text-white/90
                                                md:text-base
                                            "
                                        >
                                            Build. Learn. Improve.
                                        </p>

                                    </div>


                                    <motion.div
                                        animate={
                                            shouldReduceMotion
                                                ? {}
                                                : {
                                                    rotate: [
                                                        0,
                                                        8,
                                                        -8,
                                                        0,
                                                    ],
                                                    scale: [
                                                        1,
                                                        1.06,
                                                        1,
                                                    ],
                                                }
                                        }
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-cyan-400/15
                                            bg-cyan-400/[0.07]
                                        "
                                    >

                                        <Sparkles
                                            size={18}
                                            className="text-cyan-300"
                                        />

                                    </motion.div>

                                </div>

                            </div>

                        </div>


                        {/* =================================
                            LIVE TERMINAL

                            IMPORTANT:
                            No negative margin.
                            It will NOT cover Current Mission.
                        ================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.85,
                                duration: 0.8,
                            }}
                            className="
                                relative
                                z-20
                                mx-auto
                                mt-5
                                w-[92%]
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.10]
                                bg-[#08080d]/95
                                shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                                backdrop-blur-2xl
                            "
                        >

                            {/* Terminal header */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-white/[0.07]
                                    px-4
                                    py-3
                                "
                            >

                                <span className="h-2 w-2 rounded-full bg-red-400/70" />

                                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />

                                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />


                                <div
                                    className="
                                        ml-auto
                                        flex
                                        items-center
                                        gap-2
                                        text-[9px]
                                        tracking-[0.16em]
                                        text-white/30
                                    "
                                >

                                    <Terminal size={12} />

                                    LIVE_TERMINAL

                                </div>

                            </div>


                            {/* Terminal body */}

                            <div
                                className="
                                    min-h-[125px]
                                    p-5
                                    font-mono
                                "
                            >

                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key={terminalIndex}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -12,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                    >

                                        <p
                                            className="
                                                text-xs
                                                text-cyan-300/80
                                            "
                                        >

                                            <span
                                                className="
                                                    text-violet-300
                                                "
                                            >
                                                $
                                            </span>{" "}

                                            {currentTerminal.command}

                                        </p>


                                        <p
                                            className="
                                                mt-3
                                                text-sm
                                                leading-6
                                                text-white/65
                                            "
                                        >
                                            {currentTerminal.output}
                                        </p>


                                        <div
                                            className="
                                                mt-5
                                                flex
                                                items-center
                                                gap-2
                                            "
                                        >

                                            <span
                                                className="
                                                    relative
                                                    flex
                                                    h-2
                                                    w-2
                                                "
                                            >

                                                {!shouldReduceMotion && (
                                                    <span
                                                        className="
                                                            absolute
                                                            inline-flex
                                                            h-full
                                                            w-full
                                                            animate-ping
                                                            rounded-full
                                                            bg-emerald-400
                                                            opacity-60
                                                        "
                                                    />
                                                )}

                                                <span
                                                    className="
                                                        relative
                                                        inline-flex
                                                        h-2
                                                        w-2
                                                        rounded-full
                                                        bg-emerald-400
                                                    "
                                                />

                                            </span>


                                            <span
                                                className="
                                                    text-[9px]
                                                    tracking-[0.16em]
                                                    text-emerald-300/55
                                                "
                                            >
                                                {
                                                    currentTerminal.status
                                                }
                                            </span>

                                        </div>

                                    </motion.div>

                                </AnimatePresence>

                            </div>

                        </motion.div>


                        {/* =================================
                            MINI STATUS CARDS
                        ================================== */}

                        <div
                            className="
                                mt-5
                                grid
                                grid-cols-3
                                gap-2
                            "
                        >

                            {stats.map((stat, index) => {

                                const Icon = stat.icon;

                                return (

                                    <motion.div
                                        key={stat.label}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay:
                                                1 +
                                                index * 0.1,
                                        }}
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="
                                            rounded-xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            p-3
                                            backdrop-blur-xl
                                            transition
                                            hover:border-cyan-400/[0.16]
                                            hover:bg-cyan-400/[0.025]
                                        "
                                    >

                                        <Icon
                                            size={14}
                                            className="
                                                text-cyan-300/75
                                            "
                                        />

                                        <p
                                            className="
                                                mt-3
                                                text-[8px]
                                                tracking-[0.14em]
                                                text-white/25
                                            "
                                        >
                                            {stat.label}
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                truncate
                                                text-xs
                                                text-white/65
                                            "
                                        >
                                            {stat.value}
                                        </p>

                                    </motion.div>

                                );
                            })}

                        </div>

                    </motion.div>

                </div>


                {/* =========================================
                    SCROLL INDICATOR
                ========================================= */}

                <motion.button
                    type="button"
                    onClick={() =>
                        scrollToSection("about")
                    }
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.2,
                    }}
                    className="
                        group
                        mx-auto
                        mt-14
                        flex
                        flex-col
                        items-center
                        gap-3
                        text-white/25
                        transition
                        hover:text-white/65
                        lg:mt-10
                    "
                >

                    <span
                        className="
                            text-[9px]
                            font-medium
                            tracking-[0.25em]
                        "
                    >
                        SCROLL TO EXPLORE
                    </span>


                    <motion.span
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, 7, 0],
                                }
                        }
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            transition
                            duration-300
                            group-hover:border-cyan-400/30
                            group-hover:bg-cyan-400/[0.06]
                        "
                    >

                        <ArrowDown size={16} />

                    </motion.span>

                </motion.button>

            </div>


            {/* =========================================
                BOTTOM FADE
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-32
                    bg-gradient-to-t
                    from-[#050507]
                    to-transparent
                "
            />

        </section>
    );
}


export default Hero;