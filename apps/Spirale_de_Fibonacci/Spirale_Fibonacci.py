import turtle

iterations = int(input("Combien d'itérations ? "))

def fib(n):
	l = [1,1]
	for f in range(n-2):
		l.append(l[-1]+l[-2])
	return l

def spirale(nbs_iterations):
	for f in fib(nbs_iterations):
		turtle.circle(f,180)

spirale(iterations)