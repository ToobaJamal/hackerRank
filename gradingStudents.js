function gradingStudents(grades){
    const arr = []
    for(let grade of grades) {
        if(grade >= 38) {
            const next_multiple = Number(grade + 5 - grade % 5)
            if(next_multiple - grade < 3) {
                arr.push(next_multiple)
            }
            else {
                arr.push(grade)
            }
        }
        else{
            arr.push(grade)
        }
    }
    return arr
}
