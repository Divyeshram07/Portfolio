import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    BrainCircuit,
    ChevronDown,
    GraduationCap,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const timeline = [
    {
        id: 1,
        year: "2023 — 2027",
        type: "Education",
        title: "Computer Science Engineering",
        subtitle: "K L University",
        description:
            "Building a strong foundation in computer science, software engineering, artificial intelligence, data structures, databases, and modern application development.",
        icon: GraduationCap,
        tags: [
            "Computer Science",
            "Software Engineering",
            "AI",
            "Data Structures",
        ],
    },
    {
        id: 2,
        year: "Current",
        type: "Certification",
        title: "Salesforce AI Associate",
        subtitle: "Salesforce",
        description:
            "Certification focused on artificial intelligence concepts and their practical application within the Salesforce ecosystem.",
        icon: Award,
        tags: [
            "Artificial Intelligence",
            "AI Concepts",
            "Salesforce",
        ],
    },
    {
        id: 3,
        year: "Achievement",
        type: "Credential",
        title: "NCC A Certificate",
        subtitle: "National Cadet Corps",
        description:
            "An additional credential representing experience beyond academic and technical work.",
        icon: ShieldCheck,
        tags: [
            "Discipline",
            "Leadership",
            "Achievement",
        ],
    },
];

const researchAreas = [
    {
        title: "Generative AI",
        description:
            "Exploring practical applications of large language models and intelligent software systems.",
    },
    {
        title: "RAG Systems",
        description:
            "Building systems that combine retrieval, embeddings and language models for contextual answers.",
    },
    {
        title: "Natural Language Processing",
        description:
            "Interested in language understanding, semantic search, text classification and transformer-based systems.",
    },
];

function Credentials() {
    const [openId, setOpenId] = useState(1);

    return (
        <section
            id="research"
            className="
                relative
                py-28
                md:py-36
                bg-[#050507]
                border-b
                border-white/[0.07]
                overflow-hidden
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    right-[-150px]
                    top-[20%]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-violet-600/[0.035]
                    blur-[130px]
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
                            05
                        </span>

                        <span className="text-sm text-blue-400">
                            Career Intelligence
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
                        Learning,
                        <span className="text-white/25">
                            {" "}building,
                        </span>
                        <br />
                        evolving.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-white/35
                        "
                    >
                        A snapshot of my academic journey, credentials,
                        achievements, and the technical areas I'm
                        actively exploring.
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

                    {/* Timeline */}

                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            p-7
                            md:p-9
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-xs font-mono text-white/20">
                                    TIMELINE
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    Journey
                                </h3>

                            </div>

                            <span className="text-xs text-white/20">
                                03 milestones
                            </span>

                        </div>


                        {/* Timeline */}

                        <div className="relative mt-10">

                            {/* Vertical line */}

                            <div
                                className="
                                    absolute
                                    left-[18px]
                                    top-3
                                    bottom-3
                                    w-px
                                    bg-gradient-to-b
                                    from-blue-400/60
                                    via-violet-400/30
                                    to-transparent
                                "
                            />


                            <div className="space-y-7">

                                {timeline.map(
                                    (item, index) => {

                                        const Icon =
                                            item.icon;

                                        const isOpen =
                                            openId ===
                                            item.id;

                                        return (
                                            <motion.div
                                                key={item.id}
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay:
                                                        index *
                                                        0.1,
                                                }}
                                                className="relative pl-12"
                                            >

                                                {/* Dot */}

                                                <div
                                                    className={`
                                                        absolute
                                                        left-0
                                                        top-0
                                                        w-9
                                                        h-9
                                                        rounded-xl
                                                        border
                                                        flex
                                                        items-center
                                                        justify-center
                                                        transition
                                                        ${
                                                            isOpen
                                                                ? "bg-blue-500/10 border-blue-400/30"
                                                                : "bg-[#0b0b0f] border-white/10"
                                                        }
                                                    `}
                                                >

                                                    <Icon
                                                        size={
                                                            16
                                                        }
                                                        className={
                                                            isOpen
                                                                ? "text-blue-400"
                                                                : "text-white/30"
                                                        }
                                                    />

                                                </div>


                                                {/* Card */}

                                                <button
                                                    onClick={() =>
                                                        setOpenId(
                                                            isOpen
                                                                ? null
                                                                : item.id
                                                        )
                                                    }
                                                    className="
                                                        w-full
                                                        text-left
                                                    "
                                                >

                                                    <div className="flex items-start justify-between gap-4">

                                                        <div>

                                                            <p className="text-xs text-blue-400/70">
                                                                {
                                                                    item.year
                                                                }
                                                            </p>

                                                            <h4 className="mt-2 text-lg font-medium text-white">
                                                                {
                                                                    item.title
                                                                }
                                                            </h4>

                                                            <p className="mt-1 text-sm text-white/30">
                                                                {
                                                                    item.subtitle
                                                                }
                                                            </p>

                                                        </div>

                                                        <ChevronDown
                                                            size={
                                                                17
                                                            }
                                                            className={`
                                                                mt-1
                                                                shrink-0
                                                                text-white/25
                                                                transition-transform
                                                                ${
                                                                    isOpen
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }
                                                            `}
                                                        />

                                                    </div>

                                                </button>


                                                {/* Expanded */}

                                                <AnimatePresence>

                                                    {isOpen && (

                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                height: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                height: "auto",
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                height: 0,
                                                            }}
                                                            className="overflow-hidden"
                                                        >

                                                            <p
                                                                className="
                                                                    mt-4
                                                                    text-sm
                                                                    leading-7
                                                                    text-white/35
                                                                "
                                                            >
                                                                {
                                                                    item.description
                                                                }
                                                            </p>


                                                            <div className="mt-4 flex flex-wrap gap-2">

                                                                {item.tags.map(
                                                                    (
                                                                        tag
                                                                    ) => (

                                                                        <span
                                                                            key={
                                                                                tag
                                                                            }
                                                                            className="
                                                                                px-2.5
                                                                                py-1.5
                                                                                rounded-lg
                                                                                bg-white/[0.03]
                                                                                border
                                                                                border-white/[0.07]
                                                                                text-[11px]
                                                                                text-white/35
                                                                            "
                                                                        >
                                                                            {
                                                                                tag
                                                                            }
                                                                        </span>

                                                                    )
                                                                )}

                                                            </div>

                                                        </motion.div>

                                                    )}

                                                </AnimatePresence>

                                            </motion.div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </div>


                    {/* Research */}

                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            p-7
                            md:p-9
                            flex
                            flex-col
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-11
                                    h-11
                                    rounded-2xl
                                    bg-violet-500/10
                                    border
                                    border-violet-400/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <BrainCircuit
                                    size={20}
                                    className="text-violet-400"
                                />
                            </div>

                            <div>

                                <p className="text-xs text-violet-400">
                                    Exploring
                                </p>

                                <h3 className="mt-1 text-xl font-semibold text-white">
                                    Research interests
                                </h3>

                            </div>

                        </div>


                        <div className="mt-10 space-y-3">

                            {researchAreas.map(
                                (area, index) => (

                                    <motion.div
                                        key={area.title}
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
                                            duration: 0.4,
                                            delay:
                                                index *
                                                0.08,
                                        }}
                                        whileHover={{
                                            x: 4,
                                        }}
                                        className="
                                            group
                                            p-5
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-black/20
                                            hover:bg-white/[0.035]
                                            transition
                                        "
                                    >

                                        <div className="flex items-center gap-3">

                                            <span
                                                className="
                                                    w-2
                                                    h-2
                                                    rounded-full
                                                    bg-violet-400
                                                    shadow-[0_0_12px_rgba(167,139,250,.5)]
                                                "
                                            />

                                            <h4 className="text-sm font-medium text-white/75">
                                                {
                                                    area.title
                                                }
                                            </h4>

                                        </div>

                                        <p
                                            className="
                                                mt-3
                                                pl-5
                                                text-sm
                                                leading-6
                                                text-white/30
                                            "
                                        >
                                            {
                                                area.description
                                            }
                                        </p>

                                    </motion.div>

                                )
                            )}

                        </div>


                        {/* Current focus */}

                        <div
                            className="
                                mt-auto
                                pt-8
                            "
                        >

                            <div
                                className="
                                    p-5
                                    rounded-2xl
                                    border
                                    border-blue-400/10
                                    bg-blue-500/[0.04]
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <Sparkles
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    <span className="text-sm text-blue-300">
                                        Current focus
                                    </span>

                                </div>

                                <p className="mt-3 text-sm leading-6 text-white/40">
                                    Building practical AI applications
                                    that combine machine learning,
                                    retrieval systems, APIs and
                                    modern interfaces.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Credentials;