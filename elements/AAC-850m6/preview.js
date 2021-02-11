function(instance, properties) {
	
    // Define properties
    
    var width = properties.bubble.width;
    var height = properties.bubble.height;
    
    var type = properties.type;
    var color = properties.color;
    var strokeWidth = properties.strokeWidth;
    var fill = properties.fillColor;
    var includeFill = properties.includeFill;
    var strokeLineCap = properties.strokeLineCap;
    var strokeLineJoin = properties.strokeLineJoin;
    
    if (strokeLineCap === 'square') {
        strokeLineCap = 'butt';
    }
    if (strokeLineJoin === 'square') {
        strokeLineJoin = 'miter';
    }
    
    // Add script to canvas
    
    /*
    var script = document.createElement("script");
    script['src'] = "https://unpkg.com/feather-icons/";
    //instance.canvas.append(script);
    document.head.appendChild(script);
    */
    
    // Create div + add to canvas
    
    var div = document.createElement("div");
    div['style'] = 'width:100%;height:100%;';
    //document.appendChild(div);
    instance.canvas.append(div);
    
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
    
    // Create an SVG string - the markup for a SVG HTML element - and add it to our div
    
    /*
    var icon = feather.icons[type].toSvg(attributes);
    div.innerHTML = icon;
    */
    
    var previewImg = document.createElement("img");
    
    previewImg['src'] = '//dd7tel2830j4w.cloudfront.net/f1560539190480x747431396671820500/feather.svg';
    previewImg['style'] = 'width:100%;height:100%;opacity:0.4;';
    
    div.appendChild(previewImg);
    
}