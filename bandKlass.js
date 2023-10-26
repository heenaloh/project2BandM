import fs from 'fs'
export default class Band {
  bandLista = []
  constructor() {
    this.fetchData()
    this.newBand = new NewBand();
  }

  fetchData() {
    const jsonString = fs.readFileSync("band.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.bandLista.push(data[i]);
    }
  }
  skapaEttBand(bandNamn, bandAge, musikerID, musikerNamn, instrument,) {
    const newBand = new NewBand(bandNamn, bandAge, musikerID, musikerNamn, instrument);
    this.bandLista.push(newBand.dataInfo())
    return newBand.dataInfo().bandID;
  }

  skrivTillJson() {
    fs.writeFileSync('./band.json', JSON.stringify(this.bandLista, null, 2), (err) => {
      if (err) throw err;
      console.log('artist data writen to file')
    })
  }

  ongoingBand() {
    const temp = [];
    for (let i = 0; i < this.bandLista.length; i++) {
      if (this.bandLista[i].dissolved === null) {
        temp.push({ bandID: this.bandLista[i].bandID, bandNamn: this.bandLista[i].name })
      }
    }
    return temp;
  }

  displayOngoingBand() {
    const temp = this.ongoingBand();
    if (temp.length != 0) {
      for (let i = 0; i < temp.length; i++) {
        console.log(`${i}. ${temp[i].bandNamn}`)
      }
    }
    return temp;
  }

  editBand(index, musikerID, musikerNamn, instrument, datum) {
    this.bandLista[index].currentBand.push({ memberID: musikerID, memberName: musikerNamn, instrument: instrument, joined: datum })
  }
}

class NewBand {
  constructor(bandNamn, bandAge, musikerID, musikerNamn, instrument) {
    this.name = bandNamn;
    this.age = bandAge;
    this.musikerID = musikerID;
    this.musikerNamn = musikerNamn;
    this.instrument = instrument;
  }
  dataInfo() {
    return {
      bandID: 'id' + new Date().getTime(),
      name: this.name,
      age: this.age,
      currentBand: [{ memberID: this.musikerID, memberName: this.musikerNamn, instrument: this.instrument, joined: this.age }],
      previusBand: [],
      instrument: [],
      dissolved: null
    };
  }
}































































































/*export default class bandKlass  {
  bandLista = []
  constructor() {
    this.fatchData()
    this.newBand = newBand();
  }

  fatchData() {
    const jsonString = fs.readFileSync(bands.json);
    const data = JSON.parse(jsonString);
    for (let i = 0; i < bandData.length; i++) {
      this.band.push(data[i]);
    }
  }
  skapaBand(namn, info, födelseår) {
    const newBand = new newBand(namn, info, födelseår,);
    this.bandLista.push(newBand.DataInfo);
    this.skrivTillJson();
  }
  skrivTillJson() {
    fs.writeFileSync("./bands.json", Json.stringify(this.bandLista, null, 2), (err) => {
      if (err) throw err;
      console.log("data skriv i filen");
    })
  }
  ongoingBand() {
    const temp = [];
    for (let i = 0, )
    
  }

  visaAllMusiker() {
    for (let i = 0; i < this.bandLista.length; i++) {
      console.log(`${i}. ${this.bandLista[i].name} `)
    }

  }

}*/
