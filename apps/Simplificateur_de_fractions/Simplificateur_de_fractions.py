# coding: utf-8

n = int(input("Numérateur ")) 
d = int(input("Dénominateur "))
m = max([n,d])
for x in range(m,0,-1):
    if n%x == 0 and d%x == 0 :
        print("= (%s*%s) / (%s*%s)" %(int(n/x),int(x),int(d/x),int(x)))
        print("= %s/%s" %(int(n/x),int(d/x)))
        break