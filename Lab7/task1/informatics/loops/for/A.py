import sys
data = sys.stdin.read().split()
n = int(data[0])
a = data[1:n+1]

# Перебираем индексы от 0 до n с шагом 2
for i in range(0, n, 2):
    print(a[i], end=' ')