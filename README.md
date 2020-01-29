# frontend-applications-her
Tropenmuseum - zoek naar unieke tatoeages
![Schermafbeelding 2020-01-29 om 14 34 33](https://user-images.githubusercontent.com/45489420/73361113-9334c400-42a4-11ea-8cdf-1ddbe8c5983a.png)

## Verbeteringen
Ik heb de volgende punten verbeterd:
* Onnodige bestanden verwijderd.
* Onnodige codes weggehaald.
* De meeste bestanden hebben een naam gekregen die bij mijn concept past.
* Er worden minder bestanden gedeployed in Github.
* Er is een filter toegevoegd m.b.v routes.


## Een filter toevoegen
Om (als het ware) te kunnen filteren, heb ik m.b.v routes meerdere pagina's aangemaakt waarbij op elke pagina andere data wordt gegenereerd.
In Ember werken de routes alsvolgt: bij elke pagina is een JavaScript bestand gelinkt met een Handlebar bestand. Deze bestanden heb ik aangemaakt met de terminal. Bijvoorbeeld:

`ember generate route zuid_papua-list`

De bestanden heten dan allebei "zuid_papua-list". 
Het JavaScript bestand komt in het mapjes "routes". Hierin importeer ik de data en filter ik de data, zodat er een selectief gedeelte wordt getoond. In het hbs bestand heb ik een titel toegevoegd. Daarnaast wordt er gebruik gemaakt van de `{{each}}` helper.

De `{{each}}` helper zorgt ervoor dat de gebruiker door een lijst van items kan loopen. Hierbij wordt telkens dezelfde section voor een item herhaalt.


## Bronnen
Ember guide - Routing - https://guides.emberjs.com/v3.14.0/routing/ <br>
Ember guide - Looping through lists - https://guides.emberjs.com/release/components/looping-through-lists/ <br>
Ember guide - Specifying a Route's Model - https://guides.emberjs.com/release/routing/specifying-a-routes-model/


## Credits
Credits naar Nick Meijer, voor het kort uitleggen van routes.
