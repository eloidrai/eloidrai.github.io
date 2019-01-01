import math

def crible_eratosthene(nMax):
	liste = list(range(1, nMax+1))
	for table in range(2, int(math.sqrt(nMax))+1):
		if liste[table-1]!=0:
			for n in range(2*table, nMax+1, table):
				liste[n-1]=0
	return [i for i in liste if i!=0 and i!=1]

def est_premier(n):
	for diviseur in range(2, math.ceil(math.sqrt(n))):
		if n%diviseur==0:
			return False
	return True