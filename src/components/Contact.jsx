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
} from "lucide-react";

const WHATSAPP_NUMBER = "918008503893";
const EMAIL = "bdivyeshram@gmail.com";

const socials = [
    {
        name: "GitHub",
        short: "GH",
        url: "https://github.com/Divyeshram07",
    },
    {
        name: "LinkedIn",
        short: "in",
        url: "https://www.linkedin.com/in/divyeshram28/",
    },
    {
        name: "Instagram",
        short: "IG",
        url: "https://www.instagram.com/divyesh._.ram/",
    },
];

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

    // ============================================
    // HANDLE INPUT CHANGE
    // ============================================

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // ============================================
    // HANDLE FORM SUBMIT
    // ============================================

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSending(true);
        setError("");

        try {
            /*
             * Local development:
             *
             * VITE_API_URL=""
             *
             * Request becomes:
             * /api/contact
             *
             * Vite proxies it to:
             * http://localhost:5000
             *
             *
             * Production:
             *
             * VITE_API_URL=https://api.divyeshram.dev
             *
             * Request becomes:
             * https://api.divyeshram.dev/api/contact
             */

            const API_URL =
                import.meta.env.VITE_API_URL || "";

            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(form),
                }
            );

            /*
             * Read response as text first.
             *
             * This prevents:
             *
             * Unexpected end of JSON input
             *
             * when the server returns an empty response.
             */

            const responseText =
                await response.text();

            let data = {};

            if (responseText) {
                try {
                    data = JSON.parse(
                        responseText
                    );
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

            // ----------------------------------------
            // SERVER ERROR
            // ----------------------------------------

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Unable to send your message."
                );
            }

            // ----------------------------------------
            // SUCCESS
            // ----------------------------------------

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

    // ============================================
    // SEND ANOTHER MESSAGE
    // ============================================

    const handleSendAnother = () => {
        setSubmitted(false);
        setError("");
    };

    // ============================================
    // WHATSAPP MESSAGE
    // ============================================

    const whatsappMessage =
        encodeURIComponent(
            "Hi Divyesh, I found your portfolio and would like to connect."
        );

    return (
        <section
            id="contact"
            className="
                relative
                py-28
                md:py-36
                bg-[#050507]
                overflow-hidden
                border-b
                border-white/[0.07]
            "
        >
            {/* =========================================
                BACKGROUND GLOW
            ========================================= */}

            <div
                className="
                    absolute
                    left-1/2
                    top-[20%]
                    -translate-x-1/2
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-blue-600/[0.035]
                    blur-[130px]
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    right-[-150px]
                    bottom-[-150px]
                    w-[400px]
                    h-[400px]
                    rounded-full
                    bg-violet-600/[0.025]
                    blur-[120px]
                    pointer-events-none
                "
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8">

                {/* =========================================
                    HEADER
                ========================================= */}

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
                            06
                        </span>

                        <span className="text-sm text-blue-400">
                            Communication Channel
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
                        Let's start
                        <span className="text-white/25">
                            {" "}a conversation.
                        </span>
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
                        Have an internship opportunity,
                        project idea, collaboration, or
                        simply want to connect? Send me
                        a message.
                    </p>
                </motion.div>


                {/* =========================================
                    MAIN GRID
                ========================================= */}

                <div
                    className="
                        mt-16
                        grid
                        lg:grid-cols-[.75fr_1.25fr]
                        gap-5
                    "
                >

                    {/* =====================================
                        LEFT CONTACT PANEL
                    ===================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            overflow-hidden
                        "
                    >

                        {/* Terminal Header */}

                        <div
                            className="
                                h-12
                                px-5
                                flex
                                items-center
                                justify-between
                                border-b
                                border-white/[0.07]
                            "
                        >

                            <div className="flex gap-2">

                                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />

                                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />

                                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />

                            </div>

                            <span className="text-[10px] font-mono text-white/20">
                                contact.interface
                            </span>

                        </div>


                        <div className="p-7 md:p-8">

                            {/* Terminal Identity */}

                            <div className="flex items-center gap-3">

                                <Terminal
                                    size={18}
                                    className="text-blue-400"
                                />

                                <span className="text-sm text-white/50 font-mono">
                                    communication@divyesh
                                </span>

                            </div>


                            {/* Availability */}

                            <div
                                className="
                                    mt-8
                                    p-5
                                    rounded-2xl
                                    border
                                    border-emerald-400/10
                                    bg-emerald-400/[0.035]
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <span className="relative flex h-2.5 w-2.5">

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
                                                h-2.5
                                                w-2.5
                                                bg-emerald-400
                                            "
                                        />

                                    </span>

                                    <span className="text-sm text-emerald-300">
                                        Available for opportunities
                                    </span>

                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/30">
                                    Currently open to internships,
                                    collaborations and interesting
                                    engineering projects.
                                </p>

                            </div>


                            {/* Email */}

                            <a
                                href={`mailto:${EMAIL}`}
                                className="
                                    group
                                    mt-6
                                    flex
                                    items-center
                                    gap-4
                                    p-4
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    hover:bg-white/[0.04]
                                    transition
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Mail
                                        size={17}
                                        className="text-blue-400"
                                    />
                                </div>

                                <div className="min-w-0">

                                    <p className="text-xs text-white/25">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-white/60 truncate">
                                        {EMAIL}
                                    </p>

                                </div>

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        ml-auto
                                        text-white/20
                                        group-hover:text-white
                                        transition
                                    "
                                />

                            </a>


                            {/* WhatsApp */}

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-3
                                    flex
                                    items-center
                                    gap-4
                                    p-4
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    hover:bg-white/[0.04]
                                    transition
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <MessageCircle
                                        size={17}
                                        className="text-emerald-400"
                                    />
                                </div>

                                <div>

                                    <p className="text-xs text-white/25">
                                        WhatsApp
                                    </p>

                                    <p className="mt-1 text-sm text-white/60">
                                        Start a conversation
                                    </p>

                                </div>

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        ml-auto
                                        text-white/20
                                        group-hover:text-white
                                        transition
                                    "
                                />

                            </a>


                            {/* Location */}

                            <div
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-4
                                    p-4
                                    rounded-2xl
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <MapPin
                                        size={17}
                                        className="text-violet-400"
                                    />
                                </div>

                                <div>

                                    <p className="text-xs text-white/25">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm text-white/60">
                                        India
                                    </p>

                                </div>

                            </div>


                            {/* Social Links */}

                            <div className="mt-8">

                                <p className="text-xs font-mono text-white/20">
                                    ELSEWHERE
                                </p>

                                <div className="mt-3 flex gap-2">

                                    {socials.map(
                                        (social) => (
                                            <a
                                                key={
                                                    social.name
                                                }
                                                href={
                                                    social.url
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={
                                                    social.name
                                                }
                                                className="
                                                    w-10
                                                    h-10
                                                    rounded-xl
                                                    border
                                                    border-white/10
                                                    bg-white/[0.02]
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[10px]
                                                    font-bold
                                                    text-white/40
                                                    hover:text-white
                                                    hover:bg-white/[0.06]
                                                    transition
                                                "
                                            >
                                                {
                                                    social.short
                                                }
                                            </a>
                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                    </motion.div>


                    {/* =====================================
                        FORM PANEL
                    ===================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            rounded-[2rem]
                            border
                            border-white/10
                            bg-white/[0.025]
                            p-7
                            md:p-9
                        "
                    >

                        <AnimatePresence mode="wait">

                            {/* =================================
                                SUCCESS STATE
                            ================================= */}

                            {submitted ? (

                                <motion.div
                                    key="success"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    className="
                                        min-h-[600px]
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        text-center
                                    "
                                >

                                    <div
                                        className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            border
                                            border-emerald-400/20
                                            bg-emerald-400/10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <CheckCircle2
                                            size={30}
                                            className="text-emerald-400"
                                        />

                                    </div>

                                    <p className="mt-7 text-xs font-mono text-emerald-400">
                                        MESSAGE_SENT
                                    </p>

                                    <h3
                                        className="
                                            mt-3
                                            text-3xl
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        Thanks for reaching out.
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
                                        Your message has been
                                        successfully delivered.
                                        I'll get back to you as
                                        soon as possible.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={
                                            handleSendAnother
                                        }
                                        className="
                                            mt-8
                                            px-5
                                            py-3
                                            rounded-full
                                            border
                                            border-white/10
                                            text-sm
                                            text-white/60
                                            hover:text-white
                                            hover:bg-white/[0.04]
                                            transition
                                        "
                                    >
                                        Send another message
                                    </button>

                                </motion.div>

                            ) : (

                                /* =================================
                                    CONTACT FORM
                                ================================= */

                                <motion.form
                                    key="form"
                                    onSubmit={
                                        handleSubmit
                                    }
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    className="space-y-5"
                                >

                                    {/* Form Header */}

                                    <div className="mb-8">

                                        <p className="text-xs font-mono text-white/20">
                                            NEW_MESSAGE
                                        </p>

                                        <h3
                                            className="
                                                mt-3
                                                text-2xl
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Tell me what you're building.
                                        </h3>

                                        <p className="mt-2 text-sm text-white/30">
                                            I'll receive your message
                                            directly in my inbox.
                                        </p>

                                    </div>


                                    {/* Name + Email */}

                                    <div className="grid md:grid-cols-2 gap-4">

                                        <div>

                                            <label
                                                htmlFor="name"
                                                className="
                                                    block
                                                    text-xs
                                                    text-white/35
                                                    mb-2
                                                "
                                            >
                                                Name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                autoComplete="name"
                                                value={
                                                    form.name
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="Your name"
                                                className="
                                                    w-full
                                                    px-4
                                                    py-3.5
                                                    rounded-2xl
                                                    border
                                                    border-white/10
                                                    bg-black/20
                                                    text-white
                                                    placeholder:text-white/15
                                                    outline-none
                                                    focus:border-blue-400/40
                                                    focus:ring-1
                                                    focus:ring-blue-400/10
                                                    transition
                                                "
                                            />

                                        </div>


                                        <div>

                                            <label
                                                htmlFor="email"
                                                className="
                                                    block
                                                    text-xs
                                                    text-white/35
                                                    mb-2
                                                "
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={
                                                    form.email
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                placeholder="you@example.com"
                                                className="
                                                    w-full
                                                    px-4
                                                    py-3.5
                                                    rounded-2xl
                                                    border
                                                    border-white/10
                                                    bg-black/20
                                                    text-white
                                                    placeholder:text-white/15
                                                    outline-none
                                                    focus:border-blue-400/40
                                                    focus:ring-1
                                                    focus:ring-blue-400/10
                                                    transition
                                                "
                                            />

                                        </div>

                                    </div>


                                    {/* Company */}

                                    <div>

                                        <label
                                            htmlFor="company"
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                                mb-2
                                            "
                                        >
                                            Company

                                            <span className="ml-1 text-white/15">
                                                optional
                                            </span>
                                        </label>

                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            autoComplete="organization"
                                            value={
                                                form.company
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Company / organization"
                                            className="
                                                w-full
                                                px-4
                                                py-3.5
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/20
                                                text-white
                                                placeholder:text-white/15
                                                outline-none
                                                focus:border-blue-400/40
                                                focus:ring-1
                                                focus:ring-blue-400/10
                                                transition
                                            "
                                        />

                                    </div>


                                    {/* Subject */}

                                    <div>

                                        <label
                                            htmlFor="subject"
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                                mb-2
                                            "
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={
                                                form.subject
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Internship, collaboration, project..."
                                            className="
                                                w-full
                                                px-4
                                                py-3.5
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/20
                                                text-white
                                                placeholder:text-white/15
                                                outline-none
                                                focus:border-blue-400/40
                                                focus:ring-1
                                                focus:ring-blue-400/10
                                                transition
                                            "
                                        />

                                    </div>


                                    {/* Message */}

                                    <div>

                                        <label
                                            htmlFor="message"
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                                mb-2
                                            "
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={
                                                form.message
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Write your message..."
                                            className="
                                                w-full
                                                px-4
                                                py-3.5
                                                rounded-2xl
                                                border
                                                border-white/10
                                                bg-black/20
                                                text-white
                                                placeholder:text-white/15
                                                outline-none
                                                focus:border-blue-400/40
                                                focus:ring-1
                                                focus:ring-blue-400/10
                                                transition
                                                resize-none
                                            "
                                        />

                                    </div>


                                    {/* Error */}

                                    <AnimatePresence>

                                        {error && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: -5,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -5,
                                                }}
                                                className="
                                                    px-4
                                                    py-3
                                                    rounded-xl
                                                    border
                                                    border-red-400/10
                                                    bg-red-400/[0.04]
                                                    text-sm
                                                    text-red-400
                                                "
                                            >
                                                {error}
                                            </motion.div>
                                        )}

                                    </AnimatePresence>


                                    {/* =================================
                                        SUBMIT BUTTON
                                    ================================= */}

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="
                                            group
                                            w-full
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            px-6
                                            py-4
                                            rounded-2xl
                                            bg-white
                                            text-black
                                            font-medium
                                            hover:bg-white/90
                                            disabled:opacity-50
                                            disabled:cursor-not-allowed
                                            transition
                                        "
                                    >

                                        {sending ? (
                                            <>
                                                <span
                                                    className="
                                                        w-4
                                                        h-4
                                                        border-2
                                                        border-black/20
                                                        border-t-black
                                                        rounded-full
                                                        animate-spin
                                                    "
                                                />

                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message

                                                <Send
                                                    size={16}
                                                    className="
                                                        group-hover:translate-x-1
                                                        transition
                                                    "
                                                />
                                            </>
                                        )}

                                    </button>


                                    <p className="text-center text-[11px] text-white/15">
                                        Your information is only
                                        used to respond to your
                                        message.
                                    </p>

                                </motion.form>

                            )}

                        </AnimatePresence>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Contact;