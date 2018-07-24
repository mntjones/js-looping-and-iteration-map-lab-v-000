// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = map(drivers, function(driver) { return driver.toLowerCase()} );
  return lowerDrivers;
}


function nameToAttributes(drivers) {
  const obj =[];
  drivers.map(function(driver) {
    
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) { 
    return "${driver.name} is from ${driver.hometown}";
  });
}

