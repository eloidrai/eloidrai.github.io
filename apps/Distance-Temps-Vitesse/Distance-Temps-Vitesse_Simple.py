# coding: utf-8

d = input("Distance (m) = ")
t = input("Temps (s) = ")
v = input("Vitesse (m/s) = ")
if (d == "?"):
    print("Distance = %s m" %(eval(t)*eval(v)))
if (t == "?"):
    print("Temps = %s s" %(eval(d)/eval(v)))
if (v == "?"):
    print("Vitesse = %s m/s" %(eval(d)/eval(t)))
input("Appuyer sur la touche Entrée pour quitter...")
    
#Dans cette version non-graphique, il faut saisir un point d’interrogation en face de la valeur recherchée.