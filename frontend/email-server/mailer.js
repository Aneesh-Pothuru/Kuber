const cors = require('cors');
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// const { sendEmail } = require('./mail');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '@gmail.com',
        pass: ''
    }
});

function emailReport(title, subject, csv) {
    const dataCSV = csv.map(row => row.map(entry => '\"' + entry + '\"')).join("\n");
    let mailOptions = {
        from: '@gmail.com',
        to: '@gmail.com',
        subject: title,
        text: subject,
        attachments: [{
            filename: 'report.csv',
            content: dataCSV
        }]
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Does not Work', err);
        } else {
            console.log('Mail Sent');
        }
    });
}

app.post("/mail", (req, res) => {
    console.log("Email has been recieved", req.headers)
    console.log(req.body)
    emailReport(req.body.csv, req.body.title, req.body.subject)

})


app.listen(4000, () => {
    console.log("Server Running at 4000 ");
})