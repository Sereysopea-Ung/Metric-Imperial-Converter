function ConvertHandler() {
  
  this.getNum = function(input) {
    if (['kg','lbs','gal','l','mi','km'].indexOf(input.toLowerCase()) !== -1){
      return 1;
    }
    return parseFloat(input);
  };
  
  this.getUnit = function(input) {
    if (['kg','lbs','gal','l','mi','km'].indexOf(input.toLowerCase()) !== -1){
      if (input=='L' || input=='l'){
        return input.toUpperCase();
      }
      return input.toLowerCase();
    }
    return input.substr((parseFloat(input)+'').length)=='l' ? 'L' : (input.substr((parseFloat(input)+'').length)).toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit.toLowerCase()){
      case 'kg':
        return 'lbs';
      case 'lbs':
        return 'kg';
      case 'gal':
        return 'L';
      case 'l':
        return 'gal';
      case 'km':
        return 'mi';
      case 'mi':
        return 'km';
      default:
        return false;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case 'kg':
        return 'kilograms';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'L':
        return 'liters';
      case 'km':
        return 'kilometers';
      case 'mi':
        return 'miles';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit){
      case 'kg':
        return (initNum / lbsToKg).toFixed(5);
      case 'gal':
        return (initNum * galToL).toFixed(5);
      case 'lbs':
        return (initNum * lbsToKg).toFixed(5);
      case 'L':
        return (initNum / galToL).toFixed(5);
      case 'mi':
        return (initNum * miToKm).toFixed(5);
      case 'km':
        return (initNum / miToKm).toFixed(5);
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (this.getReturnUnit(initUnit)){
      return {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit)
      };
    }
    return 'invalid Unit';
  };
  
}

module.exports = ConvertHandler;
