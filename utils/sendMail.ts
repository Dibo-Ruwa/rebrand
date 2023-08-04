import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "z3phyronsnides@gmail.com",
    pass: "oonbpxhrbwhitozv",
  },
});

// Function to send an email

const sendMail = (to: string, subject: string, html: string) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "noreply@tractive.com",
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export { sendMail };
