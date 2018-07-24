// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = map(drivers, function(driver) { return driver.toLowerCase()} );
  return lowerDrivers;
}

function attributesToPhrase(drivers) {
  const phrases = map(drivers, function(driver) { 
    return Object.assign( {}, driver, { accessLevel: 'admin' });
  })
}

