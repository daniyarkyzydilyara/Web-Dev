def first_half(str):
  # Find the midpoint by dividing the length by 2
  # We use // for integer division
  midpoint = len(str) // 2
  
  # Return the slice from the beginning up to the midpoint
  return str[:midpoint]