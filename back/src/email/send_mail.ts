import {createTransport} from 'nodemailer'; // TODO: Get OVH mail account

// TODO: Get OVH mail account
const from = 'test@kaibee.fr';
export const sendMail = async (to: string, subject: string, text: string) => {
  const transporter = createTransport({
    name: 'kaibee.fr',
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
