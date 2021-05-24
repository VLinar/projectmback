const nodemailer = require("nodemailer");
const Ordersservices = require("../services/orders");
const orders = new Ordersservices();

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

    let resmail = await orders.getoneorders(data);

    let gridproduct = "";
    let gridsum = 0;

    resmail.dataValues.products.map((e) => {
      gridsum += e.sum;
      gridproduct += `<tr style="border-top: 1px solid #dddddd; color: #444;">
      <td style="padding: 13px 10px;">
        <span style="font-weight: bold; color: #333;">
        <a href="http://localhost:8080//products/${e.product.id}" style="color: #2174ce;text-decoration: none;" target="_blank">${e.product.name}</a>
        </span>
        <div style="font-size: 12px;">
        </div>
     </td>
     <td style="padding: 13px 10px;text-align: center;">
     ${e.amounts}
     </td>
     <td>
        <div class="inline-group" style="padding: 13px 0px;text-align: right;white-space: nowrap;">
        ${e.price}
        </div>
     </td>
     <td style="padding: 13px 10px;text-align: right;white-space: nowrap;">
     ${e.sum}
     </td>
     </tr>`;
      return e;
    });

    return await transporter
      .sendMail({
        from: "Интернет магазин <nethaustestov@yandex.ru>",
        to: resmail.email_contact_inform_id,
        subject: `Заказ №${resmail.number}`,
        html: `<body style="background-color: #f3f3f3;min-width: 600px;">
          <table cellpadding="0" width="100%" height="100%" cellspacing="0" style="background-color: #f3f3f3;font-family: Arial,serif;min-height: 100px;vertical-align: top; min-width: 600px;">
             <tr>
                <td width="50%"></td>
                <td style="vertical-align: top;min-width: 600px;width: 600px;">
                   <div style="text-align: center; padding-top: 40px;padding-bottom: 30px;font-size: 24px; color: #333;">
                      Ваш заказ
                   </div>
                   <div style="height: 3px;background-color: #ff8a00"></div>
                   <div style="background-color: #fff;padding: 40px 20px 30px 20px;color: #333;line-height: 21px;width: 560px;font-size: 14px;">
                      <div style="text-align: center; font-size: 24px; font-weight: bold; color: #2174ce;margin-bottom: 28px;">
                         Заказ:&nbsp;№${resmail.number}
                      </div>
                      <div style="color: #333">
                         Здравствуйте,&nbsp;${resmail.user.firstname}!<br>
                         Вы сделали заказ на сайте
                         <a href="http://localhost:8080/" style="color: #2174ce;text-decoration: none;" target="_blank">Дипломный магаз</a><br><br>
                         <div style="margin-left:10px; color: #ff8a00;font-size: 16px; font-weight: bold;margin-bottom: 20px;">Информация о заказе</div>
                         <table cellpadding="5" cellspacing="0" style="font-size: 13px; border-collapse:collapse;text-align: left;border-bottom: 0px solid #dddddd;" width="100%">
                            <tr style="border-top: 1px solid #dddddd; background-color: #f8f8f8; font-weight: bold;">
                               <th style="padding: 13px 10px;" width="50%">Товар</th>
                               <th style="padding: 13px 10px;text-align: center;">Количество</th>
                               <th style="padding: 13px 10px;text-align: right;">Цена</th>
                               <th style="padding: 13px 10px;text-align: right;">Стоимость</th>
                            </tr>
                            ${gridproduct}
                            <tr style="border-top: 1px solid #dddddd;text-align: right;">
                               <td colspan="4" style="padding: 13px 10px;">
                                  <b>Итого:</b>&nbsp;${gridsum}&nbsp;руб.
                               </td>
                            </tr>
                            <tr style="border-top: 1px solid #dddddd;text-align: right; background-color: #fff0b2;">
                               <td colspan="4" style="padding: 13px 10px; font-size:150%">
                                  Всего к оплате:&nbsp;
                                  ${gridsum}&nbsp;
                                  руб.
                               </td>
                            </tr>
                         </table>
                         <div style="margin-left:10px; color: #ff8a00;font-size: 16px; font-weight: bold;margin-bottom: 20px;margin-top: 30px;">
                            Ваши данные
                         </div>
                         <table style="border-collapse:collapse; font-size: 13px; border-top: 1px solid #dddddd;" width="100%">
                            <tr style="border-bottom: 1px solid #dddddd; text-align: left;">
                               <td style='padding: 13px 10px; background: #f8f8f8; vertical-align: top;'>
                                  <b>ФИО</b>
                               </td>
                               <td style='padding: 13px 10px; width: 70%; vertical-align: top;'>${
                                 resmail.user.lastname +
                                 " " +
                                 resmail.user.firstname
                               }</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #dddddd; text-align: left;">
                               <td style='padding: 13px 10px; background: #f8f8f8; vertical-align: top;'>
                                  <b>E-mail</b>
                               </td>
                               <td style='padding: 13px 10px; width: 70%; vertical-align: top;'>${
                                 resmail.email_contact_inform_id
                               }</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #dddddd; text-align: left;">
                               <td style='padding: 13px 10px; background: #f8f8f8; vertical-align: top;'>
                                  <b>Контактный телефон</b>
                               </td>
                               <td style='padding: 13px 10px; width: 70%; vertical-align: top;'>${
                                 resmail.phone_contact_inform_id
                               }</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #dddddd; text-align: left;">
                               <td style='padding: 13px 10px; background: #f8f8f8; vertical-align: top;'>
                                  <b>Адрес доставки</b>
                               </td>
                               <td style='padding: 13px 10px; width: 70%; vertical-align: top;'>${
                                 resmail.user.address
                               }</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #dddddd; text-align: left;">
                               <td style='padding: 13px 10px; background: #f8f8f8; vertical-align: top;'>
                                  <b>Комментарий</b>
                               </td>
                               <td style='padding: 13px 10px; width: 70%; vertical-align: top;'>–</td>
                            </tr>
                         </table>
                         <div style="font-size: 14px;color:#333;text-align: center;margin-top: 20px;">
                            Спасибо за заказ! Наш менеджер свяжется с Вами в ближайшее время.
                         </div>
                      </div>
                   </div>
                   <div style="height: 3px;background-color: #ff8a00;margin-bottom: 30px;"></div>
                </td>
                <td width="50%"></td>
             </tr>
          </table>
       </body>`,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => err);
  };
}

module.exports = new Mail();
