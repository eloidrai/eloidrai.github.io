var table = document.getElementById("table"), message = document.getElementById("message"), menu = document.getElementById("menu"), tableau = document.getElementById("tableau");
var facteur, question, reponse;
var etapes = 0, score = 0;

table.focus();


function debut(){
    if (table.value == ""){
        alert("Veuillez choisir un nombre");
    } else {
        menu.style.display = "none";
        tableau.style.display = "flex";
    }
    demander();
}

function demander(){
    message.innerHTML = "<span id=\"question\"></span><br/><input type=\'number\' id=\"reponse\" onkeydown=\"if (event.keyCode == 13){verifier();}\" />" ;
    question = document.getElementById("question");
    reponse = document.getElementById("reponse");
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
        etapes++;
    } else {
        message.innerHTML = "<mark>Score : "+score+"/5 </mark><br/><a href=\"index.html\" id=\"rejouer\">Rejouer</a>";
    }
}