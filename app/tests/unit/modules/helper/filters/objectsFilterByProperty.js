
describe('module:helper filter:objectsFilterByProperty', function () {
    var objectsFilterByProperty;
    beforeEach( angular.mock.module('helper') );
    beforeEach( angular.mock.inject( function($filter) {
        objectsFilterByProperty = $filter('objectsFilterByProperty');
    }));

    describe('check with value of filters as Array', function () {
        var objects = [{id: 1}, {id: 2}, {id: 3}],
            property = 'id',
            filterValues = [1, 2];

        it('+ length', function() {
            var result = objectsFilterByProperty(objects, property, filterValues);
            expect(result.length).toBe(2);
        });

        it('+ res', function() {
            var result = objectsFilterByProperty(objects, property, filterValues);
            expect(result[0].id).toBe(1);
            expect(result[1].id).toBe(2);
        });
    });

    describe('check with value of filters as String', function () {
        var objects = [{id: 1}, {id: 2}],
            property = 'id',
            filterValue = 1;

        it('+ length', function() {
            var result = objectsFilterByProperty(objects, property, filterValue);
            expect(result.length).toBe(1);
        });

        it('+ res', function() {
            var result = objectsFilterByProperty(objects, property, filterValue);
            expect(result[0].id).toBe(1);
        });
    });
});


