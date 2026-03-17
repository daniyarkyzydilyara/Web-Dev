import sys
data = sys.stdin.read().split()
n = int(data[0])
a = [int(x) for x in data[1:n+1]]

# Меняем элементы местами до середины массива
for i in range(n // 2):
    # В Python можно менять значения двух переменных одной строкой:
    a[i], a[n - 1 - i] = a[n - 1 - i], a[i]

# Выводим измененный массив
for x in a:
    print(x, end=' ')