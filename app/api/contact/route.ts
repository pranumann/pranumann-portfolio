import { Resend } from "resend";
import { NextResponse } from "next/server";

const RECEIVER_EMAIL = "monarchpraveen@gmail.com";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = escapeHtml(body.name || "");
    const email = escapeHtml(body.email || "");
    const subject = escapeHtml(body.subject || "");
    const message = escapeHtml(body.message || "");

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Praveen Yadav Portfolio <onboarding@resend.dev>",
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message - ${subject}`,
      html: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 650px;
        margin:auto;
        padding:30px;
        background:#f8fafc;
        border-radius:15px;
        border:1px solid #e2e8f0;
      ">

        <h1 style="
          color:#0f172a;
          margin-bottom:20px;
        ">
          🚀 New Portfolio Contact
        </h1>

        <p style="font-size:16px;color:#334155;">
          Someone contacted you through your portfolio website.
        </p>

        <div style="
          background:white;
          padding:20px;
          border-radius:12px;
          margin-top:20px;
        ">

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <hr style="
            margin:20px 0;
            border:none;
            border-top:1px solid #e2e8f0;
          "/>

          <p>
            <strong>Message:</strong>
          </p>

          <p style="
            color:#475569;
            line-height:1.6;
          ">
            ${message.replace(/\n/g, "<br/>")}
          </p>

        </div>

        <p style="
          margin-top:25px;
          font-size:13px;
          color:#64748b;
        ">
          Sent from:
          <strong>Praveen Yadav AI Portfolio</strong>
        </p>

      </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Email sending failed.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}