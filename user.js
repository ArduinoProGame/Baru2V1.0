const Anyfrutas= ['bananas','melones','manzanas','pera'];
/*
The module.exports is a special object which is included in every JavaScript file in the Node.js application by default.
The module is a variable that represents the current module, and exports is an object 
that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
*/
//module.exports = Anyfrutas;
/*Ver la discusion entre exports y module.exports en este link
https://dev.to/piguicorn/diferencia-entre-exports-y-module-exports-3mpd 
https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
const getName = () => {
    return 'Jim';
  };
  
  const getLocation = () => {
    return 'Munich';
  };
  
  const dateOfBirth = '12.01.1982';
  
  /*module.exports.getName = getName;
  exports.getLocation = getLocation;
  exports.dob = dateOfBirth;
  exports.frutas=Anyfrutas;
  */

module.exports= {
    name:getName,
    nacio:getLocation
}