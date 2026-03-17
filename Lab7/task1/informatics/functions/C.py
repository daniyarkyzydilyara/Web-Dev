def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

data = input().split()
x_val = int(data[0])
y_val = int(data[1])

print(xor(x_val, y_val))