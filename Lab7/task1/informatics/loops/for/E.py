import sys

line = sys.stdin.read().strip()
if line:
    x = int(line)
    sum_digits = 0
    
    # Мы используем строковое представление только чтобы узнать количество повторений цикла
    for _ in range(len(line)):
        sum_digits += x % 10  # Берем последнюю цифру
        x //= 10              # Отрезаем последнюю цифру
        
    print(sum_digits)