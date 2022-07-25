function acquireData(input) {
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    for (const line of lines) {
        if (firstLine) {
            firstLine = false;
            continue;
        }
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}

function acquireData(input) {
    const lines = input.split("\n");
    // let firstLine = true;
    // const result = [];
    // for (const line of loopItems) {
    //     // if (firstLine) {
    //     //     firstLine = false;
    //     //     continue;
    //     // }
    //     // if (line.trim() === "") continue;
    //     const record = line.split(",");
    //     if (record[1].trim() === "India") {
    //         result.push({city: record[0].trim(), phone: record[2].trim()});
    //     }
    // }
    return lines
        .slice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(record => record[1].trim() === "India")
        .map(record => ({city: record[0].trim(), phone: record[2].trim()}));
}
