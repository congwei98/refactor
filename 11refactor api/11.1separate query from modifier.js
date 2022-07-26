function alertForMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}

function findMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if (p === "John") {
            return "John";
        }
    }
    return "";
}

var found = findMiscreant(people);

function alertForMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return;
        }
        if (p === "John") {
            setOffAlarms();
            return;
        }
    }
    return;
}

function alertForMiscreant (people) {
    if (findMiscreant(people) !== "") setOffAlarms();
}