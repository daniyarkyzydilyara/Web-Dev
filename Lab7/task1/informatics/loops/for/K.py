import sys

data = sys.stdin.read().split()

n = int(data[0])

total_sum = 0

for i in range(1, n + 1):
    total_sum += int(data[i])

print(total_sum)