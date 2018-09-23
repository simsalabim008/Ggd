/*** functie grootste gemene deler
*** parameter x: type number
*** parameter y: type number
*** parameter hulp: type number
*** parameter rest: type number
*** resultaat: type number
*** beschrijving: Als rest gelijk aan 0 dan resultaat is kleinste deler. k > y
*** !Rest === 0, grootste deler - kleinste deler, rest === 0, resultaat kleinste deler. Doorgaan tot rest is 0. 
***/
var x = 0, y = 0, hulp = 0, resultaat = 0, rest = 0;

function ggd(x, y) {
    var rest = x % y;

    if(rest === 0){
        if(x < y){
            hulp = y;
            y = x;
            x = hulp;
            resultaat = y;
        }
        resultaat = y;
    }

    else if(!(rest === 0)) {
        for(i = 0; !(rest === 0); i++) {
            if(x < y){
                hulp = y;
                y = x;
                x = hulp;
                x = x - y;
                rest = x % y;
                }
                x = x - y;
                rest = x % y;
        }
        resultaat = y;
    }
    return resultaat;
}

console.log(parseInt(ggd(3, 6)));