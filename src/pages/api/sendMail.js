import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'Outlook365', // If you're using Outlook
      auth: {
        user: 'your-email@outlook.com',
        pass: 'your-password'
      }
    });

    // Prepare email data
    const { name, company, email, location, extraInfo } = req.body;
    const mailOptions = {
      from: 'your-email@outlook.com',
      to: 'timvangemert@outlook.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nLocation: ${location}\nExtra Information: ${extraInfo}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Error sending email');
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
