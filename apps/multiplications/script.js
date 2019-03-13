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
    document.onkeypress = "";
    document.onclick = "";
    message.innerHTML = "<span id='question'></span><br/><input type='number' id='reponse' onkeydown='if (event.keyCode == 13){verifier();}' />" ;
    question = document.getElementById("question");
    reponse = document.getElementById("reponse");
    reponse.value = "";
    reponse.focus();
    facteur = Math.floor(Math.random()*10);
    question.innerHTML = table.value+"×"+facteur;
}

function continuer(){
    document.onkeypress = function(){
        demander();
    };
    document.onclick = function(){
        demander();
    };
}

function verifier(){
    if (etapes<10){
        if (reponse.value==facteur*table.value){
            message.innerHTML = "<img src='oui.png' alt='Bitmoji approbateur'/><p><em>(appuyez sur n'importe quelle touche pour continuer)</em></p>";
            setTimeout(continuer, 100);
            score++;
        } else {
            message.innerHTML = "<img src='non.png' alt='Bitmoji désapprobateur'/><p><strong id='commentaire'>Non, c'était "+facteur*table.value+".</strong><br/><em>(appuyez sur n'importe quelle touche pour continuer)</em></p>";
            setTimeout(continuer, 100);
        }
        etapes++;
    } else {
        message.innerHTML = "<mark>Score : "+score+"/10 </mark><br/><a href='index.html' id='rejouer'>Rejouer</a>";
    }
}