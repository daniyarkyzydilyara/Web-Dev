import sys

data = sys.stdin.read().split()

n = int(data[0])

zero_count = 0

for i in range(1, n + 1):
    number = int(data[i])
    
    if number == 0:
        zero_count += 1

print(zero_count)