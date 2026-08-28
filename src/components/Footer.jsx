import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowUp,
    Mail,
    Heart,
    Sparkles,
    Navigation,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

const navigationLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Research", id: "research" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
];

function Footer() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

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

        window.history.replaceState(
            null,
            "",
            `#${id}`
        );
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/Divyeshram07",
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/divyeshram28",
            icon: FaLinkedinIn,
        },
        {
            name: "Email",
            href: "mailto:bdivyeshram@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-white/[0.07]
                bg-[#030305]
            "
        >
            {/* =========================================
                CINEMATIC BACKGROUND
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.08),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.10),transparent_40%)]
                "
            />

            {/* Subtle grid */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.025]
                    bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
                    bg-[size:80px_80px]
                "
            />

            {/* Floating glows */}

            <motion.div
                animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-20
                    h-72
                    w-72
                    rounded-full
                    bg-cyan-500/[0.06]
                    blur-[120px]
                "
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-80
                    w-80
                    rounded-full
                    bg-violet-500/[0.06]
                    blur-[120px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-5
                    pb-8
                    pt-20
                    md:px-8
                    md:pt-24
                "
            >
                {/* =====================================
                    MAIN FOOTER GRID
                ====================================== */}

                <div
                    className="
                        grid
                        gap-12
                        lg:grid-cols-[1.2fr_.8fr_1fr]
                        lg:gap-16
                    "
                >
                    {/* =================================
                        BRAND
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="
                                group
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    relative
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-cyan-400
                                    via-blue-500
                                    to-violet-500
                                    text-sm
                                    font-bold
                                    text-white
                                    shadow-[0_0_35px_rgba(59,130,246,0.25)]
                                "
                            >
                                DR

                                <motion.div
                                    animate={{
                                        x: ["-150%", "250%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 4,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        absolute
                                        inset-y-0
                                        w-1/3
                                        bg-white/30
                                        blur-md
                                    "
                                />
                            </div>

                            <div className="text-left">
                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        text-white
                                        transition
                                        group-hover:text-cyan-100
                                    "
                                >
                                    Divyesh Ram
                                </h3>

                                <p className="mt-0.5 text-[11px] text-white/35">
                                    AI & Software Developer
                                </p>
                            </div>
                        </button>

                        <p
                            className="
                                mt-7
                                max-w-md
                                text-sm
                                leading-7
                                text-white/40
                            "
                        >
                            Building intelligent digital experiences and
                            transforming ambitious ideas into practical,
                            meaningful software solutions.
                        </p>

                        {/* Availability */}

                        <div
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-emerald-400/15
                                bg-emerald-400/[0.05]
                                px-3
                                py-1.5
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

                            <span className="text-[10px] tracking-wide text-emerald-300/70">
                                OPEN TO OPPORTUNITIES
                            </span>
                        </div>

                        {/* Social Links */}

                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target={
                                            social.name === "Email"
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel={
                                            social.name === "Email"
                                                ? undefined
                                                : "noopener noreferrer"
                                        }
                                        aria-label={social.name}
                                        whileHover={{
                                            y: -4,
                                            scale: 1.05,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.03]
                                            text-white/45
                                            transition
                                            duration-300
                                            hover:border-cyan-400/30
                                            hover:bg-cyan-400/[0.07]
                                            hover:text-cyan-200
                                        "
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* =================================
                        QUICK NAVIGATION
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <Navigation
                                size={14}
                                className="text-cyan-300/70"
                            />

                            <p
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.22em]
                                    text-white/30
                                "
                            >
                                Navigate
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1">
                            {navigationLinks.map((link) => (
                                <button
                                    key={link.id}
                                    type="button"
                                    onClick={() =>
                                        scrollToSection(link.id)
                                    }
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        py-2.5
                                        text-left
                                        text-sm
                                        text-white/40
                                        transition
                                        duration-300
                                        hover:text-white
                                    "
                                >
                                    <span
                                        className="
                                            h-1
                                            w-1
                                            rounded-full
                                            bg-white/20
                                            transition-all
                                            duration-300
                                            group-hover:w-4
                                            group-hover:bg-cyan-300
                                        "
                                    />

                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* =================================
                        CONTACT CTA
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[1.8rem]
                            border
                            border-white/[0.09]
                            bg-white/[0.025]
                            p-6
                            backdrop-blur-xl
                        "
                    >
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-16
                                -top-16
                                h-40
                                w-40
                                rounded-full
                                bg-violet-500/[0.10]
                                blur-[70px]
                            "
                        />

                        <div className="relative">
                            <div className="flex items-center gap-2">
                                <Sparkles
                                    size={15}
                                    className="text-violet-300"
                                />

                                <p
                                    className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.2em]
                                        text-violet-300/70
                                    "
                                >
                                    Let's collaborate
                                </p>
                            </div>

                            <h3
                                className="
                                    mt-5
                                    text-2xl
                                    font-semibold
                                    leading-tight
                                    tracking-tight
                                    text-white
                                "
                            >
                                Have an idea worth building?
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-white/40
                                "
                            >
                                Let's connect, exchange ideas and create
                                something meaningful together.
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("contact")
                                }
                                className="
                                    group
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-cyan-50
                                    hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)]
                                "
                            >
                                Start a conversation

                                <ArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================
                    DIVIDER
                ====================================== */}

                <div
                    className="
                        mt-16
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.10]
                        to-transparent
                    "
                />

                {/* =====================================
                    BOTTOM BAR
                ====================================== */}

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-5
                        pt-8
                        sm:flex-row
                    "
                >
                    <p
                        className="
                            text-center
                            text-xs
                            text-white/30
                            sm:text-left
                        "
                    >
                        © {new Date().getFullYear()} Divyesh Ram.
                        All rights reserved.
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-white/30
                        "
                    >
                        <span>Designed & built with</span>

                        <Heart
                            size={13}
                            className="
                                fill-rose-400/60
                                text-rose-400
                            "
                        />

                        <span>by Divyesh Ram</span>
                    </div>

                    <motion.button
                        type="button"
                        onClick={scrollToTop}
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            px-4
                            py-2
                            text-xs
                            text-white/45
                            transition
                            hover:border-cyan-400/25
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-200
                        "
                    >
                        Back to top

                        <ArrowUp
                            size={14}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                            "
                        />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;