import math

x = int(input())

count = 0

for i in range(1, math.isqrt(x) + 1):
    
    if x % i == 0:
        count += 1
        
        if i * i != x:
            count += 1

print(count)