function lonelyinteger(a) {
    let unique 
    for(let i = 0; i<a.length; i++) {
        if(a.filter(x => x === a[i]).length === 1) {
            unique = a[i]
        }
    }
    return unique
}
