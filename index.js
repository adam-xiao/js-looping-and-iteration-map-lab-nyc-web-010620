function lowerCaseDrivers(list){
    return list.map( function(driver) {
        return driver.toLowerCase();
    });
};

function nameToAttributes(list){
    return list.map( function(driver){
        let first = driver.split(" ")[0];
        let last = driver.split(" ")[1];
        return {firstName: first, lastName: last};
    });
};

function attributesToPhrase(list){
    return list.map( function(driver) {
            return `${driver["name"]} is from ${driver["hometown"]}`
        }
    )
}