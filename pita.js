
var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];


var bitwiseOptions = {};
var pita = 0;

buildOptions();
//console.log(bitwiseOptions);

var bitwiseOptions = {
    'hummus': 1,
    'hamutzim': 2,
    'salat': 4,
    'chips': 8
};


function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}

//is(pita, 'hummus') // false
//is(pita, 'hummus') // true

function is(obj, option) { //bool
    res = obj & bitwiseOptions[option];
    if (res === bitwiseOptions[option]) {
        return true;
    } else {
        return false;
    }
}

function set(obj, option) { //obj
    res = is(obj, option);
    if (!res) { // will add a property only if it does not exist in 'pita'
        obj += bitwiseOptions[option];
    }
    return obj;
}

pita = 6; // 0110 hamutzim +salat 2+4
console.log("pita = ", pita);
console.log("is there hummus in pita? ", is(pita,"hummus"));
console.log("is there hamutzim in pita? ", is(pita,"hamutzim"));
console.log("is there salat in pita? ", is(pita,"salat"));
console.log("is there chips in pita? ", is(pita,"chips"));

//add chips (8)
pita = set(pita, "chips");
console.log("chips added now pita numeric value is: ", pita);


