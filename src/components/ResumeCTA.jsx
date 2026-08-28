import { motion } from "framer-motion";
import {
    Download,
    ArrowUpRight,
    FileText,
    BriefcaseBusiness,
    Sparkles,
    CheckCircle2,
    Send,
    Eye,
} from "lucide-react";

function ResumeCTA() {
    return (
        <section
            id="resume"
            className="
                relative
                overflow-hidden
                border-b
                border-white/[0.06]
                bg-[#050507]
                py-28
                md:py-36
            "
        >
            {/* BACKGROUND GLOWS */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[600px]
                    w-[700px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.055]
                    blur-[170px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-cyan-500/[0.04]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-10
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-violet-500/[0.04]
                    blur-[160px]
                "
            />

            {/* GRID TEXTURE */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.018]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:85px_85px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                {/* MAIN CONTAINER */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-[2.5rem]
                        border
                        border-white/[0.10]
                        bg-gradient-to-br
                        from-white/[0.055]
                        via-white/[0.025]
                        to-transparent
                        p-6
                        shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                        md:p-10
                        lg:p-14
                    "
                >
                    {/* TOP SHINE */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            translate-x-[-130%]
                            bg-gradient-to-r
                            from-transparent
                            via-white/[0.04]
                            to-transparent
                            transition-transform
                            duration-[1800ms]
                            group-hover:translate-x-[130%]
                        "
                    />

                    {/* TOP BORDER GLOW */}

                    <div
                        className="
                            absolute
                            left-[15%]
                            right-[15%]
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-300/50
                            to-transparent
                        "
                    />

                    {/* HEADER */}

                    <div
                        className="
                            relative
                            flex
                            flex-col
                            gap-6
                            border-b
                            border-white/[0.07]
                            pb-8
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >
                        <div className="flex items-center gap-4">
                            <motion.div
                                whileHover={{
                                    rotate: 6,
                                    scale: 1.06,
                                }}
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-cyan-400/20
                                    bg-cyan-400/[0.07]
                                "
                            >
                                <FileText
                                    size={20}
                                    className="text-cyan-300"
                                />
                            </motion.div>

                            <div>
                                <p
                                    className="
                                        text-[10px]
                                        font-medium
                                        tracking-[0.3em]
                                        text-cyan-300/70
                                    "
                                >
                                    07 — RESUME
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Experience · Skills · Projects
                                </p>
                            </div>
                        </div>

                        {/* AVAILABILITY STATUS */}

                        <div
                            className="
                                inline-flex
                                w-fit
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-emerald-400/15
                                bg-emerald-400/[0.05]
                                px-4
                                py-2
                            "
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span
                                    className="
                                        absolute
                                        inline-flex
                                        h-full
                                        w-full
                                        animate-ping
                                        rounded-full
                                        bg-emerald-400
                                        opacity-50
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        inline-flex
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        bg-emerald-400
                                    "
                                />
                            </span>

                            <span
                                className="
                                    text-xs
                                    font-medium
                                    text-emerald-300/80
                                "
                            >
                                Available for opportunities
                            </span>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}

                    <div
                        className="
                            relative
                            mt-10
                            grid
                            gap-12
                            lg:grid-cols-[1.15fr_0.85fr]
                            lg:items-center
                        "
                    >
                        {/* LEFT SIDE */}

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
                                delay: 0.15,
                                duration: 0.7,
                            }}
                        >
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-violet-400/15
                                    bg-violet-400/[0.06]
                                    px-3
                                    py-1.5
                                "
                            >
                                <Sparkles
                                    size={13}
                                    className="text-violet-300"
                                />

                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.16em]
                                        text-violet-200/80
                                    "
                                >
                                    Let's create impact
                                </span>
                            </div>

                            <h2
                                className="
                                    mt-7
                                    max-w-3xl
                                    text-5xl
                                    font-semibold
                                    leading-[0.95]
                                    tracking-[-0.05em]
                                    text-white
                                    md:text-6xl
                                    lg:text-7xl
                                "
                            >
                                Let's build something

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
                                    meaningful together.
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
                                I'm interested in opportunities where I can
                                contribute to impactful software and AI-driven
                                projects, learn from talented teams, and
                                continuously grow as an engineer.
                            </p>

                            {/* MINI BENEFITS */}

                            <div
                                className="
                                    mt-8
                                    grid
                                    gap-3
                                    sm:grid-cols-2
                                "
                            >
                                {[
                                    "Ready to learn and contribute",
                                    "Focused on real-world impact",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            px-4
                                            py-3
                                        "
                                    >
                                        <CheckCircle2
                                            size={16}
                                            className="
                                                shrink-0
                                                text-cyan-300
                                            "
                                        />

                                        <span
                                            className="
                                                text-xs
                                                text-white/45
                                            "
                                        >
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE */}

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
                                delay: 0.25,
                                duration: 0.7,
                            }}
                            className="
                                relative
                                mx-auto
                                w-full
                                max-w-md
                            "
                        >
                            {/* RESUME PREVIEW CARD */}

                            <motion.div
                                whileHover={{
                                    y: -8,
                                    rotateX: 2,
                                    rotateY: -2,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 18,
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-white/[0.10]
                                    bg-[#09090d]
                                    p-6
                                    shadow-2xl
                                "
                            >
                                {/* DOCUMENT HEADER */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-gradient-to-br
                                                from-cyan-400/20
                                                to-blue-500/10
                                            "
                                        >
                                            <FileText
                                                size={21}
                                                className="text-cyan-300"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                Divyesh Ram
                                            </p>

                                            <p className="mt-1 text-xs text-white/30">
                                                Professional Resume
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className="
                                            rounded-lg
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.04]
                                            px-2.5
                                            py-1
                                            text-[10px]
                                            text-white/35
                                        "
                                    >
                                        PDF
                                    </span>
                                </div>

                                {/* DOCUMENT LINES */}

                                <div className="mt-8 space-y-3">
                                    <div className="h-2 w-3/4 rounded-full bg-white/[0.10]" />

                                    <div className="h-2 w-full rounded-full bg-white/[0.05]" />

                                    <div className="h-2 w-5/6 rounded-full bg-white/[0.05]" />

                                    <div className="h-2 w-2/3 rounded-full bg-white/[0.05]" />
                                </div>

                                <div
                                    className="
                                        mt-7
                                        border-t
                                        border-white/[0.07]
                                        pt-6
                                    "
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-white/25">
                                                Explore my complete profile
                                            </p>

                                            <p className="mt-1 text-sm text-white/65">
                                                Experience & achievements
                                            </p>
                                        </div>

                                        <Eye
                                            size={18}
                                            className="text-cyan-300/70"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* FLOATING BADGE */}

                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    -right-4
                                    -top-5
                                    hidden
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/[0.10]
                                    bg-[#101015]/90
                                    px-3
                                    py-2
                                    shadow-xl
                                    backdrop-blur-xl
                                    sm:flex
                                "
                            >
                                <BriefcaseBusiness
                                    size={14}
                                    className="text-violet-300"
                                />

                                <span className="text-[10px] text-white/60">
                                    Open to work
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* CTA BUTTONS */}

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
                            delay: 0.35,
                            duration: 0.6,
                        }}
                        className="
                            relative
                            mt-12
                            flex
                            flex-col
                            gap-3
                            border-t
                            border-white/[0.07]
                            pt-8
                            sm:flex-row
                        "
                    >
                        {/* DOWNLOAD */}

                        <a
                            href="/Divyesh_Ram_Resume.pdf"
                            download
                            className="
                                group
                                inline-flex
                                flex-1
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                bg-white
                                px-6
                                py-4
                                text-sm
                                font-semibold
                                text-black
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-cyan-50
                            "
                        >
                            <Download size={18} />

                            Download Resume

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

                        {/* VIEW PROJECTS */}

                        <a
                            href="#projects"
                            className="
                                group
                                inline-flex
                                flex-1
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                border
                                border-white/[0.10]
                                bg-white/[0.03]
                                px-6
                                py-4
                                text-sm
                                font-medium
                                text-white/65
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-cyan-400/25
                                hover:bg-cyan-400/[0.05]
                                hover:text-white
                            "
                        >
                            View My Projects

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

                        {/* CONTACT */}

                        <a
                            href="#contact"
                            className="
                                group
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/[0.08]
                                px-6
                                py-4
                                text-sm
                                text-white/40
                                transition-all
                                duration-300
                                hover:border-violet-400/25
                                hover:text-violet-200
                            "
                        >
                            Get in touch

                            <Send
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default ResumeCTA;