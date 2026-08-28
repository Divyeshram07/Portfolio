import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Terminal,
    Sparkles,
    Activity,
    GitCommitHorizontal,
    Boxes,
} from "lucide-react";

/* =========================
   CUSTOM BRAND ICONS
========================= */

const GithubIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.029-2.685-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.756c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.027 1.593 1.027 2.685 0 3.842-2.339 4.687-4.566 4.935.359.31.678.92.678 1.852 0 1.337-.012 2.416-.012 2.745 0 .268.18.58.688.482A10.004 10.004 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M20.447 20.452H16.893v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.357V9h3.413v1.561h.048c.475-.9 1.637-1.849 3.37-1.849 3.601 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
);

/* =========================
   DEVELOPER LINKS
========================= */

const presenceLinks = [
    {
        title: "GitHub",
        subtitle: "CODE • PROJECTS • REPOSITORIES",
        description:
            "Explore the projects, experiments and code that reflect my journey as a developer.",
        icon: GithubIcon,
        url: "https://github.com/Divyeshram07",
    },
    {
        title: "LinkedIn",
        subtitle: "JOURNEY • NETWORK • GROWTH",
        description:
            "Follow my professional journey, achievements and the connections I build along the way.",
        icon: LinkedinIcon,
        url: "https://www.linkedin.com/in/divyeshram28/",
    },
];

function DeveloperPresence() {
    return (
        <section
            id="developer-presence"
            className="relative overflow-hidden bg-[#050507] py-28 md:py-36"
        >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[170px]" />

            <div className="pointer-events-none absolute bottom-[5%] right-[-200px] h-[550px] w-[550px] rounded-full bg-violet-600/[0.045] blur-[170px]" />

            {/* GRID */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.018] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:90px_90px]" />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06]">
                            <Code2 size={18} className="text-cyan-300" />
                        </div>

                        <div>
                            <p className="text-[10px] tracking-[0.3em] text-cyan-300/70">
                                05 — DEVELOPER PRESENCE
                            </p>

                            <p className="mt-1 text-xs text-white/25">
                                Building, learning and sharing the journey
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-10 max-w-5xl"
                >
                    <h2 className="text-5xl font-semibold leading-[0.93] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
                        More than just

                        <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                            a portfolio.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
                        My developer journey continues beyond this website.
                        Explore the platforms where I build projects, share
                        my work and continue growing as a developer.
                    </p>
                </motion.div>

                {/* MAIN CONTENT */}
                <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* TERMINAL CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025]"
                    >
                        {/* TERMINAL HEADER */}
                        <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-6">
                            <div className="flex gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                                <span className="text-[9px] font-mono tracking-[0.18em] text-white/20">
                                    DEV.STATUS
                                </span>
                            </div>
                        </div>

                        <div className="p-7 md:p-9">

                            {/* TERMINAL IDENTITY */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06]">
                                    <Terminal
                                        size={23}
                                        className="text-cyan-300"
                                    />
                                </div>

                                <div>
                                    <p className="text-[10px] tracking-[0.18em] text-white/25">
                                        DEVELOPER MODE
                                    </p>

                                    <p className="mt-1 text-lg text-white/75">
                                        Always building.
                                    </p>
                                </div>
                            </div>

                            {/* TERMINAL CONTENT */}
                            <div className="mt-10 space-y-4 rounded-2xl border border-white/[0.07] bg-black/25 p-5 font-mono text-xs leading-7">
                                <p className="text-cyan-300/80">
                                    <span className="text-white/25">$</span>{" "}
                                    whoami
                                </p>

                                <p className="text-white/50">
                                    Developer. Builder. Problem solver.
                                </p>

                                <p className="pt-2 text-cyan-300/80">
                                    <span className="text-white/25">$</span>{" "}
                                    status
                                </p>

                                <div className="flex items-center gap-2 text-emerald-400/80">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                    BUILDING & LEARNING
                                </div>

                                <p className="pt-2 text-cyan-300/80">
                                    <span className="text-white/25">$</span>{" "}
                                    current_focus
                                </p>

                                <p className="text-white/45">
                                    AI • Full Stack Development • Software
                                    Engineering
                                </p>

                                <p className="pt-2 text-cyan-300/80">
                                    <span className="text-white/25">$</span>{" "}
                                    next
                                </p>

                                <p className="text-white/45">
                                    Build something meaningful.
                                    <span className="ml-1 inline-block animate-pulse text-cyan-300">
                                        _
                                    </span>
                                </p>
                            </div>

                            {/* STATUS CARDS */}
                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                                    <Activity
                                        size={15}
                                        className="text-cyan-300/70"
                                    />

                                    <p className="mt-3 text-[9px] text-white/20">
                                        STATUS
                                    </p>

                                    <p className="mt-1 text-[11px] text-white/55">
                                        Active
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                                    <GitCommitHorizontal
                                        size={15}
                                        className="text-blue-300/70"
                                    />

                                    <p className="mt-3 text-[9px] text-white/20">
                                        MODE
                                    </p>

                                    <p className="mt-1 text-[11px] text-white/55">
                                        Building
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                                    <Boxes
                                        size={15}
                                        className="text-violet-300/70"
                                    />

                                    <p className="mt-3 text-[9px] text-white/20">
                                        MINDSET
                                    </p>

                                    <p className="mt-1 text-[11px] text-white/55">
                                        Curious
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* GITHUB + LINKEDIN CARDS */}
                    <div className="grid gap-5">
                        {presenceLinks.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.a
                                    key={item.title}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -6 }}
                                    className="group relative overflow-hidden rounded-[1.7rem] border border-white/[0.09] bg-white/[0.025] p-7 transition duration-500 hover:border-cyan-400/20 md:p-8"
                                >
                                    {/* HOVER GLOW */}
                                    <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-400/[0.04] blur-[90px] transition duration-500 group-hover:bg-cyan-400/[0.1]" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-white/65 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                                                <Icon size={23} />
                                            </div>

                                            <ArrowUpRight
                                                size={20}
                                                className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                                            />
                                        </div>

                                        <div className="mt-7">
                                            <p className="text-[10px] tracking-[0.18em] text-cyan-300/55">
                                                {item.subtitle}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-medium text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 text-xs text-white/30 transition duration-300 group-hover:text-cyan-300/80">
                                            Explore presence

                                            <span className="transition group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM MESSAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-8 md:p-12"
                >
                    <div className="pointer-events-none absolute right-[10%] top-[-100px] h-[250px] w-[250px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

                    <div className="relative">
                        <div className="flex items-center gap-2">
                            <Sparkles size={16} className="text-cyan-300" />

                            <span className="text-[10px] tracking-[0.25em] text-cyan-300/60">
                                THE JOURNEY CONTINUES
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-4xl text-2xl font-medium leading-tight tracking-tight text-white/80 md:text-4xl">
                            Every project is a new opportunity to learn,
                            improve and create something that didn't exist
                            before.
                        </h3>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/30">
                            I'm continuously exploring new technologies,
                            improving my skills and turning ideas into
                            meaningful digital experiences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default DeveloperPresence;