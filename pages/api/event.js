import {google} from "googleapis"
require("dotenv").config();
const mail = require("@sendgrid/mail");
// const apiKey = `${}`;

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
    req,res
){
    const body = JSON.parse(req.body);

    const usermsg = `
    Hi ${body.firstName}!\r\n \r\n

    Thank you for joining the #DBATE2022.  \r\n\r\n

    Your registration has been received and our team will get back to you shortly with a confirmation.\r\n \r\n


    Thank you for choosing the optimum solution.\r\n \r\n\r\n \r\n

    Best Regards,\r\n
    Optimas Team
    `;

    const data = {
        to: `${body.email}`,
        from: process.env.OPTIMAS_EMAIL,
        subject: `#DBATE2022 Registration Received!`,
        text: usermsg,
        html: usermsg.replace(/\r\n/g, "<br>"),
      };

    try{
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.GOOGLE_CLIENT_EMAIL, 
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        const sheets = google.sheets({
            auth,
            version: 'v4'
        });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:J1',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values:[
                    [body.firstName, body.lastName, body.company, body.jobtitle, body.number, body.email, body.workshop1, body.workshop2, body.workshop3, body.workshop4 ]
                ]
            }
        });
        await mail.send(data).catch((error) => console.log(error));
        return res.status(200).json({
            status: 'Ok', 
            data: response.data
        })

    }catch(e){
        console.error(e)
return res.status(500).send({message: "Something went wrong. Please try again later."})
    }
}
