import { createTransport } from "nodemailer"; // TODO: Get OVH mail account

export const sendMail = async (to: string, subject: string, text: string) => {
  const transporter = createTransport({
    name: "kaibee.fr",
    host: "ssl0.ovh.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(`Le mail ne s'est pas envoyé : ${err}`);
  }
};
