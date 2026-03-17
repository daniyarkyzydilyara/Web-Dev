import sys
import math

# Считываем все данные из входного потока
input_data = sys.stdin.read().split()

if len(input_data) >= 2:
    a = int(input_data[0])
    b = int(input_data[1])

    # Квадраты не могут быть отрицательными. 
    # Если b < 0, то на отрезке [a, b] квадратов точно нет.
    if b >= 0:
        # Если a отрицательное, начнем поиск с 0, так как 0 - минимальный квадрат
        start_search = max(0, a)
        
        # Находим корень из начального числа и округляем его вверх
        # math.isqrt возвращает целую часть корня (округление вниз)
        k_min = math.isqrt(start_search)
        if k_min * k_min < start_search:
            k_min += 1
            
        # Находим корень из конечного числа (округление вниз)
        k_max = math.isqrt(b)

        # Перебираем все целые числа k, квадраты которых лежат в [a, b]
        for k in range(k_min, k_max + 1):
            print(k * k, end=' ')