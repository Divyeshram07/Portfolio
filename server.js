import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);


// ============================================
// HEALTH CHECK
// ============================================

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
        resendConfigured: !!process.env.RESEND_API_KEY,
        emailConfigured: !!process.env.CONTACT_EMAIL,
    });
});


// ============================================
// CONTACT
// ============================================

app.post("/api/contact", async (req, res) => {
    console.log("\n================================");
    console.log("NEW CONTACT REQUEST");
    console.log("================================");

    try {
        console.log("Request body:", req.body);

        const {
            name,
            email,
            company,
            subject,
            message,
        } = req.body || {};


        // ----------------------------------------
        // VALIDATION
        // ----------------------------------------

        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            console.log("Validation failed");

            return res.status(400).json({
                success: false,
                message:
                    "Please fill in all required fields.",
            });
        }


        // ----------------------------------------
        // ENVIRONMENT CHECK
        // ----------------------------------------

        if (!process.env.RESEND_API_KEY) {
            console.error(
                "❌ RESEND_API_KEY is missing"
            );

            return res.status(500).json({
                success: false,
                message:
                    "RESEND_API_KEY is missing from .env",
            });
        }


        if (!process.env.CONTACT_EMAIL) {
            console.error(
                "❌ CONTACT_EMAIL is missing"
            );

            return res.status(500).json({
                success: false,
                message:
                    "CONTACT_EMAIL is missing from .env",
            });
        }


        console.log(
            "Resend API key detected:",
            process.env.RESEND_API_KEY
                .substring(0, 5) + "..."
        );

        console.log(
            "Sending email to:",
            process.env.CONTACT_EMAIL
        );


        // ----------------------------------------
        // SEND EMAIL
        // ----------------------------------------

        const result = await resend.emails.send({
            from:
                "Divyesh Ram <hello@divyeshram.dev>",

            to: [
                process.env.CONTACT_EMAIL,
            ],

            replyTo: email,

            subject:
                subject ||
                `Portfolio message from ${name}`,

            html: `
                <div
                    style="
                        font-family: Arial, sans-serif;
                        max-width: 700px;
                        margin: 0 auto;
                        color: #222;
                        line-height: 1.6;
                    "
                >

                    <h2>
                        New Portfolio Message
                    </h2>

                    <hr />

                    <p>
                        <strong>Name:</strong>
                        ${escapeHtml(name)}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${escapeHtml(email)}
                    </p>

                    <p>
                        <strong>Company:</strong>
                        ${escapeHtml(
                            company ||
                            "Not provided"
                        )}
                    </p>

                    <p>
                        <strong>Subject:</strong>
                        ${escapeHtml(subject)}
                    </p>

                    <h3>
                        Message
                    </h3>

                    <p>
                        ${escapeHtml(message).replace(
                            /\n/g,
                            "<br />"
                        )}
                    </p>

                </div>
            `,
        });


        // ----------------------------------------
        // RESEND RESULT
        // ----------------------------------------

        console.log(
            "Resend result:",
            result
        );


        if (result.error) {
            console.error(
                "❌ RESEND ERROR:",
                result.error
            );

            return res.status(500).json({
                success: false,
                message:
                    result.error.message ||
                    "Resend rejected the email.",
                error:
                    result.error,
            });
        }


        // ----------------------------------------
        // SUCCESS
        // ----------------------------------------

        console.log(
            "✅ EMAIL SENT SUCCESSFULLY"
        );

        console.log(
            "Email ID:",
            result.data?.id
        );

        return res.status(200).json({
            success: true,
            message:
                "Message sent successfully.",
            id: result.data?.id,
        });

    } catch (error) {

        console.error(
            "❌ CONTACT SERVER ERROR:"
        );

        console.error(error);

        return res.status(500).json({
            success: false,
            message:
                error?.message ||
                "Unable to send your message.",
        });
    }
});


// ============================================
// HTML ESCAPE
// ============================================

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


// ============================================
// START SERVER
// ============================================

app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Backend running on port ${PORT}`
    );
});