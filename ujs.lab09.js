function calculate(meters){
    let cijena = meters * 7.61;
    let umanjenaCijena = (18 / 100) * cijena;
    let konacna = cijena - umanjenaCijena;
console.log(`The final price is: ${konacna} USD.
The discount is: ${umanjenaCijena} USD.`);
}


let metri = 550;

calculate(metri);