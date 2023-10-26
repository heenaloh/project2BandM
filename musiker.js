
export default class musicians {

  name;
  age;
  info;
  currentBand;
 // tidigareBand;
  instruments;

  constructor(name, info, age, instruments) {
    this.name = name;
    this.info = info;
    this.age  = age;
    this.currentBand = [];
    this.tidigareBand = [];
    this.instruments = instruments || [];
    
  }
  getNamn() {
    return this.name;
  }
}
