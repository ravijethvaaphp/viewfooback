// validationServiceV1.js - in api/services
module.exports = {
    /* validate Email Function Start */
    validateEmail: function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    },
    /* validate Email Function End */

    /* validateRegister Service Start */
    validateRegister: function (inputData) {
        var validationRes = {};
        validationRes.status = true;
        validationRes.msg = '';
        if (typeof inputData.email == 'undefined' || inputData.email == "") {
            validationRes.msg += 'Email is required.\n ';
            validationRes.status = false;
            validationRes.statusCode=sails.config.statusCodes.formValidation;
        }
        if (typeof inputData.email != 'undefined' && inputData.email != "" && !validationServiceV1.validateEmail(inputData.email)) {
            validationRes.msg += 'Email is not valid.\n ';
            validationRes.status = false;
            validationRes.statusCode=sails.config.statusCodes.formValidation;
        }
        return validationRes;
    },
    /* validateRegister Service End */
    
    /* validateIsValidUser Service Start */
    validateIsValidUser: function (inputData) {
        var validationRes = {};
        validationRes.status = true;
        validationRes.msg = '';
        if (typeof inputData.email == 'undefined' || inputData.email == "") {
            validationRes.msg += 'Email is required.\n ';
            validationRes.status = false;
        }
        if (typeof inputData.email != 'undefined' && inputData.email != "" && !validationServiceV1.validateEmail(inputData.email)) {
            validationRes.msg += 'Email is not valid.\n ';
            validationRes.status = false;
        }
        if (typeof inputData.fname == 'undefined' || inputData.fname == "") {
            validationRes.msg += 'fname is required.\n ';
            validationRes.status = false;
        }
        return validationRes;
    },
    /* validateIsValidUser Service End */
};