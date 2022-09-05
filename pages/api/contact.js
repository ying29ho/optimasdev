require("dotenv").config();
const mail = require('@sendgrid/mail');
// const apiKey = `${}`;

mail.setApiKey(SENDGRID_API_KEY);

export default function handler (req,res){
    const body = JSON.parse(req.body);

    const msg =`
    Hi there!\r\n \r\n
    ${body.firstName} ${body.lastName} who is a ${body.role} from ${body.basedIn} ${body.outsideBorneo} would like to inquire about the following: \r\n \r\n \r\n
 
    Interested Solutions:\r\n

    ${body.requests}\r\n
    Monitise Ad Space: ${body.monetiseAdSpace}\r\n
    Manage Ad Campaigns: ${body.manageAdCampaigns}\r\n
    Digital Presence Advisory & Support: ${body.digitalPresenceAdviseSupport} \r\n
    Market Insights: ${body.marketInsights}\r\n
    Media Trading: ${body.mediaTrading}\r\n 
    Other Digital Media Needs: ${body.other} \r\n \r\n \r\n
    The following is the message sent \r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}\r\n \r\n
    You can contact ${body.firstName} at ${body.email}
    `;

    const usermsg =`
    Hi ${body.firstName}!\r\n \r\n

    Thank you for contacting Optimas. \r\n

    We just want to let you know that your message is received and we will get back to you within a few working days!\r\n \r\n


    Thank you for choosing the optimum solution.\r\n \r\n\r\n \r\n

    Best Regards,\r\n
    Optimas Team
    `

    const data = {
        to: TEST_EMAIL,
        from: OPTIMAS_EMAIL,
        subject: `New Web Message from ${body.firstName}!`,
        text: msg,
        html: msg.replace(/\r\n/g, '<br>')
    };

    const usrData={
        to: `${body.email}`,
        from: OPTIMAS_EMAIL,
        subject: `Message Received!`,
        text: usermsg, 
        html: usermsg.replace(/\r\n/g, '<br>')
    }

    mail.send(data)
    .catch(error=>console.log(error))

 mail.send(usrData)
    .catch(error=>console.log(error))

    res.status(200).json({status: 'Ok'})
}

