console.log('Starting app');
const _ = require('lodash');
console.log(_.isString(true));
console.log(_.isString('sushanth'));
var filteredArray = _.uniq([3,2,'sushanth',2,5,4]);
console.log(filteredArray);