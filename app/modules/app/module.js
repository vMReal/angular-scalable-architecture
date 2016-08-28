
/* MODULES */
import demoModule from '../demo/module.js';
import resourceModule from '../resource/module.js';

/* CONFIGS */
import apiConf from './configs/api.conf.js';
import routeConf from './configs/route.conf.js';
import routeAliasConst from './configs/route_alias.const.js';
import translateConf from './configs/translate.conf.js';


export default angular.module('app', [
    'ngRoute',
    'ngResource',
    'pascalprecht.translate',
    'systemConst',
     demoModule.name,
     resourceModule.name
]);


/* INJECTS */
angular.module('app').config(apiConf);
angular.module('app').config(routeConf);
angular.module('app').config(translateConf);
angular.module('app').constant('ROUTE_ALIAS', routeAliasConst);


