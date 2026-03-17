import sys

data = sys.stdin.read().split()
if len(data) >= 4:
    a = int(data[0])
    b = int(data[1])
    c = int(data[2])
    d = int(data[3])

    for i in range(a, b + 1):
        
        if i % d == c:
            print(i, end=" ")