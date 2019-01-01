import turtle

iterations = int(input("Combien d'itérations ? "))
longueur = int(input("Quelle longueur veux-tu pour un trait ? "))

liste = ["m","m","m"]
for i in range(iterations):
    nouvelle_liste = []
    for creation in liste:
        nouvelle_liste += [creation,"c","m","c"]
    liste = nouvelle_liste[:]

t = turtle.Pen()

for tortue in liste:
    t.forward(longueur)
    if tortue == "m":
        t.right(120)
    else:
        t.left(60)
