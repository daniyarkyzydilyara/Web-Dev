import sys

all_numbers = sys.stdin.read().split()

total_sum = 0

for i in range(100):
    number = int(all_numbers[i])
    total_sum += number

print(total_sum)