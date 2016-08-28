
/* COMPONENTS OF MODULE  */
import objectsSumOfProperty from './filters/objectsSumOfProperty.js';
import objectsFilterByProperty from './filters/objectsFilterByProperty.js';

export default angular.module('helper', []);


/* INJECTS */
angular.module('helper').filter('objectsSumOfProperty', objectsSumOfProperty);
angular.module('helper').filter('objectsFilterByProperty', objectsFilterByProperty);