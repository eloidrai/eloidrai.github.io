const grille =  [[0,0,0,0],     // Grille principale sur laquelle tout se passe
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];

var gagner = false;
var score = 0;

/*Fonctions pour agir sur les cases vides*/

function liste_nulles(){                                            // Liste des coordonnées de toutes les cases nulles
    var liste = [];
    for (var y in grille){
        for (var x in grille[0]){
            if (grille[y][x]===0){
                liste.push([y, x]);
            }
        }
    }
    return liste;
}

function choix(liste){
    return liste[Math.floor(Math.random()*liste.length)];
}

function nouvelle(){                                                // Nouvelle tuile
    let coo = choix(liste_nulles());
    grille[coo[0]][coo[1]] = (Math.floor(Math.random()*3+1) === 3)? 4 : 2; // 1 chance  sur 3 d'obtenir 4
}

const supprimer_zeros = (l)=> l.filter((e)=> e!=0);         // Supprime les 0 d'une liste
const zeros = (n)=> (n===0)? []: zeros(n-1).concat(0);      // Crée une liste de 0

/*Fonctions de transformation de la grille*/
function additionner(l, sens){
    const taille = l.length;
    l = supprimer_zeros(l);
    switch(sens)
    {
        case 'd':
            for (var i=0; i<l.length-1; i++){
                if (l[i]===l[i+1]){             // Si un nombre et le suivant égaux
                    l[i]*=2; l[i+1]=0;          // Doubler l'un, annuler l'autre
                    score+= l[i];
                }
            }
            break;
        case 'f':
            for (var i=l.length-1; i>0; i--){
                if (l[i]===l[i-1]){
                    l[i]*=2; l[i-1]=0;
                    score+= l[i];
                }
            }
            break;
    }
    l = supprimer_zeros(l);
    return (sens==='d')? l.concat(zeros(taille-l.length)): zeros(taille-l.length).concat(l); // Debut ou fin
}

function mouvement(sens){
    var utile = false;                                          // Indique si l'action modifie l'état de la grille
    switch(sens)
    {
        case 'g':                                               // Vers la gauche
            var ligne;
            for (var y in grille){
                ligne =  additionner(grille[y], 'd'); 
                for (var x in ligne){                                   // Parcours comparatif des lignes
                    utile = (grille[y][x]!==ligne[x])? true: utile;
                    grille[y][x] = ligne[x];
                }
            }
            break;
        case 'd':                                               // Vers la droite
            var ligne;
            for (var y in grille){
                ligne =  additionner(grille[y], 'f'); 
                for (var x in ligne){
                    utile = (grille[y][x]!==ligne[x])? true: utile;
                    grille[y][x] = ligne[x];
                }
            }
            break;
        case 'h':                                               // Vers le haut
            var colonne;
            for (var x in grille[0]){               // Pour chaque colonne
                colonne = [];
                for (var y in grille){              // Parcours de la colonne (le x° terme de chaque ligne)
                    colonne.push(grille[y][x]);
                }
                colonne = additionner(colonne, 'd');
                for (var y in colonne){             // Reparcours de la colonne (cette fois au sein de la liste)
                    utile = (grille[y][x]!==colonne[y])? true: utile;
                    grille[y][x] = colonne[y];
                }
            }
            break;
        case 'b':                                               // Vers le bas (idem que vers le haut)
            var colonne;
            for (var x in grille[0]){
                colonne = [];
                for (var y in grille){
                    colonne.push(grille[y][x]);
                }
                colonne = additionner(colonne, 'f');
                for (var y in colonne){
                    utile = (grille[y][x]!==colonne[y])? true: utile;
                    grille[y][x] = colonne[y];
                }
            }
            break;
    }
    return utile;
}


/*Fonctions pour le HTML*/
(function(){nouvelle(); nouvelle(); appliquer();})(); // Initialisation du HTML

function tableau_HTML(){                            // Retourne la chaine qui crée le tableau
    var chaine = "";
    for (var y in grille){
        chaine+= "<tr>";
        for (var x in grille[y]){
            chaine+= "<td>"+grille[y][x]+"</td>";
        }
        chaine+= "</tr>";
    }
    return chaine;
}

function appliquer(){                               // Applique le contenu du tableau à la page
    document.getElementById('jeu').innerHTML = tableau_HTML();
    document.getElementById('score').innerHTML = "Score : "+score;
    classes_couleurs();
}

function test_fin(){                                                                // Fonction vérifiant si on a gagné ou perdu
    for (var y in grille){
        for (var x in grille[y]){
            if (grille[y][x]===2048 && gagner===false){
                document.querySelector("#message").style.display = "block";                 // Fait apparaitre le bloc en vert
                document.querySelector("#message").style.backgroundColor = "#008000c4";
                document.querySelector("#message").innerHTML = "Gagné !";
                gagner = true;
            }
        }
    }
    if (liste_nulles().length===0 && ['g','d','h','b'].every((valeur)=> (!mouvement(valeur)))){
        document.querySelector("#message").style.display = "block";                         // Fait apparaitre le bloc en rouge
        document.querySelector("#message").style.backgroundColor = "#EE0000c4";
        document.querySelector("#message").innerHTML = "Perdu";
    }
}

function coup(sens){                                                // Fonction pricipale appelée à chaque coup
    document.querySelector("#message").style.display = "none";                              // Fait disparaitre le message
    document.querySelector("#message").innerHTML = "";
    if (mouvement(sens)){                                       // Agis ET est évalué afin de savoir si l'action est valable
        nouvelle();
    }
    appliquer();
    test_fin();
}

function rejouer(){                                                     // Remet tout en place
    document.querySelector("#message").style.display = "none";
    document.querySelector("#message").innerHTML = "";
    gagner = false;
    for (var y in grille){
        for (var x in grille[y]){
            grille[y][x] = 0;
        }
    }
    score = 0;
    nouvelle(); nouvelle(); appliquer();
}

/*Événements*/
window.addEventListener(
    'keyup',
    (e)=>{
        switch(e.keyCode){
            case 37:
                coup('g');
                break;
            case 38:
                coup('h');
                break;
            case 39:
                coup('d');
                break;
            case 40:
                coup('b');
                break;
        }
    }
);

/*Classes pour les couleurs*/
function classes_couleurs(){
    var cases = document.querySelectorAll("table#jeu tbody tr td");
    for (var i in cases){
        if (parseInt(cases[i].innerHTML)>2048){
            cases[i].className = "plus_grand";
        } else {
            cases[i].className = "c"+cases[i].innerHTML;        // Les classes sont créée pour toutes les cases
        }
        if (cases[i].innerHTML === "0"){                        // Les cases nulles apparaisent vides
            cases[i].innerHTML = "";
        }
    }
}