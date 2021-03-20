// var naam tekstveld
var naamContent = document.getElementById('naam-tekst');
var naamTekstveld = document.getElementById('naam-input') ;

// var speelgrond + giraffe
var woestijnButton = document.getElementById('woestijn');
var partyButton = document.getElementById('party');
var savanneButton = document.getElementById('savanne');
var speelgrondImg = document.getElementById('speelgrond');
var gameGrond = document.querySelector('#game');
var nietAanraken = document.querySelector('#waarschuwing');
var giraffeImg = document.getElementById('giraffe');
var speelVeld = document.getElementById('speelveld');

// var audio elementen
var discoAudio = document.querySelector('#disco');
var eetAudio = document.querySelector('#etenaudio');
var woestijnAudio =document.querySelector('#woestijnaudio');
var savanneAudio = document.querySelector('#savanneaudio');

// var eet en drink knoppen
var eetButton = document.querySelector('#eten');
var drinkButton = document.querySelector('#drinken');

// var score
var giraffeScore = document.getElementById('score');
var totaalScore = 1000 ;

// Functie naam invullen, functie pakt de waarde uit de input
// en plaatst dit in de textContent van naamContent
function naamInvullen() {
  naamContent.textContent = 'Welkom ' + naamTekstveld.value + '!';
}
// change geeft aan dat de functie naamInvullen moet worden aangeroepen
// wanneer de input wordt verandert
naamTekstveld.addEventListener('change' , naamInvullen) ;

// aftel functie om de blij score naar beneden te brengen waardoor de state van-
// de giraffe foto verandert
function aftellen() {
  totaalScore -= 10 ;
  giraffeScore.textContent = 'Gitta is ' + totaalScore + ' blij' ;
  if (totaalScore <= 0) {
    totaalScore = 0;
    giraffeImg.src = "./images/giraffe-dood.png" ;
    giraffeScore.textContent = 'Gitta is dood' ;
  } else if (totaalScore < 400) {
    giraffeImg.src = "./images/giraffe-boos.png" ;
  } else if (totaalScore < 500) {
    giraffeImg.src = "./images/giraffe-ziek.png" ;
  } else if (totaalScore < 800) {
    giraffeImg.src = "./images/giraffe-normal.png" ;
  } else if (totaalScore > 800) {
    giraffeImg.src = "./images/giraffe-blij.png" ;
  } else if (totaalScore >= 1000) {
    giraffeImg.src = "./images/giraffe-blij.png" ;
    totaalScore = 1000;
  }
}

// De interval zorgt ervoor dat de functie elke seconde (200m/s) word aangeroepen

setInterval(aftellen, 200) ;

// Functies speelgrond veranderen, de functie verandert de speelgrondImg, oftowel de achtergrond
// foto. Hierbij wordt nog een class in de CSS toegevoegd. De andere classes worden weggehaald.

function savanneSpeelgrond() {
  speelgrondImg.src = 'images/savanne.jpg';
  gameGrond.classList.add('savanne');
  gameGrond.classList.remove('woestijn');
  gameGrond.classList.remove('party');
  savanneAudio.play();

}

function partySpeelgrond() {
  speelgrondImg.src = 'images/disco.jpg';
  discoAudio.play();
  gameGrond.classList.add('party');
  gameGrond.classList.remove('woestijn');
  gameGrond.classList.remove('savanne');
}

function woestijnSpeelgrond() {
  speelgrondImg.src = 'images/woestijn.jpg';
  gameGrond.classList.add('woestijn');
  gameGrond.classList.remove('savanne');
  gameGrond.classList.remove('party');
  woestijnAudio.play();
}

// De buttons roepen elk hun eigen functie op waardoor de class en speelgrondImg zal veranderen.

savanneButton.addEventListener('click', savanneSpeelgrond);
partyButton.addEventListener('click' , partySpeelgrond);
woestijnButton.addEventListener('click' , woestijnSpeelgrond);

// Functies eten en drinken geven

function etenGeven() {
  giraffeImg.src = "./images/giraffe-eet.png";
  totaalScore += 60 ;
  eetAudio.play();
  plusMelding.textContent = '+20';
}

function drinkenGeven() {
  giraffeImg.src = "./images/giraffe-eet.png" ;
  totaalScore += 40 ;
  eetAudio.play();
}

// functie kietelen veranert giraffeImg en de text content van nietAanraken

function kietelen() {
  giraffeImg.src = './images/giraffeMouse.png' ;
  nietAanraken.textContent = 'IK HEB HET NOG ZO GEZEGD!!';
}

giraffeImg.addEventListener('mouseover' , kietelen);
eetButton.addEventListener('click' , etenGeven);
drinkButton.addEventListener('click' , drinkenGeven);
