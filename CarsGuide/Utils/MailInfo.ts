export let mailInfo = {
    browserName: "chrome",
    nodeMailer: {
        auth: {
            userEmail: "lavendrarajput2001@gmail.com", // generated ethereal user
            password: "Lav123456@" // generated ethereal password
        },
        sendMail: {
            fromUser: 'lavendrarajput2001@gmail.com', // sender address
            toUser: "lavendrarajput2001@gmail.com", // list of receivers
            subjectOfMail: "Cars Guide BDD Test Execution Reports", // Subject line
            textOfMail: 'Hi Lavendra\n \nPlease find the attached reports of test exection\n \nThanks\nNodeMailer',
        }
    }
}