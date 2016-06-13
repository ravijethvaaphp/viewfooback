var randomstring = require("randomstring");
module.exports = {
    generateRandomString:function(len){
        return randomstring.generate(len);
    }
}
