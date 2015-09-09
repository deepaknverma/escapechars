/* 
* @Author: Deepak Verma
* @Date:   2015-09-10 08:32:56
* @Last Modified by:   Deepak Verma
* @Last Modified time: 2015-09-10 08:35:16
*/

// http://www.z-car.com/blog/programming/how-to-escape-mongo-keys-using-node-js-in-a-flash
module.exports = function escapechars(obj) {
    
    if (!(Boolean(obj) && typeof obj == 'object' && Object.keys(obj).length > 0)) {
        return false;
    }

    Object.keys(obj).forEach(function(key) {
        if (typeof(obj[key]) == 'object') {
            escapeKeys(obj[key]);
        } else {
            if (key.indexOf('.') !== -1) {
                var newkey = key.replace(/\./g, '_dot_');
                obj[newkey] = obj[key];
                delete obj[key];
            }
            if (key.indexOf('$') !== -1) {
                var newkey = key.replace(/\$/g, '_amp_');
                obj[newkey] = obj[key];
                delete obj[key];
            }

        }
    });
}