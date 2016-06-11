var randomstring = require("randomstring");
module.exports = {
    generateRandomString:function(){
        return randomstring.generate();
    }
}
