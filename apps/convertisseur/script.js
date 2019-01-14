var d = document.getElementById('magique');
var v = document.getElementById('valeur');
var r = document.getElementById('resultat');
var l1 = document.getElementById('legende1');
var n1 = document.getElementById('valeur1');
var l2 = document.getElementById('legende2');
var n2 = document.getElementById('valeur2');

function init(){
    d.style.visibility = 'visible';
    switch(v.value){
        case 'd':
            l1.innerHTML = "Temps (s):";
            l2.innerHTML = "Vitesse (m/s):";
            break;
        case 't':
            l1.innerHTML = "Distance (m):";
            l2.innerHTML = "Vitesse (m/s):";
            break;
        case 'v':
            l1.innerHTML = "Distance (m):";
            l2.innerHTML = "Temps (s):";
            break;
        }
    n1.value = "";
    n2.value = "";
    r.innerHTML= "";
}

function calc(){
    switch(v.value){
        case 'd':
            r.innerHTML = String(n1.value*n2.value)+" mètres";
            break;
        case 't':
            r.innerHTML = String(n1.value/n2.value)+" secondes";
            break;
        case 'v':
            r.innerHTML = String(n1.value/n2.value)+" mètres par seconde";
            break;
    }
}
