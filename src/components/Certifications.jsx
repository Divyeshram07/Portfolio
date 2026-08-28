import { motion } from "framer-motion";

import {
    Award,
    BrainCircuit,
    BadgeCheck,
    Sparkles,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Cpu,
} from "lucide-react";


/* ======================================================
   CERTIFICATION DATA
====================================================== */

const certification = {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    category: "Artificial Intelligence",
    status: "Certified",
    description:
        "A professional certification focused on core artificial intelligence concepts and their practical application within the Salesforce ecosystem.",

    skills: [
        "Artificial Intelligence",
        "AI Fundamentals",
        "Salesforce AI",
        "Responsible AI",
    ],
};


/* ======================================================
   COMPONENT
====================================================== */

function Certifications() {
    return (
        <section
            id="certifications"
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

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-180px]
                    top-[15%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-cyan-500/[0.04]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    bottom-[5%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-violet-600/[0.05]
                    blur-[150px]
                "
            />


            {/* GRID */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.025]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:80px_80px]
                "
            />


            {/* =========================================
                CONTAINER
            ========================================= */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                    md:px-8
                "
            >

                {/* =====================================
                    HEADER
                ====================================== */}

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
                    className="max-w-3xl"
                >

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
                                text-white/20
                            "
                        >
                            06
                        </span>

                        <span
                            className="
                                h-px
                                w-8
                                bg-gradient-to-r
                                from-cyan-400
                                to-transparent
                            "
                        />

                        <span
                            className="
                                text-sm
                                text-cyan-300
                            "
                        >
                            Credentials
                        </span>

                    </div>


                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-semibold
                            tracking-tight
                            text-white
                            md:text-6xl
                        "
                    >
                        Certifications
                        <span className="text-white/25">
                            {" "}that matter.
                        </span>
                    </h2>


                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-base
                            leading-8
                            text-white/40
                            md:text-lg
                        "
                    >
                        Professional credentials representing my
                        continuous learning and growing focus on
                        artificial intelligence and intelligent
                        software systems.
                    </p>

                </motion.div>



                {/* =====================================
                    FEATURED CERTIFICATION CARD
                ====================================== */}

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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-14"
                >

                    <motion.div
                        whileHover={{
                            y: -8,
                        }}
                        transition={{
                            duration: 0.35,
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
                            shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                        "
                    >

                        {/* =================================
                            CARD GLOW
                        ================================== */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -left-32
                                top-[-100px]
                                h-[350px]
                                w-[350px]
                                rounded-full
                                bg-cyan-400/[0.08]
                                blur-[120px]
                                transition
                                duration-700
                                group-hover:bg-cyan-400/[0.12]
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-32
                                bottom-[-120px]
                                h-[400px]
                                w-[400px]
                                rounded-full
                                bg-violet-500/[0.08]
                                blur-[140px]
                                transition
                                duration-700
                                group-hover:bg-violet-500/[0.12]
                            "
                        />


                        {/* Top shine */}

                        <motion.div
                            animate={{
                                x: ["-150%", "250%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                            }}
                            className="
                                pointer-events-none
                                absolute
                                inset-y-0
                                w-1/4
                                bg-white/[0.04]
                                blur-2xl
                                rotate-12
                            "
                        />


                        {/* =================================
                            CONTENT
                        ================================== */}

                        <div
                            className="
                                relative
                                grid
                                gap-10
                                p-7
                                md:p-10
                                lg:grid-cols-[1fr_1.35fr]
                                lg:items-center
                            "
                        >


                            {/* =============================
                                LEFT VISUAL
                            ============================== */}

                            <div
                                className="
                                    relative
                                    flex
                                    min-h-[310px]
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-cyan-400/[0.12]
                                    bg-[#08090d]/70
                                "
                            >

                                {/* Background circles */}

                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 25,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        absolute
                                        h-[230px]
                                        w-[230px]
                                        rounded-full
                                        border
                                        border-dashed
                                        border-cyan-400/[0.15]
                                    "
                                />

                                <motion.div
                                    animate={{
                                        rotate: -360,
                                    }}
                                    transition={{
                                        duration: 18,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        absolute
                                        h-[170px]
                                        w-[170px]
                                        rounded-full
                                        border
                                        border-violet-400/[0.15]
                                    "
                                />


                                {/* Core */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-28
                                        w-28
                                        items-center
                                        justify-center
                                        rounded-[2rem]
                                        border
                                        border-cyan-300/20
                                        bg-gradient-to-br
                                        from-cyan-400/15
                                        via-blue-500/10
                                        to-violet-500/15
                                        shadow-[0_0_70px_rgba(34,211,238,0.12)]
                                    "
                                >

                                    <BrainCircuit
                                        size={46}
                                        className="text-cyan-200"
                                    />

                                </motion.div>


                                {/* Floating icons */}

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
                                        left-8
                                        top-8
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.03]
                                        text-cyan-300
                                        backdrop-blur-xl
                                    "
                                >

                                    <Cpu size={19} />

                                </motion.div>


                                <motion.div
                                    animate={{
                                        y: [0, 9, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        absolute
                                        right-8
                                        bottom-8
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.03]
                                        text-violet-300
                                        backdrop-blur-xl
                                    "
                                >

                                    <Sparkles size={19} />

                                </motion.div>


                                {/* Certified badge */}

                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        left-5
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-emerald-400/15
                                        bg-emerald-400/[0.06]
                                        px-3
                                        py-1.5
                                    "
                                >

                                    <CheckCircle2
                                        size={13}
                                        className="text-emerald-400"
                                    />

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                            tracking-[0.12em]
                                            text-emerald-300/80
                                        "
                                    >
                                        VERIFIED CREDENTIAL
                                    </span>

                                </div>

                            </div>



                            {/* =============================
                                RIGHT CONTENT
                            ============================== */}

                            <div>

                                {/* Top row */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-violet-400/20
                                            bg-violet-500/[0.07]
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
                                                tracking-[0.16em]
                                                text-violet-200/80
                                            "
                                        >
                                            ARTIFICIAL INTELLIGENCE
                                        </span>

                                    </div>


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-white/25
                                        "
                                    >

                                        <span className="font-mono text-xs">
                                            01
                                        </span>

                                        <Award size={17} />

                                    </div>

                                </div>


                                {/* Title */}

                                <h3
                                    className="
                                        mt-7
                                        text-3xl
                                        font-semibold
                                        tracking-tight
                                        text-white
                                        md:text-5xl
                                    "
                                >
                                    {certification.title}
                                </h3>


                                {/* Issuer */}

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.025]
                                        "
                                    >

                                        <ShieldCheck
                                            size={18}
                                            className="text-cyan-300"
                                        />

                                    </div>


                                    <div>

                                        <p
                                            className="
                                                text-[10px]
                                                tracking-[0.15em]
                                                text-white/25
                                            "
                                        >
                                            ISSUED BY
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-white/70
                                            "
                                        >
                                            Salesforce
                                        </p>

                                    </div>

                                </div>


                                {/* Description */}

                                <p
                                    className="
                                        mt-7
                                        max-w-xl
                                        text-sm
                                        leading-7
                                        text-white/40
                                        md:text-base
                                    "
                                >
                                    {certification.description}
                                </p>


                                {/* Skills */}

                                <div
                                    className="
                                        mt-8
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >

                                    {certification.skills.map(
                                        (skill, index) => (

                                            <motion.span
                                                key={skill}
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    delay:
                                                        index * 0.08,
                                                }}
                                                whileHover={{
                                                    y: -3,
                                                }}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-white/[0.08]
                                                    bg-white/[0.025]
                                                    px-3
                                                    py-2
                                                    text-xs
                                                    text-white/45
                                                    transition
                                                    hover:border-cyan-400/25
                                                    hover:bg-cyan-400/[0.05]
                                                    hover:text-cyan-100
                                                "
                                            >
                                                {skill}
                                            </motion.span>

                                        )
                                    )}

                                </div>


                                {/* Bottom */}

                                <div
                                    className="
                                        mt-9
                                        flex
                                        flex-wrap
                                        items-center
                                        justify-between
                                        gap-5
                                        border-t
                                        border-white/[0.07]
                                        pt-6
                                    "
                                >

                                    <div
                                        className="
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
                                                text-xs
                                                text-emerald-300/70
                                            "
                                        >
                                            Certified & verified
                                        </span>

                                    </div>


                                    <motion.div
                                        whileHover={{
                                            x: 4,
                                        }}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-cyan-300/70
                                        "
                                    >

                                        Salesforce Credential

                                        <ArrowUpRight size={16} />

                                    </motion.div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>


                {/* =====================================
                    BOTTOM STATEMENT
                ====================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                    }}
                    className="
                        mt-10
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/25
                    "
                >

                    <BadgeCheck
                        size={16}
                        className="text-cyan-400/60"
                    />

                    Continuously learning and expanding my expertise
                    in AI and intelligent software systems.

                </motion.div>

            </div>

        </section>
    );
}

export default Certifications;