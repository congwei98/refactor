/*
“如果我发现调用某个函数时，总有一些相同的代码也需要每次执行，那么我会考虑将此段代码合并到函数里头。”
“如果某些语句与一个函数放在一起更像一个整体，并且更有助于理解，那我就会毫不犹豫地将语句搬移到函数里去。”
* */
function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    // result.push(`<p>title: ${person.photo.title}</p>`);
    // result.push(emitPhotoData(person.photo));
    result.push(emitPhotoData(person.photo))
    return result.join("\n");
}

function photoDiv(p) {
    return [
        "<div>",
        // `<p>title:  ${p.title}</p>`,
        // emitPhotoData(p),
        emitPhotoData(p),
        "</div>",
    ].join("\n");
}

// function emitPhotoData(aPhoto) {
//     const result = [];
//     result.push(`<p>location: ${aPhoto.location}</p>`);
//     result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
//     return result.join("\n");
// }

// function zznew(p) {
//     return [`<p>title:  ${p.title}</p>`, emitPhotoData(p)].join("\n")
// }

function emitPhotoData(aPhoto) {
    return [`<p>title:  ${aPhoto.title}</p>`,
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString()}</p>`
    ].join("\n")
}
