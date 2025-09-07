import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendReviewEmail = async (name: string, email: string, review: string) => {

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Review Submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
                <p><strong>Review:</strong> ${review}</p>`
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log(response);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}