
export default class PlanetListCtrl {
    constructor($location, PlanetResource, ) {
        this.planets = PlanetResource.query();
        this.$location = $location;
    }

    selectItem(id) {
        id = String(id);
        let items = this.getSelectedItems();
        if (!this.isSelectedItem(id))
            items.push(id);

        this.$location.search('selected', items);
    }


    isSelectedItem(id) {
        id = String(id);
        let items = this.getSelectedItems();
        return (items.indexOf(id) !== -1)
    }


    deselectItem(id) {
        id = String(id);
        let items = this.getSelectedItems();
        if (this.isSelectedItem(id))
            items.splice(items.indexOf(id), 1);

        this.$location.search('selected', items);
    }


    getSelectedItems() {
        let items =  angular.isArray(this.$location.search().selected)
            ? this.$location.search().selected
            : [];

        return _.uniq(items);
    }

}