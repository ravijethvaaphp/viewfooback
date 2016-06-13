module.exports = {
        ForgotPass: function (req, res) {
        var forgotData = eval(req.body);
        Users.ForgotPass(forgotData, function (data, log) {
            res.status = data.statusCode;
            res.send(data);
        });
    }

};
