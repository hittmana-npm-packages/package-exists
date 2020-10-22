module.exports = {
    npmexists: package => require("fs").existsSync(require('path').join(__dirname, "node_modules", package))
};
