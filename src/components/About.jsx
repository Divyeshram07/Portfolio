import { motion } from "framer-motion";
import {
    UserRound,
    GraduationCap,
    MapPin,
    Target,
    ArrowUpRight,
} from "lucide-react";

const stats = [
    {
        value: "8.72",
        label: "CGPA",
    },
    {
        value: "2027",
        label: "Graduation",
    },
    {
        value: "AI",
        label: "Primary Focus",
    },
    {
        value: "∞",
        label: "Learning Mode",
    },
];

function About() {
    return (
        <section
            id="about"
            className="
                relative
                py-28
                md:py-36
                border-b
                border-white/[0.07]
                bg-[#050507]
            "
        >

            {/* Background glow */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[500px]
                    h-[300px]
                    rounded-full
                    bg-violet-600/[0.04]
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
                >

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-8
                                h-8
                                rounded-lg
                                bg-blue-500/10
                                border
                                border-blue-400/10
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <UserRound
                                size={15}
                                className="text-blue-400"
                            />
                        </div>

                        <span className="text-sm text-blue-400">
                            About me
                        </span>

                    </div>


                    <h2
                        className="
                            mt-6
                            text-4xl
                            md:text-6xl
                            font-semibold
                            tracking-tight
                            text-white
                        "
                    >
                        Engineer by curiosity.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-white/40
                        "
                    >
                        I enjoy turning ideas into working systems —
                        from machine learning experiments and NLP
                        pipelines to full-stack applications and
                        intelligent software.
                    </p>

                </motion.div>


                {/* Main Grid */}

                <div
                    className="
                        mt-16
                        grid
                        lg:grid-cols-[1.1fr_.9fr]
                        gap-6
                    "
                >

                    {/* About Card */}

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
                            duration: 0.6,
                        }}
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            p-8
                            md:p-10
                            backdrop-blur-sm
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                                <span className="text-xs text-white/25 font-mono">
                                    01
                                </span>

                                <span className="text-sm text-white/50">
                                    Profile
                                </span>

                            </div>

                            <ArrowUpRight
                                size={18}
                                className="text-white/20"
                            />

                        </div>


                        <div className="mt-10 space-y-6">

                            <p
                                className="
                                    text-xl
                                    md:text-2xl
                                    leading-9
                                    text-white/75
                                "
                            >
                                I'm currently pursuing Computer Science
                                Engineering and building my foundation
                                across{" "}
                                <span className="text-white">
                                    artificial intelligence,
                                </span>{" "}
                                software engineering, and modern web
                                technologies.
                            </p>

                            <p
                                className="
                                    leading-8
                                    text-white/35
                                "
                            >
                                My current interests include AI/ML,
                                natural language processing, retrieval
                                augmented generation, backend systems,
                                and building practical products around
                                emerging technologies.
                            </p>

                        </div>


                        {/* Info */}

                        <div className="mt-10 grid sm:grid-cols-2 gap-3">

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    p-5
                                "
                            >

                                <GraduationCap
                                    size={18}
                                    className="text-blue-400"
                                />

                                <p className="mt-4 text-xs text-white/25">
                                    Education
                                </p>

                                <p className="mt-1 text-sm text-white/65">
                                    Computer Science Engineering
                                </p>

                            </div>


                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    p-5
                                "
                            >

                                <MapPin
                                    size={18}
                                    className="text-violet-400"
                                />

                                <p className="mt-4 text-xs text-white/25">
                                    Based in
                                </p>

                                <p className="mt-1 text-sm text-white/65">
                                    India
                                </p>

                            </div>

                        </div>

                    </motion.div>


                    {/* Stats */}

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
                            duration: 0.6,
                        }}
                        className="
                            grid
                            grid-cols-2
                            gap-3
                        "
                    >

                        {stats.map((stat, index) => (

                            <motion.div
                                key={stat.label}
                                whileHover={{
                                    y: -4,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="
                                    rounded-[1.75rem]
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-7
                                    flex
                                    flex-col
                                    justify-between
                                    min-h-[190px]
                                "
                            >

                                <span className="text-xs font-mono text-white/20">
                                    0{index + 1}
                                </span>

                                <div>

                                    <p
                                        className="
                                            text-4xl
                                            md:text-5xl
                                            font-semibold
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-sm text-white/30">
                                        {stat.label}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>


                {/* Career Direction */}

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
                    className="
                        mt-6
                        rounded-[2rem]
                        border
                        border-white/10
                        bg-gradient-to-r
                        from-blue-500/[0.07]
                        via-violet-500/[0.04]
                        to-transparent
                        p-7
                        md:p-9
                    "
                >

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        <div className="flex items-start gap-4">

                            <div
                                className="
                                    shrink-0
                                    w-11
                                    h-11
                                    rounded-2xl
                                    bg-blue-500/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Target
                                    size={19}
                                    className="text-blue-400"
                                />
                            </div>

                            <div>

                                <p className="text-xs text-blue-400">
                                    Career direction
                                </p>

                                <h3 className="mt-2 text-lg font-medium text-white">
                                    Building expertise before scaling impact.
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/35 max-w-2xl">
                                    Focused on gaining strong engineering
                                    experience, continuously improving my
                                    technical depth, and eventually taking
                                    on larger engineering challenges.
                                </p>

                            </div>

                        </div>

                        <a
                            href="#contact"
                            className="
                                shrink-0
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-3
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.04]
                                text-sm
                                text-white/70
                                hover:bg-white/[0.08]
                                hover:text-white
                                transition
                            "
                        >
                            Let's connect

                            <ArrowUpRight size={15} />

                        </a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default About;   