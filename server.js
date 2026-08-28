import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// ======================================================
// MIDDLEWARE
// ======================================================

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://divyeshram.dev",
            "https://www.divyeshram.dev",
        ],
        methods: [
            "GET",
            "POST",
            "OPTIONS",
        ],
        allowedHeaders: [
            "Content-Type",
        ],
    })
);

app.use(express.json());


// ======================================================
// RESEND
// ======================================================

const resend = new Resend(
    process.env.RESEND_API_KEY
);


// ======================================================
// HEALTH CHECK
// ======================================================

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
        resendConfigured:
            !!process.env.RESEND_API_KEY,
        emailConfigured:
            !!process.env.CONTACT_EMAIL,
    });
});


// ======================================================
// LEETCODE LIVE STATISTICS
// ======================================================

app.get("/api/leetcode", async (req, res) => {

    console.log(
        "\n================================"
    );

    console.log(
        "LEETCODE STATS REQUEST"
    );

    console.log(
        "================================"
    );

    try {

        const username = "divyeshram28";


        // ==================================================
        // LEETCODE GRAPHQL QUERY
        // ==================================================

        const query = `
            query userStats($username: String!) {

                allQuestionsCount {
                    difficulty
                    count
                }

                matchedUser(username: $username) {

                    username

                    profile {
                        ranking
                        reputation
                    }

                    submitStatsGlobal {

                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }

                        totalSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `;


        // ==================================================
        // REQUEST LEETCODE
        // ==================================================

        console.log(
            `Fetching LeetCode data for: ${username}`
        );

        const response = await axios.post(
            "https://leetcode.com/graphql",
            {
                query,

                variables: {
                    username,
                },
            },
            {
                timeout: 15000,

                headers: {
                    "Content-Type":
                        "application/json",

                    Accept:
                        "application/json",

                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",

                    Referer:
                        "https://leetcode.com/",
                },
            }
        );


        const result =
            response.data;


        // ==================================================
        // GRAPHQL ERROR
        // ==================================================

        if (
            result?.errors &&
            result.errors.length > 0
        ) {

            console.error(
                "LeetCode GraphQL errors:",
                result.errors
            );

            return res.status(502).json({
                success: false,

                message:
                    "LeetCode rejected the statistics request.",
            });
        }


        // ==================================================
        // FIND USER
        // ==================================================

        const user =
            result?.data?.matchedUser;


        if (!user) {

            console.error(
                `LeetCode user "${username}" was not found.`
            );

            return res.status(404).json({

                success: false,

                message:
                    `LeetCode user "${username}" was not found.`,

            });
        }


        // ==================================================
        // QUESTION COUNTS
        // ==================================================

        const questionCounts =
            result?.data?.allQuestionsCount || [];


        const solved =
            user
                ?.submitStatsGlobal
                ?.acSubmissionNum || [];


        // ==================================================
        // HELPER FUNCTIONS
        // ==================================================

        const getSolved = (
            difficulty
        ) => {

            const item =
                solved.find(
                    (entry) =>
                        entry.difficulty ===
                        difficulty
                );

            return item
                ? Number(item.count)
                : 0;
        };


        const getTotal = (
            difficulty
        ) => {

            const item =
                questionCounts.find(
                    (entry) =>
                        entry.difficulty ===
                        difficulty
                );

            return item
                ? Number(item.count)
                : 0;
        };


        // ==================================================
        // SOLVED COUNTS
        // ==================================================

        const totalSolved =
            getSolved("All");


        const easySolved =
            getSolved("Easy");


        const mediumSolved =
            getSolved("Medium");


        const hardSolved =
            getSolved("Hard");


        // ==================================================
        // TOTAL QUESTIONS
        // ==================================================

        const totalQuestions =
            getTotal("All");


        const totalEasy =
            getTotal("Easy");


        const totalMedium =
            getTotal("Medium");


        const totalHard =
            getTotal("Hard");


        // ==================================================
        // PROFILE DATA
        // ==================================================

        const ranking =
            Number(
                user?.profile?.ranking || 0
            );


        const reputation =
            Number(
                user?.profile?.reputation || 0
            );


        // ==================================================
        // FINAL RESPONSE
        // ==================================================

        const stats = {

            success: true,

            username:
                user.username,

            totalSolved,

            totalQuestions,

            easySolved,

            totalEasy,

            mediumSolved,

            totalMedium,

            hardSolved,

            totalHard,

            ranking,

            reputation,

            fetchedAt:
                new Date().toISOString(),

        };


        // ==================================================
        // SERVER LOG
        // ==================================================

        console.log(
            "✅ LEETCODE DATA FETCHED"
        );

        console.log(
            "Username:",
            stats.username
        );

        console.log(
            "Total solved:",
            stats.totalSolved
        );

        console.log(
            "Easy:",
            stats.easySolved
        );

        console.log(
            "Medium:",
            stats.mediumSolved
        );

        console.log(
            "Hard:",
            stats.hardSolved
        );

        console.log(
            "Ranking:",
            stats.ranking
        );


        // ==================================================
        // CACHE
        // ==================================================

        res.set(
            "Cache-Control",
            "public, max-age=300"
        );


        return res
            .status(200)
            .json(stats);


    } catch (error) {

        console.error(
            "❌ LEETCODE REQUEST FAILED"
        );

        console.error(
            error?.response?.data ||
            error?.message ||
            error
        );


        return res
            .status(500)
            .json({

                success: false,

                message:
                    "Unable to fetch LeetCode statistics.",

                error:
                    error?.message ||
                    "Unknown error",

            });

    }

});


// ======================================================
// CONTACT FORM
// ======================================================

app.post(
    "/api/contact",
    async (req, res) => {

        console.log(
            "\n================================"
        );

        console.log(
            "NEW CONTACT REQUEST"
        );

        console.log(
            "================================"
        );


        try {

            console.log(
                "Request body:",
                req.body
            );


            const {
                name,
                email,
                company,
                subject,
                message,
            } = req.body || {};


            // ==================================================
            // VALIDATION
            // ==================================================

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                console.log(
                    "Validation failed"
                );


                return res
                    .status(400)
                    .json({

                        success: false,

                        message:
                            "Please fill in all required fields.",

                    });

            }


            // ==================================================
            // EMAIL VALIDATION
            // ==================================================

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailRegex.test(email)
            ) {

                return res
                    .status(400)
                    .json({

                        success: false,

                        message:
                            "Please enter a valid email address.",

                    });

            }


            // ==================================================
            // ENVIRONMENT CHECK
            // ==================================================

            if (
                !process.env.RESEND_API_KEY
            ) {

                console.error(
                    "❌ RESEND_API_KEY is missing"
                );


                return res
                    .status(500)
                    .json({

                        success: false,

                        message:
                            "Email service is not configured.",

                    });

            }


            if (
                !process.env.CONTACT_EMAIL
            ) {

                console.error(
                    "❌ CONTACT_EMAIL is missing"
                );


                return res
                    .status(500)
                    .json({

                        success: false,

                        message:
                            "Contact email is not configured.",

                    });

            }


            console.log(
                "Sending email to:",
                process.env.CONTACT_EMAIL
            );


            // ==================================================
            // SEND EMAIL
            // ==================================================

            const result =
                await resend.emails.send({

                    from:
                        "Divyesh Ram <hello@divyeshram.dev>",

                    to: [
                        process.env
                            .CONTACT_EMAIL,
                    ],

                    replyTo:
                        email,

                    subject:
                        subject ||
                        `Portfolio message from ${name}`,

                    html: `

                        <div
                            style="
                                font-family:
                                    Arial,
                                    sans-serif;

                                max-width:
                                    700px;

                                margin:
                                    0 auto;

                                color:
                                    #222;

                                line-height:
                                    1.6;
                            "
                        >

                            <h2>
                                New Portfolio Message
                            </h2>

                            <hr />

                            <p>
                                <strong>
                                    Name:
                                </strong>

                                ${escapeHtml(name)}
                            </p>


                            <p>
                                <strong>
                                    Email:
                                </strong>

                                ${escapeHtml(email)}
                            </p>


                            <p>
                                <strong>
                                    Company:
                                </strong>

                                ${escapeHtml(
                                    company ||
                                    "Not provided"
                                )}
                            </p>


                            <p>
                                <strong>
                                    Subject:
                                </strong>

                                ${escapeHtml(subject)}
                            </p>


                            <h3>
                                Message
                            </h3>


                            <p>
                                ${escapeHtml(
                                    message
                                ).replace(
                                    /\n/g,
                                    "<br />"
                                )}
                            </p>

                        </div>

                    `,
                });


            // ==================================================
            // RESEND ERROR
            // ==================================================

            console.log(
                "Resend result:",
                result
            );


            if (
                result.error
            ) {

                console.error(
                    "❌ RESEND ERROR:",
                    result.error
                );


                return res
                    .status(500)
                    .json({

                        success: false,

                        message:
                            result
                                .error
                                .message ||
                            "Resend rejected the email.",

                    });

            }


            // ==================================================
            // SUCCESS
            // ==================================================

            console.log(
                "✅ EMAIL SENT SUCCESSFULLY"
            );


            console.log(
                "Email ID:",
                result.data?.id
            );


            return res
                .status(200)
                .json({

                    success: true,

                    message:
                        "Message sent successfully.",

                    id:
                        result.data?.id,

                });


        } catch (error) {

            console.error(
                "❌ CONTACT SERVER ERROR:"
            );


            console.error(
                error
            );


            return res
                .status(500)
                .json({

                    success: false,

                    message:
                        error?.message ||
                        "Unable to send your message.",

                });

        }

    }
);


// ======================================================
// HTML ESCAPE
// ======================================================

function escapeHtml(
    value = ""
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// ======================================================
// API 404 HANDLER
// ======================================================

app.use(
    "/api",
    (req, res) => {

        return res
            .status(404)
            .json({

                success: false,

                message:
                    "API endpoint not found.",

            });

    }
);


// ======================================================
// START SERVER
// ======================================================

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            "\n================================"
        );

        console.log(
            "🚀 PORTFOLIO BACKEND"
        );

        console.log(
            "================================"
        );

        console.log(
            `Backend running on port ${PORT}`
        );

        console.log(
            `Health: http://localhost:${PORT}/api/health`
        );

        console.log(
            `LeetCode: http://localhost:${PORT}/api/leetcode`
        );

        console.log(
            "================================\n"
        );

    }
);