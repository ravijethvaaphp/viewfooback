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
        var message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
        message +='<html xmlns="http://www.w3.org/1999/xhtml">';
        message +='<head>';
        message +='  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
        message +='  <title>Forgot Password</title>';
        message +='  <style type="text/css">';
        message +='  body {';
        message +='   padding-top: 0 !important;';
        message +=' padding-bottom: 0 !important;';
        message +=' padding-top: 0 !important;';
        message +=' padding-bottom: 0 !important;';
        message +=' margin:0 !important;';
        message +=' width: 100% !important;';
        message +=' -webkit-text-size-adjust: 100% !important;';
        message +=' -ms-text-size-adjust: 100% !important;';
        message +=' -webkit-font-smoothing: antialiased !important;';
        message +=' }';
        message +=' .tableContent img {';
        message +=' border: 0 !important;';
        message +=' display: block !important;';
        message +=' outline: none !important;';
        message +=' }';

        message +=' p, h2{';
        message +=' margin:0;';
        message +=' }';

        message +=' div,p,ul,h2,h2{';
        message +=' margin:0;';
        message +=' }';

        message +=' h2.bigger,h2.bigger{';
        message +=' font-size: 32px;';
        message +=' font-weight: normal;';
        message +=' }';

        message +=' h2.big,h2.big{';
        message +=' font-size: 21px;';
        message +=' font-weight: normal;';
        message +=' }';

        message +=' a.link1{';
        message +=' color:#006699;font-size:13px;font-weight:bold;text-decoration:none;';
        message +=' }';

        message +=' a.link2{';
        message +=' padding:8px;background:#006699;font-size:13px;color:#ffffff;text-decoration:none;font-weight:bold;';
        message +=' }';

        message +=' a.link3{';
        message +=' background:#006699; color:#ffffff; padding:8px 10px;text-decoration:none;font-size:13px;';
        message +=' }';
        message +=' .bgBody{';
        message +=' background: #F6F6F6;';
        message +=' }';
        message +=' .bgItem{';
        message +=' background: #ffffff;';
        message +=' }';
        message +=' </style>';
        message +=' <script type="colorScheme" class="swatch active">';
        message +='  {';
        message +='   "name":"Default",';
        message +='   "bgBody":"F6F6F6",';
        message +='   "link":"006699",';
        message +='  "color":"999999",';
        message +='  "bgItem":"ffffff",';
        message +=' "title":"555555"';
        message +=' }';
        message +=' </script>';

        message +='  </head>';
        message +='  <body paddingwidth="0" paddingheight="0"   style="padding-top: 0; padding-bottom: 0; padding-top: 0; padding-bottom: 0; background-repeat: repeat; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;" offset="0" toppadding="0" leftpadding="0">';
        message +='  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableContent bgBody"  style="background: #F6F6F6;" align="center"  style="font-family:helvetica, sans-serif;">';



        message +='  <tr>';
        message +='  <td height="25" bgcolor="#43474A" colspan="3">   </td>';
        message +='  </tr>';

        message +='  <tr>';
        message +='  <td height="130" bgcolor="#43474A">&nbsp;  </td>';
        message +='  <td rowspan="2" width="600" valign="top">';
        message +='  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" >';




        message +='  <tr>';
        message +='  <td class="movableContentContainer">';

        message +='  <div class="movableContent">';
        message +='  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="top">';
        message +='  <tr>';
        message +='  <td bgcolor="#43474A" valign="top">';
        message +='  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="top">';
        message +='  <tr>';
        message +='  <td align="left" valign="middle" >';
        message +='  <div class="contentEditableContainer contentImageEditable">';
        message +='  <div class="contentEditable" >';
        message +='  <img src="'+sails.config.siteUrl+'/assets/images/logo_viewfoo_gray.png" alt="Compagnie logo" data-default="placeholder" data-max-width="300"  height="40">';
        message +='  </div>';
        message +='  </div>';
        message +='  </td>';

        message +='  <td align="right" valign="top" >';
        message +='  <div class="contentEditableContainer contentTextEditable" style="display:inline-block;">';
        message +='  <div class="contentEditable" >';
        message +='  <a target="_blank" href="[SHOWEMAIL]" style="color:#A8B0B6;font-size:13px;text-decoration:none;">Open in your browser   </a>';
        message +='  </div>';
        message +='  </div>';
        message +='  </td>';
        message +='  <td width="18" align="right" valign="top">';
        message +='  <div class="contentEditableContainer contentImageEditable" style="display:inline-block;">';
        message +='  <div class="contentEditable" >';
       // message +='  <a target="_blank" href="[SHOWEMAIL]">   <img src="images/openBrowser.png" alt="open in browser image" data-default="placeholder" width="15" height="15" style="padding-left:10px;">   </a>';
        message +='  </div>';
        message +='  </div>';
        message +='  </td>';
        message +='  </tr>';
        message +='  </table>';
        message +='  </td>';
        message +='  </tr>';
        message +='  </table>';
        message +='  </div>';
        message +='  <div class="movableContent">';
        message +='  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="top">';
        message +='  <tr>   <td height="20" </td></tr>';
        message +='  </table>';
        message +='  </div>';

        message +='  <div class="movableContent">';
        message +='  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="top" class="bgItem" >';
        message +='  <tr><td colspan="3" height="16">&nbsp;</td></tr>';
        message +='  <tr>';
        message +='  <td width="16">&nbsp;</td>';
        message +='  <td width="568">';
        message +='  <table width="568" border="0" cellspacing="0" cellpadding="0" align="center" valign="top" >';
        message +='  <tr>';
        message +='  <td align="left" valign="top">';
        message +='  <div class="contentEditableContainer contentTextEditable" >';
        message +='  <div class="contentEditable" style="color:#555555;font-size:21px;font-weight:normal;">';
        message +='  <h2 style="font-size: 21px;font-weight: normal;">'+data.messageHeading+'</h2>';
        message +='          </div>';
        message +='     </div>';
        message +='   </td>';
        message +='   </tr>';
        message +='    <tr><td height="16">&nbsp;</td></tr>';
        message +='   <tr>';
        message +='        <td align="left" valign="top">';
        message +='          <div class="contentEditableContainer contentTextEditable" >';
        message +='           <div class="contentEditable" style="color:#999999;font-size:13px;line-height:19px;">';
        message +='            <p >'+data.content+'</p>';
        message +='        </div>';
        message +='       </div>';
        message +='     </td>';
        message +='    </tr>';
        message +='      <tr><td height="20">&nbsp;</td></tr>';
        message +='      <tr>';
        message +='       <td align="right" valign="top" style="padding-bottom:8px;">';
        message +='        <div class="contentEditableContainer contentTextEditable" >';
        message +='         <div class="contentEditable" >';
        message +='          <a target="_blank" style="padding:8px;background:#006699;font-size:13px;color:#ffffff;text-decoration:none;font-weight:bold;" href="'+sails.config.siteUrl+'" style="padding:8px;background:#006699;font-size:13px;color:#ffffff;text-decoration:none;font-weight:bold;">'+sails.config.sitename+' →</a>';
        message +='        </div>';
        message +='       </div>';
        message +='     </td>';
        message +='  </tr>';
        message +='         </table>';
        message +='     </td>';
        message +='     <td width="16">&nbsp;</td>';
        message +='   </tr>';
        message +='  <tr><td colspan="3" height="16">&nbsp;</td></tr>';
        message +='       </table>';
        message +='         </div>';

        message +='       <div class="movableContent">';
        message +='     <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="top" class="bgBody" >';
        message +='      <tr><td height="54" style="border-bottom:1px solid #DAE0E4">&nbsp;</td></tr>';

        message +='      <tr><td height="28"></td></tr>';

        message +='      <tr>';
        message +='       <td valign="top" align="center">';
        message + '<div class="contentEditableContainer contentTextEditable">';
        message +='           <div class="contentEditable" style="color:#A8B0B6; font-size:13px;line-height: 16px;">';
        message +='          <p >© 2015 ViewFoo, ALL RIGHTS RESERVED.';
        message +='           </p>';
        message +='         </div>';
        message +='       </div>';
        message +='       </td>';
        message +='    </tr>';

        message +='   <tr><td height="28"></td></tr>';

        message +='   <tr>';
        message +='   <td valign="top" align="center">';
        message +='  <div class="contentEditableContainer contentTextEditable">';
        message +='      <div class="contentEditable" style="color:#A8B0B6; font-weight:bold;font-size:13px;line-height: 30px;">';
        message +='     <p >Viewfoo Pro</p>';
        message +='    </div>';
        message +='    </div>';
        message +='   <div class="contentEditableContainer contentTextEditable">';
        message +='     <div class="contentEditable" style="color:#A8B0B6; font-size:13px;line-height: 15px;">';
        message +='      <p >STREET 1 ,Salt lake City,Utah,Us</p>';
        message +='      </div>';
        message +='    </div>';

        message +='  </td>';
        message +='</tr>';
        message +='  </table>';
        message +=' </div>';


        message +='</td>';
        message +='</tr>   ';



        message +='<tr><td height="28">&nbsp;</td></tr>';

        message +='</table>';
        message +='</td>';
        message +='<td height="130" bgcolor="#43474A">&nbsp;</td>';
        message +='</tr>';

        message +='<tr>';
        message +='<td class="bgBody">  &nbsp;</td>';
        message +='<td class="bgBody">  &nbsp;</td>';
        message +='</tr>';




        message +='</table>';

        message +='</body>';
        message +='</html>';
      
        return message;
    }
};