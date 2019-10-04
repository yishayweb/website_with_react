const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailSendGrid = (email_obj, callback) => {
  console.log("snding email");
  sgMail.send({
    to: 'yishayweb@gmail.com',
    from: 'yishayweb@gmail.com',
    subject: 'Hello from yishayonweb.com',
    text: 'This is to email from the website from the new'
  })
}

module.exports = { sendEmailSendGrid };
