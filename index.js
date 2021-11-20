const {emailRgx, mastercardRgx, pwdRgx, visaMasterRgx, visaRgx} = require('./src/constants')
const dirtyWords = require('./src/dirtyWords')

exports.validateEmail = function (email) {
  if (typeof email === "string") {
    const result = emailRgx.test(email);

    if (result) return "This is a valid email address";
    else return "This is not a valid email address";
  }
  else return "Email address provided is not a valid string";
};

exports.validatePassword = function (password) {
  if(typeof password === "string"){
    const result = pwdRgx.test(password);

    if (result) return "Password is strong";
    else return "Password is weak";
  }
  else return "Password provided is not a valid string";
};

exports.validateSAID = function (id) {
    if(typeof id === "string"){
        const result = idRgx.test(id);

        if (result) return "This is a valid SA ID number";
        else return "This is not a valid SA ID number";
    }
    else return "ID number provided is not a valid string"
};

exports.validateVisaCard = function (cardNumber) {
    if(typeof cardNumber === "string"){
        const result = visaRgx.test(cardNumber);

        if (result) return "This is a valid visa card number";
        else return "This is not a valid visa card number";
    }
    else return "Card number provided is not a valid string"
}

exports.validateVisaMasterCard = function (cardNumber) {
    if(typeof cardNumber === "string"){
        const result = visaMasterRgx.test(cardNumber);

        if (result) return "This is a valid visa master card number";
        else return "This is not a valid visa master card number";
    }
    else return "Card number provided is not a valid string"
}

exports.validateMasterCard = function (cardNumber) {
    if(typeof cardNumber === "string"){
        const result = mastercardRgx.test(cardNumber);

        if (result) return "This is a valid master card number";
        else return "This is not a valid master card number";
    }
    else return "Card number provided is not a valid string"
}

exports.validateUserName = function (userName) {
    if(typeof userName === "string"){

        const result = dirtyWords.includes(userName)

        if (result) {
            
            return "You have provided a profanity including username"
        }
        else return "You have not provided a profanity including username"
    }
    else return "Username is not a valid string"
}