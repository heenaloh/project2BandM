import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
import Musiker from "./musiker.js";
import Band from "./band.js";

const musiker = new Musiker();
const band = new Band();
console.log
  (`Meny:
  1. Lägg till musiker
  2. Visa en specifik Musiker
  3. Skapa en band
  4. Lägg till en musiker till ett band`);

const alternativ = prompt();
switch (alternativ) {
  case "1":
    let musikerNamn = prompt("Vad heter musikern?")
    let age = prompt("Hur gammal är musikern?")
    let info = prompt("Information om musiker")
    musiker.skapaMusiker(musikerNamn, age, info);
    break;
  case "2":
    if (musiker.musikerLista.length <= 0) {
      console.log("Musiker finns inte!")
    }
    else {
      musiker.visaAllaMusiker();
      let val = prompt("skriv siffran på personen du vill se")

      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("valet finns inte")
      } else {
        musiker.visaEnMusiker(val);
      }
    }
    break;
  case "3":
    if (musiker.musikerLista.length <= 0) {
      console.log("Finns ingen musiker, skapa en musiker")
    } else {
      musiker.visaAllaMusiker();
      let val = prompt("Välj bandmedlem");
      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte!");
      } else {
        let instrument = prompt("Vad för instrument spelar musikern?");
        let bandNamn = prompt("Vad heter bandet?");
        let bandAge = prompt("När skapades bandet?");
        musiker.skapaEttBand(val, instrument, bandNamn, bandAge);
      }
    }
    break;
  case '4':
    if (musiker.musikerLista.length === 0) {
      console.log("det finns inga musiker!")
    } else if (band.bandLista.length === 0) {
      console.log("det finns inga band!")
    } else {
      musiker.visaAllaMusiker();
      const val = prompt("vilken musiker du vill ha");
      if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
        console.log("Valet finns inte!");
      } else {
        const instrument = prompt("vad för instrument spelar musikern");
        const temp = band.displayOngoingBand();
        if (temp.length === 0) {
          console.log("finns inga tillgängliga band")
        } else {
          const val2 = prompt("vilken band vill du ha? ")
          if (val2 < 0 || val2 > temp.length || isNaN(val2)) {
            console.log("Valet finns inte!");
          } else {
            musiker.addMTB(val, instrument, temp[val2].bandID, temp[val2].bandNamn)
          }
        }
      }
    }
    break;
  default:
    console.log("Valet finns ej");
}



































































































/*import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import Musiker from "./musiker.js"
import musikerKla from "./musikerKlass.js";


const bandAndMusicians = new BandsAndMusicians();

let run = true;
while (run) {
  console.log(`
Meny

1. skapa en band
2. tabort en band
3. skapa en musik
4. tabort en musik
5.lägg till eller tabort musik från band
6.lägg till eller tabort band från musik
7. visa band info
Q. Avsluta programmet

Val ->`);

  const val = prompt();

  switch (val.trim().toUpperCase()) {
    case "1":
      const bandNamn = prompt("skapa ett BandName:");
      const bandInfo = prompt(" med Band Info:");
      const byggÅr = parseInt(prompt("Band bygg År"));
      const löstÅr = prompt("Band löst år");
      console.log("skapa ett band");
      const newBand = bandAndMusicians.createBand(bandNamn, bandInfo, byggÅr, löstÅr);
      band

      break;

    case "2":
      buildYear();
      break;
    
    case "3":
      if (musiker.musikerLista.length <= 0) {
        console.log("det är tom, skapa en musik")
      } else {
        musiker.visaAllMusiker();
        let val = prompt("välj bandMedlem");
        if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
          
        }


        
  }

      /*removeBand();
      break;
    case "4":
      if (musikerKlass.musikerLista.length === 0); {
        console.log("det finns inga musiker!");
      } elseif(band.bandLista.length === 0) {
        console.log("det finns inga band!");
      } else {
        musikerKlass.visaAllMusiker();
        val = prompt("vilket musiker vill du ha")
        if (val < 0 || val > musiker.musikerLista.length || isNaN(val)) {
          console.log("valet finns inte!");
    
        }else
      }
      break;
    case "Q":
      console.log("Programmet avslutas!");
      run = false;
      break;
    default:
      console.log("Du måste välja  1 eller Q!");*/
  

// I need edit more from here

/*function removeBand() {
  bandLista.skrivUtBands(); // Skriver ut listan på alla band med index i början.
  const val = prompt("Skriv in index för den hunden du vill ta bort ->");

  if (Number(val).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Måste skriva in ett tal!");
  }
  if (val <= bandLista.getLength() && val >= 1) {
    bandLista.removeDogFromList(Number(val) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${bandLista.getLength()}`);
  }
}

/*function checkMeny() {
  let run = true;
  while (run) {
    hundLista.skrivUtHundarMedCheckIn(); // Skriver ut listan på alla hundar med index i början.
    console.log("B. för att gå tillbaka");
    const val = prompt("Skriv in index för den hunden du checka in/ut ->");

    if (val.trim().toUpperCase() === "B") { // Om användaren skrivit in B ska vi avsluta loopen och gå tillbaka till huvudmenyn. 
      run = false;
    } else if (Number(val).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
      console.log("Måste skriva in ett tal!");
    }
    if (val <= hundLista.getLength() && val >= 1) {
      hundLista.checkInDog(Number(val) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
    } else {
      console.log(`Talet måste vara mellan 1 och ${hundLista.getLength()}`);
    }
  }
}*/


