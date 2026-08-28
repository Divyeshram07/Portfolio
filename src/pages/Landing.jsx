import { useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

const terminalLines = [
    "INITIALIZING DIVYESH RAM...",
    "LOADING AI SYSTEMS...",
    "CONNECTING PROJECT ARCHIVE...",
    "CALIBRATING DIGITAL ENVIRONMENT...",
    "SYSTEM READY.",
];

const particles = Array.from({ length: 45 }, (_, index) => ({
    id: index,
    x: (index * 37 + 11) % 100,
    y: (index * 61 + 17) % 100,
    size: index % 6 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
    duration: 5 + (index % 7),
    delay: index * 0.1,
}));

/* =========================================================
   TEXT SCRAMBLE
========================================================= */

function ScrambleText({ text, start }) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (!start) return;

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

        let iteration = 0;

        const interval = setInterval(() => {
            const nextText = text
                .split("")
                .map((character, index) => {
                    if (character === " ") return " ";

                    if (index < iteration) {
                        return character;
                    }

                    return characters[
                        Math.floor(
                            Math.random() * characters.length
                        )
                    ];
                })
                .join("");

            setDisplay(nextText);

            iteration += 0.55;

            if (iteration >= text.length) {
                setDisplay(text);
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [text, start]);

    return <>{display}</>;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Landing() {
    const navigate = useNavigate();

    const [scene, setScene] = useState("letterbox");
    const [loading, setLoading] = useState(0);
    const [entering, setEntering] = useState(false);

    const [cursorVisible, setCursorVisible] =
        useState(false);

    const [hoveringCTA, setHoveringCTA] =
        useState(false);

    const [time, setTime] = useState("");

    const [trail, setTrail] = useState([]);

    const [drClicks, setDrClicks] = useState(0);
    const [easterEgg, setEasterEgg] = useState(false);

    const buttonRef = useRef(null);

    /* =====================================================
       MOUSE MOTION VALUES
    ===================================================== */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 400,
        damping: 28,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 400,
        damping: 28,
    });

    const rotateX = useTransform(
        smoothY,
        [0, typeof window !== "undefined" ? window.innerHeight : 1000],
        [6, -6]
    );

    const rotateY = useTransform(
        smoothX,
        [0, typeof window !== "undefined" ? window.innerWidth : 1500],
        [-7, 7]
    );

    /* =====================================================
       CINEMATIC TIMELINE
    ===================================================== */

    useEffect(() => {
        const terminalTimer = setTimeout(() => {
            setScene("terminal");
        }, 1100);

        const energyTimer = setTimeout(() => {
            setScene("energy");
        }, 4800);

        const identityTimer = setTimeout(() => {
            setScene("identity");
        }, 5600);

        const heroTimer = setTimeout(() => {
            setScene("hero");
        }, 6700);

        return () => {
            clearTimeout(terminalTimer);
            clearTimeout(energyTimer);
            clearTimeout(identityTimer);
            clearTimeout(heroTimer);
        };
    }, []);

    /* =====================================================
       LOADING
    ===================================================== */

    useEffect(() => {
        if (scene !== "terminal") return;

        setLoading(0);

        const interval = setInterval(() => {
            setLoading((previous) => {
                const next =
                    previous + Math.floor(Math.random() * 8) + 3;

                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return next;
            });
        }, 220);

        return () => clearInterval(interval);
    }, [scene]);

    /* =====================================================
       INDIA TIME
    ===================================================== */

    useEffect(() => {
        const updateTime = () => {
            const formatted =
                new Intl.DateTimeFormat("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                }).format(new Date());

            setTime(formatted);
        };

        updateTime();

        const interval = setInterval(
            updateTime,
            1000
        );

        return () => clearInterval(interval);
    }, []);

    /* =====================================================
       MOUSE
    ===================================================== */

    const handleMouseMove = (event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);

        setCursorVisible(true);

        const newTrail = {
            id: Date.now() + Math.random(),
            x: event.clientX,
            y: event.clientY,
        };

        setTrail((previous) => [
            ...previous.slice(-10),
            newTrail,
        ]);
    };

    /* =====================================================
       MAGNETIC BUTTON
    ===================================================== */

    const handleButtonMove = (event) => {
        if (!buttonRef.current) return;

        const rect =
            buttonRef.current.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        buttonRef.current.style.transform =
            `translate(${x * 0.18}px, ${y * 0.22}px)`;
    };

    const resetButton = () => {
        if (!buttonRef.current) return;

        buttonRef.current.style.transform =
            "translate(0px, 0px)";
    };

    /* =====================================================
       DR EASTER EGG
    ===================================================== */

    const handleDRClick = () => {
        setDrClicks((previous) => {
            const next = previous + 1;

            if (next >= 3) {
                setEasterEgg(true);

                setTimeout(() => {
                    setEasterEgg(false);
                    setDrClicks(0);
                }, 2200);

                return 0;
            }

            return next;
        });
    };

    /* =====================================================
       ENTER TRANSITION
    ===================================================== */

    const enterPortfolio = () => {
        if (entering) return;

        setEntering(true);

        setTimeout(() => {
            navigate("/home");
        }, 2600);
    };

    return (
        <main
            onMouseMove={handleMouseMove}
            className="
                relative
                w-screen
                h-[100dvh]
                overflow-hidden
                bg-[#040406]
                text-white
                select-none
                md:cursor-none
            "
        >
            {/* =================================================
                CUSTOM CURSOR
            ================================================= */}

            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                }}
                animate={{
                    opacity: cursorVisible ? 1 : 0,
                    scale: hoveringCTA ? 1.7 : 1,
                }}
                className="
                    hidden
                    md:flex
                    fixed
                    z-[10000]
                    pointer-events-none
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        w-7
                        h-7
                        rounded-full
                        border
                        border-cyan-300/80
                        shadow-[0_0_25px_rgba(34,211,238,.8)]
                    "
                />

                <div
                    className="
                        absolute
                        w-1
                        h-1
                        rounded-full
                        bg-white
                    "
                />
            </motion.div>

            {/* =================================================
                MOUSE ENERGY TRAIL
            ================================================= */}

            <AnimatePresence>
                {trail.map((item) => (
                    <motion.span
                        key={item.id}
                        initial={{
                            opacity: 0.9,
                            scale: 1,
                        }}
                        animate={{
                            opacity: 0,
                            scale: 0,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        style={{
                            left: item.x,
                            top: item.y,
                        }}
                        className="
                            hidden
                            md:block
                            fixed
                            z-[9998]
                            pointer-events-none
                            w-2
                            h-2
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-cyan-300
                            shadow-[0_0_18px_rgba(34,211,238,1)]
                        "
                    />
                ))}
            </AnimatePresence>

            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    overflow-hidden
                "
            >
                {/* MOUSE SPOTLIGHT */}

                <motion.div
                    style={{
                        left: smoothX,
                        top: smoothY,
                    }}
                    className="
                        hidden
                        md:block
                        absolute
                        w-[700px]
                        h-[700px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-cyan-400/[0.045]
                        blur-[140px]
                    "
                />

                {/* CENTRAL AURA */}

                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.35, 0.75, 0.35],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[800px]
                        h-[800px]
                        rounded-full
                        bg-[radial-gradient(circle,rgba(34,211,238,.08),rgba(59,130,246,.07),rgba(139,92,246,.05),transparent_65%)]
                        blur-[130px]
                    "
                />

                {/* AURORA */}

                <motion.div
                    animate={{
                        x: ["-20%", "20%", "-20%"],
                        rotate: [-8, 8, -8],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[140%]
                        h-[35%]
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-500/[0.08]
                        via-blue-500/[0.10]
                        via-violet-500/[0.09]
                        to-transparent
                        blur-[80px]
                    "
                />

                {/* GRID */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.025]
                        bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
                        bg-[size:85px_85px]
                    "
                />

                {/* PARTICLES */}

                {particles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -45, 0],
                            x: [0, 12, 0],
                            opacity: [0.15, 0.9, 0.15],
                            scale: [0.6, 1.3, 0.6],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            absolute
                            rounded-full
                            bg-cyan-200
                            shadow-[0_0_15px_rgba(34,211,238,.9)]
                        "
                    />
                ))}

                {/* VIGNETTE */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,transparent_20%,rgba(4,4,6,.4)_68%,#040406_100%)]
                    "
                />
            </div>

            {/* =================================================
                CINEMATIC LETTERBOX
            ================================================= */}

            <AnimatePresence>
                {scene === "letterbox" && (
                    <>
                        <motion.div
                            initial={{ height: "50%" }}
                            animate={{ height: "0%" }}
                            transition={{
                                duration: 1.2,
                                delay: 0.15,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="
                                fixed
                                top-0
                                left-0
                                right-0
                                z-[100]
                                bg-black
                            "
                        />

                        <motion.div
                            initial={{ height: "50%" }}
                            animate={{ height: "0%" }}
                            transition={{
                                duration: 1.2,
                                delay: 0.15,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="
                                fixed
                                bottom-0
                                left-0
                                right-0
                                z-[100]
                                bg-black
                            "
                        />
                    </>
                )}
            </AnimatePresence>

            {/* =================================================
                TERMINAL
            ================================================= */}

            <AnimatePresence>
                {scene === "terminal" && (
                    <motion.div
                        exit={{
                            opacity: 0,
                            scale: 1.05,
                            filter: "blur(15px)",
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            absolute
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            px-6
                        "
                    >
                        <div className="w-full max-w-lg font-mono">
                            <p
                                className="
                                    mb-8
                                    text-[9px]
                                    tracking-[0.45em]
                                    text-cyan-300/60
                                "
                            >
                                PORTFOLIO_BOOT_SEQUENCE
                            </p>

                            {terminalLines.map((line, index) => (
                                <motion.p
                                    key={line}
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.38,
                                    }}
                                    className="
                                        mb-4
                                        text-[10px]
                                        md:text-xs
                                        tracking-[0.13em]
                                        text-cyan-200/70
                                    "
                                >
                                    &gt; {line}
                                </motion.p>
                            ))}

                            {/* LOADING BAR */}

                            <div className="mt-9">
                                <div
                                    className="
                                        flex
                                        justify-between
                                        mb-3
                                        text-[9px]
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    <span>LOADING</span>

                                    <span>
                                        {loading}%
                                    </span>
                                </div>

                                <div
                                    className="
                                        w-full
                                        h-[2px]
                                        bg-white/10
                                        overflow-hidden
                                    "
                                >
                                    <motion.div
                                        animate={{
                                            width: `${loading}%`,
                                        }}
                                        className="
                                            h-full
                                            bg-gradient-to-r
                                            from-cyan-400
                                            via-blue-500
                                            to-violet-500
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =================================================
                HEADER
            ================================================= */}

            <AnimatePresence>
                {scene === "hero" && !entering && (
                    <motion.header
                        initial={{
                            opacity: 0,
                            y: -25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
                            absolute
                            top-0
                            left-0
                            right-0
                            z-30
                            px-6
                            md:px-10
                            pt-7
                            flex
                            justify-between
                        "
                    >
                        <div>
                            <p
                                className="
                                    text-xs
                                    md:text-sm
                                    font-semibold
                                    tracking-[0.3em]
                                "
                            >
                                DIVYESH

                                <span
                                    className="
                                        ml-1
                                        text-transparent
                                        bg-clip-text
                                        bg-gradient-to-r
                                        from-cyan-300
                                        via-blue-400
                                        to-violet-400
                                    "
                                >
                                    RAM
                                </span>
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-[8px]
                                    tracking-[0.3em]
                                    text-white/25
                                "
                            >
                                DIGITAL PORTFOLIO
                            </p>
                        </div>

                        <div
                            className="
                                hidden
                                md:flex
                                items-center
                                gap-3
                                text-[9px]
                                tracking-[0.22em]
                                text-white/25
                            "
                        >
                            <span
                                className="
                                    w-1.5
                                    h-1.5
                                    rounded-full
                                    bg-emerald-400
                                    shadow-[0_0_12px_rgba(52,211,153,.9)]
                                "
                            />

                            INDIA — {time} IST
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* =================================================
                AI SYSTEM STATUS
            ================================================= */}

            <AnimatePresence>
                {scene === "hero" && !entering && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 1.2,
                        }}
                        className="
                            hidden
                            lg:block
                            absolute
                            left-10
                            top-1/2
                            -translate-y-1/2
                            z-30
                            border-l
                            border-cyan-400/20
                            pl-4
                        "
                    >
                        <p
                            className="
                                text-[8px]
                                tracking-[0.3em]
                                text-white/25
                            "
                        >
                            SYSTEM STATUS
                        </p>

                        <div className="mt-4 space-y-3">
                            <p
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[9px]
                                    tracking-[0.2em]
                                    text-cyan-200/60
                                "
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                AI SYSTEMS
                            </p>

                            <p
                                className="
                                    text-[8px]
                                    tracking-[0.2em]
                                    text-white/25
                                "
                            >
                                STATUS: READY
                            </p>

                            <p
                                className="
                                    text-[8px]
                                    tracking-[0.2em]
                                    text-white/25
                                "
                            >
                                CORE: ACTIVE
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =================================================
                MAIN
            ================================================= */}

            <section
                className="
                    relative
                    z-10
                    h-full
                    flex
                    items-center
                    justify-center
                    px-5
                    perspective-[1500px]
                "
            >
                {/* ENERGY DOT */}

                <AnimatePresence>
                    {scene === "energy" && (
                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                scale: [0, 1, 1.5],
                                opacity: [0, 1, 1],
                            }}
                            exit={{
                                scale: 25,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="
                                absolute
                                w-3
                                h-3
                                rounded-full
                                bg-white
                                shadow-[0_0_100px_35px_rgba(34,211,238,.9)]
                            "
                        />
                    )}
                </AnimatePresence>

                {/* DR BACKGROUND */}

                {(scene === "identity" ||
                    scene === "hero") && (
                    <motion.button
                        onClick={handleDRClick}
                        initial={{
                            opacity: 0,
                            scale: 0.75,
                            filter: "blur(25px)",
                        }}
                        animate={{
                            opacity: 0.1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            absolute
                            cursor-pointer
                            text-[50vw]
                            md:text-[31rem]
                            font-black
                            tracking-[-0.15em]
                            leading-none
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-br
                            from-cyan-300
                            via-blue-500
                            to-violet-600
                        "
                    >
                        DR
                    </motion.button>
                )}

                {/* HERO */}

                <AnimatePresence>
                    {scene === "hero" && (
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="
                                relative
                                z-20
                                text-center
                                transform-gpu
                            "
                        >
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
                                    duration: 0.7,
                                }}
                                className="
                                    mb-8
                                    text-[9px]
                                    md:text-[10px]
                                    tracking-[0.5em]
                                    text-cyan-300/55
                                "
                            >
                                ENGINEERING THE FUTURE
                            </motion.p>

                            {/* TITLE */}

                            <h1
                                className="
                                    text-[13vw]
                                    sm:text-[10vw]
                                    md:text-[6.8rem]
                                    lg:text-[8.5rem]
                                    font-bold
                                    tracking-[-0.08em]
                                    leading-[0.82]
                                    text-white/90
                                "
                            >
                                <ScrambleText
                                    text="I DON'T JUST"
                                    start={scene === "hero"}
                                />
                            </h1>

                            {/* BUILD */}

                            <motion.h1
                                animate={{
                                    backgroundPosition: [
                                        "0% 50%",
                                        "100% 50%",
                                        "0% 50%",
                                    ],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    relative
                                    mt-4
                                    text-[15vw]
                                    sm:text-[12vw]
                                    md:text-[8rem]
                                    lg:text-[10rem]
                                    font-bold
                                    tracking-[-0.1em]
                                    leading-[0.8]
                                    text-transparent
                                    bg-clip-text
                                    bg-[length:250%_250%]
                                    bg-gradient-to-r
                                    from-cyan-300
                                    via-blue-400
                                    via-violet-400
                                    to-pink-300
                                    drop-shadow-[0_0_35px_rgba(59,130,246,.25)]
                                "
                            >
                                BUILD.
                            </motion.h1>

                            {/* DIVIDER */}

                            <motion.div
                                initial={{
                                    width: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    width: 110,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.9,
                                }}
                                className="
                                    h-px
                                    mx-auto
                                    my-9
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/50
                                    to-transparent
                                "
                            />

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
                                    delay: 0.9,
                                }}
                                className="
                                    text-xs
                                    sm:text-sm
                                    md:text-xl
                                    tracking-[0.06em]
                                    text-white/40
                                "
                            >
                                INTELLIGENCE.

                                <span className="mx-2">•</span>

                                SYSTEMS.

                                <span className="mx-2">•</span>

                                <span
                                    className="
                                        text-transparent
                                        bg-clip-text
                                        bg-gradient-to-r
                                        from-blue-300
                                        via-violet-300
                                        to-pink-300
                                    "
                                >
                                    IMPACT.
                                </span>
                            </motion.p>

                            {/* CTA */}

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
                                    delay: 1.1,
                                }}
                                className="mt-10"
                            >
                                <button
                                    ref={buttonRef}
                                    onMouseMove={handleButtonMove}
                                    onMouseEnter={() =>
                                        setHoveringCTA(true)
                                    }
                                    onMouseLeave={() => {
                                        setHoveringCTA(false);
                                        resetButton();
                                    }}
                                    onClick={enterPortfolio}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        px-8
                                        py-4
                                        rounded-full
                                        border
                                        border-white/15
                                        bg-white/[0.05]
                                        backdrop-blur-xl
                                        transition
                                        duration-300
                                        hover:bg-white
                                        hover:text-black
                                        hover:scale-105
                                    "
                                >
                                    <motion.span
                                        animate={{
                                            x: [
                                                "-200%",
                                                "300%",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                        className="
                                            absolute
                                            inset-y-0
                                            w-20
                                            bg-white/20
                                            blur-xl
                                            rotate-12
                                        "
                                    />

                                    <span
                                        className="
                                            relative
                                            z-10
                                            text-[10px]
                                            md:text-xs
                                            tracking-[0.3em]
                                        "
                                    >
                                        ENTER MY WORLD →
                                    </span>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* =================================================
                EASTER EGG
            ================================================= */}

            <AnimatePresence>
                {easterEgg && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.2,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[500]
                            flex
                            flex-col
                            items-center
                            justify-center
                            bg-black/80
                            backdrop-blur-xl
                        "
                    >
                        <p
                            className="
                                text-[10px]
                                tracking-[0.7em]
                                text-cyan-300
                            "
                        >
                            ACCESS GRANTED
                        </p>

                        <h2
                            className="
                                mt-5
                                text-3xl
                                md:text-5xl
                                font-bold
                                tracking-tight
                            "
                        >
                            WELCOME TO THE CORE.
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =================================================
                FOOTER
            ================================================= */}

            {scene === "hero" && !entering && (
                <motion.footer
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1.3,
                    }}
                    className="
                        absolute
                        bottom-7
                        left-0
                        right-0
                        z-30
                        px-6
                        md:px-10
                        flex
                        justify-between
                        text-[8px]
                        md:text-[9px]
                        tracking-[0.25em]
                        text-white/20
                    "
                >
                    <span>DIVYESH RAM © 2026</span>

                    <span className="hidden md:block">
                        AI × SOFTWARE × INNOVATION
                    </span>

                    <span>INDIA</span>
                </motion.footer>
            )}

            {/* =================================================
                NEW CINEMATIC TRANSITION
            ================================================= */}

            <AnimatePresence>
                {entering && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            overflow-hidden
                            bg-[#040406]
                        "
                    >
                        {/* BUILD ZOOM */}

                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 1,
                            }}
                            animate={{
                                scale: [1, 1.3, 12],
                                opacity: [1, 1, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [
                                    0.76,
                                    0,
                                    0.24,
                                    1,
                                ],
                            }}
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                text-[22vw]
                                font-black
                                tracking-[-0.12em]
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-r
                                from-cyan-300
                                via-blue-400
                                to-violet-500
                            "
                        >
                            BUILD.
                        </motion.div>

                        {/* LIGHT TUNNEL */}

                        <motion.div
                            initial={{
                                scale: 0,
                                rotate: 0,
                            }}
                            animate={{
                                scale: [0, 1, 20],
                                rotate: [0, 360, 1080],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2.3,
                                ease: [
                                    0.76,
                                    0,
                                    0.24,
                                    1,
                                ],
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                                w-48
                                h-48
                                rounded-full
                                border-[3px]
                                border-cyan-300
                                shadow-[0_0_100px_rgba(34,211,238,.9)]
                            "
                        />

                        {/* ENERGY CORE */}

                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                scale: [0, 1, 45],
                                opacity: [0, 1, 1],
                            }}
                            transition={{
                                duration: 2.5,
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                                w-16
                                h-16
                                rounded-full
                                bg-[radial-gradient(circle,white_0%,#67e8f9_18%,#3b82f6_35%,#8b5cf6_55%,transparent_75%)]
                            "
                        />

                        {/* TRANSITION TEXT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                y: [25, 0, 0, -20],
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 0.25,
                            }}
                            className="
                                absolute
                                left-1/2
                                top-[72%]
                                -translate-x-1/2
                                whitespace-nowrap
                                text-[9px]
                                tracking-[0.5em]
                                text-white/70
                            "
                        >
                            ENTERING THE EXPERIENCE
                        </motion.div>

                        {/* FINAL FLASH */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [
                                    0,
                                    0,
                                    0.15,
                                    1,
                                ],
                            }}
                            transition={{
                                duration: 2.55,
                                times: [
                                    0,
                                    0.6,
                                    0.82,
                                    1,
                                ],
                            }}
                            className="
                                absolute
                                inset-0
                                bg-white
                            "
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Landing;