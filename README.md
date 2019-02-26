# nodejs-express-sendEmail-ejsTemplate
Send ejs email Template with nodejs and express using gmail and zoho smtp

Created by Muhammad Usman Siddiq



```
git clone https://github.com/usmansiddiq000/nodejs-express-sendEmail-ejsTemplate.git
```
```
npm install
```
```
npm start
```

For Gmail configure your nodemailer with user and password.
user : "Your gmail"
password: "Password for your gmail"

```
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: '*********',
         pass: '*******'
     }
 });

```
OR

For Zoho configure your nodemailer with user and password.
user : "Your zoho mail"
password: "Password for your zoho mail"

```
 var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
     port: 465,
     secure: true, //ssl
     auth: {
              user:'**************',
              pass:'*******'
     }
  });

```



Open [http://localhost:3000/email](http://localhost:3000/email) to view it in the browser.
it will send email to spacified email.
