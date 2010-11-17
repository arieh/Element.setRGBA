/*
---
description: A Cross Browser method for setting RGBA background to elements

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.3: Core,Element

provides: [Element.setRGBA]

...
*/
Element.implement({
    setRGBA : function(r,g,b,a){
        var rgb = b ? [r,g,b] : r.hexToRgb(true)
            , alpha = b ? a : g
            , hex = b ? rgb.rgbToHex() : r
            , ie_alpha = (alpha * 100).toString(16);
                
        if (Browser.ie){
                
            if (ie_alpha.length ==1) ie_alpha = "0"+ ie_alpha;
            hex = ie_alpha + hex.substr(1);
               
            this.setStyles({
                'background':'transparent'
                , 'filter' : "progid:DXImageTransform.Microsoft.gradient(startColorstr=#"+hex+",endColorstr=#"+hex+");"
                , 'zoom' : 1
            });
              
        }else this.setStyle('background','rgba(' + rgb.join(',') + ',' + alpha + ')');
    }
});