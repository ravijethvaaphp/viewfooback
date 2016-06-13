module.exports = {
    RegisterUser: function (req, res) {
        console.log(req.body);
        var registerData = eval(req.body);
        console.log(registerData);
        console.log("============");
        registerData['activationlink'] = commons.generateRandomString(20);
console.log(registerData);
        var validateRegister = validationServiceV1.validateRegister(registerData);
        if (!validateRegister.status) {
           res.status(validateRegister.statusCode);
            return res.send(validateRegister);
        } else {
            Users.Register(registerData, function (data, log) {
                var active = mailService.sendActiveLink(registerData);
                res.status(data.statusCode);
                return res.send(data);
            });
        }
    },
 

    UserActivation: function (req, res) {
        var avtivelink = {activationlink: req.param("id")};
        Users.activeAccount(avtivelink, function (data, log) {
            res.status(data.statusCode);
            
            res.send(data);
        });
    }

};
