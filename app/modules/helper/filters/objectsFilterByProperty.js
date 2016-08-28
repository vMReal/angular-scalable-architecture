export default ()=> {
    return (objects, property, filterValues) => {
        let collection = []

        if (angular.isArray(filterValues))
            angular.forEach(filterValues, (value, index)=> { filterValues[index] = String(value) });
        else
            filterValues = String(filterValues);

        angular.forEach(objects, (object) => {
            if (angular.isArray(filterValues) && filterValues.indexOf( String(object[property]) ) !== -1)
                collection.push(object);
            else if (angular.isString(filterValues) && String(object[property]) == filterValues)
                collection.push(object);
        });

        return collection;
    }
};