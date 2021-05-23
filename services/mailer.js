const nodemailer = require("nodemailer");

require("dotenv").config();

class Mail {
  send = async (res) => {
    let transporter = nodemailer.createTransport({
      service: "Yandex",
      auth: {
        user: process.env.emailfrom,
        pass: process.env.passfrom,
      },
    });

    return await transporter
      .sendMail({
        from: "Интернет магазин <nethaustestov@yandex.ru>",
        to: res.email,
        subject: "Регистрация в интернет магазине",
        html: `<div style="padding: 10px; display:flex; flex-direction: column;align-items: center;">
              <h1>Регистрация</h1>
              <p>
              ${res.lastname} ${res.firstname}, Вы успешно зарегистрировались на сайте<br>
              
              Данные для авторизации:<br>  логин:${res.email},<br> пароль:${res.password}
              
              </p>
              <p>С уважением, команда <a href="http://localhost:8080/">Магаз</a></p>
              </div>`,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => err);
  };
  ordersend = async (data) => {
    let transporter = nodemailer.createTransport({
      service: "Yandex",
      auth: {
        user: process.env.emailfrom,
        pass: process.env.passfrom,
      },
    });

    return await transporter
      .sendMail({
        from: "Интернет магазин <nethaustestov@yandex.ru>",
        to: res.email,
        subject: `Заказ`,
        html: `<div style="padding: 10px; display:flex; flex-direction: column;align-items: center;">
            <h1>Регистрация</h1>
            <p>
            ${res.lastname} ${res.firstname}, Вы успешно зарегистрировались на сайте<br>
            
            Данные для авторизации:<br>  логин:${res.email},<br> пароль:${res.password}
            
            </p>
            <p>С уважением, команда <a href="http://localhost:8080/">Магаз</a></p>
            </div>`,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => err);
  };
}

module.exports = new Mail();
