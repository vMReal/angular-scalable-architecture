
describe('module:helper filter:objectsSumOfProperty', function () {
    var objectsSumOfProperty;
    beforeEach( angular.mock.module('helper') );
    beforeEach( angular.mock.inject( function($filter) {
        objectsSumOfProperty = $filter('objectsSumOfProperty');
    }));

    describe('check', function () {
        var objects = [{amount: 1}, {amount: 2}, {amount: 3}],
            property = 'amount';

        it('+ sum', function() {
            var result = objectsSumOfProperty(objects, property);
            expect(result).toBe(6);
        });

    });
});


