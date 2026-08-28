import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    Terminal,
    Sparkles,
} from "lucide-react";

function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width;

        const y =
            (event.clientY - rect.top) /
            rect.height;

        mouseX.set((x - 0.5) * 30);
        mouseY.set((y - 0.5) * 30);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="
                relative
                min-h-screen
                flex
                items-center
                overflow-hidden
                border-b
                border-white/[0.07]
            "
        >

            {/* ================================= */}
            {/* Background */}
            {/* ================================= */}

            <div className="absolute inset-0 pointer-events-none">

                {/* Grid */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                    "
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Gradient Orb */}
                <motion.div
                    style={{
                        x: smoothX,
                        y: smoothY,
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/3
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-blue-600/10
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        right-[-100px]
                        top-[15%]
                        w-[350px]
                        h-[350px]
                        rounded-full
                        bg-violet-600/10
                        blur-[100px]
                    "
                />

                <div
                    className="
                        absolute
                        left-[-150px]
                        bottom-[5%]
                        w-[400px]
                        h-[400px]
                        rounded-full
                        bg-cyan-500/5
                        blur-[120px]
                    "
                />

            </div>


            {/* ================================= */}
            {/* Main */}
            {/* ================================= */}

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    w-full
                    px-6
                    md:px-8
                    pt-32
                    pb-20
                "
            >

                <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-16 items-center">

                    {/* ================================= */}
                    {/* Left */}
                    {/* ================================= */}

                    <div>

                        {/* Status */}
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
                                duration: 0.6,
                            }}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                text-sm
                                text-white/60
                            "
                        >

                            <span className="relative flex h-2 w-2">

                                <span
                                    className="
                                        absolute
                                        inline-flex
                                        h-full
                                        w-full
                                        rounded-full
                                        bg-emerald-400
                                        opacity-60
                                        animate-ping
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        inline-flex
                                        rounded-full
                                        h-2
                                        w-2
                                        bg-emerald-400
                                    "
                                />

                            </span>

                            Open to internship opportunities

                        </motion.div>


                        {/* Heading */}

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="
                                mt-8
                                text-5xl
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[5.5rem]
                                leading-[0.95]
                                tracking-[-0.05em]
                                font-semibold
                            "
                        >

                            Building

                            <span
                                className="
                                    block
                                    text-transparent
                                    bg-clip-text
                                    bg-gradient-to-r
                                    from-blue-400
                                    via-violet-400
                                    to-cyan-300
                                "
                            >
                                intelligent
                            </span>

                            digital systems.

                        </motion.h1>


                        {/* Description */}

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
                                duration: 0.6,
                                delay: 0.25,
                            }}
                            className="
                                mt-8
                                max-w-2xl
                                text-lg
                                md:text-xl
                                leading-8
                                text-white/45
                            "
                        >
                            I'm Divyesh Ram, a Computer Science
                            engineering student focused on AI,
                            NLP, RAG systems, backend engineering,
                            and modern web applications.
                        </motion.p>


                        {/* Buttons */}

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
                                duration: 0.6,
                                delay: 0.35,
                            }}
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-3
                            "
                        >

                            <a
                                href="#projects"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3.5
                                    rounded-full
                                    bg-white
                                    text-black
                                    font-medium
                                    hover:bg-white/90
                                    transition
                                "
                            >
                                Explore my work

                                <ArrowUpRight
                                    size={17}
                                    className="
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                        transition
                                    "
                                />

                            </a>


                            <a
                                href="#contact"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3.5
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    text-white
                                    hover:bg-white/[0.07]
                                    transition
                                "
                            >
                                Let's connect
                            </a>

                        </motion.div>


                        {/* Scroll */}

                        <motion.a
                            href="#about"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1,
                            }}
                            className="
                                mt-20
                                inline-flex
                                items-center
                                gap-3
                                text-sm
                                text-white/30
                                hover:text-white/70
                                transition
                            "
                        >

                            <span>Scroll to explore</span>

                            <ArrowDown
                                size={15}
                                className="animate-bounce"
                            />

                        </motion.a>

                    </div>


                    {/* ================================= */}
                    {/* Interactive System Card */}
                    {/* ================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.25,
                        }}
                        style={{
                            x: smoothX,
                            y: smoothY,
                        }}
                        className="relative"
                    >

                        <div
                            className="
                                relative
                                rounded-[2rem]
                                border
                                border-white/10
                                bg-white/[0.035]
                                backdrop-blur-xl
                                overflow-hidden
                            "
                        >

                            {/* Top bar */}

                            <div
                                className="
                                    h-12
                                    flex
                                    items-center
                                    justify-between
                                    px-5
                                    border-b
                                    border-white/[0.07]
                                "
                            >

                                <div className="flex gap-2">

                                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />

                                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />

                                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />

                                </div>

                                <span className="text-xs text-white/20">
                                    system.interface
                                </span>

                            </div>


                            {/* Terminal */}

                            <div className="p-6 md:p-8">

                                <div className="flex items-center gap-3">

                                    <Terminal
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    <span className="text-sm text-white/50">
                                        developer@portfolio
                                    </span>

                                </div>


                                <div className="mt-8 space-y-5 font-mono text-sm">

                                    <div>

                                        <span className="text-emerald-400">
                                            $
                                        </span>

                                        <span className="ml-2 text-white/70">
                                            whoami
                                        </span>

                                        <p className="mt-2 text-white/35">
                                            divyesh@ai-engineer
                                        </p>

                                    </div>


                                    <div>

                                        <span className="text-emerald-400">
                                            $
                                        </span>

                                        <span className="ml-2 text-white/70">
                                            stack --current
                                        </span>

                                        <div className="mt-3 flex flex-wrap gap-2">

                                            {[
                                                "Python",
                                                "Java",
                                                "React",
                                                "NLP",
                                                "RAG",
                                                "ML",
                                            ].map((item) => (

                                                <span
                                                    key={item}
                                                    className="
                                                        px-2.5
                                                        py-1.5
                                                        rounded-lg
                                                        bg-white/[0.05]
                                                        border
                                                        border-white/[0.07]
                                                        text-xs
                                                        text-white/50
                                                    "
                                                >
                                                    {item}
                                                </span>

                                            ))}

                                        </div>

                                    </div>


                                    <div>

                                        <span className="text-emerald-400">
                                            $
                                        </span>

                                        <span className="ml-2 text-white/70">
                                            status
                                        </span>

                                        <div className="mt-3 flex items-center gap-2">

                                            <span className="w-2 h-2 rounded-full bg-emerald-400" />

                                            <span className="text-emerald-400">
                                                available
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                {/* Bottom Stats */}

                                <div
                                    className="
                                        mt-10
                                        grid
                                        grid-cols-3
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            p-4
                                        "
                                    >

                                        <Code2
                                            size={16}
                                            className="text-blue-400"
                                        />

                                        <p className="mt-3 text-xs text-white/30">
                                            Focus
                                        </p>

                                        <p className="mt-1 text-sm text-white/70">
                                            AI
                                        </p>

                                    </div>


                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            p-4
                                        "
                                    >

                                        <Sparkles
                                            size={16}
                                            className="text-violet-400"
                                        />

                                        <p className="mt-3 text-xs text-white/30">
                                            Building
                                        </p>

                                        <p className="mt-1 text-sm text-white/70">
                                            RAG
                                        </p>

                                    </div>


                                    <div
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-white/[0.025]
                                            p-4
                                        "
                                    >

                                        <Terminal
                                            size={16}
                                            className="text-cyan-400"
                                        />

                                        <p className="mt-3 text-xs text-white/30">
                                            Mode
                                        </p>

                                        <p className="mt-1 text-sm text-white/70">
                                            Build
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Floating badge */}

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
                                px-4
                                py-2
                                rounded-full
                                border
                                border-white/10
                                bg-[#101014]
                                text-xs
                                text-white/50
                                shadow-2xl
                            "
                        >
                            <span className="text-blue-400">
                                ●
                            </span>{" "}
                            AI / Software
                        </motion.div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Hero;