function(instance, properties, context) {
	
    // Define properties
    
    var width = properties.bubble.width;
    var height = properties.bubble.height;
    
    var type = properties.type;
    var typeDynamic = properties.typeDynamic;
    // var notClickable = properties.notClickable;
    var color = properties.color;
    var strokeWidth = properties.strokeWidth;
    var strokeWidthDynamic = properties.strokeWidthDynamic;
    var fill = properties.fillColor;
    var includeFill = properties.includeFill;
    var includeFillDynamic = properties.includeFillDynamic;
    var strokeLineCap = properties.strokeLineCap;
    var strokeLineCapDynamic = properties.strokeLineCapDynamic;
    var strokeLineJoin = properties.strokeLineJoin;
    var strokeLineJoinDynamic = properties.strokeLineJoinDynamic;
    
    // Updates properties (if dynamic fields provided)
    
    if (feather.icons[typeDynamic]) {
        type = typeDynamic;
    }
    
    if (strokeWidthDynamic) {
        strokeWidth = strokeWidthDynamic;
    }
    
    if (includeFillDynamic === true || includeFillDynamic === false) {
        includeFill = includeFillDynamic;
    }
    
    if (strokeLineCapDynamic === 'round' || strokeLineCapDynamic === 'square') {
        strokeLineCap = strokeLineCapDynamic;
    }
    if (strokeLineJoinDynamic === 'round' || strokeLineJoinDynamic === 'square') {
        strokeLineJoin = strokeLineJoinDynamic;
    }
    
    if (strokeLineCap === 'square') {
        strokeLineCap = 'butt';
    }
    if (strokeLineJoin === 'square') {
        strokeLineJoin = 'miter';
    }
    
    // Find our original div
    
    var divId = instance.data.divId;
    var div = instance.canvas.find('#' + divId)[0];
    
    // Set the attributes / customization for our icon 
    
    attributes = {}
    attributes['height'] = height;
    attributes['width'] = width;
    attributes['color'] = color;
    attributes['stroke-width'] = strokeWidth;
    if (includeFill) {
        attributes['fill'] = fill;
    } 
    attributes['stroke-linecap'] = strokeLineCap;
    attributes['stroke-linejoin'] = strokeLineJoin;
    
    attributes['pointer-events'] = "none";
    
    // Create an SVG string - the markup for a SVG HTML element - and add it to our div
    
    var icon = feather.icons[type].toSvg(attributes);
    div.innerHTML = icon;
    
}