/* functie grootste gemene deler
* parameter x: type number
* parameter y: type number
* parameter hulp: type number
* parameter rest: type number
* resultaat: type number
* beschrijving: Als rest gelijk aan 0 dan resultaat is kleinste deler. k > y
* !Rest === 0, grootste deler - kleinste deler, rest === 0, resultaat kleinste deler. Doorgaan tot rest is 0. 
*/
var x = 0, y = 0, hulp = 0, resultaat = 0, rest = 0;

/* functie max
 * parameters x en y: type number 
 * resultaat: type number
 * beschrijving: als x < y wordt x teruggegeven
                 anders y
 */
function max(x, y) {
    var resultaat = x;
    if (x < y) {
      resultaat = y;
    }
    return resultaat;
  }
  /* functie min
   * parameters x en y: type number 
   * resultaat: type number
   * beschrijving: als x > y wordt x teruggegeven
                   anders y
   */
  function min(x, y) {
    var resultaat = y;
    if (x > y) {
      resultaat = x;
    }
    return resultaat;
  }

function ggd(x, y) {
    var rest = x % y,
        grootste = max(x, y),
        kleinste = min(x, y),
        resultaat = kleinste;

    if(!(rest === 0)) {
        for(i = 0; !(rest === 0); i++) {
                x = x - y;
                rest = x % y;
        }
        resultaat = y;
    }
    return resultaat;
}

function ggd(m, n) {
    var grootste = max(m. n),
        kleinste = min(m, n),
        resultaat = kleinste;
    if (grootste % kleinste !== 0) {
      resultaat = ggd(kleinste, grootste - kleinste);
    }
    return resultaat;
  }

console.log(parseInt(ggd(3, 6)));