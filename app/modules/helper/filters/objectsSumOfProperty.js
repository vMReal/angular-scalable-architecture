export default ()=> {
    return (objects, property)=> {
        let values = _.pluck(objects, property);
        let totalSum = 0;
        angular.forEach(values, (value) => {
            totalSum += Number(value);
        });
        return totalSum;
    }
};