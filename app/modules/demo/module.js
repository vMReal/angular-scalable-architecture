/* MODULES */
import helperModule from '../helper/module.js';
import resourceModule from '../resource/module.js';

/* COMPONENTS OF MODULE  */
import planetDirective from './directives/planet.js';
import PlanetListCtrl from './controllers/PlanetListCtrl.js';

/* CONFIGS */
import planetListEn from './translations/planet_list.en.js';


export default angular.module('demo', [
    helperModule.name,
    resourceModule.name
]);


/* INJECTS */
angular.module('demo').directive('planet', planetDirective);
angular.module('demo').controller('demo.PlanetListCtrl', PlanetListCtrl);
angular.module('demo').config(planetListEn);