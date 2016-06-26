var lFaceValue = {
	a: 259, // 0	
	c: 260, // 1
	d: 261, // 2
	e: 262, // 3
	g: 263, // 4
	i: 264, // 5
	l: 265, // 6
	m: 266, // 7
	n: 267, // 8
	o: 268, // 9
	p: 269, // 10
	r: 270, // 11
	s: 271, // 12
	t: 272, // 13
	u: 273, // 14
	w: 274, // 15
}
var lSubValue = {
	a: 0, // 0	
	c: 1, // 1
	d: 2, // 2
	e: 3, // 3
	g: 4, // 4
	i: 5, // 5
	l: 6, // 6
	m: 7, // 7
	n: 8, // 8
	o: 9, // 9
	p: 10, // 10
	r: 11, // 11
	s: 12, // 12
	t: 13, // 13
	u: 14, // 14
	w: 15, // 15
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
			// idx is key
			// lSubValue[idx] is value
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