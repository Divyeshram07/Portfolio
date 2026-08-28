import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import projects from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find(
        (item) => item.id === id
    );

    /* ----------------------------- */
    /* Project Not Found */
    /* ----------------------------- */

    if (!project) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#09090b] px-6">

                <div className="text-center">

                    <p className="text-blue-600 font-medium">
                        404
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold text-gray-950 dark:text-white">
                        Project not found
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        The project you're looking for doesn't exist.
                    </p>

                    <Link
                        to="/"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            mt-8
                            px-6
                            py-3
                            rounded-full
                            bg-black
                            text-white
                            dark:bg-white
                            dark:text-black
                        "
                    >
                        <ArrowLeft size={17} />

                        Back Home
                    </Link>

                </div>

            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-[#09090b] text-gray-900 dark:text-white">

            {/* ================================= */}
            {/* Navigation */}
            {/* ================================= */}

            <header className="fixed top-0 left-0 w-full z-50">

                <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">

                    <Link
                        to="/"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-white/80
                            dark:bg-black/80
                            backdrop-blur-xl
                            border
                            border-gray-200
                            dark:border-white/10
                            text-sm
                        "
                    >
                        <ArrowLeft size={16} />

                        Back to portfolio
                    </Link>

                </div>

            </header>


            {/* ================================= */}
            {/* Hero */}
            {/* ================================= */}

            <section className="pt-36 pb-20 md:pt-44 md:pb-28">

                <div className="max-w-5xl mx-auto px-6 md:px-8">

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
                            duration: 0.6,
                        }}
                    >

                        {/* Category */}
                        <div className="flex items-center gap-4 text-sm">

                            <span className="text-blue-600 font-medium">
                                {project.category}
                            </span>

                            <span className="text-gray-400">
                                {project.year}
                            </span>

                        </div>

                        {/* Title */}
                        <h1
                            className="
                                mt-6
                                text-5xl
                                md:text-7xl
                                font-semibold
                                tracking-tight
                            "
                        >
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p
                            className="
                                mt-8
                                max-w-3xl
                                text-xl
                                leading-9
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            {project.description}
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap gap-3">

                            {project.demo !== "#" && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-6
                                        py-3.5
                                        rounded-full
                                        bg-black
                                        text-white
                                        dark:bg-white
                                        dark:text-black
                                        hover:scale-[1.03]
                                        transition
                                    "
                                >
                                    Live Demo

                                    <ArrowUpRight size={17} />
                                </a>
                            )}

                            {project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-6
                                        py-3.5
                                        rounded-full
                                        border
                                        border-gray-300
                                        dark:border-white/15
                                        hover:bg-gray-50
                                        dark:hover:bg-white/5
                                        transition
                                    "
                                >
                                    <SiGithub size={17} />

                                    GitHub
                                </a>
                            )}

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* ================================= */}
            {/* Project Preview */}
            {/* ================================= */}

            <section className="pb-24">

                <div className="max-w-6xl mx-auto px-6 md:px-8">

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            rounded-[2rem]
                            border
                            border-gray-200
                            dark:border-white/10
                            overflow-hidden
                            bg-gray-50
                            dark:bg-white/[0.02]
                        "
                    >

                        {/* Browser Header */}
                        <div
                            className="
                                h-12
                                flex
                                items-center
                                gap-2
                                px-5
                                border-b
                                border-gray-200
                                dark:border-white/10
                            "
                        >

                            <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />

                            <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />

                            <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />

                        </div>

                        {/* Preview */}
                        <div
                            className="
                                min-h-[420px]
                                md:min-h-[560px]
                                flex
                                items-center
                                justify-center
                                p-8
                            "
                        >

                            <div className="w-full max-w-3xl">

                                <div className="text-center">

                                    <span className="text-sm text-blue-600 font-medium">
                                        {project.category}
                                    </span>

                                    <h2
                                        className="
                                            mt-4
                                            text-3xl
                                            md:text-5xl
                                            font-semibold
                                        "
                                    >
                                        {project.title}
                                    </h2>

                                </div>

                                <div className="mt-12 grid grid-cols-3 gap-4">

                                    <div className="h-28 rounded-2xl bg-gray-200 dark:bg-white/5" />

                                    <div className="h-28 rounded-2xl bg-gray-200 dark:bg-white/5" />

                                    <div className="h-28 rounded-2xl bg-gray-200 dark:bg-white/5" />

                                </div>

                                <div
                                    className="
                                        mt-5
                                        h-32
                                        rounded-2xl
                                        bg-blue-500/10
                                        border
                                        border-blue-500/10
                                    "
                                />

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* ================================= */}
            {/* Overview */}
            {/* ================================= */}

            <section
                className="
                    py-24
                    border-t
                    border-gray-200
                    dark:border-white/10
                "
            >

                <div className="max-w-5xl mx-auto px-6 md:px-8">

                    <div className="grid md:grid-cols-[220px_1fr] gap-10">

                        <div>

                            <p className="text-sm font-medium text-blue-600">
                                Overview
                            </p>

                        </div>

                        <div>

                            <p
                                className="
                                    text-xl
                                    md:text-2xl
                                    leading-9
                                    text-gray-600
                                    dark:text-gray-300
                                "
                            >
                                {project.longDescription ||
                                    project.description}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================================= */}
            {/* Features */}
            {/* ================================= */}

            <section
                className="
                    py-24
                    bg-gray-50/70
                    dark:bg-white/[0.02]
                "
            >

                <div className="max-w-5xl mx-auto px-6 md:px-8">

                    <p className="text-sm font-medium text-blue-600">
                        Key Features
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-5xl
                            font-semibold
                            tracking-tight
                        "
                    >
                        What it can do.
                    </h2>

                    <div className="mt-12 grid md:grid-cols-2">

                        {project.features?.map(
                            (feature) => (
                                <div
                                    key={feature}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        py-5
                                        border-b
                                        border-gray-200
                                        dark:border-white/10
                                    "
                                >

                                    <span
                                        className="
                                            w-8
                                            h-8
                                            flex
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-600/10
                                            text-blue-600
                                        "
                                    >
                                        <Check size={16} />
                                    </span>

                                    <span className="text-gray-700 dark:text-gray-300">
                                        {feature}
                                    </span>

                                </div>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ================================= */}
            {/* Technology */}
            {/* ================================= */}

            <section className="py-24">

                <div className="max-w-5xl mx-auto px-6 md:px-8">

                    <p className="text-sm font-medium text-blue-600">
                        Technology
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-5xl
                            font-semibold
                        "
                    >
                        Built with modern tools.
                    </h2>

                    <div className="mt-10 flex flex-wrap gap-3">

                        {project.technologies.map(
                            (technology) => (
                                <span
                                    key={technology}
                                    className="
                                        px-5
                                        py-3
                                        rounded-full
                                        border
                                        border-gray-200
                                        dark:border-white/10
                                        bg-gray-50
                                        dark:bg-white/[0.03]
                                        text-gray-700
                                        dark:text-gray-300
                                    "
                                >
                                    {technology}
                                </span>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ================================= */}
            {/* Bottom CTA */}
            {/* ================================= */}

            <section
                className="
                    py-28
                    border-t
                    border-gray-200
                    dark:border-white/10
                "
            >

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <p className="text-sm text-blue-600 font-medium">
                        Explore the project
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-semibold
                            tracking-tight
                        "
                    >
                        Want to see it in action?
                    </h2>

                    <div className="mt-10 flex justify-center flex-wrap gap-3">

                        {project.demo !== "#" && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3.5
                                    rounded-full
                                    bg-black
                                    text-white
                                    dark:bg-white
                                    dark:text-black
                                "
                            >
                                Try Live Demo

                                <ArrowUpRight size={17} />
                            </a>
                        )}

                        {project.github !== "#" && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3.5
                                    rounded-full
                                    border
                                    border-gray-300
                                    dark:border-white/15
                                "
                            >
                                <SiGithub size={17} />

                                View Source
                            </a>
                        )}

                    </div>

                </div>

            </section>


            {/* ================================= */}
            {/* Footer */}
            {/* ================================= */}

            <footer
                className="
                    py-10
                    border-t
                    border-gray-200
                    dark:border-white/10
                "
            >

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-8
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        gap-4
                        text-sm
                        text-gray-500
                    "
                >

                    <span>
                        © 2026 Divyesh Ram
                    </span>

                    <Link
                        to="/"
                        className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                        Back to portfolio
                    </Link>

                </div>

            </footer>

        </main>
    );
}

export default ProjectDetails;