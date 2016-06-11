module.exports = {
    getD: function (req, res) {
        //console.log(Users.find({firsname:"Rax"}));
        //return res.send("S");
        var options = {id: "5746c0c705805668acdc78cb"};
        /*User.enroll(function(req,res){
         res.send(req);
         }) */




        var inserData = {
            "firstname": 'Walter Jr', "lastname": "Jr",
            "email": "nomail@rax.com",
            "password": "12345", "subdomain": "rax"
        };
        Users.create(inserData).exec(function createCB(err, created) {
            Users.find().exec(function (err, usersNamedFinn) {
                if (err) {
                    return res.send(err);
                }
                return res.send(usersNamedFinn);
                sails.log('Wow, there are %d users named Finn.  Check it out:', usersNamedFinn.length, usersNamedFinn);
                //return res.json(usersNamedFinn);
            });
        });

    },
    getUserDetails: function (req, res) {
        return res.send(Users.find());
    },
    callBack:function(req,res){
         return res.send(res);
    },
    RegisterUser: function (req, res) {
        var callback=function(info){
            res.send(info);
        }
        var registerData = {
            firstname: req.param("firstname"),
            lastname: req.param("lastname"),
            email: req.param("email"),
            password: req.param("password"),
            subdomain: req.param("subdomain"),
        };
//        Users.Register(function(registerData,callback){
//            callback(registerdata);
//            console.log("here");
//        })
        Users.Register(registerData);
    return res.send({success:true,data:Users.afterCreate()});
     
    },
        Login: function (req, res) {
        var callback=function(info){
            res.send(info);
        }
        var loginData = {
           
            email: req.param("email"),
            password: req.param("password")
            
        };
//        Users.Register(function(registerData,callback){
//            callback(registerdata);
//            console.log("here");
//        })
   Users.Login(loginData,function(data,log){
       console.log(log);
   });
      
    return res.send({success:true});
     
    },
      LoginCheck: function (req, res) {
       
        var loginData = {
           
            email: req.param("email"),
            password: req.param("password")
            
        };
         var callback=function(info){
             console.log("IN HERE CALBACk");
            res.send(info);
            
        }
//        Users.Register(function(registerData,callback){
//            callback(registerdata);
//            console.log("here");
//        })
//        Users
    //Users.Login(registerData);
    Users.Login(function(loginData,callback){
        console.log("IN HERE");
    });
    return res.send({success:true});
     
    }

};
