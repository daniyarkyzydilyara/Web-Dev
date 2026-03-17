import math

ab = int(input())
bc = int(input())

angle_in_radians = math.atan2(ab, bc)

angle_in_degrees = math.degrees(angle_in_radians)

rounded_angle = int(round(angle_in_degrees))

print(str(rounded_angle) + "\u00b0")