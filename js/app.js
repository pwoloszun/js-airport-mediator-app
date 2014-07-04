function mediatorApp(Airport, Airplane, Airstrip) {
  var airport = new Airport({
    airstrips: [new Airstrip()]
  });

  var f16 = new Airplane({
    name: "F16",
    landingTime: 3
  });
  var airForceOne = new Airplane({
    name: "Air Force One",
    landingTime: 4
  });
  var jumboJet = new Airplane({
    name: "Jumbo Jet",
    landingTime: 6
  });

  jumboJet.requestPermissionToLandOn(airport);
  setTimeout(function() {
    f16.requestPermissionToLandOn(airport);
  }, 2000);
  setTimeout(function() {
    airForceOne.requestPermissionToLandOn(airport);
  }, 3000);
}
//mediatorApp(Airport, Airplane, Airstrip);
