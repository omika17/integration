//ANIMATION ROTATING TEXT RACHEL SMITH -- CONTACT.HTML//
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

//Valider formulaire
function validerForm() {
var n = document.forms["myForm"]["nom"].value;
var p = document.forms["myForm"]["prenom"].value;
var t = document.forms["myForm"]["texte"].value;
var c = document.forms["myForm"]["courriel"].value;
var e = document.forms["myForm"]["tel"].value;
  if (n == "") {
 alert("Veuillez remplir le champs Nom");
 return false;
 }
 if (p == "") {
  alert("Veuillez remplir le champs Nom");
  return false;
  }
  if (t == "") {
    alert("Veuillez remplir le champs Nom");
    return false;
    }  
  if (c == "") {
      alert("Veuillez remplir le champs Nom");
      return false;
      }  
  if (e == "") {
        alert("Veuillez remplir le champs Nom");
        return false;
        }
  
}

