module.exports = {

    sendInviteEmail: function(options) {

        var opts = {"type":"messages","call":"send","message":
            {
                "subject": options.subject,
                "from_email":options.from_email,
                "from_name": options.from_Name,
                "to":[
                    {"email": options.email, "name": options.name}
                ],
                "text": "Dear "+options.name+", \n You're in the Beta! Click <insert link> to verify your account"
            }
        };

        myEmailSendingLibrary.send(opts);

    }
};


