function(properties, context) {
    
    var type = properties.type;
    var typeDynamic = properties.typeDynamic;
    
    if (feather.icons[typeDynamic]) {
        type = typeDynamic;
    }
	
	return type;

}