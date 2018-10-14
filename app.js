const target = "methinks it is like a weasel";

const gRandomString = (length) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const gFitness = (string) => {
    let fit = 0;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === string[0]) {
            fit += 1;
        }
    }
    return fit;
}

const gRandomCohort = (size) => {
    let cohort = {};
    for (let i = 0; i < size; i++) {
        let h_string = gRandomString(28);
        cohort[i] = {id: i, string: h_string, fitness: gFitness(h_string)};
    }
    return cohort;
}

const main = () => {

    console.log(gRandomCohort(12));

}

main();