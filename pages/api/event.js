import {google} from "googleapis"

export default async function handler(
    req,res
){
    const body = JSON.parse(req.body);

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
            range: 'A1:F1',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values:[
                    [body.firstName, body.lastName, body.company, body.jobtitle, body.number, body.email ]
                ]
            }
        });
        return res.status(200).json({
            status: 'Ok', 
            data: response.data
        })

    }catch(e){
        console.error(e)
return res.status(500).send({message: "Something went wrong. Please try again later."})
    }
}
