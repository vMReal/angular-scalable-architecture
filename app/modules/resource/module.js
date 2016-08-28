
/* COMPONENTS OF MODULE  */
import ApiProvider from './services/ApiProvider.js'
import PlanetResource from './resources/PlanetResource.js'


export default angular.module('resource', []);


/* INJECTS */
angular.module('resource').provider('api', ApiProvider);
angular.module('resource').factory('PlanetResource',  PlanetResource);