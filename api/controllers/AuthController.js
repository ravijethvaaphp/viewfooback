module.exports = {

    Login: function (req, res) {
            var loginData = eval(req.body);
        Users.Login(loginData, function (data, log) {
            res.status = data.statusCode;
            return res.send({success: data});
        });
    }

};
