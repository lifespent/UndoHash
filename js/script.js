var lFaceValue = {
	a: 259, 	
	c: 260, 
	d: 261, 
	e: 262, 
	g: 263, 
	i: 264, 
	l: 265, 
	m: 266, 
	n: 267, 
	o: 268, 
	p: 269, 
	r: 270, 
	s: 271, 
	t: 272, 
	u: 273, 
	w: 274, 
}
var lSubValue = {
	a: 0, 	
	c: 1, 
	d: 2, 
	e: 3, 
	g: 4, 
	i: 5, 
	l: 6, 
	m: 7, 
	n: 8, 
	o: 9, 
	p: 10, 
	r: 11, 
	s: 12, 
	t: 13, 
	u: 14, 
	w: 15, 
}


function hash(string) {
    var letters = "acdegilmnoprstuw";
    var idx = 0;
    var hash = 7;
    while (idx < string.length) {
    	hash = (hash * 37 + letters.indexOf(string[idx]));
    	idx++;
    }
    return hash;
}

function undoHash(hash) {
	var newString = "";
	hash = parseInt(hash);
	for (var idx in lSubValue) {
		do {
			for (var idxx in lSubValue) {
				var holder = (hash - parseInt(lSubValue[idxx])) / 37;
				if (Number.isInteger(holder) && holder > 0) {
					hash = parseInt(holder);
					newString += idxx;
				}
			}
		} 
		while (!Number.isInteger(hash))

		idx++;
	}
	return newString.split("").reverse().join("");
}

document.getElementById('secretWord').innerHTML = undoHash('945924806726376');