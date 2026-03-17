n = int(input())
power_of_2 = 1
# Пока текущая степень не больше n
while power_of_2 <= n:
    print(power_of_2, end=' ')
    # Умножаем на 2, чтобы получить следующую степень
    power_of_2 = power_of_2 * 2