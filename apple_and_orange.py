def countApplesAndOranges(s, t, a, b, apples, oranges):
    apple_yield = 0
    orange_yield = 0
    for apple in apples:
        if a + apple >= s and a + apple <= t:
            apple_yield +=1
    for orange in oranges:
        if b + orange >= s and b + orange <= t:
            orange_yield += 1
    print(f"{apple_yield}\n{orange_yield}")
