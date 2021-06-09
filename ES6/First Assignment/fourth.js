let names = ['Tom', 'Ivan', 'Jerry'];
let convertIntoObject = (names) => {
    let namesAndLength = [];
    for (n of names) {
        namesAndLength.push({
            name: n,
            length: n.length
        });
    }
    console.log(namesAndLength);
}
convertIntoObject(names);
