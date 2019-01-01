# coding: utf-8

import random
x = 0
print("Quelle table veux-tu donc reviser ?")
t = int(input())
print ("C'est parti.")
for i in range(10):
  h = int(random.randint(0,9))
  vr = t*h
  r = int(input("%s * %s = " %(t, h)))
  if (r==vr):
    print ("Bien !")
    x = x+1
  else:
    print ("Eh non, c'était %s." %(vr))
print("Ton score est de %s/10" %(x))
