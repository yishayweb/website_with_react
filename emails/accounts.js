const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailSendGrid = (email_obj, callback) => {
  console.log("snding email");
  sgMail.send({
    to: 'yishayweb@gmail.com',
    from: 'admin@yishayonweb.com',
    subject: 'Hello from yishayonweb.com',
    text: 'This is to email from the website from the new dev'
  })
}

module.exports = { sendEmailSendGrid };
