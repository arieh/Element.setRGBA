Element.setRGBA
========
This is a simple method that sets RGBA background on elemenets. Method inspired by [this article](http://css-tricks.com/rgba-browser-support/)


How to use
----------
The method can receive 2 types of argument sets:

#### CSS3 rgba values:

    #JS
    el.setRGBA(123,234,22,0.5);
    

#### Hex/alpha pairs:

    #JS
    el.setRGBA('#aa00cc',0.6);

*note - hex value must be a 6 digit hex value*