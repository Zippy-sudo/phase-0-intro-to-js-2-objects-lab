const employee = {
    name: "John",
    streetAdress: "1",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj1 = {...obj};
    newObj1[key] = value;
    return newObj1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj2 = {...obj};
    delete newObj2[key];
    return newObj2;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}