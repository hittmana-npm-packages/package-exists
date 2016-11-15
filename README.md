`npm install package-exists --save`
# Need to check if a node package is installed?
This is the solution for you! 
package-exists is a simple way to check if a node module is installed. Here is an example of how to use it:
```javascript
var exists = require("package-exists");
if(exists.npmexists("package-exists")) {
    console.log(true);
}else{
    console.log(false);
}
```
Thats it! Here is the detailed use of `npmexists()`:
```javascript
//returns true if package exists, false if it does not.
npmexists(package) //package is the name of the package to search for. No need to include ./node_modules/ it searches there automatically.
```