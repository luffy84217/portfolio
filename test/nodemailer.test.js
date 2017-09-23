var dotenv = require('dotenv');
var nodemailer = require('nodemailer');
var expect = require('expect.js');
var nodemailer = require('nodemailer');

dotenv.config();

var user = process.env.ACCOUNT_USERNAME;
var pass = process.env.ACCOUNT_PASSWORD;

describe('Nodemailer', function() {

    describe('#Email Account Setting', function() {

        it('email validation', function() {
            // HTML5 input type=email validation
            expect(user).to.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);
        });

        it('should be a gmail account', function() {
            expect(user.split('@')[1].split('.')[0]).to.be('gmail');
        });

        it('password is required', function() {
            expect(pass).to.be.a('string');
        });

    });

    describe.skip('#transporter sendMail', function() {

        it('nodemailer transporter works and sends mail', function(done) {
            // Test-specific timeouts applied
            this.timeout(10000);
            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: user,
                    pass: pass
                }
            });

            // setup email data with unicode symbols
            const mailOptions = {
                from: 'Unit test <' + user + '>', // sender address
                to: user, // list of receivers
                subject: 'Unit test of Nodemailer', // Subject line
                text: '*** This is an automatically generated email, please do not reply ***', // plain text body
                html: '<p>*** This is an automatically generated email, please do not reply ***</p>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) done(err);
                else done();
            });
        });

    });

});