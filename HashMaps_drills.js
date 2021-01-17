const HashMap = require('./HashMap');

function main(){
    const lotr = new HashMap();
    const data = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
{"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
{"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
{"Ent": "Treebeard"}];
for (let datum of data){
    let key = Object.keys(datum)[0];
    lotr.set(key, datum[key]);
}
console.log(lotr);
console.log(lotr.get("Hobbit"));
console.log(lotr.get("Maiar"));

}


const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

const removeDuplicates = (input) => {
    let chars = new HashMap();
    for (let i = input.length - 1; i >= 0; i--){
        chars.set(input.charAt(i), i);
    }
    let result = new Array(chars.length);
    console.log(chars);
    for (let i = 0; i < input.length; i++){
        result[chars.get(input.charAt(i))] = input.charAt(i)
    }
    return result.join("")
}

const canPalindrome = (input) => {
    let charMap = new HashMap();
    for (let i = 0; i < input.length; i++){
        try {
        let charInMap = charMap.get(input.charAt(i));
        charMap.set(input.charAt(i), !(!!charInMap));
        } catch (e) {
            charMap.set(input.charAt(i), false);
        }
    }
    let singleCounter = 0;
    for (let entry of charMap._hashTable){
        if (!entry) continue;
         singleCounter += +(!entry.value);
    }
    if (singleCounter > 1) return false;
    return true;
}

// main();
// WhatDoesThisDo();
// console.log(removeDuplicates("google all that you think can think of"));
console.log(canPalindrome("acearrrc"))
