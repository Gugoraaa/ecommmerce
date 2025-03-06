import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "d18904c57d8bafd88bc9a44d46ab3489"
    }
  });
