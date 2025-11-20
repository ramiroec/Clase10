const nodemailer = require('nodemailer');

// Configura el transportador con tu cuenta de Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ramiroec2@gmail.com',
    pass: 'aaru cwxn ofjy lbfc' // Tu contraseña de aplicación
  }
});

// Configura las opciones del correo
const mailOptions = {
  from: 'ramiroec2@gmail.com',

to: 'ramiroec2@gmail.com,marcosarmoa009@gmail.com,joaquineduardobarriostorres@gmail.com,andccoronel@gmail.com,kcuadros84@gmail.com,axelhertner1@gmail.com,diegojimenez0425@gmail.com,ruoc89@gmail.com,valentin.riveros@petersen.com.py,amarillarod@gmail.com',

  subject: 'Prueba de correo en clase 10',
  text: 'Este es un correo de prueba enviado desde Node.js usando Nodemailer.'
};

// Envía el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Correo enviado: ' + info.response);
});
