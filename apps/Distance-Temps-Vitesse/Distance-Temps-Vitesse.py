# coding: utf-8

from tkinter import*
tk = Tk()
tk.resizable(0, 0)
tk.title('Distance-Temps-Vitesse')

def distance():
    canvas.delete("all")
    def valider():
        temps = inser_temps.get()
        vitesse = inser_vit.get()
        canvas.create_text(250, 120, text="%s m" %(eval(temps)*eval(vitesse)), font=('Times New Roman',16))
    canvas.create_text(50, 20, text="Temps (s) :", font=('Times New Roman',11))
    inser_temps = Entry(tk, width=10)
    inser_temps.insert(0,"")
    inser_temps.place(x=100, y=10)
    canvas.create_text(50, 45, text="Vitesse (m/s) :", font=('Times New Roman',11))
    inser_vit = Entry(tk, width=10)
    inser_vit.insert(0,"")
    inser_vit.place(x=100, y=35)
    monBouton = Button(tk, text="Calculer", command=valider, fg='red',bg='blue', width=8)
    monBouton.place(x=100, y=60)

def temps():
    canvas.delete("all")
    def valider():
        distance = inser_dis.get()
        vitesse = inser_vit.get()
        canvas.create_text(250, 120, text="%s s" %(eval(distance)/eval(vitesse)), font=('Times New Roman',16))
    canvas.create_text(50, 20, text="Distance (m) :", font=('Times New Roman',11))
    inser_dis = Entry(tk, width=10)
    inser_dis.insert(0,"")
    inser_dis.place(x=100, y=10)
    canvas.create_text(50, 45, text="Vitesse (m/s) :", font=('Times New Roman',11))
    inser_vit = Entry(tk, width=10)
    inser_vit.insert(0,"")
    inser_vit.place(x=100, y=35)
    monBouton = Button(tk, text="Calculer", command=valider, fg='red',bg='blue', width=8)
    monBouton.place(x=100, y=60)

def vitesse():
    canvas.delete("all")
    def valider():
        distance = inser_dis.get()
        temps = inser_temps.get()
        canvas.create_text(250, 120, text="%s m/s" %(eval(distance)/eval(temps)), font=('Times New Roman',16))
    canvas.create_text(50, 20, text="Distance (m):", font=('Times New Roman',11))
    inser_dis = Entry(tk, width=10)
    inser_dis.insert(0,"")
    inser_dis.place(x=100, y=10)
    canvas.create_text(50, 45, text="Temps (s):", font=('Times New Roman',11))
    inser_temps = Entry(tk, width=10)
    inser_temps.insert(0,"")
    inser_temps.place(x=100, y=35)
    monBouton = Button(tk, text="Calculer", command=valider, fg='red', bg='blue', width=8)
    monBouton.place(x=100, y=60)

canvas = Canvas(tk, width=500, height=150)
canvas.pack()
btn1 = Button(tk, text="Trouver une distance", font=('Lucida console',12), bg="red", command=distance)
btn1.place(x=290, y=0)
btn2 = Button(tk, text="Trouver un temps    ", font=('Lucida console',12), bg="yellow", command=temps)
btn2.place(x=290, y=25)
btn3 = Button(tk, text="Trouver une vitesse ", font=('Lucida console',12), bg="green", command=vitesse)
btn3.place(x=290, y=50)
canvas.create_text(250, 120, text="Choisir une fonction...", font=('Times New Roman',16))

tk.mainloop()