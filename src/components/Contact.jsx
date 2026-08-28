import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Send,
    CheckCircle2,
    Terminal,
    MapPin,
    Building2,
    User,
    FileText,
    AlertCircle,
    Loader2,
    Sparkles,
} from "lucide-react";

/* =====================================================
   CONTACT CONFIGURATION
===================================================== */

const WHATSAPP_NUMBER = "918008503893";
const EMAIL = "bdivyeshram@gmail.com";

/* =====================================================
   CUSTOM BRAND ICONS
===================================================== */

const GithubIcon = ({ size = 20, className = "" }) => (
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

const LinkedinIcon = ({ size = 20, className = "" }) => (
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

/* =====================================================
   SOCIAL LINKS
===================================================== */

const socials = [
    {
        name: "GitHub",
        short: "GH",
        url: "https://github.com/Divyeshram07",
        icon: GithubIcon,
    },
    {
        name: "LinkedIn",
        short: "in",
        url: "https://www.linkedin.com/in/divyeshram28/",
        icon: LinkedinIcon,
    },
];

/* =====================================================
   CONTACT COMPONENT
===================================================== */

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    /* =================================================
       HANDLE INPUT
    ================================================= */

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    /* =================================================
       HANDLE SUBMIT

       REAL BACKEND REQUEST RESTORED
    ================================================= */

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSending(true);
        setError("");

        try {
            /*
             LOCAL DEVELOPMENT

             VITE_API_URL=""

             Request:
             /api/contact


             PRODUCTION

             VITE_API_URL=https://your-backend-url.com

             Request:
             https://your-backend-url.com/api/contact
            */

            const API_URL = import.meta.env.VITE_API_URL || "";

            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(form),
                }
            );

            /*
             Read as text first.

             Prevents JSON parsing errors if the
             backend sends an empty response.
            */

            const responseText = await response.text();

            let data = {};

            if (responseText) {
                try {
                    data = JSON.parse(responseText);
                } catch (parseError) {
                    console.error(
                        "Invalid server response:",
                        responseText
                    );

                    throw new Error(
                        "The server returned an invalid response."
                    );
                }
            }

            /*
             BACKEND ERROR
            */

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Unable to send your message. Please try again."
                );
            }

            /*
             SUCCESS
            */

            setSubmitted(true);

            setForm({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(
                "Contact form error:",
                error
            );

            setError(
                error.message ||
                    "Something went wrong. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    const handleSendAnother = () => {
        setSubmitted(false);
        setError("");
    };

    /* =================================================
       WHATSAPP
    ================================================= */

    const whatsappMessage = encodeURIComponent(
        "Hi Divyesh, I found your portfolio and would like to connect."
    );

    return (
        <section
            id="contact"
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
                    left-[-250px]
                    top-[10%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-cyan-500/[0.045]
                    blur-[170px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    right-[-180px]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-violet-600/[0.045]
                    blur-[170px]
                "
            />

            {/* GRID */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.018]
                    bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8">

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
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-cyan-400/15
                                bg-cyan-400/[0.06]
                            "
                        >
                            <MessageCircle
                                size={18}
                                className="text-cyan-300"
                            />
                        </div>

                        <div>
                            <p
                                className="
                                    text-[10px]
                                    tracking-[0.3em]
                                    text-cyan-300/70
                                "
                            >
                                06 — CONTACT
                            </p>

                            <p className="mt-1 text-xs text-white/25">
                                Let's create something meaningful
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* =====================================
                    MAIN HEADING
                ====================================== */}

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
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="mt-10 max-w-5xl"
                >
                    <h2
                        className="
                            text-5xl
                            font-semibold
                            leading-[0.93]
                            tracking-[-0.055em]
                            text-white
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Let's start

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
                            a conversation.
                        </span>
                    </h2>

                    <p
                        className="
                            mt-8
                            max-w-2xl
                            text-base
                            leading-8
                            text-white/40
                            md:text-lg
                        "
                    >
                        Have an idea, opportunity, project or collaboration
                        in mind? Send me a message and let's explore what
                        we can build together.
                    </p>
                </motion.div>

                {/* =====================================
                    MAIN GRID
                ====================================== */}

                <div
                    className="
                        mt-16
                        grid
                        gap-6
                        lg:grid-cols-[0.75fr_1.25fr]
                    "
                >

                    {/* =================================
                        LEFT SIDE
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="space-y-5"
                    >

                        {/* STATUS */}

                        <div
                            className="
                                rounded-[1.8rem]
                                border
                                border-white/[0.09]
                                bg-white/[0.025]
                                p-7
                            "
                        >
                            <div className="flex items-center gap-3">

                                <span className="relative flex h-3 w-3">

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
                                            h-3
                                            w-3
                                            rounded-full
                                            bg-emerald-400
                                        "
                                    />

                                </span>

                                <span className="text-sm text-emerald-300">
                                    Available for opportunities
                                </span>

                            </div>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-white/30
                                "
                            >
                                Currently open to internships,
                                collaborations and interesting
                                software projects.
                            </p>

                        </div>

                        {/* EMAIL */}

                        <a
                            href={`mailto:${EMAIL}`}
                            className="
                                group
                                block
                                rounded-[1.8rem]
                                border
                                border-white/[0.09]
                                bg-white/[0.025]
                                p-7
                                transition
                                duration-500
                                hover:-translate-y-1
                                hover:border-cyan-400/25
                            "
                        >
                            <div className="flex items-start justify-between">

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-cyan-400/15
                                        bg-cyan-400/[0.06]
                                    "
                                >
                                    <Mail
                                        size={22}
                                        className="text-cyan-300"
                                    />
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="
                                        text-white/20
                                        transition
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                        group-hover:text-cyan-300
                                    "
                                />

                            </div>

                            <p
                                className="
                                    mt-7
                                    text-[10px]
                                    tracking-[0.2em]
                                    text-cyan-300/60
                                "
                            >
                                EMAIL
                            </p>

                            <p
                                className="
                                    mt-3
                                    break-all
                                    text-base
                                    text-white/75
                                    md:text-lg
                                "
                            >
                                {EMAIL}
                            </p>

                            <p className="mt-3 text-sm text-white/30">
                                Click to send me an email directly.
                            </p>

                        </a>

                        {/* LOCATION */}

                        <div
                            className="
                                rounded-[1.8rem]
                                border
                                border-white/[0.09]
                                bg-white/[0.025]
                                p-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-violet-400/15
                                    bg-violet-400/[0.06]
                                "
                            >
                                <MapPin
                                    size={22}
                                    className="text-violet-300"
                                />
                            </div>

                            <p
                                className="
                                    mt-7
                                    text-[10px]
                                    tracking-[0.2em]
                                    text-violet-300/60
                                "
                            >
                                LOCATION
                            </p>

                            <p className="mt-3 text-lg text-white/75">
                                India
                            </p>

                            <p className="mt-3 text-sm text-white/30">
                                Open to remote opportunities and
                                collaborations.
                            </p>

                        </div>

                        {/* SOCIALS */}

                        <div className="grid grid-cols-2 gap-4">

                            {socials.map((social) => {

                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -5,
                                        }}
                                        className="
                                            group
                                            rounded-[1.5rem]
                                            border
                                            border-white/[0.09]
                                            bg-white/[0.025]
                                            p-5
                                            transition
                                            hover:border-cyan-400/20
                                        "
                                    >
                                        <div className="flex items-center justify-between">

                                            <Icon
                                                size={21}
                                                className="
                                                    text-white/60
                                                    transition
                                                    group-hover:text-cyan-300
                                                "
                                            />

                                            <ArrowUpRight
                                                size={16}
                                                className="
                                                    text-white/20
                                                    transition
                                                    group-hover:-translate-y-1
                                                    group-hover:translate-x-1
                                                    group-hover:text-cyan-300
                                                "
                                            />

                                        </div>

                                        <p
                                            className="
                                                mt-5
                                                text-sm
                                                font-medium
                                                text-white/70
                                            "
                                        >
                                            {social.name}
                                        </p>

                                    </motion.a>
                                );
                            })}

                        </div>

                    </motion.div>

                    {/* =================================
                        CONTACT FORM
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
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
                            rounded-[2rem]
                            border
                            border-white/[0.09]
                            bg-white/[0.025]
                            p-7
                            md:p-10
                        "
                    >

                        {/* FORM GLOW */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                right-[-100px]
                                top-[-100px]
                                h-[300px]
                                w-[300px]
                                rounded-full
                                bg-cyan-400/[0.04]
                                blur-[100px]
                            "
                        />

                        <div className="relative">

                            <AnimatePresence mode="wait">

                                {/* =====================
                                    SUCCESS
                                ====================== */}

                                {submitted ? (

                                    <motion.div
                                        key="success"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.97,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                        }}
                                        className="
                                            flex
                                            min-h-[500px]
                                            flex-col
                                            items-center
                                            justify-center
                                            text-center
                                        "
                                    >

                                        <motion.div
                                            initial={{
                                                scale: 0,
                                            }}
                                            animate={{
                                                scale: 1,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 180,
                                            }}
                                            className="
                                                flex
                                                h-20
                                                w-20
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-emerald-400/20
                                                bg-emerald-400/[0.08]
                                            "
                                        >
                                            <CheckCircle2
                                                size={36}
                                                className="text-emerald-400"
                                            />
                                        </motion.div>

                                        <p
                                            className="
                                                mt-8
                                                text-[10px]
                                                tracking-[0.25em]
                                                text-emerald-300/70
                                            "
                                        >
                                            MESSAGE SENT
                                        </p>

                                        <h3
                                            className="
                                                mt-4
                                                text-3xl
                                                font-medium
                                                text-white
                                            "
                                        >
                                            Thank you!
                                        </h3>

                                        <p
                                            className="
                                                mt-4
                                                max-w-md
                                                text-sm
                                                leading-7
                                                text-white/35
                                            "
                                        >
                                            Your message has been sent
                                            successfully. I'll get back
                                            to you as soon as possible.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={handleSendAnother}
                                            className="
                                                mt-8
                                                rounded-xl
                                                border
                                                border-white/10
                                                px-6
                                                py-3
                                                text-sm
                                                text-white/60
                                                transition
                                                hover:bg-white/[0.04]
                                                hover:text-white
                                            "
                                        >
                                            Send another message
                                        </button>

                                    </motion.div>

                                ) : (

                                    /* =====================
                                        FORM
                                    ====================== */

                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                        }}
                                    >

                                        {/* FORM HEADER */}

                                        <div className="mb-9">

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className="
                                                        flex
                                                        h-11
                                                        w-11
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        border
                                                        border-white/[0.08]
                                                        bg-white/[0.025]
                                                    "
                                                >
                                                    <Sparkles
                                                        size={18}
                                                        className="text-cyan-300"
                                                    />
                                                </div>

                                                <div>

                                                    <p
                                                        className="
                                                            text-base
                                                            text-white/80
                                                        "
                                                    >
                                                        New message
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-white/25
                                                        "
                                                    >
                                                        Tell me about your idea.
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        {/* ERROR */}

                                        {error && (

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: -8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                className="
                                                    mb-6
                                                    flex
                                                    items-start
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    border-red-400/20
                                                    bg-red-400/[0.06]
                                                    p-4
                                                "
                                            >

                                                <AlertCircle
                                                    size={18}
                                                    className="
                                                        mt-0.5
                                                        shrink-0
                                                        text-red-300
                                                    "
                                                />

                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-red-200/80
                                                    "
                                                >
                                                    {error}
                                                </p>

                                            </motion.div>

                                        )}

                                        {/* NAME + EMAIL */}

                                        <div
                                            className="
                                                grid
                                                gap-5
                                                md:grid-cols-2
                                            "
                                        >

                                            {/* NAME */}

                                            <div>

                                                <label
                                                    className="
                                                        mb-3
                                                        flex
                                                        items-center
                                                        gap-2
                                                        text-[10px]
                                                        tracking-[0.18em]
                                                        text-white/30
                                                    "
                                                >
                                                    <User size={12} />

                                                    YOUR NAME
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    required
                                                    className="
                                                        w-full
                                                        rounded-xl
                                                        border
                                                        border-white/[0.09]
                                                        bg-black/20
                                                        px-5
                                                        py-4
                                                        text-sm
                                                        text-white
                                                        outline-none
                                                        transition
                                                        placeholder:text-white/15
                                                        focus:border-cyan-400/35
                                                        focus:bg-white/[0.025]
                                                    "
                                                />

                                            </div>

                                            {/* EMAIL */}

                                            <div>

                                                <label
                                                    className="
                                                        mb-3
                                                        flex
                                                        items-center
                                                        gap-2
                                                        text-[10px]
                                                        tracking-[0.18em]
                                                        text-white/30
                                                    "
                                                >
                                                    <Mail size={12} />

                                                    EMAIL
                                                </label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    required
                                                    className="
                                                        w-full
                                                        rounded-xl
                                                        border
                                                        border-white/[0.09]
                                                        bg-black/20
                                                        px-5
                                                        py-4
                                                        text-sm
                                                        text-white
                                                        outline-none
                                                        transition
                                                        placeholder:text-white/15
                                                        focus:border-cyan-400/35
                                                        focus:bg-white/[0.025]
                                                    "
                                                />

                                            </div>

                                        </div>

                                        {/* COMPANY */}

                                        <div className="mt-5">

                                            <label
                                                className="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-[10px]
                                                    tracking-[0.18em]
                                                    text-white/30
                                                "
                                            >
                                                <Building2 size={12} />

                                                COMPANY
                                                <span className="text-white/15">
                                                    OPTIONAL
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                name="company"
                                                value={form.company}
                                                onChange={handleChange}
                                                placeholder="Company or organization"
                                                className="
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/[0.09]
                                                    bg-black/20
                                                    px-5
                                                    py-4
                                                    text-sm
                                                    text-white
                                                    outline-none
                                                    transition
                                                    placeholder:text-white/15
                                                    focus:border-cyan-400/35
                                                    focus:bg-white/[0.025]
                                                "
                                            />

                                        </div>

                                        {/* SUBJECT */}

                                        <div className="mt-5">

                                            <label
                                                className="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-[10px]
                                                    tracking-[0.18em]
                                                    text-white/30
                                                "
                                            >
                                                <FileText size={12} />

                                                SUBJECT
                                            </label>

                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="What would you like to discuss?"
                                                required
                                                className="
                                                    w-full
                                                    rounded-xl
                                                    border
                                                    border-white/[0.09]
                                                    bg-black/20
                                                    px-5
                                                    py-4
                                                    text-sm
                                                    text-white
                                                    outline-none
                                                    transition
                                                    placeholder:text-white/15
                                                    focus:border-cyan-400/35
                                                    focus:bg-white/[0.025]
                                                "
                                            />

                                        </div>

                                        {/* MESSAGE */}

                                        <div className="mt-5">

                                            <label
                                                className="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-[10px]
                                                    tracking-[0.18em]
                                                    text-white/30
                                                "
                                            >
                                                <Terminal size={12} />

                                                MESSAGE
                                            </label>

                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell me about your idea, opportunity or project..."
                                                required
                                                rows={6}
                                                className="
                                                    w-full
                                                    resize-none
                                                    rounded-xl
                                                    border
                                                    border-white/[0.09]
                                                    bg-black/20
                                                    px-5
                                                    py-4
                                                    text-sm
                                                    leading-7
                                                    text-white
                                                    outline-none
                                                    transition
                                                    placeholder:text-white/15
                                                    focus:border-cyan-400/35
                                                    focus:bg-white/[0.025]
                                                "
                                            />

                                        </div>

                                        {/* SUBMIT */}

                                        <motion.button
                                            type="submit"
                                            disabled={sending}
                                            whileHover={
                                                !sending
                                                    ? {
                                                        scale: 1.01,
                                                    }
                                                    : {}
                                            }
                                            whileTap={
                                                !sending
                                                    ? {
                                                        scale: 0.98,
                                                    }
                                                    : {}
                                            }
                                            className="
                                                group
                                                mt-6
                                                flex
                                                w-full
                                                items-center
                                                justify-center
                                                gap-3
                                                rounded-xl
                                                bg-gradient-to-r
                                                from-cyan-300
                                                via-blue-400
                                                to-violet-400
                                                px-6
                                                py-4
                                                text-sm
                                                font-medium
                                                text-[#030305]
                                                transition
                                                disabled:cursor-not-allowed
                                                disabled:opacity-60
                                            "
                                        >

                                            {sending ? (
                                                <>
                                                    <Loader2
                                                        size={18}
                                                        className="animate-spin"
                                                    />

                                                    Sending message...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message

                                                    <Send
                                                        size={17}
                                                        className="
                                                            transition
                                                            duration-300
                                                            group-hover:translate-x-1
                                                            group-hover:-translate-y-1
                                                        "
                                                    />
                                                </>
                                            )}

                                        </motion.button>

                                        <p
                                            className="
                                                mt-4
                                                text-center
                                                text-[10px]
                                                leading-5
                                                text-white/20
                                            "
                                        >
                                            Your message will be securely sent
                                            to {EMAIL}
                                        </p>

                                    </motion.form>

                                )}

                            </AnimatePresence>

                        </div>

                    </motion.div>

                </div>

                {/* =====================================
                    WHATSAPP QUICK CONTACT
                ====================================== */}

                <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
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
                    whileHover={{
                        y: -4,
                    }}
                    className="
                        group
                        relative
                        mt-12
                        flex
                        items-center
                        justify-between
                        overflow-hidden
                        rounded-[1.7rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.018]
                        p-6
                        transition
                        hover:border-emerald-400/20
                        md:p-8
                    "
                >

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[-80px]
                            top-[-80px]
                            h-[200px]
                            w-[200px]
                            rounded-full
                            bg-emerald-400/[0.03]
                            blur-[90px]
                        "
                    />

                    <div className="relative flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-emerald-400/15
                                bg-emerald-400/[0.06]
                            "
                        >
                            <MessageCircle
                                size={22}
                                className="text-emerald-300"
                            />
                        </div>

                        <div>

                            <p className="text-white/75">
                                Prefer a quick conversation?
                            </p>

                            <p className="mt-1 text-sm text-white/30">
                                Reach out directly on WhatsApp.
                            </p>

                        </div>

                    </div>

                    <ArrowUpRight
                        size={20}
                        className="
                            relative
                            text-white/20
                            transition
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-emerald-300
                        "
                    />

                </motion.a>

            </div>
        </section>
    );
}

export default Contact;