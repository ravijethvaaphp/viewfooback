/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {

        
    var auth = require('basic-auth');
    var credentials = auth(req);

    if (!credentials || credentials.name !== 'viewfoouser' || credentials.pass !== '2331sd56a456s3d14as6') {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="example"') 
        res.send({status: false,
                    message: "Access Denied",
                    statusCode: sails.config.statusCodes.loginFaild
                });
         
    } else {
       return next();
    }
    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.forbidden('You are not permitted to perform this action. ');
};
