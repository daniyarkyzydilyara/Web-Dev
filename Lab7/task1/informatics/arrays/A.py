# Считываем данные
N = int(input())
A = list(map(int, input().split()))

# Выводим элементы с четными индексами
print(*A[::2])