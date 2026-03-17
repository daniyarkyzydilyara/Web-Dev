import sys

# Считываем все входные данные из стандартного потока
# Это позволит корректно прочитать x и d, даже если они на разных строках
input_data = sys.stdin.read().split()

if len(input_data) >= 2:
    x = input_data[0]  # Число x оставляем как строку для перебора
    d = input_data[1]  # Цифра d тоже как строка для сравнения
    
    count = 0
    
    # Используем цикл for для прохода по каждой цифре в строке x
    for digit in x:
        if digit == d:
            count += 1
            
    # Выводим результат
    print(count)