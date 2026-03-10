export const analyzeArray = function(array) {
    const length = array.length;
    const sum = array.reduce((acc, element) => (acc + element), 0);
    const average = sum / length;
    const min = array.reduce((acc, element) => {
        if (element < acc) {
            return element;
        }
        return acc;
    }, array[0])
    const max = array.reduce((acc, element) => {
        if (element > acc) {
            return element;
        }
        return acc;
    }, array[0])
    return {
        average, min, max, length
    }
}