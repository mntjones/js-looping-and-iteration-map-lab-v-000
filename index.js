// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = map(drivers, function(driver) { return driver.toLowerCase()} );
  return lowerDrivers;
}

function attributesToPhrase(drivers) {
  return drivers.map( function(driver) { return  driver.toLowerCase()} )
}

 return Object.assign({}, account, { accessLevel: 'admin' })