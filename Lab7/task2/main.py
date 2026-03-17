# main.py
from models import Car, Motorcycle

def main():
    my_car = Car("Toyota", "Camry", 2021, 4)
    my_bike = Motorcycle("Harley-Davidson", "Iron 883", 2019, False)
    old_car = Car("VAZ", "2101", 1975, 4)

    garage = [my_car, my_bike, old_car]

    print("--- Список транспорта в гараже ---")
    for vehicle in garage:
        print(f"Транспорт: {vehicle}")
        
        print(f"Действие: {vehicle.start_engine()}")
        
        age = vehicle.get_age(2024)
        print(f"Возраст: {age} лет")
        print("-" * 30)

    print("\n--- Проверка специальных функций ---")
    print(f"{my_car.model}: {my_car.open_trunk()}")
    print(f"{my_bike.model}: {my_bike.pop_wheelie()}")

if __name__ == "__main__":
    main()