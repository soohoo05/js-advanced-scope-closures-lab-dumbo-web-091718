function produceDrivingRange(blockrange){
  return function(start,end){
    let range= Math.abs(parseInt(start)-parseInt(end))
    if (range > blockrange){
      return `${range - blockrange} blocks out of range`;
    } else{
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(price){
  return function(tip){
    return tip*price
  }
}

function createDriver(){
  let driverId=0
  return class{
    constructor(name){
      this.name=name
      this.id=++driverId
    }
  }
}
