var fs = require("fs");

module.exports = {
    npmexists: package => require("fs").existsSync("./node_modules/" + package);
};
