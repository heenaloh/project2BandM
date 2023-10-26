import fs from 'fs'
import Band from './band.js'

export default class Musiker {
  musikerLista = []
  constructor() {
    this.fetchData()
    this.band = new Band();
  }

  fetchData() {
    const jsonString = fs.readFileSync("musiker.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      this.musikerLista.push(data[i]);
    }
  }

  skapaMusiker(name, age, info) {
    const newMusiker = new NewMusiker(name, age, info);
    this.musikerLista.push(newMusiker.dataInfo())
    this.skrivTillJson();
  }

  skrivTillJson() {
    fs.writeFileSync('./musiker.json', JSON.stringify(this.musikerLista, null, 2), (err) => {
      if (err) throw err;
      console.log('artist data writen to file')
    })
  }

  visaAllaMusiker() {
    for (let i = 0; i < this.musikerLista.length; i++) {
      console.log(`${i}. ${this.musikerLista[i].name}`)
    }
  }

  visaEnMusiker(val) {
    console.log(this.musikerLista[val])
  }
  skapaEttBand(val, instrument, bandNamn, bandAge) {
    const tempID = this.band.skapaEttBand(bandNamn, bandAge, this.musikerLista[val].musikerID, this.musikerLista[val].name, instrument);
    this.editMusikerLista(val, instrument, tempID, bandNamn, bandAge);
    this.band.skrivTillJson();
    this.skrivTillJson();
  }

  editMusikerLista(index, instrument, bandID, bandNamn, yearCreated) {
    if (!this.musikerLista[index].instrument.includes(instrument)) {
      this.musikerLista[index].instrument.push(instrument);
    }
    this.musikerLista[index].currentBand.push({ bandID: bandID, bandName: bandNamn, yearCreated: yearCreated });
  }

  addMTB(musikerIndex, instrument, bandID, bandName) {
    let date = new Date().getFullYear();
    this.editMusikerLista(musikerIndex, instrument, bandID, bandName, date);
    this.band.editBand(this.band.bandLista.findIndex(x => x.bandID === bandID), this.musikerLista[musikerIndex].musikerID, this.musikerLista[musikerIndex].name, instrument, date)
    this.band.skrivTillJson();
    this.skrivTillJson();
  }
}

class NewMusiker {
  constructor(name, age, info) {
    this.name = name
    this.age = age
    this.info = info
  }
  dataInfo() {
    return {
      musikerID: 'id' + new Date().getTime(),
      name: this.name,
      age: this.age,
      info: this.info,
      currentBand: [],
      previusBand: [],
      instrument: []
    };
  }
}





















































































/*import fs from "fs"
export default class musikerKla {
  musikerLista = []
  constructor() {
    this.fatchData()
    this.newBand= new this.newBand()
  }

  fatchData() {
    const jsonString = fs.readFileSync(musiker.json);
    const data = JSON.parse(jsonString);
    for (let i = 0; i < musikerData.length; i++) {
      this.musikerKlassLista.push(data[i]);
    }
  }
  skapaMusiker(namn, födelseår, info, ) {
    const newMusikerKlass = new newMusikerKlass(namn, info, födelseår,);
    this.musikerKlassLista.push(newMusikerKlass.DataInfo);
    this.skrivTillJson();
  }
  skrivTillJson() {
    fs.writeFileSync("./musiker.json", Json.stringify(this.musikerKlassLista, null, 2), (err) => {
      if (err) throw err;
      console.log("data skriv i filen");
    })
  }

  visaAllMusiker() {
    for (let i = 0; i < this.musikerKlassLista.length; i++) {
      
      onsole.log(`${i}. ${this.musikerKlassLista[i].name} `)
    }
  }
    visaEnMusiker(val){
      console.log(this.musikerLista[val])
    }
    skapaEttBand(val, instrument, bandNamn, bandAge){
      const tempId =this.band.skapaEttBand(bandNamn, bnandÅlder, this.musikerLista[val].musikerID). this.musikerLista[i]
        this.editMusikerLista(val, instrument, tempID, bandNamn, bandAge)
       this.band = 
      //this.bandLista.push(this.newBand.DataInfo);
     // return this.newBand.dataInfo().bandID
  }

  editMusikerLista(index, instrument, bandID, bandfödelseår) {
    const newBand = newBand
  }
   class newMusikerKlass {
  constructor(namn, ålder, info) {
    this.name = namn,
      this.ålder = ålder,
      this.info = info
  }
}
  dataInfo() 
    return {
        
    }
    }*/


  




