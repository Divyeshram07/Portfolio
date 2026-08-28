import { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    BrainCircuit,
    Globe2,
    Wrench,
    Sparkles,
    ArrowUpRight,
    Cpu,
} from "lucide-react";

const skillCategories = [
    {
        id: "languages",
        label: "Languages",
        icon: Code2,
        color: "cyan",
        skills: [
            { name: "Python", level: 85, short: "PY" },
            { name: "JavaScript", level: 82, short: "JS" },
            { name: "SQL", level: 80, short: "SQ" },
            { name: "HTML / CSS", level: 88, short: "HC" },
        ],
    },

    {
        id: "aiml",
        label: "AI / ML",
        icon: BrainCircuit,
        color: "violet",
        skills: [
            { name: "Machine Learning", level: 78, short: "ML" },
            { name: "Generative AI", level: 75, short: "AI" },
            { name: "RAG Systems", level: 72, short: "RG" },
            { name: "NLP", level: 70, short: "NL" },
        ],
    },

    {
        id: "web",
        label: "Web Development",
        icon: Globe2,
        color: "blue",
        skills: [
            { name: "React", level: 85, short: "RE" },
            { name: "JavaScript", level: 82, short: "JS" },
            { name: "HTML / CSS", level: 90, short: "HC" },
            { name: "Backend APIs", level: 75, short: "API" },
        ],
    },

    {
        id: "tools",
        label: "Tools",
        icon: Wrench,
        color: "emerald",
        skills: [
            { name: "Git & GitHub", level: 85, short: "GT" },
            { name: "VS Code", level: 92, short: "VC" },
            { name: "Postman", level: 80, short: "PM" },
            { name: "REST APIs", level: 80, short: "API" },
        ],
    },
];

const marqueeSkills = [
    "PYTHON",
    "JAVASCRIPT",
    "REACT",
    "ARTIFICIAL INTELLIGENCE",
    "MACHINE LEARNING",
    "SQL",
    "RAG",
    "NLP",
    "GIT",
    "FULL STACK DEVELOPMENT",
];

const colorStyles = {
    cyan: {
        text: "text-cyan-300",
        border: "border-cyan-400/20",
        bg: "bg-cyan-400/[0.07]",
        glow: "bg-cyan-400",
        gradient: "from-cyan-400/20 via-cyan-300/5 to-transparent",
    },

    violet: {
        text: "text-violet-300",
        border: "border-violet-400/20",
        bg: "bg-violet-400/[0.07]",
        glow: "bg-violet-400",
        gradient: "from-violet-400/20 via-violet-300/5 to-transparent",
    },

    blue: {
        text: "text-blue-300",
        border: "border-blue-400/20",
        bg: "bg-blue-400/[0.07]",
        glow: "bg-blue-400",
        gradient: "from-blue-400/20 via-blue-300/5 to-transparent",
    },

    emerald: {
        text: "text-emerald-300",
        border: "border-emerald-400/20",
        bg: "bg-emerald-400/[0.07]",
        glow: "bg-emerald-400",
        gradient: "from-emerald-400/20 via-emerald-300/5 to-transparent",
    },
};

function SkillCard({ skill, color, index }) {
    const [rotation, setRotation] = useState({
        rotateX: 0,
        rotateY: 0,
    });

    const style = colorStyles[color];

    const handleMouseMove = (event) => {
        if (window.innerWidth < 768) return;

        const rect = event.currentTarget.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        setRotation({
            rotateX,
            rotateY,
        });
    };

    const resetRotation = () => {
        setRotation({
            rotateX: 0,
            rotateY: 0,
        });
    };

    return (
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
                amount: 0.2,
            }}
            transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
            }}
            animate={{
                rotateX: rotation.rotateX,
                rotateY: rotation.rotateY,
            }}
            whileHover={{
                y: -8,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
            style={{
                transformStyle: "preserve-3d",
            }}
            className={`
                group
                relative
                overflow-hidden
                min-h-[210px]
                rounded-[1.6rem]
                border
                ${style.border}
                bg-white/[0.025]
                p-6
                transition-shadow
                duration-500
                hover:shadow-[0_25px_70px_rgba(0,0,0,.4)]
            `}
        >
            {/* Glow */}
            <div
                className={`
                    absolute
                    -right-16
                    -top-16
                    w-40
                    h-40
                    rounded-full
                    ${style.glow}
                    opacity-[0.06]
                    blur-[70px]
                    transition
                    duration-500
                    group-hover:opacity-[0.16]
                `}
            />

            {/* Top */}
            <div className="relative flex items-start justify-between">
                <div
                    className={`
                        w-12
                        h-12
                        rounded-2xl
                        ${style.bg}
                        border
                        ${style.border}
                        flex
                        items-center
                        justify-center
                        ${style.text}
                        text-xs
                        font-bold
                        tracking-wider
                    `}
                >
                    {skill.short}
                </div>

                <span className="text-[10px] font-mono text-white/20">
                    0{index + 1}
                </span>
            </div>

            {/* Content */}
            <div className="relative mt-7">
                <h3
                    className="
                        text-base
                        md:text-lg
                        font-medium
                        text-white/85
                        transition
                        duration-300
                        group-hover:text-white
                    "
                >
                    {skill.name}
                </h3>

                <div className="flex items-center justify-between mt-5">
                    <span
                        className="
                            text-[10px]
                            tracking-[0.18em]
                            text-white/25
                        "
                    >
                        PROFICIENCY
                    </span>

                    <span
                        className={`
                            text-xs
                            font-medium
                            ${style.text}
                        `}
                    >
                        {skill.level}%
                    </span>
                </div>

                {/* Progress */}
                <div
                    className="
                        mt-3
                        h-[5px]
                        rounded-full
                        bg-white/[0.06]
                        overflow-hidden
                    "
                >
                    <motion.div
                        initial={{
                            width: 0,
                        }}
                        whileInView={{
                            width: `${skill.level}%`,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.1,
                            delay: 0.2 + index * 0.06,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`
                            h-full
                            rounded-full
                            ${style.glow}
                        `}
                    />
                </div>
            </div>

            {/* Bottom gradient */}
            <div
                className={`
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    bg-gradient-to-r
                    ${style.gradient}
                `}
            />
        </motion.div>
    );
}

function Skills() {
    const [activeCategory, setActiveCategory] =
        useState("languages");

    const activeData =
        skillCategories.find(
            (category) =>
                category.id === activeCategory
        ) || skillCategories[0];

    const ActiveIcon = activeData.icon;
    const activeStyle =
        colorStyles[activeData.color];

    return (
        <section
            id="skills"
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
            {/* Background Glow */}
            <div
                className="
                    absolute
                    left-[-180px]
                    top-[20%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-cyan-500/[0.035]
                    blur-[150px]
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    right-[-180px]
                    bottom-[10%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-violet-600/[0.04]
                    blur-[160px]
                    pointer-events-none
                "
            />

            {/* Grid */}
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
                {/* HEADER */}
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
                    <div className="flex items-center gap-3">
                        <div
                            className="
                                w-10
                                h-10
                                rounded-xl
                                border
                                border-cyan-400/10
                                bg-cyan-400/[0.06]
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <Cpu
                                size={18}
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
                                04 — TECH ARSENAL
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-white/25
                                "
                            >
                                Technologies powering my work
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
                            text-white
                        "
                    >
                        Technologies I use

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
                            to build ideas.
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
                        My technical focus is on artificial intelligence,
                        modern web development, full-stack systems,
                        and building practical software solutions.
                    </p>
                </motion.div>

                {/* CATEGORY BUTTONS */}
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
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="
                        mt-14
                        flex
                        gap-3
                        overflow-x-auto
                        pb-3
                        scrollbar-hide
                    "
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;

                        const isActive =
                            activeCategory === category.id;

                        const style =
                            colorStyles[category.color];

                        return (
                            <button
                                key={category.id}
                                onClick={() =>
                                    setActiveCategory(category.id)
                                }
                                className={`
                                    shrink-0
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3.5
                                    rounded-2xl
                                    border
                                    text-xs
                                    transition
                                    duration-300
                                    ${
                                        isActive
                                            ? `${style.bg} ${style.border} text-white`
                                            : "border-white/[0.08] bg-white/[0.02] text-white/35 hover:text-white/70 hover:bg-white/[0.04]"
                                    }
                                `}
                            >
                                <Icon
                                    size={16}
                                    className={
                                        isActive
                                            ? style.text
                                            : ""
                                    }
                                />

                                {category.label}
                            </button>
                        );
                    })}
                </motion.div>

                {/* ACTIVE CATEGORY */}
                <motion.div
                    key={activeData.id}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.45,
                    }}
                    className="mt-10"
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            mb-6
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`
                                    w-10
                                    h-10
                                    rounded-xl
                                    border
                                    ${activeStyle.border}
                                    ${activeStyle.bg}
                                    flex
                                    items-center
                                    justify-center
                                `}
                            >
                                <ActiveIcon
                                    size={18}
                                    className={activeStyle.text}
                                />
                            </div>

                            <div>
                                <p
                                    className={`
                                        text-[10px]
                                        tracking-[0.22em]
                                        ${activeStyle.text}
                                    `}
                                >
                                    SKILL CATEGORY
                                </p>

                                <h3
                                    className="
                                        mt-1
                                        text-lg
                                        text-white/80
                                    "
                                >
                                    {activeData.label}
                                </h3>
                            </div>
                        </div>

                        <span
                            className="
                                hidden
                                sm:block
                                text-[10px]
                                tracking-[0.2em]
                                text-white/20
                            "
                        >
                            {activeData.skills.length} SKILLS
                        </span>
                    </div>

                    {/* SKILL CARDS */}
                    <div
                        className="
                            grid
                            sm:grid-cols-2
                            lg:grid-cols-4
                            gap-4
                            [perspective:1000px]
                        "
                    >
                        {activeData.skills.map(
                            (skill, index) => (
                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                    color={activeData.color}
                                    index={index}
                                />
                            )
                        )}
                    </div>
                </motion.div>

                {/* CURRENTLY LEARNING */}
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
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        relative
                        overflow-hidden
                        mt-8
                        rounded-[2rem]
                        border
                        border-white/[0.09]
                        bg-white/[0.025]
                        p-7
                        md:p-10
                    "
                >
                    <div
                        className="
                            absolute
                            right-[-80px]
                            top-[-100px]
                            w-[300px]
                            h-[300px]
                            rounded-full
                            bg-violet-500/[0.06]
                            blur-[110px]
                        "
                    />

                    <div
                        className="
                            relative
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            justify-between
                            gap-8
                        "
                    >
                        <div>
                            <div className="flex items-center gap-3">
                                <Sparkles
                                    size={18}
                                    className="text-violet-300"
                                />

                                <p
                                    className="
                                        text-[10px]
                                        tracking-[0.25em]
                                        text-violet-300/70
                                    "
                                >
                                    CURRENTLY LEARNING
                                </p>
                            </div>

                            <h3
                                className="
                                    mt-5
                                    text-2xl
                                    md:text-4xl
                                    font-semibold
                                    tracking-tight
                                    text-white
                                "
                            >
                                Always building.

                                <span className="block text-white/30">
                                    Always learning.
                                </span>
                            </h3>
                        </div>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-3
                                max-w-xl
                            "
                        >
                            {[
                                "Generative AI",
                                "Advanced RAG",
                                "Backend Systems",
                                "System Design",
                            ].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{
                                        y: -4,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-white/[0.08]
                                        bg-black/20
                                        text-xs
                                        text-white/55
                                    "
                                >
                                    <span
                                        className="
                                            w-1.5
                                            h-1.5
                                            rounded-full
                                            bg-cyan-300
                                            shadow-[0_0_10px_rgba(103,232,249,.8)]
                                        "
                                    />

                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* TECH MARQUEE */}
            <div
                className="
                    relative
                    mt-24
                    border-y
                    border-white/[0.06]
                    overflow-hidden
                    py-5
                    bg-white/[0.015]
                "
            >
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        flex
                        whitespace-nowrap
                        w-max
                    "
                >
                    {[...marqueeSkills, ...marqueeSkills].map(
                        (skill, index) => (
                            <div
                                key={`${skill}-${index}`}
                                className="
                                    flex
                                    items-center
                                    gap-8
                                    px-8
                                "
                            >
                                <span
                                    className="
                                        text-sm
                                        md:text-base
                                        tracking-[0.2em]
                                        text-white/20
                                    "
                                >
                                    {skill}
                                </span>

                                <span
                                    className="
                                        w-1.5
                                        h-1.5
                                        rounded-full
                                        bg-cyan-300/40
                                    "
                                />
                            </div>
                        )
                    )}
                </motion.div>
            </div>

            {/* FOOT NOTE */}
            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-5
                    md:px-8
                    mt-8
                "
            >
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-[10px]
                        tracking-[0.16em]
                        text-white/15
                    "
                >
                    <span>TECH_STACK.SYS</span>

                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                        <span>CONTINUOUSLY UPDATING</span>

                        <ArrowUpRight size={12} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;