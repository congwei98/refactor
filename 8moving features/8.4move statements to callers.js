/*
“函数边界发生偏移的一个征兆是，以往在多个地方共用的行为，如今需要在某些调用点面前表现出不同的行为。于是，我们得把表现不同的行为从函数里挪出，
并搬移到其调用处。这种情况下，我会使用移动语句（223）手法，先将表现不同的行为调整到函数的开头或结尾，再使用本手法将语句搬移到其调用点。
只要差异代码被搬移到调用点，我就可以根据需要对其进行修改。”
“这个重构手法比较适合处理边界仅有些许偏移的场景，但有时调用点和调用者之间的边界已经相去甚远，此时便只能重新进行设计了。
若果真如此，最好的办法是先用内联函数（115）合并双方的内容，调整语句的顺序，再提炼出新的函数来，以形成更合适的边界。”
* */

/*
“若调用点不止一两个，则需要先用提炼函数（106）将你不想搬移的代码提炼成一个新函数，函数名可以临时起一个，只要后续容易搜索即可。”
* */
function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write(`<p>location: ${p.location}</p>\n`);
            outStream.write("</div>\n");
        });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

// function emitPhotoData(outStream, photo) {
//     zztmp(outStream, photo);
//     outStream.write(`<p>location: ${photo.location}</p>\n`);
// }

