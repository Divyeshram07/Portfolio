import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    GitBranch,
    Trophy,
    Activity,
} from "lucide-react";

const profiles = [
    {
        name: "GitHub",
        handle: "@Divyeshram07",
        description:
            "Projects, experiments, open-source work and development activity.",
        url: "https://github.com/Divyeshram07",
        short: "GH",
        accent: "blue",
    },
    {
        name: "LeetCode",
        handle: "DivyeshRam",
        description:
            "Problem solving, algorithms and continuous coding practice.",
        url: "https://leetcode.com/",
        short: "LC",
        accent: "yellow",
    },
    {
        name: "LinkedIn",
        handle: "Divyesh Ram",
        description:
            "Professional profile, certifications and career updates.",
        url: "https://www.linkedin.com/in/divyeshram28/",
        short: "in",
        accent: "cyan",
    },
    {
        name: "Instagram",
        handle: "@divyesh._.ram",
        description:
            "A little more of the person behind the code.",
        url: "https://www.instagram.com/divyesh._.ram/",
        short: "IG",
        accent: "pink",
    },
];

const activity = [
    1, 0, 2, 3, 1, 4, 2, 0, 3, 5, 2, 1,
    4, 2, 5, 3, 1, 0, 4, 5, 2, 3, 1, 4,
    5, 2, 1, 3, 4, 2, 5, 1, 0, 3, 5, 4,
    2, 1, 4, 5, 3, 2, 0, 4, 1, 3, 5, 2,
];

function DeveloperPresence() {
    return (
        <section
            id="developer"
            className="
                relative
                py-28
                md:py-36
                bg-[#07070a]
                border-b
                border-white/[0.07]
                overflow-hidden
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    left-[-150px]
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
                            04
                        </span>

                        <span className="text-sm text-blue-400">
                            Developer Presence
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
                        Find me
                        <span className="text-white/25">
                            {" "}outside this page.
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
                        Explore my coding work, professional profile,
                        problem-solving practice, and social presence.
                    </p>

                </motion.div>


                {/* Activity Dashboard */}

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
                        rounded-[2rem]
                        border
                        border-white/10
                        bg-white/[0.025]
                        overflow-hidden
                    "
                >

                    {/* Dashboard Header */}

                    <div
                        className="
                            px-6
                            md:px-8
                            py-5
                            border-b
                            border-white/[0.07]
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    w-9
                                    h-9
                                    rounded-xl
                                    bg-white/[0.04]
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Activity
                                    size={17}
                                    className="text-blue-400"
                                />
                            </div>

                            <div>

                                <p className="text-sm text-white/70">
                                    Developer activity
                                </p>

                                <p className="text-xs text-white/25">
                                    coding / building / learning
                                </p>

                            </div>

                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                text-emerald-400
                            "
                        >

                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                            Active

                        </div>

                    </div>


                    {/* Activity Grid */}

                    <div className="p-6 md:p-8">

                        <div className="flex items-center justify-between">

                            <p className="text-xs text-white/25 font-mono">
                                RECENT ACTIVITY
                            </p>

                            <p className="text-xs text-white/20">
                                48 activity points
                            </p>

                        </div>


                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                gap-1.5
                            "
                        >

                            {activity.map(
                                (value, index) => {

                                    const intensity =
                                        value === 0
                                            ? "bg-white/[0.035]"
                                            : value === 1
                                            ? "bg-blue-500/20"
                                            : value === 2
                                            ? "bg-blue-500/35"
                                            : value === 3
                                            ? "bg-blue-500/50"
                                            : value === 4
                                            ? "bg-violet-500/60"
                                            : "bg-violet-400/80";

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.7,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                delay:
                                                    index *
                                                    0.015,
                                            }}
                                            whileHover={{
                                                scale: 1.4,
                                            }}
                                            title={`${value} activity`}
                                            className={`
                                                w-4
                                                h-4
                                                sm:w-5
                                                sm:h-5
                                                rounded-[4px]
                                                ${intensity}
                                                border
                                                border-white/[0.03]
                                                cursor-pointer
                                            `}
                                        />
                                    );
                                }
                            )}

                        </div>


                        {/* Stats */}

                        <div
                            className="
                                mt-8
                                grid
                                grid-cols-2
                                md:grid-cols-4
                                gap-3
                            "
                        >

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    p-5
                                "
                            >

                                <GitBranch
                                    size={16}
                                    className="text-blue-400"
                                />

                                <p className="mt-4 text-2xl font-semibold">
                                    Git
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Version control
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

                                <Code2
                                    size={16}
                                    className="text-violet-400"
                                />

                                <p className="mt-4 text-2xl font-semibold">
                                    DSA
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Problem solving
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

                                <Trophy
                                    size={16}
                                    className="text-yellow-400"
                                />

                                <p className="mt-4 text-2xl font-semibold">
                                    Build
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Project focused
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

                                <Activity
                                    size={16}
                                    className="text-emerald-400"
                                />

                                <p className="mt-4 text-2xl font-semibold">
                                    Learn
                                </p>

                                <p className="mt-1 text-xs text-white/25">
                                    Always improving
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* Social Profiles */}

                <div
                    className="
                        mt-6
                        grid
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-4
                    "
                >

                    {profiles.map(
                        (profile, index) => (

                            <motion.a
                                key={profile.name}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
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
                                    delay:
                                        index * 0.08,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[1.75rem]
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-6
                                "
                            >

                                {/* Glow */}

                                <div
                                    className="
                                        absolute
                                        -right-12
                                        -top-12
                                        w-28
                                        h-28
                                        rounded-full
                                        bg-blue-500/[0.06]
                                        blur-2xl
                                        opacity-0
                                        group-hover:opacity-100
                                        transition
                                    "
                                />


                                <div className="relative">

                                    <div className="flex items-center justify-between">

                                        <div
                                            className="
                                                w-11
                                                h-11
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >

                                            <span
                                                className="
                                                    text-xs
                                                    font-bold
                                                    text-white/70
                                                "
                                            >
                                                {profile.short}
                                            </span>

                                        </div>

                                        <ArrowUpRight
                                            size={17}
                                            className="
                                                text-white/20
                                                group-hover:text-white
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                                transition
                                            "
                                        />

                                    </div>


                                    <h3 className="mt-7 text-lg font-medium text-white">
                                        {profile.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-blue-400/70">
                                        {profile.handle}
                                    </p>

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            leading-6
                                            text-white/30
                                        "
                                    >
                                        {profile.description}
                                    </p>

                                </div>

                            </motion.a>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default DeveloperPresence;