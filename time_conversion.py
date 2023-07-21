def timeConversion(s):
    if s[-2:] == 'PM' and int(s[0:2]) != 12:
        return str(int(s[0:2]) + 12) + s[2:-2]
    if s[:2] == '12' and s[-2:] == 'AM':
        return '00' + s[2:-2]
    else:
        return s[:-2]
