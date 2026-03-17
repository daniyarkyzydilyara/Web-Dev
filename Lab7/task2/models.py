class Vehicle:
    """Базовый класс для всех транспортных средств"""
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.is_running = False

    def start_engine(self):
        self.is_running = True
        return f"Двигатель {self.brand} {self.model} запущен."

    def get_age(self, current_year):
        return current_year - self.year

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    """Дочерний класс: Автомобиль"""
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors

    def open_trunk(self):
        return "Багажник открыт."

    def start_engine(self):
        self.is_running = True
        return f"Машина {self.brand} плавно заводит двигатель кнопкой Start/Stop."


class Motorcycle(Vehicle):
    """Дочерний класс: Мотоцикл"""
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def pop_wheelie(self):
        return "Мотоцикл едет на заднем колесе!"

    def start_engine(self):
        self.is_running = True
        return f"Мотоцикл {self.brand} громко ревет, запуская двигатель кикстартером."