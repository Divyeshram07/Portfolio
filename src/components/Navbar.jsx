import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ArrowUpRight,
} from "lucide-react";

const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Developer", href: "#developer" },
    { name: "Research", href: "#research" },
];

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                px-4
                md:px-6
                pt-4
            "
        >

            <nav
                className="
                    max-w-6xl
                    mx-auto
                    h-16
                    px-5
                    md:px-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#08080b]/75
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-between
                "
            >

                {/* Logo */}

                <a
                    href="#"
                    className="flex items-center gap-3"
                >

                    <div
                        className="
                            w-8
                            h-8
                            rounded-lg
                            bg-gradient-to-br
                            from-blue-400
                            to-violet-500
                            flex
                            items-center
                            justify-center
                            text-xs
                            font-bold
                            text-white
                        "
                    >
                        DR
                    </div>

                    <span className="hidden sm:block text-sm font-medium text-white/80">
                        Divyesh Ram
                    </span>

                </a>


                {/* Desktop Links */}

                <div className="hidden md:flex items-center gap-1">

                    {links.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            className="
                                px-4
                                py-2
                                rounded-xl
                                text-sm
                                text-white/45
                                hover:text-white
                                hover:bg-white/[0.05]
                                transition
                            "
                        >
                            {link.name}
                        </a>

                    ))}

                </div>


                {/* CTA */}

                <a
                    href="#contact"
                    className="
                        hidden
                        sm:inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2.5
                        rounded-xl
                        bg-white
                        text-black
                        text-sm
                        font-medium
                        hover:bg-white/90
                        transition
                    "
                >
                    Contact

                    <ArrowUpRight size={15} />
                </a>


                {/* Mobile */}

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="
                        md:hidden
                        w-10
                        h-10
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        text-white
                    "
                >
                    {open ? (
                        <X size={19} />
                    ) : (
                        <Menu size={19} />
                    )}
                </button>

            </nav>


            {/* Mobile Menu */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                        }}
                        className="
                            md:hidden
                            max-w-6xl
                            mx-auto
                            mt-2
                            p-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#08080b]/95
                            backdrop-blur-xl
                        "
                    >

                        {links.map((link) => (

                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="
                                    block
                                    px-4
                                    py-3
                                    rounded-xl
                                    text-sm
                                    text-white/60
                                    hover:text-white
                                    hover:bg-white/[0.05]
                                "
                            >
                                {link.name}
                            </a>

                        ))}

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="
                                mt-2
                                flex
                                items-center
                                justify-center
                                gap-2
                                px-4
                                py-3
                                rounded-xl
                                bg-white
                                text-black
                                text-sm
                                font-medium
                            "
                        >
                            Contact
                            <ArrowUpRight size={15} />
                        </a>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
}

export default Navbar;