function matchingStrings(strings, queries) {
    const newArr = []
    for(let i=0; i<queries.length; i++) {
        newArr.push(strings.filter(x => x === queries[i]).length)
    }
    return newArr
}
