import sys
data = sys.stdin.read().split()
n = int(data[0])
a = data[1:n+1]

for x in a:
    val = int(x)
    if val % 2 == 0:
        print(val, end=' ')