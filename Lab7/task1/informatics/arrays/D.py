import sys
data = sys.stdin.read().split()
n = int(data[0])
a = [int(x) for x in data[1:n+1]]

count = 0
for i in range(1, n):
    if a[i] > a[i-1]:
        count += 1
print(count)