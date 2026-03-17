binary_str = input()

decimal_val = 0

for digit in binary_str:
    decimal_val = decimal_val * 2 + int(digit)

print(decimal_val)