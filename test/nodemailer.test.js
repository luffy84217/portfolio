var dotenv = require('dotenv');
var nodemailer = require('nodemailer');
var expect = require('expect.js');

dotenv.config();

var user = process.env.ACCOUNT_USERNAME;
var pass = process.env.ACCOUNT_PASSWORD;

describe('Nodemailer', function() {

    describe('1. Gmail Account Presence', function() {

        it('should be a valid email format', function() {
            // HTML5 input type=email validation
            expect(user).to.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);
        });

        it('should be a gmail account', function() {
            expect(user.split('@')[1].split('.')[0]).to.be('gmail');
        });

    });

    describe('2. Password Presence', function() {

        it('password is required', function() {
            expect(pass).to.be.a('string');
        });

    });

});