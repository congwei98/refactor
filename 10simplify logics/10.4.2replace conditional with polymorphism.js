function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
}

function voyageRisk(voyage) {
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["china", "east-indies"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "china" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina(history) {
    return history.some(v => "china" === v.zone);
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === "china") result += 1;
    if (voyage.zone === "east-indies") result += 1;
    if (voyage.zone === "china" && hasChina(history)) {
        result += 3;
        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result -= 1;
    } else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result -= 1;
    }
    return result;
}


function rating(voyage, history) {
    return new Rating(voyage, history).value;
}

class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() {
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRisk() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        // if (this.voyage.zone === "china" && this.hasChinaHistory) result -= 2;
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        let result = 2;

        if (this.voyage.zone === "china") result += 1;
        if (this.voyage.zone === "east-indies") result += 1;
        result += this.historyLengthFactor;
        result += this.voyageLengthFactor;
        return result;
    }

    get voyageLengthFactor() {
        let result = 0;
        // if (this.voyage.zone === "china" && this.hasChinaHistory) {
        //     result += 3;
        //     if (this.history.length > 10) result += 1;
        //     if (this.voyage.length > 12) result += 1;
        //     if (this.voyage.length > 18) result -= 1;
        // } else {
        //     result = this.historyLengthFactor();
            if (this.voyage.length > 14) result -= 1;
        // }
        return result;
    }

    historyLengthFactor() {
        return (this.history.length > 8)  ? 1 : 0;
    }

    get hasChinaHistory() {
        return this.history.some(v => "china" === v.zone);
    }
}

class ExperiencedChinaRating extends Rating {
    get captainHistoryRisk() {
        const result = super.captainHistoryRisk - 2;
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        return super.voyageProfitFactor + 3;
    }

    get voyageLengthFactor() {
        let result = 0;
        // if (this.voyage.zone === "china" && this.hasChinaHistory) {
        //     result += 3;
            result = this.historyLengthFactor();
            if (this.voyage.length > 12) result += 1;
            if (this.voyage.length > 18) result -= 1;
        // }
        return result;
    }

    historyLengthFactor() {
        return (this.history.length > 10)  ? 1 : 0;

    }
}

function createRating(voyage, history) {
    if (voyage.zone === "china" && history.some(v => "china" === v.zone))
        return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history);
}

function rating(voyage, history) {
    return createRating(voyage, history).value;
}

