var table = document.getElementById("table");
var message = document.getElementById("message");
var question = document.getElementById("question");
var menu = document.getElementById("menu");
var reponse = document.getElementById("reponse");
var tableau = document.getElementById("tableau");
var etapes = 0;
var score = 0;
var facteur;
table.focus();

function jeu(){
    if (table.value == ""){
        alert("Veuillez choisir un nombre");
    } else {
        menu.style.display = "none";
        tableau.style.display = "flex";
    }
    demander();
}
function demander(){
    reponse.value = "";
    reponse.focus();
    facteur = Math.floor(Math.random()*10);
    question.innerHTML = table.value+"*"+facteur;
}
function verifier(){
    if (etapes<5){
        if (reponse.value==facteur*table.value){
            alert("Bien !");
            score++;
        } else {
            alert("Non, c'était "+facteur*table.value+".");
        }
        demander();
    } else {
        message.innerHTML = "<mark>Score : "+score+"/5 </mark><br/><a href=\"index.html\" id=\"rejouer\">Rejouer</a>";
    }
    etapes++;
}