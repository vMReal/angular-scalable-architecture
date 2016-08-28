
export default function route($routeProvider, $locationProvider, $compileProvider, ROUTE_ALIAS) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|sms|mailto|http):/);


    $routeProvider.when(ROUTE_ALIAS.DEMO.PLANET_LIST, {
        controller: 'demo.PlanetListCtrl',
        controllerAs: 'ctrl',
        templateUrl: '/demo/templates/planet_list.html',
        reloadOnSearch: false,

    });

    $routeProvider.otherwise({
        redirectTo: ROUTE_ALIAS.DEMO.PLANET_LIST
    });
}

