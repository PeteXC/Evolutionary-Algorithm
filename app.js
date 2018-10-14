const target = "methinks it is like a weasel";

const gRandomString = (length) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const gRandomCohort = (size) => {
    var cohort = {};
    for (let i = 0; i < size; i++) {
        cohort[i] = {id: i, string: gRandomString(28)};
    }
    return cohort;
}

console.log(gRandomCohort(12));