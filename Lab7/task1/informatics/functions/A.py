def min4(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m

data = input().split()
n1 = int(data[0])
n2 = int(data[1])
n3 = int(data[2])
n4 = int(data[3])

print(min4(n1, n2, n3, n4))