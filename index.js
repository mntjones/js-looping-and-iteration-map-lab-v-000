// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = map(drivers, function(driver) { return driver.toLowerCase()} );
  return lowerDrivers;
}


function nameToAttributes(drivers) {
  
}

function attributesToPhrase(drivers) {
  return drivers.map(drivers, function(driver) { 
    return "${driver.name} is from ${driver.hometown}"
  })
}

