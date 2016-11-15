var fs = require("fs");

module.exports = {
    npmexists: function(package){
        if (fs.existsSync("./node_modules/"+package)) {
            return true;
        }else{
            return false;
        }
    }
};