const pi = 3.14

function areaOfCircle(r){
    return pi*r*r;
}

console.log("area of circle = ",areaOfCircle( process.argv.slice(2,3)* 1));