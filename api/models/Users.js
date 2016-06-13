module.exports = {
    Register: function (registerData, cb) {
        Users.findOne({email: registerData.email}).exec(function (err, data) {

            if (err) {
                return cb({status: false, message: "problem with registering data", statusCode: sails.config.statusCodes.noResponse});
            }
            if (typeof data == "undefined") {
                Users.create(registerData).exec(function (err, dataRegister) {
                    if (err) {
                        return cb({status: false, message: "problem with registering data", statusCode: sails.config.statusCodes.noResponse});
                    }
                    return cb({status: true, message: "registered successfully", statusCode: sails.config.statusCodes.response, data: data});
                    //return res.json(usersNamedFinn);
                })
            }
            else {
                return cb({status: false, message: "Email Already Registerd", statusCode: sails.config.statusCodes.normalError, data: data});
            }

        })

    },
    Login: function (registerData, cb) {
        Users.findOne(registerData).exec(function (err, data) {
            
            if (err) {
                return cb({status: false, message: "problem with login", statusCode: sails.config.statusCodes.noResponse});

            }
            if (typeof data != "undefined") {
                return cb({status: true,
                    message: "login successfully",
                    statusCode: sails.config.statusCodes.response}
                );
            }
            else {
                return cb({status: false,
                    message: "login failed",
                    statusCode: sails.config.statusCodes.noResponse}
                );
            }
            //return res.json(usersNamedFinn);
        })
    },
    ForgotPass: function (forgotData, cb) {
        
        
        var userDataEmail;
        Users.find(forgotData).exec(function (err, data) {
            if (err) {
                return cb({status: false,
                    message: "Problem with service",
                    statusCode: sails.config.statusCodes.noResponse
                });
            }

            if (typeof data != "undefined") {
                console.log(data);

                var newPassword = commons.generateRandomString()
                var updateData = data.pop();
                updateData.password = newPassword;
                //   var updateData = {id: data.id, password: newPassword};
                userDataEmail = {email: updateData.email, subject: "Forgot Password", name: updateData.firstname + " " + updateData.lastname, message: null};
                updateData.save(function (errUpdate, dataUpdate) {
                    console.log()
                    if (errUpdate) {
                        return cb({status: false,
                            message: "Problem with service",
                            statusCode: sails.config.statusCodes.noResponse
                        });
                    } else {

                        var mailServiceData = {
                            toEmail: data.email,
                            messageHeading: "Forgot Password",
                            content: "your new password is <b>" + newPassword + "</b>"

                        }
                        console.log(userDataEmail);
                        userDataEmail.message = mailService.mailTemplate(mailServiceData);
                        mailService.sendEMail(userDataEmail, function (data) {
                          
                            return cb({status: true,
                                message: "We have sent you new password in your email please check your email and try to login again.",
                                statusCode: sails.config.statusCodes.response
                            });
                        });

                    }
                })
            } else {
                cb({status: false,
                    message: "We are unable recognize your email please sign up",
                    statusCode: sails.config.statusCodes.normalError
                });
            }
        })
    },
    activeAccount: function(activeData,cb){
        
        Users.findOne(activeData).exec(function(err,data){
            console.log(data);
            if(err){
                return cb({status: false,
                    message: "Problem with service",
                    statusCode: sails.config.statusCodes.noResponse
                });
            }
            
            if(typeof data != "undefined"){
                
                Users.update(activeData,{active:"1",activationlink:""}).exec(function afterwards(err, updated){
                    
                    console.log("update: ",updated);
                    if(err){
                        return cb({ status:false,message:" Somthing wrong, your account not activated ",statusCode: sails.config.statusCodes.noResponse});
                    }else{
                        return cb({ status:true,message:"Your account activate successfully",statusCode: sails.config.statusCodes.response});
                    }
                });
                
            }else{
                
                 cb({status: false,
                    message: "We are unable recognize your activation link",
                    statusCode: sails.config.statusCodes.normalError
                });
            }
            
        });
    }

    
    
    

}
