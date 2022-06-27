// tags:TAGS
let tags = new Array();

// values:INFOTABLE(Datashape: g3.datashape.listeEleves)
let values = Things["G3.listeEleves"].CreateValues();
values.id = eleveId; // INTEGER [Primary Key] {"minimumValue":1,"maximumValue":255}
values.presence = presence; // BOOLEAN {"defaultValue":false}
values.nom = nom; // STRING
values.codeCarte = numCarte;

// location:LOCATION
let location = {
    latitude: 0,
    longitude: 0,
    elevation: 0,
    units: "WGS84"
};

let params = {
	tags: tags,
	source: me.name,
	values: values,
	location: location
};

// AddOrUpdateDataTableEntry(tags:TAGS, source:STRING("me.name"), values:INFOTABLE(G3.listeEleves), location:LOCATION):STRING
let id = Things["G3.listeEleves"].AddOrUpdateDataTableEntry(params);
result = id;

