import sys
data = sys.stdin.read().split()
n = int(data[0])
a = data[1:n+1]

count = 0
for x in a:
    if int(x) > 0:
        count += 1
print(count)