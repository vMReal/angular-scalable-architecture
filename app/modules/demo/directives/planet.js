
export default () => new Planet();

class Planet {

    constructor() {
        this.templateUrl = '/demo/templates/directives/planet.html';
        this.restrict = 'E';
        this.scope = {
            mark: '&',
            name: '@',
            surface_area_km: '@',
            nitrogen_pc: '@',
            oxygen_pc: '@',
        };
    }

    link(scope, element) {}

};