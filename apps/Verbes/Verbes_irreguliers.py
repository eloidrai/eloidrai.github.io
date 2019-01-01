# coding: utf-8

import random

Vbs_anglais = {'be': 'was/were, been', 'beat': 'beat, beaten', 'become': 'became, become', 'begin': 'began, begun', 'bet': 'bet, bet', 'bite': 'bit, bitten', 'bleed': 'bled, bled', 'blow': 'blew, blown', 'break': 'broke, broken', 'bring': 'brought, brought', 'build': 'built, built', 'burn': 'burnt, burnt', 'burst': 'burst, burst', 'buy': 'bought, bought', 'catch': 'caught, caught', 'choose': 'chose, chosen', 'come': 'came, come', 'cost': 'cost, cost', 'cut': 'cut, cut', 'do': 'did, done', 'draw': 'drew, drawn', 'drink': 'drank, drunk', 'drive': 'drove, driven', 'eat': 'ate, eaten', 'fall': 'fell, fallen', 'feed': 'fed, fed', 'feel': 'felt, felt', 'fight': 'fought, fought', 'find': 'found, found', 'fly': 'flew, flown', 'forget': 'forgot, forgotten', 'freeze': 'froze, frozen', 'get': 'got, got', 'give': 'gave, given', 'go': 'went, gone', 'grow': 'grew, grown', 'have': 'had, had', 'hear': 'heard, heard', 'hide': 'hid, hidden', 'hit': 'hit, hit', 'hold': 'held, held', 'hurt': 'hurt, hurt', 'keep': 'kept, kept', 'know': 'knew, known', 'learn': 'learnt, learnt', 'leave': 'left, left', 'lose': 'lost, lost', 'make': 'made, made', 'mean': 'meant, meant', 'meet': 'met, met', 'pay': 'paid, paid', 'put': 'put, put', 'read': 'read, read', 'ride': 'rode, ridden', 'ring': 'rang, rung', 'run': 'ran, run', 'say': 'said, said', 'see': 'saw, seen', 'sell': 'sold, sold', 'send': 'sent, sent', 'set': 'set, set', 'shake': 'shook, shaken', 'shine': 'shone, shone', 'shoot': 'shot, shot', 'shut': 'shut, shut', 'sing': 'sang, sung', 'sit': 'sat, sat', 'sleep': 'slept, slept', 'smell': 'smelt, smelt', 'speak': 'spoke, spoken', 'spend': 'spent, spent', 'stand': 'stood, stood', 'steal': 'stole, stolen', 'swim': 'swam, swum', 'take': 'took, taken', 'teach': 'taught, taught', 'tear': 'tore, torn', 'tell': 'told, told', 'think': 'thought, thought', 'throw': 'threw, thrown', 'understand': 'understood, understood', 'wake': 'woke, woken', 'wear': 'wore, worn', 'win': 'won, won', 'write': 'wrote, written'}
Vbs_allemand = {'beginnen': 'begann, begonnen', 'bieten': 'bot, geboten', 'bitten': 'bat, gebeten', 'bleiben': 'blieb, geblieben*', 'brechen': 'brach, gebrochen', 'essen': 'aß, gegessen', 'fahren': 'fuhr, gefahren*', 'fallen': 'fiel, gefallen*', 'fangen': 'fing, gefangen', 'finden': 'fand, gefunden', 'fliegen': 'flog, geflogen*', 'geben': 'gab, gegeben', 'gefallen': 'gefiel, gefallen', 'gehen': 'ging, gegangen*', 'gewinnen': 'gewann, gewonnen', 'halten': 'hielt, gehalten', 'hängen': 'hing, gehangen', 'heißen': 'hieß, geheißen', 'helfen': 'half, geholfen', 'kommen': 'kam, gekommen*', 'laden': 'lud, geladen', 'lassen': 'ließ, gelassen', 'laufen': 'lief, gelaufen*', 'lesen': 'las, gelesen', 'liegen': 'lag, gelegen', 'nehmen': 'nahm, genommen', 'raten': 'riet, geraten', 'reiten': 'ritt, geritten*', 'rufen': 'rief, gerufen', 'schlafen': 'schlief, geschlafen', 'schließen': 'schloss, geschlossen', 'schreiben': 'schrieb, geschrieben', 'schwimmen': 'schwamm, geschwommen*', 'sehen': 'sah, gesehen', 'singen': 'sang, gesungen', 'sitzen': 'saß, gesessen', 'sprechen': 'sprach, gesprochen', 'springen': 'sprang, gesprungen*', 'stehen': 'stand, gestanden', 'steigen': 'stieg, gestiegen*', 'sterben': 'starb, gestorben*', 'tragen': 'trug, getragen', 'treffen': 'traf, getroffen', 'trinken': 'trank, getrunken', 'tun': 'tat, getan', 'vergessen': 'vergaß, vergessen', 'verlieren': 'verlor, verloren', 'waschen': 'wusch, gewaschen', 'werden': 'wurde, geworden*', 'ziehen': 'zog, gezogen'}
l = input('Langue: ')
input()
q = 25
s = 0

if l == 'anglais':
    Verbes = Vbs_anglais
elif l == 'allemand':
    Verbes = Vbs_allemand

for i in random.sample(list(Verbes.keys()), q):
    r = input('%s: ' %i)
    if r == Verbes[i]:
        print('Bien !')
        s += 1
    else:
        print("Non, c'était %s ." %Verbes[i])

print('Score = %s/%s' %(s,q))
input()