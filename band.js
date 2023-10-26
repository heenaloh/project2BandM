
export default class Band {
  bandNamn;
  bandAge;
  info;
  musikerID;
  musikerNamn;
  instrument;
  //LöstÅr;
  members;
  //tidigareMedlemmar;

  
  constructor(bandNamn,  bandAge,info, musikerID, musikerNamn, members, LöstÅr = null) {
    this.bandNamn = bandNamn;
    this.bandAge = bandAge;
    this.info = info;
    this.musikerID = musikerID;
    this.musikerNamn = musikerNamn;
    this.instrument = this.instrument;
    this.membersr = [];
    //this.tidigareMedlemmar = [];
  }

  get name() {
    return this.name;
  }

}