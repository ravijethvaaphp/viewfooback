module.exports = {
    RegisterUser: function (req, res) {

//        var registerData = {
//            firstname: req.param("firstname"),
//            lastname: req.param("lastname"),
//            email: req.param("email"),
//            password: req.param("password"),
//            subdomain: req.param("subdomain"),
//            activationlink: commons.generateRandomString()
//        };  
        var registerData = eval(req.body);
        registerData.activationlink = commons.generateRandomString();

        var validateRegister = validationServiceV1.validateRegister(registerData);
        if (!validateRegister.status) {
            return res.send(validateRegister);
        } else {
            Users.Register(registerData, function (data, log) {
                var active = mailService.sendActiveLink(registerData);
                return res.send(data);
            });
        }
    },
    Login: function (req, res) {
        /* var loginData = {
         email: req.param("email"),
         password: req.param("password")
         
         }; */
        var loginData = eval(req.body);
        Users.Login(loginData, function (data, log) {
            return res.send({success: data});
        });
    },
    ForgotPass: function (req, res) {

//        var forgotData = {
//            email: req.param("email")
//        };

        var forgotData = eval(req.body);
        Users.ForgotPass(forgotData, function (data, log) {
           res.send(data);
        });
    }

};
