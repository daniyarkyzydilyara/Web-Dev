n = int(input())
res = 1
# Умножаем на 2, пока не станем >= n
while res < n:
    res = res * 2

# Если мы остановились ровно на n, значит это степень двойки
if res == n:
    print("YES")
else:
    print("NO")