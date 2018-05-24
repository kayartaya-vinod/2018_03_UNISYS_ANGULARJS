// USAGE: {{ c.dob | age }} --> 25 years
// USAGE: {{ c.dob | age: 1 }} --> 25 years
// USAGE: {{ c.dob | age: 2 }} --> 25 years and 2 months
// USAGE: {{ c.dob | age: 3 }} --> 25 years, 2 months and 24 days

function transform(dob, flag = 1) {
    if(!dob) return '';
    dob = new Date(dob);
    var diff = Date.now() - dob.getTime();
    var age = new Date(diff);
    var y = age.getFullYear() - 1970;
    var m = age.getMonth();
    var d = age.getDate();

    switch(flag) {
        case 2: return `${y} years and ${m} months`;
        case 3: return `${y} years, ${m} months and ${d} days`;
        default: return `${y} years`;
    }
}

export function ageFilter() {
    return transform;
}