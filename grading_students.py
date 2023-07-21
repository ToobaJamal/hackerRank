def gradingStudents(grades):
    arr = []
    for grade in grades:
        next_multiple = 0
        if grade >= 38:
            next_multiple = int(grade + 5 - grade % 5)
            if next_multiple - grade < 3:
                arr.append(next_multiple)
            else: 
                arr.append(grade)
        else: 
            arr.append(grade)
    return arr
