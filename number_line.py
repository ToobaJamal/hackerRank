def kangaroo(x1, v1, x2, v2):
    if x1 == x2 and v1 == v2:
        return "YES"
    if x1 == x2 and v1 != v2:
        return "NO"
    if(x1 > x2 and v1 > v2) or (x2 > x1 and v2 > v1):
        return "NO"
    if(v1-v2 != 0):
        n = (x2 - x1) / (v1- v2)
        if n.is_integer() and n >= 0:
            return "YES"
        else:
            return "NO"
    else:
        return "NO"
