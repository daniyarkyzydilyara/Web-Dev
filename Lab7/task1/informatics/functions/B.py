def power(a, n):
    res = 1.0
    for i in range(n):
        res = res * a
    return res

data = input().split()
a_val = float(data[0])
n_val = int(data[1])

print(power(a_val, n_val))