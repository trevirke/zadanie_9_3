var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textAfter = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textAfter);

console.log(textAfter.length/2);

var halfOfText = textAfter.slice(0, textAfter.length/2);

console.log(halfOfText);
