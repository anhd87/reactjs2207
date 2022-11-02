function isEmpty(obj) {
    for(let prop in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

export const heplers = {
    isEmpty
}