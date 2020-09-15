"use strict";
const nodemailer = require("nodemailer"); // node mailer
const ical = require("ical-generator");
const moment = require("moment");
const {
  NetworkContext
} = require("twilio/lib/rest/supersim/v1/network");
const Mail = require("nodemailer/lib/mailer");
module.exports = function (Userdetails) {
  Userdetails.remoteMethod("invite", {
    http: {
      path: "/invite",
    },
    accepts: {
      arg: "md", //meetingData
      type: "Object",
    },
    returns: {
      type: "Object",
      root: true,
    },
  });

  Userdetails.invite = (md, cb) => {
    let name = "";
    Userdetails.findOne({
      where: {
        email: md.recieverEmail,
      },
    }).then((e) => {
      if (e === null) {
        let error = new Error("User Not Found");
        error.status = 404;
        cb(error);
      } else {
        Userdetails.findById(md.userId).then((sender) => {
          let hosted = [];
          name = sender.username;
          if (sender.hosted) {
            hosted = [hosted, ...sender.hosted];
          }

          hosted.push({
            dateTime: md.dateTime,
            roomname: md.userId,
            isDone: false,
            description: "",
          });
          sender.updateAttributes({
            hosted: hosted,
          });
        });

        Userdetails.findById(e.id).then((reciever) => {
          let invites = [];
          if (reciever.invites) {
            invites = reciever.invites;
          }
          invites.push({
            roomname: md.userId,
            dateTime: md.dateTime,
            isDone: false,
            description: "",
          });
          reciever.updateAttributes({
            invites: invites,
          });
        });
      }
    });
    mail(md, name);
  };

  async function mail(md, name) {
    let link = `https://update-video-chat.herokuapp.com?roomName=${md.userId}&dateTime=${md.dateTime}`
    const template = `
    <!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Demystifying Email Design</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin: 0; padding: 0;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td style="padding: 10px 0 30px 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                style="border: 1px solid #cccccc; border-collapse: collapse;">
                <tr>
                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td
                                    style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;text-align: center;">
                                    <b>Meeting Invite</b>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;"
                                    width="75%">
                                    <h3>From ${name}</h3>
                                    <font color="#ffffff">Scheduled on</font> ${md.dateTime}
                                </td>
                                <td align="right" width="25%">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td
                                                style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                <a href=${link} style="padding:15px 20px; width:100%;background-color: #B71C1C; color:white; ">Join</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>

</html>`;
    //creating a transporter
    const systemMail = "dharmilp03@gmail.com";
    const systemPass = "Sdvp@123";
    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: systemMail,
        pass: systemPass,
      },
    });
    // send mail with defined transport object
    transporter.sendMail({
        from: systemMail,
        to: md.recieverEmail,
        subject: "Meeting Invite",
        html: template,
      },
      (err, data) => {
        if (err) {
          return false;
        } else {
          console.log(data);
          return true;
        }
      }
    );
  }
};
