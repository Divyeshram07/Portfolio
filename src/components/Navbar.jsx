import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Menu,
    X,
    ArrowUpRight,
    Download,
    Sparkles,
} from "lucide-react";


/* ======================================================
   NAVIGATION ITEMS

   IMPORTANT:
   These IDs should match your section IDs.
====================================================== */

const navItems = [
    {
        label: "Home",
        id: "home",
    },
    {
        label: "About",
        id: "about",
    },
    {
        label: "Skills",
        id: "skills",
    },
    {
        label: "Projects",
        id: "projects",
    },
    {
        label: "Credentials",
        id: "credentials",
    },
    {
        label: "Contact",
        id: "contact",
    },
];


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");


    /* ==================================================
       SCROLL DETECTION
    ================================================== */

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);


    /* ==================================================
       ACTIVE SECTION DETECTION
    ================================================== */

    useEffect(() => {
        const sectionIds = [
            "home",
            "about",
            "skills",
            "projects",
            "credentials",
            "certifications",
            "resume",
            "developer-presence",
            "contact",
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries =
                    entries
                        .filter(
                            (entry) =>
                                entry.isIntersecting
                        )
                        .sort(
                            (a, b) =>
                                b.intersectionRatio -
                                a.intersectionRatio
                        );

                if (visibleEntries.length > 0) {
                    setActiveSection(
                        visibleEntries[0].target.id
                    );
                }
            },
            {
                root: null,
                rootMargin:
                    "-25% 0px -60% 0px",
                threshold: [
                    0.05,
                    0.15,
                    0.3,
                    0.5,
                ],
            }
        );


        sectionIds.forEach((id) => {
            const element =
                document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });


        return () => {
            observer.disconnect();
        };
    }, []);


    /* ==================================================
       LOCK BODY SCROLL ON MOBILE MENU
    ================================================== */

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow =
                "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);


    /* ==================================================
       SMOOTH SCROLL
    ================================================== */

    const scrollToSection = (id) => {
        setIsOpen(false);

        const section =
            document.getElementById(id);

        if (!section) return;

        const navbarOffset = 105;

        const sectionPosition =
            section.getBoundingClientRect()
                .top +
            window.scrollY;

        const targetPosition =
            sectionPosition -
            navbarOffset;

        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: "smooth",
        });
    };


    /* ==================================================
       LOGO CLICK
    ================================================== */

    const handleLogoClick = () => {
        scrollToSection("home");
    };


    return (
        <>
            {/* =========================================
                NAVBAR WRAPPER
            ========================================= */}

            <motion.header
                initial={{
                    opacity: 0,
                    y: -30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    fixed
                    left-0
                    right-0
                    top-0
                    z-[100]
                    px-4
                    pt-4
                    md:px-6
                    lg:px-8
                "
            >

                <motion.nav
                    animate={{
                        maxWidth:
                            isScrolled
                                ? "1100px"
                                : "1280px",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                    className={`
                        relative
                        mx-auto
                        flex
                        h-[68px]
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        px-3
                        transition-all
                        duration-500
                        md:px-4

                        ${
                            isScrolled
                                ? `
                                    border-white/[0.10]
                                    bg-[#08090d]/75
                                    shadow-[0_18px_55px_rgba(0,0,0,0.38)]
                                    backdrop-blur-2xl
                                `
                                : `
                                    border-white/[0.06]
                                    bg-[#0a0a0e]/45
                                    backdrop-blur-xl
                                `
                        }
                    `}
                >


                    {/* =====================================
                        LEFT: LOGO
                    ====================================== */}

                    <motion.button
                        type="button"
                        onClick={handleLogoClick}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="
                            group
                            relative
                            z-10
                            flex
                            items-center
                            gap-3
                        "
                    >

                        {/* LOGO */}

                        <div
                            className="
                                relative
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-xl
                                border
                                border-cyan-300/[0.18]
                                bg-gradient-to-br
                                from-cyan-400
                                via-blue-500
                                to-violet-600
                                shadow-[0_0_30px_rgba(59,130,246,0.18)]
                            "
                        >

                            {/* Shine */}

                            <motion.div
                                animate={{
                                    x: [
                                        "-120%",
                                        "180%",
                                    ],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    inset-y-0
                                    w-1/2
                                    rotate-12
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/35
                                    to-transparent
                                "
                            />


                            <span
                                className="
                                    relative
                                    z-10
                                    text-sm
                                    font-bold
                                    tracking-tight
                                    text-white
                                "
                            >
                                DR
                            </span>

                        </div>


                        {/* NAME */}

                        <div
                            className="
                                hidden
                                text-left
                                sm:block
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    tracking-tight
                                    text-white/90
                                    transition
                                    group-hover:text-white
                                "
                            >
                                Divyesh Ram
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[8px]
                                    font-medium
                                    tracking-[0.18em]
                                    text-cyan-300/45
                                "
                            >
                                DEVELOPER PORTFOLIO
                            </p>

                        </div>

                    </motion.button>


                    {/* =====================================
                        DESKTOP NAVIGATION
                    ====================================== */}

                    <div
                        className="
                            absolute
                            left-1/2
                            hidden
                            -translate-x-1/2
                            items-center
                            gap-1
                            rounded-xl
                            border
                            border-white/[0.05]
                            bg-black/[0.16]
                            p-1
                            backdrop-blur-xl
                            lg:flex
                        "
                    >

                        {navItems.map((item) => {
                            const isActive =
                                activeSection ===
                                item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        scrollToSection(
                                            item.id
                                        )
                                    }
                                    className="
                                        relative
                                        rounded-lg
                                        px-3.5
                                        py-2
                                        text-xs
                                        font-medium
                                        transition-colors
                                        duration-300
                                    "
                                >

                                    {/* ACTIVE BACKGROUND */}

                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className="
                                                absolute
                                                inset-0
                                                rounded-lg
                                                border
                                                border-cyan-400/[0.10]
                                                bg-cyan-400/[0.07]
                                            "
                                        />
                                    )}


                                    <span
                                        className={`
                                            relative
                                            z-10
                                            transition-colors
                                            duration-300

                                            ${
                                                isActive
                                                    ? `
                                                        text-cyan-200
                                                    `
                                                    : `
                                                        text-white/40
                                                        hover:text-white/80
                                                    `
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </span>

                                </button>
                            );
                        })}

                    </div>


                    {/* =====================================
                        RIGHT SIDE
                    ====================================== */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        {/* AVAILABILITY */}

                        <div
                            className="
                                hidden
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-emerald-400/[0.10]
                                bg-emerald-400/[0.035]
                                px-3
                                py-2
                                xl:flex
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

                            <span
                                className="
                                    text-[9px]
                                    font-medium
                                    tracking-[0.13em]
                                    text-emerald-300/65
                                "
                            >
                                AVAILABLE
                            </span>

                        </div>


                        {/* RESUME BUTTON */}

                        <motion.a
                            href="/Divyesh_Ram_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                group
                                hidden
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-white/[0.10]
                                bg-white/[0.045]
                                px-3.5
                                py-2.5
                                text-xs
                                font-medium
                                text-white/70
                                transition-all
                                duration-300
                                hover:border-cyan-400/[0.22]
                                hover:bg-cyan-400/[0.06]
                                hover:text-white
                                md:flex
                            "
                        >

                            <Download
                                size={14}
                                className="
                                    text-cyan-300/70
                                    transition-transform
                                    duration-300
                                    group-hover:translate-y-0.5
                                "
                            />

                            Resume

                        </motion.a>


                        {/* MOBILE MENU */}

                        <motion.button
                            type="button"
                            onClick={() =>
                                setIsOpen(!isOpen)
                            }
                            whileTap={{
                                scale: 0.92,
                            }}
                            className="
                                relative
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                text-white/65
                                transition
                                duration-300
                                hover:border-cyan-400/25
                                hover:bg-cyan-400/[0.05]
                                hover:text-cyan-200
                                lg:hidden
                            "
                            aria-label="Toggle navigation menu"
                        >

                            <AnimatePresence
                                mode="wait"
                            >

                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.7,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.7,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <X size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.7,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.7,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <Menu size={18} />
                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </motion.button>

                    </div>


                    {/* TOP GLOW */}

                    {isScrolled && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            className="
                                pointer-events-none
                                absolute
                                left-[15%]
                                right-[15%]
                                top-0
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-cyan-400/40
                                to-transparent
                            "
                        />
                    )}

                </motion.nav>

            </motion.header>


            {/* =========================================
                MOBILE MENU
            ========================================= */}

            <AnimatePresence>

                {isOpen && (
                    <>

                        {/* BACKDROP */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() =>
                                setIsOpen(false)
                            }
                            className="
                                fixed
                                inset-0
                                z-[90]
                                bg-black/55
                                backdrop-blur-md
                                lg:hidden
                            "
                        />


                        {/* MOBILE PANEL */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -25,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.97,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 28,
                            }}
                            className="
                                fixed
                                left-4
                                right-4
                                top-[92px]
                                z-[95]
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/[0.10]
                                bg-[#090a0f]/95
                                p-3
                                shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                                backdrop-blur-2xl
                                lg:hidden
                            "
                        >

                            {/* MOBILE HEADER */}

                            <div
                                className="
                                    mb-3
                                    flex
                                    items-center
                                    gap-2
                                    px-3
                                    pt-2
                                "
                            >

                                <Sparkles
                                    size={14}
                                    className="text-cyan-300"
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-medium
                                        tracking-[0.20em]
                                        text-white/35
                                    "
                                >
                                    NAVIGATION
                                </span>

                            </div>


                            {/* MOBILE LINKS */}

                            <div className="space-y-1">

                                {navItems.map(
                                    (item, index) => {

                                        const isActive =
                                            activeSection ===
                                            item.id;

                                        return (
                                            <motion.button
                                                key={item.id}
                                                type="button"
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        index *
                                                        0.05,
                                                    duration:
                                                        0.35,
                                                }}
                                                onClick={() =>
                                                    scrollToSection(
                                                        item.id
                                                    )
                                                }
                                                className={`
                                                    group
                                                    flex
                                                    w-full
                                                    items-center
                                                    justify-between
                                                    rounded-2xl
                                                    px-4
                                                    py-4
                                                    text-left
                                                    transition-all
                                                    duration-300

                                                    ${
                                                        isActive
                                                            ? `
                                                                border
                                                                border-cyan-400/[0.12]
                                                                bg-cyan-400/[0.06]
                                                                text-cyan-200
                                                            `
                                                            : `
                                                                text-white/55
                                                                hover:bg-white/[0.04]
                                                                hover:text-white
                                                            `
                                                    }
                                                `}
                                            >

                                                <span
                                                    className="
                                                        text-sm
                                                        font-medium
                                                    "
                                                >
                                                    {item.label}
                                                </span>


                                                <ArrowUpRight
                                                    size={16}
                                                    className="
                                                        opacity-0
                                                        transition-all
                                                        duration-300
                                                        group-hover:translate-x-1
                                                        group-hover:-translate-y-1
                                                        group-hover:opacity-100
                                                    "
                                                />

                                            </motion.button>
                                        );
                                    }
                                )}

                            </div>


                            {/* MOBILE RESUME */}

                            <motion.a
                                href="/Divyesh_Ram_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-cyan-400
                                    via-blue-500
                                    to-violet-500
                                    px-4
                                    py-4
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-[0_12px_35px_rgba(59,130,246,0.20)]
                                "
                            >

                                <Download size={16} />

                                View Resume

                            </motion.a>


                            {/* AVAILABILITY */}

                            <div
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    py-2
                                "
                            >

                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_12px_rgba(52,211,153,0.8)]
                                    "
                                />

                                <span
                                    className="
                                        text-[9px]
                                        tracking-[0.16em]
                                        text-emerald-300/55
                                    "
                                >
                                    OPEN TO OPPORTUNITIES
                                </span>

                            </div>

                        </motion.div>

                    </>
                )}

            </AnimatePresence>

        </>
    );
}


export default Navbar;