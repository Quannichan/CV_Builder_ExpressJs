
require("dotenv").config();

const { Resend } = require("resend");
const Hashtool = require("../security/HashTool");
const { verifyEmailTemplate } = require("../utils/verifyEmailTemplate");

const resend = new Resend(process.env.RESEND_API_KEY);

class Mail {
  async verifyTransport() {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable.");
    }

    console.log("Resend API configuration is present.");
    return true;
  }

  async sendMail(toEmail, iduser, name, minutes) {
    const now = new Date();
    const expire = new Date(now.getTime() + minutes * 60 * 1000);

    const tok = new Hashtool().encodeAES(
      JSON.stringify({
        id: Number(iduser),
        mail: toEmail,
        e: expire,
      })
    );

    const verifyUrl =
      `${process.env.MAIL_VERIFY_URL}?t=${encodeURIComponent(tok)}&sv=SvVerify`;

    const message = verifyEmailTemplate(verifyUrl, name, minutes);

    const mailOptions = {
      from:
        process.env.MAIL_FROM,
      to: toEmail,
      subject: "Verify your account!",
      html: message,
    };

    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Missing RESEND_API_KEY environment variable.");
      }

      const { data, error } = await resend.emails.send(mailOptions);

      if (error) {
        console.error("Send email failed:", error);
        throw new Error(error.message || "Resend failed to send email.");
      }

      console.log("Email accepted by Resend:", {
        id: data?.id,
        to: toEmail,
      });

      return true;
    } catch (error) {
      console.error("Send email failed:", error.message);
      throw error;
    }
  }
}

module.exports = new Mail();
