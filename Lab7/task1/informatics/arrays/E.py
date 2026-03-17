import sys
data = sys.stdin.read().split()
n = int(data[0])
a = [int(x) for x in data[1:n+1]]

found = False
for i in range(1, n):
    # Если оба положительные или оба отрицательные
    if (a[i] > 0 and a[i-1] > 0) or (a[i] < 0 and a[i-1] < 0):
        found = True
        break

if found:
    print("YES")
else:
    print("NO")