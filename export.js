
const user = require('./user');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
//user.frutas.forEach(item => {
 //   console.log(item)
//});

console.log(
  //`${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
  'Nombre es: ' + user.name() + ' vive en ' + user.nacio()
);
