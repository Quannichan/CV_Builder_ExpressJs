
require("dotenv").config();

const nodemailer = require("nodemailer");
const Hashtool = require("../security/HashTool");
const { verifyEmailTemplate } = require("../utils/verifyEmailTemplate");

const transporter = nodemailer.createTransport({
    host: "://gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false 
    },
    connectionTimeout: 10000
});

class Mail {
  async verifyTransport() {
    await transporter.verify();
    console.log("SMTP connection and authentication successful.");
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
      from: process.env.MAIL_FROM,
      to: toEmail,
      subject: "Verify your account!",
      html: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return true;
    } catch (error) {
      console.error("Send email failed:", error.code, error.message);
      throw error;
    }
  }
}

module.exports = new Mail();
