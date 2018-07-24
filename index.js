// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = map(drivers, function(driver) { return driver.toLowerCase()} );
  return lowerDrivers;
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver){
        const nameArray = driver.split(" ");
        return Object.assign({firstName: nameArray[0], lastName: nameArray[1]})
    })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) { 
    return "${driver.name} is from ${driver.hometown}";
  });
}

