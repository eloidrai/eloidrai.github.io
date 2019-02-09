function conversion(n){
    var unites=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
    var dix_nombres=["dix","onze","douze","treize","quatorze","quinze","seize"];
    var dizaines=["","dix","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];

    if (n==0){                                                                                  // Le nombre 0
        return "zéro";
    } else if (n<100){                                                                          // Les nombres inférieurs à 100
        if (n<10){                                                                              // Le cas des nombres inférieurs à 10
            return unites[n];
        } else if (n<17){                                                                       // Le cas des nombres entre 10 et 17
            return dix_nombres[n-10];
        } else if (n==80){                                                                      // Le cas de 80
            return "quatre-vingts";
        } else if (n%10==1){                                                                    // Le cas nombres se terminant par un 1
            if (20<n & n<70){
                return dizaines[Math.floor(n/10)]+" et "+unites[1];
            } else if (n==71){
                return dizaines[Math.floor(n/10)]+" et "+conversion(n%60);
            } else if (80<n & n<100){
                return dizaines[Math.floor(n/10)]+"-"+conversion(n%80);
            }
        } else if (70<=n & n<80){                                                               // Le cas nombres dans les soixante-dix
            return dizaines[(n-n%10)/10]+"-"+conversion(n%60);
        } else if (90<=n & n<100){                                                              // Le cas nombres dans les quatre-vingt
            return dizaines[(n-n%10)/10]+"-"+conversion(n%80);
        } else if (n%10==0){                                                                    // Le cas des multiples de 10
            return dizaines[(n%100-n%10)/10];
        } else {                                                                                // Le cas des autres nombres inférieurs à 100
            return dizaines[(n-n%10)/10]+"-"+unites[n%10];
        }
    } else if (n<1000){                                                                         // Les nombres inférieurs à 1000
        if (n==100){                                                                            // Le cas de 100
            return "cent";
        } else if (n<200){                                                                      // Le cas des nombres entre 100 et 200
            return "cent "+conversion(n%100);
        } else if (n%100==0){                                                                   // Le cas des multiples de 100
            return unites[Math.floor(n/100)]+" cents";
        } else {                                                                                // Le cas des autres nombres inférieurs à 1000
            return unites[Math.floor(n/100)]+" cent "+conversion(n%100);
        }
    } else if (n<1000000){                                                                      // Les nombres inférieurs à 1000000
        if (n==1000){                                                                           // Le cas de 1000
            return "mille";
        } else if (n<2000){                                                                     // Le cas des nombres entre 1000 et 2000
            return "mille "+conversion(n-1000);
        } else if (n%1000==0){                                                                  // Le cas des multiples de 1000
            return conversion(Math.floor(n/1000))+" mille";
        } else {                                                                                // Le cas des autres nombres inférieurs à 1000000
            return conversion(Math.floor(n/1000))+" mille "+conversion(n%1000);
        }
    } else if (n<1000000000){                                                                   // Les nombres inférieurs à 1000000000
        if (n==1000000){                                                                        // Le cas de 1000000
            return "un million";
        } else if (n<2000000){                                                                  // Le cas des nombres entre 1000000 et 2000000
            return "un million "+conversion(n-1000000);
        } else if (n%1000000==0){                                                               // Le cas des multiples de 1000000
            return conversion(Math.floor(n/1000000))+" millions";
        } else {                                                                                // Le cas des autres nombres inférieurs à 1000000000
            return conversion(Math.floor(n/1000000))+" millions "+conversion(n%1000000);
        }
    } else if (n<1000000000000000){                                                              // Les nombres inférieurs à 1000000000000000
        if (n==1000000000){                                                                        // Le cas de 1000000000
            return "un milliard";
        } else if (n<2000000){                                                                  // Le cas des nombres entre 1000000000 et 2000000000
            return "un milliard "+conversion(n-1000000000);
        } else if (n%1000000==0){                                                               // Le cas des multiples de 1000000000
            return conversion(Math.floor(n/1000000000))+" milliards";
        } else {                                                                                // Le cas des autres nombres inférieurs à 1000000000000000
            return conversion(Math.floor(n/1000000000))+" milliards "+conversion(n%1000000000);
        }
    } else {
        return "Je ne sais pas...";
    }
}

function afficher(){
    var entree = document.getElementById("entree");
    var sortie = document.getElementById("sortie");
    sortie.innerHTML = conversion(entree.value);
}