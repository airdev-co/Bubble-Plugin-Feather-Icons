function(instance, context) {
    
    // Generate random string for div element ID
    
    var divId = "id_" + (Math.random() * Math.pow(2,54)).toString(18);
    
    // Create our div (a.k.a. wrapper) for the icon (which will be created in the 'update' function below)
    
    var div = document.createElement("div");
    div['id'] = divId;
    div['style'] = 'width:100%;height:100%;';
    
    // Add the new div to the Bubble instance
    // Store the div ID to the Bubble instance so that we can locate it in the 'update' function
    
    instance.canvas.append(div);
	instance.data.divId = divId;

}