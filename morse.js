'use strict';

const alphabet = {
       "-.-.--" : "!",
       "....-" : "4",
       "..--.." : "?",
       "--..--" : ",",
       ".-.-.-" : ".",
       "..---" : "2",
       "...--" : "3",
       "--..." : "7",
       "-...." : "6",
       "....." : "5",
       "---.." : "8",
       "-..." : "B",
       "----." : "9",
       ".--." : "P",
       "-----" : "0",
       "--.." : "Z",
       "-.--" : "Y",
       "-..-" : "X",
       "-.-." : "C",
       "...-" : "V",
       ".----" : "1",
       "..-." : "F",
       "...." : "H",
       ".---" : "J",
       "--.-" : "Q",
       "-..-." : "/",
       ".-.." : "L",
       "..." : "S",
       "---" : "O",
       "-.-" : "K",
       ".-." : "R",
       "..-" : "U",
       "-.." : "D",
       ".--" : "W",
       "--." : "G",
       "-." : "N",
       "--" : "M",
       ".." : "I",
       ".-" : "A",
       "-" : "T",
       "." : "E"
};

module.exports = str =>
    str.split('   ').map(eachWord => 
        eachWord.split(' ').map(eachChar => 
            alphabet[eachChar]
            ).join('')
        ).join(' ');
;