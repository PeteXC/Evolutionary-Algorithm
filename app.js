const target = "methinks it is like a weasel";
const population = 12;
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
var MAXFIT = false;
var idCount = 0;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const gRandomString = (length) => {
    let text = "";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const gFitness = (string) => {
    let fit = 0;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === string[i]) {
            fit += 1;
        }
    }
    if (fit === target.length) {MAXFIT = true};
    return fit;
}

const gRandomCohort = (size) => {
    let cohort = {};
    for (let i = 0; i < size; i++) {
        let h_string = gRandomString(28);
        cohort[i] = {id: idCount+=1, string: h_string, fitness: gFitness(h_string)};
    }
    return cohort;
}

const mutate = (parent) => {
    var child = Object.assign({},parent);
    for (let i = 0; i < parent.string.length; i++) {
        if (Math.random() < 1/parent.string.length) {
            child.string = child.string.replaceAt(i, possible.charAt(Math.floor(Math.random() * possible.length)));
            child.id = idCount+=1;
            child.fitness = gFitness(child.string);
            return child;
        }
    }
    return child;
}

const main = () => {
    var Cohort = gRandomCohort(population);
    var a = Cohort[0];
    while (MAXFIT === false) {
        let b = mutate(a);
        if (b.fitness > a.fitness) {
            a = b;
        };
        console.log(a);     //FIXME: The fitness will go down, when it should go up
    }
    console.log("\n\nGA Finished!");
    console.log(a);

}

main();
