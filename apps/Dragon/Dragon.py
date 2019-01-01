import turtle

iterations = int(input("Combien d'itérations ? "))
longueur = int(input("Quelle longueur veux-tu pour un trait ? "))

liste=["c"]
for i in range(iterations):
    nouvelle_liste=[]
    for pliage in range(0,len(liste)):
        if pliage%2==0:
            nouvelle_liste += ["m",liste[pliage],"c"]
        else:
            nouvelle_liste += [liste[pliage]]
    liste=nouvelle_liste[:]

t = turtle.Pen()
t.forward(longueur)
for tortue in liste:
    if tortue == "m":
        t.right(90)
        t.forward(longueur)
    if tortue == "c":
        t.left(90)
        t.forward(longueur)
