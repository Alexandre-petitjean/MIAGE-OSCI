// tags:TAGS
let tags = new Array();

// values:INFOTABLE(Datashape: g3.datashape.listeEleves)
let values = Things["G3.listeEleves"].CreateValues();
values.id = eleveId; // INTEGER [Primary Key] {"minimumValue":1,"maximumValue":255}

let presence = Things["G3.listeEleves"].GetDataTableEntryByKey({key: eleveId}).presence;
if (presence === true){
	presence = false;
}else{
	presence = true;
}
values.presence = presence;

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

Things["G3.listeEleves"].UpdateDataTableEntry(params);
