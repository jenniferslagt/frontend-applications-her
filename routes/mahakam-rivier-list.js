import Route from '@ember/routing/route';
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-10/sparql"
const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dbo: <http://dbpedia.org/ontology/>
SELECT ?cho ?title ?type ?placeName (SAMPLE(?description) AS ?description) (SAMPLE(?picture) AS ?picture) WHERE {
  <https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place .
  ?place skos:prefLabel ?placeName .
 VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"}
 ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster21439>;
 dct:spatial ?place;
dc:type ?type;
 dc:title ?title;
 edm:isShownBy ?picture .
 OPTIONAL {?cho dc:description ?description} .
 FILTER langMatches(lang(?title), "ned")
}
LIMIT 40
`

export default Route.extend({
    model() {                       // model() is eigenlijk een functie: model: function()
    return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json") // query wordt omgebouwd in een leesbare string in json format
    .then(res => res.json())    // res is een response die hier wordt omgezet in Jason
    .then(json => {
        const resultaten = json.results.bindings
        const cleaneResultaten = resultaten.map( object => {

            return{
                cho: object.cho.value,
                title: object.title.value,
                type: object.type.value,
                placeName: object.placeName.value,
                picture: object.picture.value
            }
        })

        const plaats = cleaneResultaten.filter(d => d.placeName === "Mahakam (rivier)")
    return plaats
    })
}}) ;

