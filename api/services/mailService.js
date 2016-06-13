var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://ankurgarach4%40gmail.com:garachankur4@smtp.gmail.com');

module.exports = {
    sendEMail: function (data,cb) {

        var mailOptions = {
            recipientName:data.name,
            from: 'ankurgarach@logisticinfotech.co.in', // sender address 
            to: data.email, // list of receivers 
            subject:data.subject, // Subject line 
            html:data.message// html body 
        };
console.log(mailOptions);
        // send mail with defined transport object 
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
               return cb(error);
            } else {
               
                return cb(true);
            }
        });
    },
    sendActiveLink: function (data) {

        var mailOptions = {
            recipientName: "ANKUR",
            from: 'ankurgarach@logisticinfotech.co.in', // sender address 
            to: data.email, // list of receivers data.email
            subject: 'activation link', // Subject line 
            html: '<b>active your account to click link : <a href="' + data.activationlink + '">' + data.activationlink + '</a></b>'
        };

        // send mail with defined transport object 
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
                return true;
            }
        });

    },
    mailTemplate: function (data) {
         var message = '<!doctype html>';
        message += '<html>';
        message += '<head>';
        message += '<meta name="viewport" content="width=device-width">';
        message += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
        message += '<title>Really Simple HTML Email Template</title>';
        message += '<style>';

        message += '* { ';
        message += 'font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif; ';
        message += ' font-size: 100%; ';
        message += 'line-height: 1.6em; ';
        message += 'margin: 0; ';
        message += 'padding: 0; ';
        message += '}';

        message += 'img { ';
        message += 'max-width: 600px; ';
        message += 'width: auto; ';
        message += '}';

        message += 'body { -webkit-font-smoothing: antialiased;height: 100%;-webkit-text-size-adjust: none;width: 100% !important; }';

        message += 'a { color: #348eda; }';

        message += '.btn-primary { Margin-bottom: 10px;width: auto !important; }';
        message += '.btn-primary td { background-color: #348eda;border-radius: 25px;font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-size: 14px;text-align: center;  vertical-align: top; }';
        message += '.btn-primary td a { background-color: #348eda;border: solid 1px #348eda;border-radius: 25px;border-width: 10px 20px;display: inline-block;color: #ffffff;cursor: pointer;  font-weight: bold;  line-height: 2;text-decoration: none; }';

        message += '.last { margin-bottom: 0; }';
        message += '.first { margin-top: 0; }';

        message += '.padding { padding: 10px 0; }';
        message += 'table.body-wrap { padding: 20px;width: 100%; }';
        message += 'table.body-wrap .container { border: 1px solid #f0f0f0; }';
        message += 'table.footer-wrap {clear: both !important;width: 100%;}';

        message += '.footer-wrap .container p { color: #666666;font-size: 12px; }';

        message += 'table.footer-wrap a { color: #999999; }';
        message += 'h1,h2,h3 { color: #111111;font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;font-weight: 200;line-height: 1.2em;margin: 40px 0 10px; }';
        message += 'h1 { font-size: 36px; }';
        message += 'h2 { font-size: 28px; }';
        message += 'h3 { font-size: 22px; }';
        message += 'p,ul,ol {font-size: 14px; font-weight: normal;margin-bottom: 10px; }';
        message += 'ul li, ol li {margin-left: 5px;list-style-position: inside;}';
        message += '.container {clear: both !important;display: block !important;Margin: 0 auto !important;max-width: 600px !important;}';
        message += '.body-wrap .container { padding: 20px; }';
        message += '.content {display: block;margin: 0 auto;max-width: 600px;}';
        message += '.content table { width: 100%;}';
        message += '</style>';
        message += '</head>';
        message += '<body bgcolor="#f6f6f6;-webkit-font-smoothing: antialiased;height: 100%;-webkit-text-size-adjust: none;width: 100% !important;">';
        message += '<table class="body-wrap" bgcolor="#f6f6f6"  style="width:100%;">';
        message += '<tr>';
        message += '<td></td>';
        message += '<td class="container" bgcolor="#FFFFFF">';
        message += '<div class="content">';
        message += '<table>';
        message += '<tr>';
        message += '<td>';
        message += '<p><img src="'+ sails.config.frontsiteUrl +'/img/logo_viewfoo.png" alt="Compagnie logo" data-default="placeholder" data-max-width="300"  height="40"></p>';
        message += '<p></p>';
        message += '<h1>' + data.messageHeading + '</h1>';
        message += '<p></p>';
        message += '<h2></h2>';
        message += '<p>' + data.content + '</p>';
        message += '<table class="btn-primary" cellpadding="0" cellspacing="0" border="0">';
        message += '<tr>';
        message += '<td>';
        message += '<a target="_blank" style="padding:8px;background:#006699;font-size:13px;color:#ffffff;text-decoration:none;font-weight:bold;" href="' + sails.config.siteUrl + '">' + sails.config.sitename + ' →</a>';
        message += '</td>';
        message += '</tr>';
        message += '</table>';
        message += '<p></p>';
        message += '<p></p>';
        message += '<p></p>';
        message += '</td>';
        message += '</tr>';
        message += '</table>';
        message += '</div>';
        message += '</td>';
        message += '<td></td>';
        message += '</tr>';
        message += '</table>';
        message += '<table class="footer-wrap">';
        message += '<tr>';
        message += '<td></td>';
        message += '<td class="container">';
        message += ' <div class="content">';
      
        message += '</div>';
        message += '</td>';
        message += '<td></td>';
        message += '</tr>';
        message += '</table>';
        message += '</body>';
        message += '</html>';

        return message;

    }
};