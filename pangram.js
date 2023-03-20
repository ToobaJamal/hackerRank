function pangrams(s) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                       'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
                       'w', 'x', 'y', 'z']
    return alphabets.every(x => s.toLowerCase().includes(x)) ? 'pangram' : 'not pangram'

}
