import { Config } from 'protractor';
import { FeaturesSuite } from '../TestSuite/FeaturesSuite';
import { StepSuite } from '../TestSuite/StepsSuite';
import * as nodemailer from 'nodemailer';
import { mailInfo } from '../Utils/MailInfo';
var reporter = require('cucumber-html-reporter');
let process = require("process")
let reportOutput = process.cwd() + "/CarsGuide/TestReports/"
export let config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  specs: FeaturesSuite,
  capabilities: {
    'browserName': "chrome",
    'loggingPrefs': {
      'driver': 'WARNING',
      'server': 'WARNING',
      'browser': 'INFO'
  }
  },
  useAllAngular2AppRoots: true,
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    require: StepSuite,
    strict: true,
    'no-colors': true,
    format: ['progress', 'json:CarsGuide/TestReports/results.json', require.resolve('cucumber-pretty')]
  },
  onComplete: async () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: process.cwd() + "/CarsGuide/TestReports/results.json",
      output: reportOutput+"results.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
      // create reusable transporter object using the default SMTP transport
      let transporter = await nodemailer.createTransport({
          service: "Gmail",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: mailInfo.nodeMailer.auth.userEmail, // generated ethereal user
              pass: mailInfo.nodeMailer.auth.password// generated ethereal password
          }
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
          from: mailInfo.nodeMailer.sendMail.fromUser, // sender address
          to: mailInfo.nodeMailer.sendMail.toUser, // list of receivers
          subject: mailInfo.nodeMailer.sendMail.subjectOfMail, // Subject line
          text: mailInfo.nodeMailer.sendMail.textOfMail, // plain text body
          priority: "high",
          attachments:[{
            "path":reportOutput+"results.html",
          }]
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
    
    reporter.generate(options);
    await main().catch(console.error);
  }
};

